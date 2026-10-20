import Link from 'next/link'
import { ArrowRight, Leaf, ShieldCheck, Sparkles } from 'lucide-react'

const services = [
  { title: 'Home cleaning', icon: Sparkles, text: 'A dependable recurring clean that keeps your home feeling calm, fresh, and ready for real life.', points: ['Kitchen and bathroom reset', 'Dusting, vacuuming, and floors', 'Beds made and surfaces refreshed'] },
  { title: 'Deep cleaning', icon: Leaf, text: 'A thoughtful top-to-bottom reset for spaces that need extra care, detail, and a little breathing room.', points: ['Detail work in high-touch areas', 'Baseboards, doors, and fixtures', 'Inside selected appliances on request'] },
  { title: 'Move in / out', icon: ShieldCheck, text: 'Start your next chapter with a clean slate, whether you are handing over keys or settling into a new home.', points: ['Empty-home kitchen and bath clean', 'Cabinets and interior windows', 'Flexible timing around your move'] },
]

export default function ServicesPage() {
  return <main className="min-h-screen bg-[#fbfaf7] text-[#17231f]">
    <div className="mx-auto max-w-360 px-5 sm:px-8 lg:px-12">
      <header className="flex items-center justify-between py-6"><Link href="/" className="text-xl font-semibold tracking-[-0.04em] text-[#1f3b32]">tidy<span className="text-[#86a881]">.</span></Link><Link href="/" className="text-sm font-semibold text-[#1f3b32]">Back home <ArrowRight className="ml-1 inline" size={15} /></Link></header>
      <section className="border-t border-[#e3e9e2] py-20 lg:py-28"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#789873]">Our services</p><h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-[-0.065em] text-[#1f3b32] sm:text-7xl">A clean that fits <em className="font-serif font-normal text-[#85a780]">your life.</em></h1><p className="mt-7 max-w-xl text-lg leading-8 text-[#64736d]">From weekly upkeep to a full reset, our trained crew brings care and consistency to every room.</p>
        <div className="mt-14 grid gap-5 md:grid-cols-3">{services.map(({ title, icon: Icon, text, points }) => <article key={title} className="rounded-3xl bg-white p-7 shadow-[0_14px_45px_rgba(40,70,55,.07)]"><span className="grid size-12 place-items-center rounded-2xl bg-[#e7f0e6] text-[#1f3b32]"><Icon size={21} /></span><h2 className="mt-10 text-2xl font-semibold tracking-[-0.04em] text-[#1f3b32]">{title}</h2><p className="mt-3 text-sm leading-6 text-[#64736d]">{text}</p><ul className="mt-6 flex flex-col gap-3 text-sm text-[#51615a]">{points.map(point => <li key={point} className="flex gap-2"><span className="text-[#85a780]">✓</span>{point}</li>)}</ul></article>)}</div>
        <div className="mt-14 rounded-3xl bg-[#1f3b32] p-8 text-white sm:p-12"><h2 className="max-w-xl text-3xl font-semibold tracking-[-0.05em]">Not sure which service is right for you?</h2><p className="mt-3 max-w-lg text-sm leading-6 text-[#d6e3d4]">Tell us a little about your home and we will help you choose the best starting point.</p><Link href="/#book" className="mt-7 inline-flex rounded-full bg-[#e0a06a] px-5 py-3 text-sm font-semibold text-[#2e271e]">Get your free estimate <ArrowRight className="ml-2" size={16} /></Link></div>
      </section>
    </div>
  </main>
}
