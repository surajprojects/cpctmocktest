import z from "zod";
import { publicProcedure, router } from "../trpc";

export const userRouter = router({
    register: publicProcedure
        .input(
            z.object({
                username: z.string(),
                password: z.string(),
                name: z.string(),
                email: z.string(),
                dob: z.string(),
            })
        )
        .mutation(async (opts) => {
            await opts.ctx.prisma.user.create({
                data: {
                    username: opts.input.username,
                    password: opts.input.password,
                    name: opts.input.name,
                    email: opts.input.email,
                    dob: new Date(opts.input.dob).toISOString(),
                    role: "ADMIN",
                },
            });
            return { message: "User registered successfully!!!" };
        }),
});