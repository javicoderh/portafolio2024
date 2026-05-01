import { userRouter } from "../server/routers/user";
import { publicProcedure, router } from "../server/trpc";

export const appRouter = router({
  greeting: publicProcedure.query(() => "Hello from tRPC"),
  user: userRouter,
});

export type AppRouter = typeof appRouter;
