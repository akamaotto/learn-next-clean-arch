// The repository file has only one function which is to communicate with the database. It is a good practice to separate the database logic from the service logic. This way, the service file can focus on the business logic and error handling, while the repository file can focus on the database operations. This separation of concerns makes the code easier to read, maintain, and test.
import { PrismaClient } from '@prisma/client';
import { PersonalAccountDTO, PersonalAccountUpdateDTO } from '../../lib/types/personalAccountSchemaDTO';

const prisma = new PrismaClient();

export default class PersonalAccountRepository {
    private static personalAccount = prisma.user;

    // Fetch personal account by email
    static async getPersonalAccountByEmail(email: string): Promise<PersonalAccountDTO | null> {
        const user = await this.personalAccount.findUnique({
            where: { email },
            select: { id: true, name: true, email: true, image: true, updatedAt: true },
        });
        return user ? { ...user, updatedAt: user.updatedAt.toString() } : null;
    }

    // Fetch personal account by ID
    static async getPersonalAccountById(id: string): Promise<PersonalAccountDTO | null> {
        const user = await this.personalAccount.findUnique({
            where: { id },
            select: { id: true, name: true, email: true, image: true, updatedAt: true },
        });
        return user ? { ...user, updatedAt: user.updatedAt.toString() } : null;
    }

    // Update personal account
    static async updatePersonalAccount(id: string, data: PersonalAccountUpdateDTO): Promise<PersonalAccountDTO | null> {
        const user = await this.personalAccount.update({
            where: { id },
            data,
            select: { id: true, name: true, email: true, image: true, updatedAt: true },
        });
        return user ? { ...user, updatedAt: user.updatedAt.toString() } : null;
    }

    // Delete personal account
    static async deletePersonalAccount(id: string): Promise<void> {
        await this.personalAccount.delete({
            where: { id },
        });
    }
}
