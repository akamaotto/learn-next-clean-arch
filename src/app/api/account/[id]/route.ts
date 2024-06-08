import { NextApiRequest, NextApiResponse } from 'next';
import PersonalAccountController from '../controller';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        case 'GET':
            await PersonalAccountController.getPersonalAccountById(req, res);
            break;
        case 'PATCH':
            await PersonalAccountController.updatePersonalAccount(req, res);
            break;
        case 'DELETE':
            await PersonalAccountController.deletePersonalAccount(req, res);
            break;
        default:
            res.setHeader('Allow', ['GET', 'PATCH', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
