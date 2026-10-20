import Link from 'next/link'
import { ArrowRight, Heart, Leaf, ShieldCheck } from 'lucide-react'

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#fbfaf7] text-[#17231f]">
            <div className="mx-auto max-w-360 px-5 sm:px-8 lg:px-12">
                <header className="flex items-center justify-between py-6">
                    <Link href="/" className="text-xl font-semibold tracking-[-0.04em] text-[#1f3b32]">
                        tidy
                        <span className="text-[#86a881]">
                            .
                        </span>
                    </Link>
                    <Link href="/" className="text-sm font-semibold text-[#1f3b32]">
                        Back home
                        <ArrowRight className="ml-1 inline" size={15} />
                    </Link>
                </header>
                <section className="border-t border-[#e3e9e2] py-20 lg:py-28">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#789873]">
                        About tidy
                    </p>
                    <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-[-0.065em] text-[#1f3b32] sm:text-7xl">
                        A little more care in <em className="font-serif font-normal text-[#85a780]">every room.</em>
                    </h1>
                    <p className="mt-7 max-w-2xl text-lg leading-8 text-[#64736d]">
                        We started tidy because a clean home should feel like support, not another item on your list.
                        Our local crews bring warmth, reliability, and attention to the details that make a space feel like yours.
                    </p>
                    <div className="mt-16 grid gap-5 md:grid-cols-3">
                        {[{
                            icon: Heart,
                            title: 'People first',
                            text: 'We treat your home and your time with genuine respect.'
                        }, {
                            icon: Leaf,
                            title: 'Thoughtful by nature',
                            text: 'We choose effective products and mindful practices.'
                        }, {
                            icon: ShieldCheck,
                            title: 'Trust, always',
                            text: 'Every visit is backed by clear communication and care.'
                        }].map(({
                            icon: Icon, title, text
                        }) => <article key={title} className="rounded-3xl bg-white p-7 shadow-[0_14px_45px_rgba(40,70,55,.07)]">
                                <span className="grid size-12 place-items-center rounded-2xl bg-[#f7ead9] text-[#1f3b32]">
                                    <Icon size={21} />
                                </span>
                                <h2 className="mt-8 text-xl font-semibold text-[#1f3b32]">
                                    {title}
                                </h2>
                                <p className="mt-3 text-sm leading-6 text-[#64736d]">
                                    {text}
                                </p>
                            </article>
                        )}
                    </div>
                    <div className="mt-16 max-w-2xl">
                        <p className="text-2xl leading-10 tracking-[-0.03em] text-[#1f3b32]">
                            “The best kind of service is the kind that gives something back:
                            a little time, a little ease, and a home that feels good to be in.”
                        </p>
                        <Link
                            href="/#book"
                            className="mt-8 inline-flex rounded-full bg-[#1f3b32] px-6 py-3.5 text-sm font-semibold text-white">
                            Meet your cleaning crew
                            <ArrowRight className="ml-2" size={16} /></Link>
                    </div>
                </section>
            </div>
        </main>
    )
}
