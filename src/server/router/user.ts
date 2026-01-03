import z from "zod";
import { publicProcedure, router } from "../trpc";

export const userRouter = router({
    create: publicProcedure
        .input(
            z.object({
                username: z.string(),
            })
        )
        .mutation(async () => {
            return { message: "User registered successfully!!!" }
        }),
});