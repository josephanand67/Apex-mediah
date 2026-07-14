export interface Book {
  slug: string
  title: string
  subtitle: string
  description: string
  amazonUrl: string
  barnesNobleUrl: string
  partridgeUrl: string
  coverImage: string
  category: string
  publishedDate: string
  featured?: boolean
}

export const books: Book[] = [
  {
    slug: 'mastering-project-leadership',
    title: 'Mastering Project Leadership Through Emotional Intelligence',
    subtitle: 'Lead with Awareness and Impact',
    description: 'Mastering Project Leadership Through Emotional Intelligence equips leaders with the emotional awareness and interpersonal skills needed to navigate complex project environments, build high-performing teams, and drive sustainable results through authentic leadership.',
    amazonUrl: '',
    barnesNobleUrl: 'https://www.partridgepublishing.com/en-sg/bookstore/bookdetails/872988-the-eq-advantage-in-the-age-of-ai',
    partridgeUrl: 'https://www.partridgepublishing.com/en-sg/bookstore/bookdetails/872988-the-eq-advantage-in-the-age-of-ai',
    coverImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%208%2C%202026%2C%2006_36_03%20AM-X5KkcGIkgO5pprUOLeMXKgSR7YQfj9.png',
    category: 'Emotional Intelligence',
    publishedDate: '2024',
  },
  {
    slug: 'emotional-intelligence-critical-life-skill',
    title: 'Emotional Intelligence: A Critical Life Skill for All Ages',
    subtitle: 'Build Your Emotional Foundation',
    description: 'Emotional Intelligence: A Critical Life Skill for All Ages is designed for readers at every stage of life. This essential guide explores how emotional intelligence shapes relationships, career success, mental health, and overall well-being across your entire lifespan.',
    amazonUrl: '',
    barnesNobleUrl: 'https://www.partridgepublishing.com/en-sg/bookstore/bookdetails/872990-the-eq-advantage-in-the-age-of-ai',
    partridgeUrl: 'https://www.partridgepublishing.com/en-sg/bookstore/bookdetails/872990-the-eq-advantage-in-the-age-of-ai',
    coverImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%208%2C%202026%2C%2006_42_10%20AM-eO7ziTOwZmRgFAqXx7hBqV44IgXkWX.png',
    category: 'Emotional Intelligence',
    publishedDate: '2024',
  },
  {
    slug: 'reclaiming-human-edge',
    title: 'Reclaiming The Human Edge with Emotional Intelligence',
    subtitle: 'Thrive in a Digital World',
    description: 'Reclaiming The Human Edge with Emotional Intelligence shows how emotional intelligence becomes your competitive advantage in an increasingly automated world. Discover how to maintain your humanity, authenticity, and irreplaceable human qualities in the age of technology.',
    amazonUrl: '',
    barnesNobleUrl: 'https://www.partridgepublishing.com/en-sg/bookstore/bookdetails/872989-the-eq-advantage-in-the-age-of-ai',
    partridgeUrl: 'https://www.partridgepublishing.com/en-sg/bookstore/bookdetails/872989-the-eq-advantage-in-the-age-of-ai',
    coverImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%208%2C%202026%2C%2006_40_29%20AM-mb6A4EYSaTCBPViHk3sNSaOn7Tr1hs.png',
    category: 'Emotional Intelligence',
    publishedDate: '2024',
  },
  {
    slug: 'emotional-intelligence-companion-young-humans',
    title: 'Emotional Intelligence: A Companion Edition for Young Humans',
    subtitle: 'Navigate Life with Awareness',
    description: 'Emotional Intelligence: A Companion Edition for Young Humans is tailored specifically for younger readers and emerging adults. It makes emotional intelligence concepts accessible and actionable for building stronger relationships, managing emotions, and creating a meaningful life.',
    amazonUrl: '',
    barnesNobleUrl: 'https://www.partridgepublishing.com/en-sg/bookstore/bookdetails/872991-the-eq-advantage-in-the-age-of-ai',
    partridgeUrl: 'https://www.partridgepublishing.com/en-sg/bookstore/bookdetails/872991-the-eq-advantage-in-the-age-of-ai',
    coverImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%208%2C%202026%2C%2006_34_03%20AM-33g245q3JgrNnc412yhIuhBdHcLRug.png',
    category: 'Emotional Intelligence',
    publishedDate: '2024',
  },
  {
    slug: 'pause-on-purpose',
    title: 'Pause on Purpose',
    subtitle: 'The Gap Where Emotional Intelligence Lives',
    description: 'Pause on Purpose explores the overlooked space between stimulus and response—the small, often invisible gap where awareness, choice, and emotional intelligence reside. It is in this gap that reactions soften, clarity emerges, and wiser action becomes possible.',
    amazonUrl: 'https://www.amazon.com/Pause-Purposes-Where-Emotional-Intelligence-ebook/dp/B0GLJ76622',
    barnesNobleUrl: 'https://www.barnesandnoble.com/w/pause-on-purpose-joseph-anand/1149617149?ean=9798995100034',
    partridgeUrl: 'https://www.partridgepublishing.com/en-us/bookstore/title/Pause-on-Purpose',
    coverImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-03%20at%206.51.33%20AM-JeDGaSzO5St5UmtS78QJXyPLNxoyLQ.jpeg',
    category: 'Emotional Intelligence',
    publishedDate: '2024',
    featured: true,
  },
  {
    slug: 'presence',
    title: 'Presence',
    subtitle: 'The Foundation of Emotional Intelligence',
    description: 'Presence explores presence as a lived capacity, not a concept to master. Drawing from neuroscience, psychology, leadership experience, and lived insight, it reveals how presence shapes perception, steadies emotion, and restores choice in moments where reactions usually take over.',
    amazonUrl: 'https://www.amazon.com/Presence-Foundation-Intelligence-Joseph-Anand-ebook/dp/B0GLJJM5DX',
    barnesNobleUrl: 'https://www.barnesandnoble.com/w/presence-joseph-anand/1149617165?ean=9798995100010',
    partridgeUrl: 'https://www.partridgepublishing.com/en-us/bookstore/title/Presence',
    coverImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-03%20at%206.51.33%20AM%20%281%29-z9VMcXyo4cLK92YwFICDqvH1GUKwpb.jpeg',
    category: 'Emotional Intelligence',
    publishedDate: '2024',
    featured: true,
  },
  {
    slug: 'positivity',
    title: 'Positivity',
    subtitle: 'Pathway to Emotional Intelligence',
    description: 'Positivity is not about optimism as denial, cheerfulness as performance, or thinking happy thoughts in difficult times. It is about emotional expansion—the quiet, steady ability to remain open, grounded, and responsive even when life applies pressure.',
    amazonUrl: 'https://www.amazon.com/Positivity-Emotional-Intelligence-Joseph-Anand-ebook/dp/B0GLJR8ZF2',
    barnesNobleUrl: 'https://www.barnesandnoble.com/w/positivity-joseph-anand/1149608725?ean=9798995100041',
    partridgeUrl: 'https://www.partridgepublishing.com/en-us/bookstore/title/Positivity',
    coverImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-03%20at%206.51.33%20AM%20%282%29-hkUM53n3Gbp53awJ6EwfogF8YHP7Cf.jpeg',
    category: 'Emotional Intelligence',
    publishedDate: '2024',
  },
  {
    slug: 'perception',
    title: 'Perception',
    subtitle: 'The Hidden Lens Behind Every Decision',
    description: 'Perception explores the invisible lens through which we interpret reality—shaping what we notice, what we miss, what feels threatening, and what feels possible. Two people can face the same moment and live entirely different lives, not because of circumstances, but because of how those circumstances are perceived.',
    amazonUrl: 'https://www.amazon.com/Perception-Hidden-Behind-Every-Decision-ebook/dp/B0GLLHZH72',
    barnesNobleUrl: 'https://www.barnesandnoble.com/w/perception-joseph-anand/1149617162?ean=9798995100058',
    partridgeUrl: '',
    coverImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-03%20at%206.51.33%20AM%20%283%29-n8hXOMLOEYwn0q48aKhnxakT3O0yZi.jpeg',
    category: 'Psychology',
    publishedDate: '2024',
  },
  {
    slug: 'paradoxes',
    title: 'Paradoxes',
    subtitle: 'Living Between Opposites',
    description: 'We are taught to choose sides—to be strong or vulnerable, decisive or open, confident or uncertain. Paradox: Living Between Opposites invites you into that space where opposites coexist, exploring the quiet truths we often resist.',
    amazonUrl: 'https://www.amazon.com/Paradox-Between-Opposites-Joseph-Anand-ebook/dp/B0GLTPYCCX',
    barnesNobleUrl: 'https://www.barnesandnoble.com/w/paradoxes-joseph-anand/1149617151?ean=9798995100027',
    partridgeUrl: '',
    coverImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-03%20at%206.51.33%20AM%20%284%29-kTiZ73pZVUtCd0hKRn1DNTQSUb8qYD.jpeg',
    category: 'Philosophy',
    publishedDate: '2024',
  },
  {
    slug: 'perspective',
    title: 'Perspective',
    subtitle: 'The View You Choose Shapes The Life You Live',
    description: 'Two people can face the same moment and walk away with two entirely different lives. The difference is not circumstance. It is perspective. In this powerful volume, Joseph Anand explores how the view we choose shapes our emotions, relationships, leadership, and ultimately our destiny.',
    amazonUrl: 'https://www.amazon.com/PERSPECTIVE-View-Choose-Shapes-Life-ebook/dp/B0GT7RPW11',
    barnesNobleUrl: 'https://www.barnesandnoble.com/w/perspective-blue-print-publisher/1149730298?ean=9781918741070',
    partridgeUrl: '',
    coverImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-03%20at%206.51.34%20AM-j1QaQ5HWWpY5XigvXEi6BgL8fewMUa.jpeg',
    category: 'Personal Growth',
    publishedDate: '2024',
  },
  {
    slug: 'pain',
    title: 'Pain',
    subtitle: 'Transforming Adversity in a Fragile World',
    description: 'Pain is not the interruption of life. It is the moment life becomes real. In Pain, Joseph Anand explores the biology of hurt, the psychology of suffering, and the deeper transformation that emerges when adversity is integrated rather than resisted.',
    amazonUrl: 'https://www.amazon.com/PAIN-Transforming-Adversity-Suffering-Compassion-ebook/dp/B0GT2SM2LP',
    barnesNobleUrl: 'https://www.barnesandnoble.com/w/pain-blue-print-publisher/1149730695?ean=9781918741018',
    partridgeUrl: '',
    coverImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-03%20at%206.51.34%20AM%20%281%29-wfxYRDtc7kFRcvrdJkSdodxwxcqE4h.jpeg',
    category: 'Personal Growth',
    publishedDate: '2024',
  },
  {
    slug: 'pleasure',
    title: 'Pleasure',
    subtitle: 'Harnessing Desire in a Dopamine-Driven World',
    description: 'We live in the most stimulating era in human history. Every scroll, every notification, every purchase, every achievement promises a hit of pleasure. And yet, anxiety rises. Focus fragments. Satisfaction shortens. In Pleasure, Joseph Anand explores the hidden architecture of desire.',
    amazonUrl: 'https://www.amazon.com/PLEASURE-Harnessing-Desire-Dopamine-Driven-ebook/dp/B0GT7VVW2T',
    barnesNobleUrl: 'https://www.barnesandnoble.com/w/pleasure-blue-print-publisher/1149730300?ean=9781918741100',
    partridgeUrl: '',
    coverImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-03%20at%206.51.34%20AM%20%282%29-Ro6K7TwDmv7mQZ135a1qb1t01AYUHA.jpeg',
    category: 'Psychology',
    publishedDate: '2024',
    featured: true,
  },
  {
    slug: 'purpose',
    title: 'Purpose',
    subtitle: 'Designing Direction in a Distracted World',
    description: 'In a world engineered for distraction, direction has become rare. Purpose is not about finding a hidden passion or chasing a dramatic reinvention. It is about designing alignment deliberately—moving from reaction to intention, from scattered ambition to coherent contribution.',
    amazonUrl: 'https://www.amazon.com/PURPOSE-Designing-Direction-Distracted-World-ebook/dp/B0GT7BVF1H',
    barnesNobleUrl: 'https://www.barnesandnoble.com/w/purpose-blue-print-publisher/1149743318?ean=9781918741131',
    partridgeUrl: '',
    coverImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-03%20at%206.51.34%20AM%20%283%29-LLf5sLUoGnG8lk4hyORv8Kvv5J1xII.jpeg',
    category: 'Personal Development',
    publishedDate: '2024',
    featured: true,
  },
  {
    slug: 'life',
    title: 'Life',
    subtitle: 'Best Version of Yourself Manifested',
    description: 'THE P-SERIES: A Human Development Series for a Complex World. The P-Series was written for this moment. Eleven books. One journey. Each book stands alone. Together, they form architecture for living intentionally and manifesting your highest potential.',
    amazonUrl: 'https://www.amazon.com/LIFE-Intentionally-Excellence-Yourself-Manifested-ebook/dp/B0GT2FQVGC',
    barnesNobleUrl: 'https://www.barnesandnoble.com/w/life-blue-print-publisher/1149725113?ean=9781918741162',
    partridgeUrl: '',
    coverImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-03%20at%206.51.35%20AM%20%281%29-19r6cSAxkeFet2BDuVVhmnSYGsVvTB.jpeg',
    category: 'Personal Development',
    publishedDate: '2024',
    featured: true,
  },
  {
    slug: 'priority',
    title: 'Priority',
    subtitle: 'Stop Managing Time - SMT',
    description: 'You don\'t lose your life all at once. You lose it one day at a time to things that never truly mattered. In PRIORITY, Joseph Anand takes you beyond time management and productivity hacks into a far more confronting and liberating question: What actually deserves your life?',
    amazonUrl: 'https://www.amazon.com/PRIORITY-What-deserves-your-life-ebook/dp/B0GX3CPTMD',
    barnesNobleUrl: 'https://www.barnesandnoble.com/w/pause-on-purpose-joseph-anand/1149617149?ean=9798995100034',
    partridgeUrl: '',
    coverImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-03%20at%206.51.35%20AM%20%282%29-reL9qglhhj13Y2sIuxT89xrGOrFJ9C.jpeg',
    category: 'Personal Development',
    publishedDate: '2024',
  },
  {
    slug: 'peace',
    title: 'Peace',
    subtitle: 'Cultivating Inner Stability in an Uncertain World',
    description: 'In a world that moves faster than ever—where urgency is constant, noise is amplified, and uncertainty is normal—peace has become misunderstood. Peace is strength. It is the culmination of the P-Series journey, revealing peace not as a mood, but as a trained capacity.',
    amazonUrl: 'https://www.amazon.com/PEACE-Cultivating-Inner-Stability-Uncertain-ebook/dp/B0GT6LHR8N',
    barnesNobleUrl: 'https://www.barnesandnoble.com/w/peace-blue-print-publlisher/1149730297?ean=9781918741049',
    partridgeUrl: '',
    coverImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-03%20at%206.51.35%20AM-bwIwYyKA9qzDzpcUxOXn6FmVwPLO2b.jpeg',
    category: 'Mindfulness',
    publishedDate: '2024',
  },
]

export const categories = [...new Set(books.map(book => book.category))]

export function getBookBySlug(slug: string): Book | undefined {
  return books.find(book => book.slug === slug)
}

export function getFeaturedBooks(): Book[] {
  return books.filter(book => book.featured)
}

export function getBooksByCategory(category: string): Book[] {
  return books.filter(book => book.category === category)
}
