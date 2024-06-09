import { NextApiRequest, NextApiResponse } from 'next';
import PersonalAccountService, { IPersonalAccountService } from './service';
import { PersonalAccountUpdateDTO } from '../../lib/types/personalAccountSchemaDTO';

class PersonalAccountController {
    private personalAccountService: IPersonalAccountService;

    constructor(personalAccountService: PersonalAccountService) {
        this.personalAccountService = personalAccountService;
    }

    // Get personal account by email
    public getPersonalAccountByEmail = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
        try {
            const { email } = req.query;
            const personalAccount = await this.personalAccountService.getPersonalAccountByEmail(email as string);
            if (!personalAccount) {
                return res.status(404).json({ message: 'Personal account not found' });
            }
            res.status(200).json(personalAccount);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
            res.status(500).json({ message: errorMessage });
        }
    };

    // Get personal account by ID
    public getPersonalAccountById = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
        try {
            const { id } = req.query;
            const personalAccount = await this.personalAccountService.getPersonalAccountById(id as string);
            if (!personalAccount) {
                return res.status(404).json({ message: 'Personal account not found' });
            }
            res.status(200).json(personalAccount);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
            res.status(500).json({ message: errorMessage });
        }
    };

    // Update personal account
    public updatePersonalAccount = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
        try {
            const { id } = req.query;
            const data: PersonalAccountUpdateDTO = req.body;
            const updatedPersonalAccount = await this.personalAccountService.updatePersonalAccount(id as string, data);
            if (!updatedPersonalAccount) {
                return res.status(404).json({ message: 'Personal account not found' });
            }
            res.status(200).json(updatedPersonalAccount);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
            res.status(500).json({ message: errorMessage });
        }
    };

    // Delete personal account
    public deletePersonalAccount = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
        try {
            const { id } = req.query;
            await this.personalAccountService.deletePersonalAccount(id as string);
            res.status(200).json({ message: 'Personal account deleted successfully' });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
            res.status(500).json({ message: errorMessage });
        }
    };
}

export default PersonalAccountController;
