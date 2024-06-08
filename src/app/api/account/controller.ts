// the function of the controller is to handle the business logic of the API. It is responsible for processing the data and returning the response to the client. The controller is called by the route handler, which is responsible for routing the request to the appropriate controller function based on the HTTP method and URL path.
import { NextApiRequest, NextApiResponse } from 'next';
import PersonalAccountService from './service';
import { PersonalAccountUpdateDTO } from '../../lib/types/personalAccountSchemaDTO';

export default class PersonalAccountController {
    /**
     * @swagger
     * /api/personalAccount/{id}:
     *   get:
     *     summary: Get Personal Account by ID
     *     description: Fetches a personal account by its ID.
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: The ID of the personal account to retrieve.
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         description: Successfully retrieved personal account
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 id:
     *                   type: string
     *                 name:
     *                   type: string
     *                 email:
     *                   type: string
     *                 image:
     *                   type: string
     *                 updatedAt:
     *                   type: string
     *                   format: date-time
     *       404:
     *         description: Personal account not found
     *       500:
     *         description: Internal server error
     */
    static async getPersonalAccountById(req: NextApiRequest, res: NextApiResponse) {
        try {
            const { id } = req.query;
            const personalAccount = await PersonalAccountService.getPersonalAccountById(id as string);
            if (!personalAccount) {
                return res.status(404).json({ message: 'Personal account not found' });
            }
            res.status(200).json(personalAccount);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
            res.status(500).json({ message: errorMessage });
        }
    }

    /**
     * @swagger
     * /api/personalAccount/email/{email}:
     *   get:
     *     summary: Get Personal Account by Email
     *     description: Fetches a personal account by its email.
     *     parameters:
     *       - in: path
     *         name: email
     *         required: true
     *         description: The email of the personal account to retrieve.
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         description: Successfully retrieved personal account
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 id:
     *                   type: string
     *                 name:
     *                   type: string
     *                 email:
     *                   type: string
     *                 image:
     *                   type: string
     *                 updatedAt:
     *                   type: string
     *                   format: date-time
     *       404:
     *         description: Personal account not found
     *       500:
     *         description: Internal server error
     */
    static async getPersonalAccountByEmail(req: NextApiRequest, res: NextApiResponse) {
        try {
            const { email } = req.query;
            const personalAccount = await PersonalAccountService.getPersonalAccountByEmail(email as string);
            if (!personalAccount) {
                return res.status(404).json({ message: 'Personal account not found' });
            }
            res.status(200).json(personalAccount);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
            res.status(500).json({ message: errorMessage });
        }
    }

    /**
     * @swagger
     * /api/personalAccount/{id}:
     *   put:
     *     summary: Update Personal Account
     *     description: Updates a personal account's details.
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: The ID of the personal account to update.
     *         schema:
     *           type: string
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *               email:
     *                 type: string
     *     responses:
     *       200:
     *         description: Successfully updated personal account
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 id:
     *                   type: string
     *                 name:
     *                   type: string
     *                 email:
     *                   type: string
     *                 image:
     *                   type: string
     *                 updatedAt:
     *                   type: string
     *                   format: date-time
     *       404:
     *         description: Personal account not found
     *       500:
     *         description: Internal server error
     */
    static async updatePersonalAccount(req: NextApiRequest, res: NextApiResponse) {
        try {
            const { id } = req.query;
            const data: PersonalAccountUpdateDTO = req.body;
            const updatedPersonalAccount = await PersonalAccountService.updatePersonalAccount(id as string, data);
            if (!updatedPersonalAccount) {
                return res.status(404).json({ message: 'Personal account not found' });
            }
            res.status(200).json(updatedPersonalAccount);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
            res.status(500).json({ message: errorMessage });
        }
    }

    /**
     * @swagger
     * /api/personalAccount/{id}:
     *   delete:
     *     summary: Delete Personal Account
     *     description: Deletes a personal account by its ID.
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: The ID of the personal account to delete.
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         description: Successfully deleted personal account
     *       404:
     *         description: Personal account not found
     *       500:
     *         description: Internal server error
     */
    static async deletePersonalAccount(req: NextApiRequest, res: NextApiResponse) {
        try {
            const { id } = req.query;
            await PersonalAccountService.deletePersonalAccount(id as string);
            res.status(200).json({ message: 'Personal account deleted successfully' });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
            res.status(500).json({ message: errorMessage });
        }
    }
}
