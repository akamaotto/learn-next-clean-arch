// The service file has the business logic and error handling. It uses the repository file to communicate with the database. This separation of concerns makes the code easier to read, maintain, and test.
import PersonalAccountRepository from './repository';
import { PersonalAccountDTO, PersonalAccountUpdateDTO } from '../../lib/types/personalAccountSchemaDTO';

export interface IPersonalAccountService {
    getPersonalAccountByEmail(email: string): Promise<PersonalAccountDTO | null>;
    getPersonalAccountById(id: string): Promise<PersonalAccountDTO | null>;
    updatePersonalAccount(id: string, data: PersonalAccountUpdateDTO): Promise<PersonalAccountDTO | null>;
    deletePersonalAccount(id: string): Promise<void>;
}


export default class PersonalAccountService implements IPersonalAccountService {

    // Fetch personal account by email
    async getPersonalAccountByEmail(email: string): Promise<PersonalAccountDTO | null> {
        if (!email) {
            throw new Error('Email is required');
        }

        const personalAccount = await PersonalAccountRepository.getPersonalAccountByEmail(email);

        if (!personalAccount) {
            throw new Error('Personal account not found');
        }

        return personalAccount;
    }

    // Fetch personal account by ID
    async getPersonalAccountById(id: string): Promise<PersonalAccountDTO | null> {
        if (!id) {
            throw new Error('ID is required');
        }

        const personalAccount = await PersonalAccountRepository.getPersonalAccountById(id);

        if (!personalAccount) {
            throw new Error('Personal account not found');
        }

        return personalAccount;
    }

    // Update personal account
    async updatePersonalAccount(id: string, data: PersonalAccountUpdateDTO): Promise<PersonalAccountDTO | null> {
        if (!id) {
            throw new Error('ID is required');
        }

        if (!data.name && !data.email) {
            throw new Error('At least one field (name or email) is required for update');
        }

        const personalAccount = await PersonalAccountRepository.getPersonalAccountById(id);

        if (!personalAccount) {
            throw new Error('Personal account not found');
        }

        return await PersonalAccountRepository.updatePersonalAccount(id, data);

    }

    // Delete personal account
    async deletePersonalAccount(id: string): Promise<void> {
        if (!id) {
            throw new Error('ID is required');
        }

        const personalAccount = await PersonalAccountRepository.getPersonalAccountById(id);

        if (!personalAccount) {
            throw new Error('Personal account not found');
        }

        await PersonalAccountRepository.deletePersonalAccount(id);
    }
}
