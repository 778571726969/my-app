import { type SchemaTypeDefinition } from "sanity";
import { category } from "./category";
import { product } from "./products";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category],
};
