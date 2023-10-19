import { Image } from "sanity"

interface InventoryProduct {
  id: string
  name: string
  image: string
  images: string[]
  categories: string[]
  dimension: string
  description: string
  price: number
  currency: string
}

export interface SanityProduct extends Omit<InventoryProduct, "images"> {
  _id: string
  _createdAt: Date
  slug: string
  images: Image[]
}

export interface SanityOffers extends Omit<InventoryProduct, "images"> {
  _id: string
  _createdAt: Date
  images: Image[]
}

export interface SanityResources extends Omit<InventoryProduct, "images"> {
  _id: string
  _createdAt: Date
  videoId: string
}

export interface SanityMaterial extends Omit<InventoryProduct, "images"> {
  _id: string
  _createdAt: Date
  images: Image[]
}