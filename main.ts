import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { GraphQLHTTP } from "https://deno.land/x/gql@1.1.2/mod.ts";
import { makeExecutableSchema } from "https://deno.land/x/graphql_tools@0.0.2/mod.ts";
import "https://deno.land/x/gql@1.1.2/graphiql/render.ts";
import { resolvers } from "./resolvers.ts";
import { typeDefs } from "./typedfs.ts";

const schema = makeExecutableSchema({ resolvers, typeDefs });

async function handler(request: Request) {
  return await GraphQLHTTP<Request>({
    schema,
    graphiql: true,
  })(request);
}

serve(handler);
