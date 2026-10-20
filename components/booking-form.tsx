'use client'

import { FormEvent, useState } from "react"
import { ArrowRight, Check, LoaderCircle, MessageCircle } from "lucide-react"

const initialForm = { name: "", email: "", phone: "", service: "Home cleaning", date: "", time: "", address: "", notes: "" }

export function BookingForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [assistant, setAssistant] = useState(false)

  function update(field: keyof typeof initialForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("sending")
    const response = await fetch("/api/book", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) })
    setStatus(response.ok ? "success" : "error")
    if (response.ok) setForm(initialForm)
  }

  return (
    <div className="mx-auto mt-10 max-w-3xl rounded-4xl border border-[#dfe7dd] bg-white p-6 text-left shadow-[0_24px_70px_rgba(31,59,50,.10)] sm:p-9">
      {status === "success" ? (
        <div className="py-8 text-center"><span className="mx-auto grid size-14 place-items-center rounded-full bg-[#e8f2e5] text-[#5c865d]"><Check /></span><h3 className="mt-5 text-2xl font-semibold text-[#1f3b32]">Request received.</h3><p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#71807a]">A confirmation is on its way. Our crew will reach out to confirm the appointment window.</p><button onClick={() => setStatus("idle")} className="mt-6 text-sm font-semibold text-[#1f3b32] underline underline-offset-4">Book another clean</button></div>
      ) : (
        <>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#789873]">Appointment request</p><h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#1f3b32]">Tell us where to show up.</h3></div><button type="button" onClick={() => setAssistant(!assistant)} className="inline-flex items-center gap-2 self-start rounded-full bg-[#edf3ec] px-4 py-2 text-xs font-semibold text-[#315847]"><MessageCircle size={15} /> {assistant ? "Assistant on" : "Ask the assistant"}</button></div>
          {assistant && <div className="mt-5 rounded-2xl bg-[#f7ead9] p-4 text-sm leading-6 text-[#5f5042]">Hi, I can help you choose a service and time. Home cleaning is best for regular upkeep, deep cleaning is ideal for a reset, and move in / out is designed for transitions. Pick your preferred slot below and the crew will confirm availability.</div>}
          <form onSubmit={submit} className="mt-7 grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-[#46574f]">Name<input required value={form.name} onChange={(e) => update("name", e.target.value)} className="mt-2 w-full rounded-2xl border border-[#dfe7dd] bg-[#fbfaf7] px-4 py-3 outline-none ring-[#9cbd8f] focus:ring-2" placeholder="Your name" /></label>
            <label className="text-sm font-medium text-[#46574f]">Email<input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="mt-2 w-full rounded-2xl border border-[#dfe7dd] bg-[#fbfaf7] px-4 py-3 outline-none ring-[#9cbd8f] focus:ring-2" placeholder="you@example.com" /></label>
            <label className="text-sm font-medium text-[#46574f]">Phone<input value={form.phone} onChange={(e) => update("phone", e.target.value)} className="mt-2 w-full rounded-2xl border border-[#dfe7dd] bg-[#fbfaf7] px-4 py-3 outline-none ring-[#9cbd8f] focus:ring-2" placeholder="(415) 555-0184" /></label>
            <label className="text-sm font-medium text-[#46574f]">Service<select value={form.service} onChange={(e) => update("service", e.target.value)} className="mt-2 w-full rounded-2xl border border-[#dfe7dd] bg-[#fbfaf7] px-4 py-3 outline-none ring-[#9cbd8f] focus:ring-2"><option>Home cleaning</option><option>Deep cleaning</option><option>Move in / out</option></select></label>
            <label className="text-sm font-medium text-[#46574f]">Preferred date<input required type="date" value={form.date} onChange={(e) => update("date", e.target.value)} className="mt-2 w-full rounded-2xl border border-[#dfe7dd] bg-[#fbfaf7] px-4 py-3 outline-none ring-[#9cbd8f] focus:ring-2" /></label>
            <label className="text-sm font-medium text-[#46574f]">Preferred time<input required type="time" value={form.time} onChange={(e) => update("time", e.target.value)} className="mt-2 w-full rounded-2xl border border-[#dfe7dd] bg-[#fbfaf7] px-4 py-3 outline-none ring-[#9cbd8f] focus:ring-2" /></label>
            <label className="text-sm font-medium text-[#46574f] sm:col-span-2">Service address<input required value={form.address} onChange={(e) => update("address", e.target.value)} className="mt-2 w-full rounded-2xl border border-[#dfe7dd] bg-[#fbfaf7] px-4 py-3 outline-none ring-[#9cbd8f] focus:ring-2" placeholder="Street, city, ZIP" /></label>
            <label className="text-sm font-medium text-[#46574f] sm:col-span-2">Anything we should know?<textarea value={form.notes} onChange={(e) => update("notes", e.target.value)} rows={3} className="mt-2 w-full resize-none rounded-2xl border border-[#dfe7dd] bg-[#fbfaf7] px-4 py-3 outline-none ring-[#9cbd8f] focus:ring-2" placeholder="Pets, parking, access instructions..." /></label>
            {status === "error" && <p className="sm:col-span-2 text-sm text-red-700">We couldn&apos;t send that request. Please call (415) 555-0184 and we&apos;ll help right away.</p>}
            <button disabled={status === "sending"} className="inline-flex items-center justify-center rounded-full bg-[#e0a06a] px-6 py-3.5 text-sm font-semibold text-[#2e271e] transition hover:bg-[#e8b07f] disabled:cursor-wait disabled:opacity-60 sm:col-span-2">{status === "sending" ? <><LoaderCircle className="mr-2 animate-spin" size={16} /> Sending request...</> : <>Request my appointment <ArrowRight size={16} className="ml-2" /></>}</button>
          </form>
        </>
      )}
    </div>
  )
}
