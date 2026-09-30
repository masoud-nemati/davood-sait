"use client"

import { useState } from "react"
import { Input } from "@/app/components/ui/input/input"
import styles from "./CommentSection.module.css"

const ACCESS_KEY = "34fb3d4e-60b9-4103-a84c-45587fc9dea2"

export default function CommentSection() {
  const [name, setName] = useState("")
  const [text, setText] = useState("")
  const [sentMessage, setSentMessage] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const addComment = async () => {
    if (!name.trim() || !text.trim()) return

    setLoading(true)
    setError(false)

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: "نظر جدید از سایت شخصی",
          from_name: name.trim(),
          message: text.trim(),
        }),
      })

      const data = await res.json()
      if (!data.success) throw new Error("fail")

      setName("")
      setText("")
      setSentMessage(true)
      setTimeout(() => setSentMessage(false), 3000)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.commentSection}>
      <h2 className="text-xl font-bold mb-4">Comments and Suggestions</h2>

      <div className="flex flex-col gap-4">
        <Input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Write your comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-32 p-3 rounded-md bg-white/10 text-white outline-none border border-white/20 focus:border-blue-500 resize-none"
        />

        <button
          onClick={addComment}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send"}
        </button>

        {sentMessage && (
          <p className="text-green-400 text-sm">✔ به ایمیل ارسال شد</p>
        )}
        {error && (
          <p className="text-red-400 text-sm">ارسال نشد. دوباره تلاش کن.</p>
        )}
      </div>
    </div>
  )
}