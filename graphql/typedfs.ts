import { gql } from "../deps.ts";

export const typeDefs = gql`
  type Query {
    allDinosaurs: [Dinosaur]
    oneDinosaurById(_id: String): Dinosaur
    oneDinosaurByName(name: String): Dinosaur
  }

  type Dinosaur {
    _id: String
    name: String
    description: String
  }

  type Mutation {
    addDinosaur(name: String, description: String): Dinosaur
    removeDinosaur(_id: String): Dinosaur
  }
`;
