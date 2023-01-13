import { MongoClient } from "../deps.ts";
import { Dinosaur } from "../models/dinosaur.ts";
import { getMongoCredentials } from "../config/config.ts";

const { user, password } = getMongoCredentials();
const client = new MongoClient();
const uri =
  `mongodb+srv://${user}:${password}@cluster0.u8kicjc.mongodb.net/?authMechanism=SCRAM-SHA-1`;
await client.connect(uri);

const db = client.database("deno-graphql");
export const dinosaurs = db.collection<Dinosaur>("dinosaurs");
