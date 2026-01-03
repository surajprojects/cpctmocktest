import { initTRPC } from "@trpc/server";
import { CreateTRPCContext } from "./context";

const t = initTRPC.context<CreateTRPCContext>().create();

export const router = t.router;
// export const middleware = t.middleware;
export const publicProcedure = t.procedure;