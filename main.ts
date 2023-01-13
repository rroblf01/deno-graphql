import { serve } from "./deps.ts";
import { GraphQLHTTP } from "./deps.ts";
import { makeExecutableSchema } from "./deps.ts";
import { resolvers } from "./graphql/resolvers.ts";
import { typeDefs } from "./graphql/typedfs.ts";
import { gql_render } from "./deps.ts";
const schema = makeExecutableSchema({ resolvers, typeDefs });

async function handler(request: Request) {
  return await GraphQLHTTP<Request>({
    schema,
    graphiql: true,
  })(request);
}

serve(handler);
