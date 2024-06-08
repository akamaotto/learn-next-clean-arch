import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import axios from 'axios';
import {
    PersonalAccountDTO,
    PersonalAccountUpdateDTO,
} from '@/app/lib/types/personalAccountSchemaDTO';
import {useCurrentUser} from '@/app/lib/useCurrentUser';

export function usePersonalInfo() {
    const {id, email} = useCurrentUser();

    return useQuery<PersonalAccountDTO, Error>({
        queryKey: ['personalInfo', email || id], // Use email or id as cache key
        queryFn: async () => {
            const params = email ? {email} : {id};
            const response = await axios.get<PersonalAccountDTO>(
                '/api/account',
                {params},
            );
            return response.data;
        },
        enabled: !!(email || id), // Fetch only when email or id is available
        retry: false, // Disable retries for GET requests
    });
}

export function useUpdatePersonalInfo() {
    const queryClient = useQueryClient();
    const {id} = useCurrentUser();

    return useMutation<PersonalAccountDTO, Error, PersonalAccountUpdateDTO>({
        mutationFn: async (data: PersonalAccountUpdateDTO) => {
            if (!id) throw new Error('User not authenticated'); // Ensure user is logged in

            const response = await axios.patch<PersonalAccountDTO>(
                `/api/account/${id}`,
                data,
            );
            return response.data;
        },
        onMutate: async (newData: PersonalAccountUpdateDTO) => {
            await queryClient.cancelQueries({queryKey: ['personalInfo']}); // Cancel ongoing queries

            const previousData = queryClient.getQueryData<PersonalAccountDTO>([
                'personalInfo',
            ]);
            if (previousData) {
                queryClient.setQueryData<PersonalAccountDTO>(['personalInfo'], {
                    ...previousData,
                    ...newData,
                }); // Optimistically update the cache
            }

            return {previousData};
        },
        onError: (previousData, context) => {
            if (context) {
                queryClient.setQueryData(['personalInfo'], previousData); // Rollback on error
            }
        },
        onSettled: () => {
            queryClient.invalidateQueries({queryKey: ['personalInfo']}); // Refetch after error/success
        },
    });
}
