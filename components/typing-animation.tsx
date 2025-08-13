"use client"

import { useState, useEffect } from "react"

interface TypingAnimationProps {
  text: string
  typingSpeed?: number // Speed in milliseconds per character
  delayBetweenLoops?: number // Delay before starting a new loop after full text is displayed
}

export function TypingAnimation({
  text,
  typingSpeed = 100,
  delayBetweenLoops = 5000, // 5 seconds delay after full text is displayed
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [charIndex, setCharIndex] = useState(0) // Current character index

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (charIndex < text.length) {
      // Typing phase
      timer = setTimeout(() => {
        setDisplayedText(text.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, typingSpeed)
    } else {
      // Full text displayed, pause and then reset for loop
      timer = setTimeout(() => {
        setDisplayedText("") // Reset text
        setCharIndex(0) // Reset index
      }, delayBetweenLoops)
    }

    return () => clearTimeout(timer)
  }, [charIndex, text, typingSpeed, delayBetweenLoops])

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder to reserve space for the full text */}
      <span className="invisible text-teal-300">{text}</span> {/* Changed to text-teal-300 */}
      {/* Animated text, absolutely positioned on top */}
      <span className="absolute top-0 left-0 text-teal-300">{displayedText}</span> {/* Changed to text-teal-300 */}
    </span>
  )
}
