import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ShopHero } from '@/components/shop/shop-hero'
import { ShopGrid } from '@/components/shop/shop-grid'

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Browse and purchase books by Joseph Anand including individual titles and exclusive bundles.',
}

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <main>
        <ShopHero />
        <ShopGrid />
      </main>
      <Footer />
    </>
  )
}
