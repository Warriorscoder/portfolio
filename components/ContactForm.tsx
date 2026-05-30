"use client"

import { useState, FormEvent } from "react"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        throw new Error("Failed to send message")
      }

      form.reset()
      setSuccess(true)
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl w-full bg-white border border-[#EAEAEA] rounded-2xl p-6 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.01),0_2px_8px_rgba(0,0,0,0.015)] space-y-8"
    >
      {/* Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-[11px] font-mono uppercase tracking-wider text-[#787774] mb-2 font-bold">
            Name *
          </label>
          <input
            name="name"
            required
            placeholder="Introduce yourself..."
            className="
              w-full bg-transparent border-b border-[#EAEAEA]
              py-2.5 text-base text-[#2F3437] placeholder-[#787774]/40
              focus:outline-none focus:border-[#111111] transition-colors
            "
          />
        </div>

        <div>
          <label className="block text-[11px] font-mono uppercase tracking-wider text-[#787774] mb-2 font-bold">
            Email Address *
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="where_can_i@reply.com"
            className="
              w-full bg-transparent border-b border-[#EAEAEA]
              py-2.5 text-base text-[#2F3437] placeholder-[#787774]/40
              focus:outline-none focus:border-[#111111] transition-colors
            "
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-[11px] font-mono uppercase tracking-wider text-[#787774] mb-2 font-bold">
          Message *
        </label>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Tell me about your project, idea, or B2B scalability goals..."
          className="
            w-full bg-transparent border-b border-[#EAEAEA]
            py-2.5 text-base text-[#2F3437] placeholder-[#787774]/40 resize-none
            focus:outline-none focus:border-[#111111] transition-colors
          "
        />
      </div>

      {/* Submit */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="
            rounded-lg border border-[#EAEAEA] bg-[#111111]
            px-6 py-2.5 text-xs font-mono font-bold text-white
            transition hover:bg-[#2F3437] active:scale-[0.98] active:translate-y-[0.5px]
            disabled:opacity-50 cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.05)]
          "
        >
          {loading ? "SENDING..." : "SEND MESSAGE"}
        </button>

        {success && (
          <p className="text-xs font-mono text-emerald-600 font-semibold animate-pulse">
            TRANSMISSION SUCCESSFUL — I’LL RESPOND SOON.
          </p>
        )}

        {error && (
          <p className="text-xs font-mono text-red-600 font-semibold">
            {error.toUpperCase()}
          </p>
        )}
      </div>
    </form>
  )
}
