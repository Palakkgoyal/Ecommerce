import { type SchemaTypeDefinition } from "sanity"
import { product } from "./schemas/product-schema"
import { offer } from "./schemas/offer"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, offer],
}
