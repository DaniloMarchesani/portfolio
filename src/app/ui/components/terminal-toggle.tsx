"use client"

import { useState } from "react"
import { TerminalIcon } from "lucide-react"
import Terminal from "./terminal"

export default function TerminalButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full text-left fixed bottom-0 right-0 bg-neutral-800 dark:bg-neutral-700 text-white px-3 py-2 shadow-lg hover:bg-neutral-700 dark:hover:bg-neutral-600 transition-all duration-200 z-10"
        aria-label="Open terminal"
      >
        <div className="flex items-center">
            <TerminalIcon size={15} />
            <span className="ml-2 text-xs">Open Terminal</span>
        </div>
      </button>

      <Terminal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
