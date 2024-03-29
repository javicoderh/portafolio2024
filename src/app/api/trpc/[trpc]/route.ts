import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "@/lib";
import { getServerSession } from "next-auth/next";
import { options } from "../../auth/[...nextauth]/options";

const handler = async (req: Request) => {
  // Retrieve the session using next-auth's getSession method
  const session = await getServerSession(options);

  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    // Pass the session to the context
    createContext: () => ({ session }),
  });
};

export { handler as GET, handler as POST };
