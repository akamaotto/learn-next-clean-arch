import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import LinkedIn from 'next-auth/providers/linkedin';

import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()
export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [Google, LinkedIn],
})
