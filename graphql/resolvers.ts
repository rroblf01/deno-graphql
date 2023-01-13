import * as handler from "../controllers/dinosaurs.ts";

export const resolvers = {
  Query: {
    allDinosaurs: () => handler.getAllDinosaurs(),
    oneDinosaurById: (_: any, args: any) => handler.getDinosaurById(args),
    oneDinosaurByName: (_: any, args: any) => handler.getDinosaurByName(args),
  },
  Mutation: {
    addDinosaur: (_: any, args: any) => handler.addDinosaur(args),
    removeDinosaur: (_: any, args: any) => handler.removeDinosaur(args),
  },
};
