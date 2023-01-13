import { dinosaurs } from "./ddbb.ts";
import { isNumber, isString } from "./utils.ts";

export const addDinosaur = (
  { name, description }: { name: string; description: string },
) => {
  if (!isString(name) || !isString(description)) return null;

  const id = Math.max(...dinosaurs.map((dinosaur) => dinosaur.id)) + 1;
  dinosaurs.push({ id, name, description });
  return dinosaurs[id];
};

export const getDinosaurByName = ({ name }: { name: string }) => {
  if (!isString(name)) return null;

  return dinosaurs.find((dinosaur) => dinosaur.name === name);
};

export const getDinosaurById = ({ id }: { id: number }) => {
  if (!isNumber(id)) return null;

  return dinosaurs.find((dinosaur) => dinosaur.id === id);
};

export const getAllDinosaurs = () => {
  return dinosaurs;
};

export const removeDinosaur = ({ id }: { id: number }) => {
  if (!isNumber(id)) return null;

  const index = dinosaurs.findIndex((dinosaur) => dinosaur.id === id);
  if (index === -1) return null;
  return dinosaurs.splice(index, 1)[0];
};
