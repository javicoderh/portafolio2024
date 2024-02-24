import { appRouter } from "@/lib";
import { createCallerFactory } from "@/server/trpc";

export const createCaller = createCallerFactory(appRouter);
