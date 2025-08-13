"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Keyboard, X } from "lucide-react"

interface KeyboardShortcut {
  keys: string[]
  description: string
  action: () => void
}

interface KeyboardShortcutsProps {
  shortcuts: KeyboardShortcut[]
  className?: string
}

export function KeyboardShortcuts({ shortcuts, className = "" }: KeyboardShortcutsProps) {
  const [showHelp, setShowHelp] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Show help with Ctrl/Cmd + ?
      if ((event.ctrlKey || event.metaKey) && event.key === "/") {
        event.preventDefault()
        setShowHelp((prev) => !prev)
        return
      }

      // Execute shortcuts
      shortcuts.forEach((shortcut) => {
        const keys = shortcut.keys.map((key) => key.toLowerCase())
        const pressedKeys = []

        if (event.ctrlKey || event.metaKey) pressedKeys.push("ctrl")
        if (event.shiftKey) pressedKeys.push("shift")
        if (event.altKey) pressedKeys.push("alt")
        pressedKeys.push(event.key.toLowerCase())

        if (keys.length === pressedKeys.length && keys.every((key, index) => key === pressedKeys[index])) {
          event.preventDefault()
          shortcut.action()
        }
      })
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [shortcuts])

  const formatKey = (key: string) => {
    const keyMap: Record<string, string> = {
      ctrl: "⌘",
      shift: "⇧",
      alt: "⌥",
      enter: "↵",
      escape: "⎋",
      space: "Space",
    }
    return keyMap[key.toLowerCase()] || key.toUpperCase()
  }

  if (!showHelp) {
    return (
      <Button
        onClick={() => setShowHelp(true)}
        variant="ghost"
        size="sm"
        className={`fixed bottom-4 right-4 z-40 glass hover-glow ${className}`}
      >
        <Keyboard className="h-4 w-4 mr-2" />
        Shortcuts
      </Button>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <Card className="glass w-full max-w-md animate-scale-in">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Keyboard className="h-5 w-5" />
              Keyboard Shortcuts
            </CardTitle>
            <Button onClick={() => setShowHelp(false)} variant="ghost" size="sm">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {shortcuts.map((shortcut, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-sm">{shortcut.description}</span>
              <div className="flex items-center gap-1">
                {shortcut.keys.map((key, keyIndex) => (
                  <Badge key={keyIndex} variant="outline" className="text-xs">
                    {formatKey(key)}
                  </Badge>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-6 pt-4 border-t text-center">
            <p className="text-xs text-muted-foreground">
              Press{" "}
              <Badge variant="outline" className="text-xs">
                ⌘ /
              </Badge>{" "}
              to toggle this help
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
