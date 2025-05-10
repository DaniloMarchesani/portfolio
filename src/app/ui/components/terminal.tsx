"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface MacTerminalProps {
  isOpen: boolean
  onClose: () => void
}

export default function Terminal({ isOpen, onClose }: MacTerminalProps) {
  const [command, setCommand] = useState("")
  const [output, setOutput] = useState<string[]>([])
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [isProcessing, setIsProcessing] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  // Focus input when terminal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 500)
    }
  }, [isOpen])

  // Scroll to bottom when output changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [output])

  const handleCommand = () => {
    if (!command.trim()) return

    // Add command to history
    setHistory((prev) => [...prev, command])
    setHistoryIndex(-1)

    // Process command
    setIsProcessing(true)
    setOutput((prev) => [...prev, `$ ${command}`])

    // Handle commands
    if (command.toLowerCase().includes("create mail") || command.toLowerCase().includes("email")) {
      setTimeout(() => {
        setOutput((prev) => [...prev, "✨ Opening email client...", "📧 Preparing to send email to portfolio owner..."])
        setTimeout(() => {
          window.location.href =
            "mailto:marchesanidanilo@gmail.com?subject=Message from Portfolio Terminal&body=Hello, I visited your portfolio and wanted to connect!"
          setIsProcessing(false)
          setOutput((prev) => [...prev, "✅ Email client opened successfully!"])
        }, 1500)
      }, 500)
    } else if (command.toLowerCase().includes("github") || command.toLowerCase() === "open github") {
      setTimeout(() => {
        setOutput((prev) => [...prev, "✨ Opening GitHub profile...", "🔗 Redirecting to GitHub..."])
        setTimeout(() => {
          window.open("https://github.com/DaniloMarchesani", "_blank")
          setIsProcessing(false)
          setOutput((prev) => [...prev, "✅ GitHub opened in a new tab!"])
        }, 1000)
      }, 500)
    } else if (command.toLowerCase().includes("linkedin") || command.toLowerCase() === "open linkedin") {
      setTimeout(() => {
        setOutput((prev) => [...prev, "✨ Opening LinkedIn profile...", "🔗 Redirecting to LinkedIn..."])
        setTimeout(() => {
          window.open("https://www.linkedin.com/in/danilo-marchesani/", "_blank")
          setIsProcessing(false)
          setOutput((prev) => [...prev, "✅ LinkedIn opened in a new tab!"])
        }, 1000)
      }, 500)
    } else if (command.toLowerCase() === "help" || command.toLowerCase() === "commands") {
      setTimeout(() => {
        setOutput((prev) => [
          ...prev,
          "📋 Available commands:",
          "• npx create mail --now - Send an email",
          "• open github - Visit GitHub profile",
          "• open linkedin - Visit LinkedIn profile",
        ])
        setIsProcessing(false)
      }, 300)
    } else if (command.toLowerCase() === "clear" || command.toLowerCase() === "cls") {
      setOutput([])
      setIsProcessing(false)
    } else {
      // Handle unknown command
      setTimeout(() => {
        setOutput((prev) => [...prev, `Command not found: ${command}`, "Type 'help' to see available commands"])
        setIsProcessing(false)
      }, 500)
    }

    setCommand("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand()
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (history.length > 0 && historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setCommand(history[history.length - 1 - newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setCommand(history[history.length - 1 - newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setCommand("")
      }
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 flex flex-col"
          style={{ height: "60vh", maxHeight: "500px" }}
        >
          {/* Terminal window */}
          <div className="bg-neutral-800 text-white rounded-t-lg overflow-hidden shadow-xl border border-neutral-700 flex flex-col h-full">
            {/* Title bar */}
            <div className="bg-neutral-900 px-4 py-2 flex items-center justify-between border-b border-neutral-700">
              <div className="flex items-center space-x-2">
                <button
                  onClick={onClose}
                  className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
                  aria-label="Close terminal"
                />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <div className="text-xs text-neutral-400">portfolio ~ terminal</div>
              <div className="w-16" />
            </div>

            {/* Terminal content */}
            <div ref={terminalRef} className="flex-1 p-4 font-mono text-sm overflow-y-auto bg-[#1e1e1e] space-y-1">
              <div className="text-green-400 mb-2">Welcome to Portfolio Terminal v1.0.0</div>
              <div className="text-neutral-400 mb-1">Available commands:</div>
              <div className="text-neutral-400 mb-1">- 'npx create mail --now' to send me an email</div>
              <div className="text-neutral-400 mb-1">- 'open github' to visit my GitHub profile</div>
              <div className="text-neutral-400 mb-2">- 'open linkedin' to visit my LinkedIn profile</div>

              {/* Command output */}
              {output.map((line, i) => (
                <div key={i} className={line.startsWith("$") ? "text-white" : "text-green-300"}>
                  {line}
                </div>
              ))}

              {/* Command input */}
              <div className="flex items-center mt-2">
                <span className="text-green-400 mr-2">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none text-white"
                  placeholder="npx create mail --now"
                  disabled={isProcessing}
                  autoFocus
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
