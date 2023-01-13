import { ObjectId } from "../deps.ts";
import { dinosaurs } from "../db/ddbb.ts";
import { isString } from "../utils.ts";

export const addDinosaur = async (
  { name, description }: { name: string; description: string },
) => {
  if (!isString(name) || !isString(description)) return null;

  const dino_id = await dinosaurs.insertOne({
    name,
    description,
  });

  return await dinosaurs.findOne({ _id: dino_id });
};

export const getDinosaurByName = async ({ name }: { name: string }) => {
  if (!isString(name)) return null;

  return await dinosaurs.findOne({ name });
};

export const getDinosaurById = async ({ _id }: { _id: string }) => {
  if (!isString(_id)) return null;

  return await dinosaurs.findOne({ _id: new ObjectId(_id) });
};

export const getAllDinosaurs = async () => {
  return await dinosaurs.find().toArray();
};

export const removeDinosaur = async ({ _id }: { _id: string }) => {
  if (!isString(_id)) return null;

  return await dinosaurs.deleteOne({ _id: new ObjectId(_id) });
};
