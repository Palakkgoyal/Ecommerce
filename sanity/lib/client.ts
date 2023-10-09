import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skMHZ29DJPxVUvXX9n2M1uZq1pBt44EPlTDWAWXA5IZlph5edXz4aeynbK25VgCXj6Fig32cgizbuKjXGbzgCeVgdOXEbibhnfQuVHQMRSZqUK6YJbiPn1MalUGCDWineGSW1yDwcsMeTrK2fXcSd5QqAbkSzQJrl8NHpGkfPdIIC0aESnMx",
})
