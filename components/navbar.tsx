'use client'

import { useState, useEffect, useCallback, memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Facebook, Youtube, Linkedin, ChevronDown, Download, BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navigation, siteConfig } from '@/lib/site-config'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

function NavbarComponent() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-200',
        scrolled
          ? 'bg-cream/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group hidden sm:flex items-center gap-3" prefetch={true}>
            <Image
              src={siteConfig.logo}
              alt="L.I.F.E. manifested LLP"
              width={180}
              height={60}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                prefetch={true}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium transition-colors',
                  pathname === item.href
                    ? 'text-gold'
                    : 'text-navy hover:text-gold'
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-gold" />
                )}
              </Link>
            ))}
            
            {/* Quick Links Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={cn(
                  'relative px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1',
                  'text-navy hover:text-gold'
                )}>
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
                <DropdownMenuItem asChild>
                  <Link href="/books" className="flex items-center gap-2 cursor-pointer">
                    <BookOpen className="h-4 w-4 text-gold" />
                    <span>Books</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Social Links & CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <Link
              href={siteConfig.links.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy transition-colors hover:text-gold"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href={siteConfig.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy transition-colors hover:text-gold"
            >
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy transition-colors hover:text-gold"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Button
              asChild
              className="bg-navy text-cream hover:bg-gold hover:text-navy transition-colors duration-100"
            >
              <Link href="/contact" prefetch={true}>Get In Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-navy">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm bg-cream p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">Site navigation links and social media</SheetDescription>
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between p-6 border-b border-navy/10">
                  <Image
                    src={siteConfig.logo}
                    alt="L.I.F.E. manifested LLP"
                    width={140}
                    height={46}
                    className="h-10 w-auto object-contain"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setOpen(false)}
                    className="text-navy"
                  >
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex-1 overflow-y-auto p-6">
                  <ul className="space-y-2">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          prefetch={true}
                          onClick={() => setOpen(false)}
                          className={cn(
                            'block rounded-lg px-4 py-3 text-lg font-medium transition-colors',
                            pathname === item.href
                              ? 'bg-navy text-cream'
                              : 'text-navy hover:bg-soft-gold'
                          )}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    <li className="border-t border-navy/10 pt-2 mt-2">
                      <p className="px-4 py-2 text-sm font-semibold text-navy">Quick Links</p>
                      <Link
                        href="/cheatsheets"
                        prefetch={true}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-4 py-3 text-lg font-medium transition-colors text-navy hover:bg-soft-gold ml-2"
                      >
                        Cheat Sheets
                      </Link>
                      <Link
                        href="/books"
                        prefetch={true}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-4 py-3 text-lg font-medium transition-colors text-navy hover:bg-soft-gold ml-2"
                      >
                        Books
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div className="border-t border-navy/10 p-6">
                  <div className="flex items-center justify-center gap-6 mb-6">
                    <Link
                      href={siteConfig.links.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy hover:text-gold transition-colors"
                    >
                      <Facebook className="h-6 w-6" />
                    </Link>
                    <Link
                      href={siteConfig.links.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy hover:text-gold transition-colors"
                    >
                      <Youtube className="h-6 w-6" />
                    </Link>
                    <Link
                      href={siteConfig.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy hover:text-gold transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                    </Link>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-navy text-cream hover:bg-gold hover:text-navy"
                  >
                    <Link href="/contact" prefetch={true} onClick={() => setOpen(false)}>
                      Get In Touch
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

export const Navbar = memo(NavbarComponent)
