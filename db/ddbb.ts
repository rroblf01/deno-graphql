import { MongoClient } from "../deps.ts";
import { config } from "../config/config.ts";
import { Dinosaur } from "../models/dinosaur.ts";

const client = new MongoClient();
const uri =
  `mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@cluster0.u8kicjc.mongodb.net/?authMechanism=SCRAM-SHA-1`;
await client.connect(uri);

const db = client.database("deno-graphql");
export const dinosaurs = db.collection<Dinosaur>("dinosaurs");
// export const dinosaurs = [
//   {
//     id: 0,
//     name: "Tyrannosaurus",
//     description: "A large carnivorous dinosaur",
//   },
//   {
//     id: 1,
//     name: "Stegosaurus",
//     description: "A large herbivorous dinosaur",
//   },
//   {
//     id: 2,
//     name: "Velociraptor",
//     description: "A most feared dinosaur",
//   },
//   {
//     id: 3,
//     name: "Triceratops",
//     description: "A large herbivorous dinosaur",
//   },
// ];
