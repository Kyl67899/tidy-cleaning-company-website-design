'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Check,
  Globe2,
  Leaf,
  Menu,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react'
import { BookingForm } from '@/components/booking-form'

const services = [
  {
    title: "Home cleaning",
    text: "A fresh, detailed clean that makes every room feel like now.",
    icon: Sparkles,
    tone: "bg-[#e7f0e6]"
  },
  {
    title: "Deep cleaning",
    text: "The reset your space has been waiting for, from top to bottom.",
    icon: Leaf,
    tone: "bg-[#f7ead9]"
  },
  {
    title: "Move in / out",
    text: "Take the stress out of moving with a spotless fresh start.",
    icon: ShieldCheck,
    tone: "bg-[#e6edf1]"
  }
];

const navItems = [
  { label: "Services", href: "/services" },
  { label: "How it works", href: "/how-it-works" },
  { label: "About us", href: "/about-us" },
  { label: "FAQs", href: "/faqs" },
];

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#fbfaf7] text-[#17231f]">
      <div className="mx-auto max-w-360 px-5 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between py-5 lg:py-7">
          <Link href="#top" className="flex items-center gap-2" aria-label="Tidy home">
            <span className="grid size-9 place-items-center rounded-full bg-[#1f3b32] text-[#eaf2e7]">
              <Sparkles size={12} strokeWidth={2.5} className="grid size-9 place-items-center rounded-full bg-[#1f3b32] text-[#eaf2e7]" />
            </span>
            <span className="text-xl font-semibold tracking-[-0.04em]">
              tidy<span className="text-[#86a881]">.</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 rounded-full border border-[#dfe5df] bg-white/80 p-1.5 shadow-sm md:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-[#51615a] transition hover:bg-[#edf3ec] hover:text-[#1f3b32]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <Link href="tel:+14155550184" className="text-sm font-medium text-[#51615a]">
              (415) 555-0184
            </Link>
            <Link href="#book" className="rounded-full bg-[#1f3b32] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#315847]">
              Book a clean <ArrowRight size={15} className="ml-1 inline" />
            </Link>
          </div>
          <button className="grid size-10 place-items-center rounded-full border border-[#dfe5df] md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </header>

        {menuOpen && <nav className="mb-5 flex flex-col gap-1 rounded-2xl border border-[#dfe5df] bg-white p-3 md:hidden">
          {navItems.map((item) =>
            <Link key={item.label} href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-sm">
              {item.label}
            </Link>
          )}
          <Link href="#book" className="mt-2 rounded-xl bg-[#1f3b32] px-4 py-3 text-center text-sm font-semibold text-white">
            Book a clean
          </Link>
        </nav>
        }

        <section id="top" className="grid items-center gap-10 pb-16 pt-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:pb-24 lg:pt-16">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <p className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#789873]">
              <span className="size-2 rounded-full bg-[#9cbd8f] animate-pulse" />
              Thoughtfully clean homes
            </p>
            <h1 className="max-w-xl text-5xl font-semibold leading-[0.97] tracking-[-0.065em] text-[#1f3b32] sm:text-6xl lg:text-[76px]">
              More time for <em className="font-serif font-normal text-[#85a780]">living.</em>
            </h1>
            <p className="mt-7 max-w-md text-base leading-7 text-[#64736d] sm:text-lg">
              A better kind of clean for the way you live. Thoughtful, reliable home cleaning that gives you back the good parts of your day.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="#book" className="rounded-full bg-[#e0a06a] px-6 py-3.5 text-center text-sm font-semibold text-[#2e271e] transition hover:bg-[#e8b07f]">Get your free estimate <ArrowRight size={16} className="ml-2 inline" /></Link><a href="#how-it-works" className="text-center text-sm font-semibold text-[#1f3b32] underline decoration-[#b5c8b0] underline-offset-4">See how it works</a></div>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                <span className="grid size-8 place-items-center rounded-full border-2 border-[#fbfaf7] bg-[#d6b19d] text-[10px] font-semibold">AM</span>
                <span className="grid size-8 place-items-center rounded-full border-2 border-[#fbfaf7] bg-[#a9c1ae] text-[10px] font-semibold">JS</span>
                <span className="grid size-8 place-items-center rounded-full border-2 border-[#fbfaf7] bg-[#e5c991] text-[10px] font-semibold">KL</span>
              </div>
              <div>
                <div className="flex items-center gap-1 text-sm font-semibold">
                  <Star size={13} fill="#e0a06a" strokeWidth={0} />
                  4.9 / 5
                </div>
                <p className="text-xs text-[#81908a]">
                  from 300+ happy homes
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .1 }} className="relative">
            <div className="absolute -right-5 -top-6 z-10 hidden rounded-2xl bg-white p-4 shadow-[0_18px_45px_rgba(40,70,55,.12)] sm:block">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span className="grid size-7 place-items-center rounded-full bg-[#e8f2e5] text-[#699367]">
                  <Check size={15} />
                </span> Satisfaction guaranteed</div>
            </div>
            <div className="relative overflow-hidden rounded-4xl bg-[#dce6d8] shadow-[0_24px_70px_rgba(31,59,50,.13)]">
              <Image
                src="/cleaning-hero.png"
                width={600}
                height={450}
                loading="eager"
                alt="A cleaner refreshing a sunlit living room"
                className="aspect-4/3 w-full object-cover"
              />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-white/90 p-4 backdrop-blur-sm"><div>
                <p className="text-xs text-[#81908a]">
                  Your home, your rhythm
                </p>
                <p className="mt-1 text-sm font-semibold text-[#1f3b32]">
                  Simple. Sunny. Spotless.
                </p>
              </div>
                <div className="grid size-10 place-items-center rounded-full bg-[#1f3b32] text-white">
                  <ArrowRight size={17} />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-7 -left-7 hidden size-24 animate-pulse rounded-full border-10 border-[#f1d5b5] bg-[#e6b17e] sm:block" />
          </motion.div>
        </section>

        <section id='services' className='border-t border-[#e3e9e2] py-16 lg:py-24'>
          <div className='flex flex-col justify-between gap-6 md:flex-row md:items-end'></div>
          <p className='text-xs font-semibold uppercase tracking-[0.2em] text-[#789873]'>
            What we do
          </p>
          <h2 className='mt-3 max-w-lg text-4xl font-semibold tracking-[-0.055em] text-[#1f3b32] sm:text-5xl'>
            A clean that feels like <em className='font-serif font-normal text-[#85a780]'>you.</em>
          </h2>
          <p className='mt-4 max-w-xs text-sm leading-6 text-[#71807a]'>
            No harsh chemicals. No rushed jobs. Just a team that cares about the details.
          </p>
          <div className='mt-12 grid gap-4 md:grid-cols-3'>
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.a
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  href='#book'
                  key={service.title}
                  className={`group rounded-3xl p-6 ${service.tone}`}
                >
                  <div className='flex items-start justify-between'></div>
                  <span className='grid size-11 place-items-center rounded-2xl bg-white/70 text-[#1f3b32]'>
                    <Icon size={20} />
                  </span>
                  <span className='text-sm text-[#769071]'>
                    0{index + 1}
                  </span>
                  <h3 className='mt-14 text-xl font-semibold tracking-[-0.03em] text-[#1f3b32]'>
                    {service.title}
                  </h3>
                  <p className='mt-2 max-w-xs text-sm leading-6 text-[#61736a]'>
                    {service.text}
                  </p>
                  <span className='mt-6 inline-flex items-center text-sm font-semibold text-[#1f3b32]'>
                    Explore service <ArrowRight size={15} className='ml-2 transition group-hover:translate-x-1' />
                  </span>
                </motion.a>
              )
            }
            )}
          </div>
        </section>

        <section id="book" className="py-20 text-center lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#789873]">
            Ready when you are
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.06em] text-[#1f3b32] sm:text-6xl">
            Your cleanest home<br />
            <em className="font-serif font-normal text-[#85a780]">
              starts here.
            </em>
          </h2>
          <BookingForm />
          <p className="mt-4 text-xs text-[#81908a]">
            No commitment, just a quick conversation. Your details are sent securely to our crew.
          </p>
        </section>

        <footer className="border-t border-[#e3e9e2] py-10">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <Link href="#top" className="flex items-center gap-2">
                <span className="grid size-8 place-items-center rounded-full bg-[#1f3b32] text-[#eaf2e7]">
                  <Sparkles size={15} />
                </span>
                <span className="text-lg font-semibold tracking-[-0.04em]">
                  tidy<span className="text-[#86a881]">.</span>
                </span>
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-6 text-[#81908a]">
                Thoughtful home cleaning for a life well lived.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-14 gap-y-8 sm:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#789873]">
                  Explore
                </p>
                <div className="mt-4 flex flex-col gap-3 text-sm text-[#61736a]">
                  <Link href="/services">
                    Services
                  </Link>
                  <Link href="/how-it-works">
                    How it works
                  </Link>
                  <Link href="/about-us">
                    About us
                  </Link>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#789873]">
                  Contact
                </p>
                <div className="mt-4 flex flex-col gap-3 text-sm text-[#61736a]">
                  <Link href="mailto:hello@tidyhome.co">hello@tidyhome.co</Link>
                  <Link href="tel:+14155550184">(415) 555-0184</Link>
                  <span>San Francisco, CA</span>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#789873]">Follow along</p>
                <div className="mt-4 flex gap-2">
                  <Link aria-label="Tidy Home social page" href="#top" className="grid size-9 place-items-center rounded-full bg-[#edf3ec]">
                    <Globe2 size={16} />
                  </Link>
                  <Link aria-label="Tidy Home contact" href="mailto:hello@tidyhome.co" className="grid size-9 place-items-center rounded-full bg-[#edf3ec]">
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-3 border-t border-[#e3e9e2] pt-5 text-xs text-[#9aa69f] sm:flex-row sm:justify-between">
            <span>
              © 2026 Tidy Home. All rights reserved.
            </span>
            <span className="flex gap-5">
              <Link href="/faqs">FAQs</Link>
              <Link href="mailto:hello@tidyhome.co">Contact</Link>
            </span>
          </div>
        </footer>
      </div>
    </main>
  )
}
