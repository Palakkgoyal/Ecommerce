"use client"

import { useRouter, useSearchParams } from "next/navigation"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "frames", label: "Frames" },
      { value: "jewellery", label: "Jewellery" },
      { value: "phone accessories", label: "Phone Accessories" },
      { value: "hoops", label: "Hoops" },
      { value: "clock", label: "Clock" },
      { value: "bookmark", label: "Bookmark" },
      { value: "rakhi", label: "Rakhi" },
      { value: "string art", label: "String Art" },
      { value: "gift hamper", label: "Gift Hamper" },
      { value: "tray", label: "Tray" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "xs", label: "X-Small" },
      { value: "s", label: "Small" },
      { value: "m", label: "Medium" },
      { value: "l", label: "Large" },
      { value: "xl", label: "X-Large" },
      { value: "one-size", label: "One Size" },
    ],
  },
]

export function ProductFilters() {
  const searchParams = useSearchParams();
  const router = useRouter()
  const searchValues = Array.from(searchParams.entries())

  return (
    <form className="sticky top-20">
      <h3 className="sr-only">Categories</h3>

      {filters.map((section, i) => (
        <Accordion key={i} type="single" collapsible>
          <AccordionItem value={`item-${i}`}>
            <AccordionTrigger>
              <span>
                {section.name}{" "}
                <span className="ml-1 text-xs font-extrabold uppercase text-gray-400">
                  {searchParams.get(section.id) ? `(${searchParams.get(section.id)})` : ""}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {section.options.map((option, idx) => {
                  return (
                    <div
                      key={option.value}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={`filter-${section.id}-${idx}`}
                        checked={searchValues.some(([key, value]) => key === section.id && value === option.value)}
                        onClick={(event) => {
                          const params = new URLSearchParams(searchParams)
                          const checked = event.currentTarget.dataset.state === "checked"                   
                          checked ? params.delete(section.id) : params.set(section.id, option.value)
                          router.replace(`/products?${params.toString()}`)
                        }} 
                        />
                      <label
                        htmlFor={`filter-${section.id}-${idx}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {option.label}
                      </label>
                    </div>
                  )
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </form>
  )
}
