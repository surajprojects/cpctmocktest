import { router } from "./trpc";
import { userRouter } from "./router/user";
import { mockTestRouter } from "./router/mockTest";
import { questionRouter } from "./router/question";

export const appRouter = router({
    users: userRouter,
    mocktests: mockTestRouter,
    questions: questionRouter,
});

export type AppRouter = typeof appRouter;