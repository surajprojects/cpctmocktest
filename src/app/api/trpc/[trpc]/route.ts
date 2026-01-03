import { appRouter } from "@/server";
import { createTRPCContext } from "@/server/context";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

// export default createNextApiHandler({
//     router: appRouter,

//     onError({ error }: any) {
//         if (error.code === "INTERNAL_SERVER_ERROR") {
//             console.error("Something went wrong", error);
//         }
//     },
// });

const handler = (req: Request) =>
    fetchRequestHandler({
        endpoint: "/api/trpc",
        req,
        router: appRouter,
        createContext: () => createTRPCContext({ req }),
    });

export { handler as GET, handler as POST };