import { useSession } from 'next-auth/react';

export function useCurrentUser() {
    const { data: session } = useSession();
    const currentUser = session?.user;

    return {
        id: currentUser?.id,
        email: currentUser?.email,
        name: currentUser?.name,
        image: currentUser?.image,
        session
    };
}
