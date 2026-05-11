"use client"

import { useState } from "react"
import { Input } from "@/app/components/ui/input/input"
import styles from "./CommentSection.module.css"

export default function CommentSection() {
  const [name, setName] = useState("")
  const [text, setText] = useState("")
  const [sentMessage, setSentMessage] = useState(false)

  const addComment = () => {
    if (name.trim() && text.trim()) {
      console.log({
        name,
        text,
        timestamp: Date.now(),
      })

      setName("")
      setText("")

      setSentMessage(true)
      setTimeout(() => setSentMessage(false), 3000)
    }
  }

  return (
    <div className={styles.commentSection}>

      <h2 className="text-xl font-bold mb-4">
        Comments and Suggestions
      </h2>

      <div className="flex flex-col gap-4">

        {/* NAME */}
        <Input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* TEXTAREA */}
        <textarea
          placeholder="Write your comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="
            w-full h-32
            p-3
            rounded-md
            bg-white/10
            text-white
            outline-none
            border border-white/20
            focus:border-blue-500
            resize-none
          "
        />

        {/* BUTTON */}
        <button
          onClick={addComment}
          className="
            bg-blue-600
            hover:bg-blue-700
            text-white
            py-2
            rounded-md
            transition
          "
        >
          Send
        </button>

        {/* SUCCESS MESSAGE */}
        {sentMessage && (
          <p className="text-green-400 text-sm">
            ✔ Comment Sent!
          </p>
        )}

      </div>
    </div>
  )
}