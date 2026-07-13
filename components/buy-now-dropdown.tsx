'use client'

import { memo } from 'react'
import Link from 'next/link'
import { ShoppingCart, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface BuyNowDropdownProps {
  amazonUrl: string
  barnesNobleUrl: string
  size?: 'sm' | 'default' | 'lg'
  className?: string
  fullWidth?: boolean
}

export const BuyNowDropdown = memo(function BuyNowDropdown({
  amazonUrl,
  barnesNobleUrl,
  size = 'default',
  className = '',
  fullWidth = false,
}: BuyNowDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size={size}
          className={`bg-navy text-cream hover:bg-gold hover:text-navy transition-colors duration-75 ${fullWidth ? 'w-full' : ''} ${className}`}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Buy Now
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-56 bg-white border border-border shadow-xl rounded-xl p-2">
        <DropdownMenuItem asChild className="cursor-pointer rounded-lg focus:bg-soft-gold">
          <Link
            href={amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-3"
          >
            <div className="w-8 h-8 bg-[#FF9900] rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.493.13.116.19.09.333-.08.429-.098.06-.21.127-.335.2l-.145.09a24.397 24.397 0 0 1-9.097 2.212 24.15 24.15 0 0 1-11.82-2.885c-.16-.09-.24-.2-.29-.454zm5.394-2.2c-.143.2-.276.162-.418.016-.142-.146-.139-.274-.009-.404.143-.132.295-.248.458-.347l.24-.152c1.355-.78 2.924-1.17 4.708-1.17 1.813 0 3.357.27 4.63.807.33.14.5.36.5.66 0 .26-.086.44-.26.54-.173.1-.38.05-.62-.15-.18-.15-.42-.31-.71-.49-.29-.18-.56-.32-.82-.43a8.33 8.33 0 0 0-3.66-.66 9.39 9.39 0 0 0-4.04.78z"/>
              </svg>
            </div>
            <div className="flex-1">
              <span className="font-medium text-navy">Amazon</span>
              <p className="text-xs text-charcoal/60">Buy on Amazon.com</p>
            </div>
            <ExternalLink className="h-4 w-4 text-charcoal/40" />
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer rounded-lg focus:bg-soft-gold">
          <Link
            href={barnesNobleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-3"
          >
            <div className="w-8 h-8 bg-[#2D5F2E] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">B&N</span>
            </div>
            <div className="flex-1">
              <span className="font-medium text-navy">Barnes & Noble</span>
              <p className="text-xs text-charcoal/60">Buy on BN.com</p>
            </div>
            <ExternalLink className="h-4 w-4 text-charcoal/40" />
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
})
