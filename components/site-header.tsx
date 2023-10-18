"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Edit, ShoppingBag, MessageSquare } from "lucide-react"
import { useShoppingCart } from "use-shopping-cart"

import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const pathname = usePathname()
  const { cartCount } = useShoppingCart()

  if (pathname.startsWith('/studio')) return null

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between space-x-4 px-6 sm:space-x-0 md:h-16">
        <MainNav />
        <div className="flex items-center space-x-1">
          <Link href="/cart">
            <Button size="sm" variant="ghost">
              <ShoppingBag className="h-5 w-5" />
              <span className="ml-2 text-sm font-bold">{cartCount}</span>
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          <ThemeToggle />
          {process.env.NODE_ENV === 'development' && (
            <Link href="/studio">
              <Button size="sm" variant="ghost">
                <Edit className="h-5 w-5" />
              </Button>
            </Link>
          )}
        </div>
      </div>
      <Link href="https://wa.me/+918989517165" className="fixed bottom-4 right-4 rounded-full border-[2px] border-solid bg-slate-200 p-2">
        <MessageSquare />
      </Link>
    </header>
  )
}
