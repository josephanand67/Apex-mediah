'use client'

import Link from 'next/link'
import { Download, Newspaper, RadioIcon, Headphones, ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function QuickLinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="relative px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 text-navy hover:text-gold">
          Quick Links
          <ChevronDown className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-cream border-navy/20">
        <DropdownMenuItem asChild>
          <Link href="/cheatsheets" className="flex items-center gap-2 cursor-pointer">
            <Download className="h-4 w-4 text-gold" />
            <span>Cheat Sheets</span>
          </Link>
        </DropdownMenuItem>
        <div className="border-t border-navy/10 my-2" />
        <DropdownMenuItem asChild>
          <Link href="/blog" className="flex items-center gap-2 cursor-pointer">
            <Newspaper className="h-4 w-4 text-gold" />
            <span>Blog</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/latest-news" className="flex items-center gap-2 cursor-pointer">
            <RadioIcon className="h-4 w-4 text-gold" />
            <span>Latest News</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/podcast" className="flex items-center gap-2 cursor-pointer">
            <Headphones className="h-4 w-4 text-gold" />
            <span>Podcast</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
