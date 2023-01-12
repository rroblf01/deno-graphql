import { gql } from "https://deno.land/x/graphql_tag@0.0.1/mod.ts";

export const typeDefs = gql`
  type Query {
    allDinosaurs: [Dinosaur]
    oneDinosaurById(id: Int): Dinosaur
    oneDinosaurByName(name: String): Dinosaur
  }

  type Dinosaur {
    id: Int
    name: String
    description: String
  }

  type Mutation {
    addDinosaur(name: String, description: String): Dinosaur
    removeDinosaur(id: Int): Dinosaur
  }
`;