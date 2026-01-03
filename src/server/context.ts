import prisma from "@/db";

export async function createTRPCContext(opts: {
    req: Request;
}) {
    const userId = null; // later from auth
    return {
        prisma,
        userId,
    };
}

export type CreateTRPCContext = Awaited<ReturnType<typeof createTRPCContext>>;