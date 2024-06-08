import { NextApiRequest, NextApiResponse } from 'next';
import PersonalAccountController from './controller';

// GET /api/account
export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    // Handling general account fetching
    if (req.query.email) {
        return PersonalAccountController.getPersonalAccountByEmail(req, res);
    }
    return res.status(400).json({ message: 'Email parameter missing' });
};



// Fallback for unspecified methods
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'GET':
            await GET(req, res);
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
