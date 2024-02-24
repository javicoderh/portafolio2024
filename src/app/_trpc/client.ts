import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "@/lib";

export const trpc = createTRPCReact<AppRouter>({});
