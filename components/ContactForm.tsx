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
      className="max-w-4xl space-y-12"
    >
      {/* Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <label className="block text-sm text-gray-500 mb-2">
            Name*
          </label>
          <input
            name="name"
            required
            placeholder="Hello…"
            className="
              w-full bg-transparent border-b border-gray-300
              py-3 text-gray-900 placeholder-gray-400
              focus:outline-none focus:border-gray-900
            "
          />
        </div>

        <div>
          <label className="block text-sm text-gray-500 mb-2">
            Email*
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="Where can I reply?"
            className="
              w-full bg-transparent border-b border-gray-300
              py-3 text-gray-900 placeholder-gray-400
              focus:outline-none focus:border-gray-900
            "
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm text-gray-500 mb-2">
          Message*
        </label>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Tell me a bit about your idea or collaboration…"
          className="
            w-full bg-transparent border-b border-gray-300
            py-3 text-gray-900 placeholder-gray-400 resize-none
            focus:outline-none focus:border-gray-900
          "
        />
      </div>

      {/* Submit */}
      <div className="flex items-center gap-6">
        <button
          type="submit"
          disabled={loading}
          className="
            rounded-full border border-gray-900
            px-8 py-3 text-sm font-medium
            transition hover:bg-gray-900 hover:text-white
            disabled:opacity-50
          "
        >
          {loading ? "Sending…" : "Send message"}
        </button>

        {success && (
          <p className="text-sm text-gray-500">
            Message sent — I’ll get back to you soon.
          </p>
        )}

        {error && (
          <p className="text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    </form>
  )
}
