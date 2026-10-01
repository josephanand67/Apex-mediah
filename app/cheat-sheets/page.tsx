import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ExternalLink, FileText } from 'lucide-react'
import Link from 'next/link'

const sourceHost = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/'

const cheatSheets = [
  { title: 'Pause on Purpose', description: 'Build the space between stimulus and response with conscious pause practices.', category: 'Mindfulness', image: `${sourceHost}2.%20P%20Series%20Book%20-%20Presence%20%28Summary%20Infographic%29-g8ayMJhkJrN05X9orhHh9pYO9Up4jT.png` },
  { title: 'Presence', description: 'Practice conscious response, emotional awareness, and intentional living in every moment.', category: 'Mindfulness', image: `${sourceHost}2.%20P%20Series%20Book%20-%20Presence%20%28Summary%20Infographic%29-g8ayMJhkJrN05X9orhHh9pYO9Up4jT.png` },
  { title: 'Positivity', description: 'Direct your emotional energy toward resilience, gratitude, and a more positive life.', category: 'Well-being', image: `${sourceHost}3.%20P%20Series%20Book%20-%20Positivity%20%28Summary%20Infograhic%29-2QOSu7ivdFIlout7Lh02yZD7ouOl94.png` },
  { title: 'Perception', description: 'See clearly, question assumptions, and choose the lens through which you view the world.', category: 'Self-awareness', image: `${sourceHost}4.%20P%20Series%20Book%20-%20Perception%20%28Summary%20Infographic%29-QOJnPfxMv7kuWZRwq6VV5IXkVIhqCA.png` },
  { title: 'Paradoxes', description: 'Hold different truths with wisdom and thrive in a polarized world.', category: 'Wisdom', image: `${sourceHost}5.%20P%20Series%20Book%20-%20%20Paradoxes%20%28Summary%20Infographic%29-IPD5Sr8wq1drxfep0XcKYzvKkO1x2C.png` },
  { title: 'Perspective', description: 'Expand context, understand complexity, and act from a wider view.', category: 'Clarity', image: `${sourceHost}6.%20P%20Series%20Book%20-%20Perspective%20%28Summary%20Infographic%29-XEPSLUzpvlfg9jWWrdAJLViHe4B4i1.png` },
  { title: 'Pain', description: 'Transform adversity through acceptance, healing, resilience, and meaning.', category: 'Resilience', image: `${sourceHost}7.%20P%20Series%20Book%20-%20Pain%20%28Summary%20Infographic%29-5CFVqlSzrIhKE0NZCXBihxqv83CEPk.png` },
  { title: 'Pleasure', description: 'Understand desire and create lasting fulfillment through intentional choices.', category: 'Fulfillment', image: `${sourceHost}8.%20P%20Series%20Book%20-%20Pleasure%20%28Summary%20Infographic%29-VmQkjVyfJRfWEVkLf9W0rcmkMoJH5l.png` },
  { title: 'Purpose', description: 'Discover your calling, align your values, and make a meaningful impact.', category: 'Direction', image: `${sourceHost}9.%20P%20Series%20Book%20-%20Purpose%20%28Summary%20Infographic%29-mjb4qYXMf7MF9b71dR9abwHLaF3Z54.png` },
  { title: 'Peace', description: 'Cultivate inner calm with daily practices for a chaotic world.', category: 'Inner peace', image: `${sourceHost}10.%20P%20Series%20Book%20-%20Peace%20%28Summary%20Infographic%29-D2VcNHbpuqJ8o334JpWrY9uMBTP7vX.png` },
  { title: 'Life', description: 'Live fully and meaningfully through self-knowledge, connection, and purpose.', category: 'Personal growth', image: `${sourceHost}11.%20P%20Series%20Book%20-%20LIFE%20%28Summary%20Infographic%29-hq2imU4oVxvkVfVNimu7guUa9yb9fX.png` },
  { title: 'Priority', description: 'Focus your time, energy, and attention on what truly matters.', category: 'Focus', image: `${sourceHost}12.%20P%20Series%20Book%20-%20Priority%20%28Summary%20Infographic%29-mIDivsEST3zwgsTd3YgTVyi7HxhxcI.png` },
]

export default function CheatSheetsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-gradient-to-b from-cream to-white px-4 pb-14 pt-32 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Quick Reference Library</span>
          <h1 className="mt-4 font-serif text-5xl font-bold text-navy md:text-6xl">Cheat Sheets &amp; Resources</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/70 md:text-xl">
            Explore the P Series collection of visual guides for emotional intelligence, personal growth, and meaningful leadership.
          </p>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex items-end justify-between gap-6 border-b border-navy/10 pb-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">The P Series</p>
                <h2 className="mt-2 font-serif text-3xl font-bold text-navy">Summary Infographics of P Series Books</h2>
              </div>
              <span className="hidden text-sm text-charcoal/60 sm:block">Click any guide to view it full size</span>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {cheatSheets.map((sheet, index) => (
                <article key={sheet.title} className="group flex flex-col overflow-hidden rounded-2xl border border-navy/10 bg-cream/40 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg">
                  <a href={sheet.image} target="_blank" rel="noreferrer" className="block overflow-hidden bg-white" aria-label={`View ${sheet.title} guide full size`}>
                    <img src={sheet.image} alt={`${sheet.title} P Series summary infographic`} className="aspect-[2/3] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]" loading={index < 3 ? 'eager' : 'lazy'} />
                  </a>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold"><FileText data-icon="inline-start" /> {sheet.category}</span>
                      <span className="text-xs font-medium text-charcoal/50">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-navy">{sheet.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/70">{sheet.description}</p>
                    <Button asChild variant="outline" className="mt-6 w-full border-navy/20 text-navy hover:border-gold hover:bg-gold/10">
                      <a href={sheet.image} target="_blank" rel="noreferrer">View full-size guide <ExternalLink data-icon="inline-end" /></a>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy px-4 py-16 text-cream sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold md:text-4xl">More Resources Coming Soon</h2>
            <p className="mt-5 text-lg text-cream/80">Subscribe to get notified when new guides and worksheets are available.</p>
            <Button asChild className="mt-8 bg-gold text-navy hover:bg-cream"><Link href="/#newsletter">Join the Inner Circle</Link></Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
