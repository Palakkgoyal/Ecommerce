import { type SchemaTypeDefinition } from "sanity"
import { product } from "./schemas/product-schema"
import { offer } from "./schemas/offer"
import { resource } from "./schemas/resource-schema"
import { material } from "./schemas/material-schema"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ product, offer, resource, material ],
}
