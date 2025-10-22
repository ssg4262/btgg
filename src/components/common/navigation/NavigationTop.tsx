"use client"

import React from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/theme/theme-provider"
import { Menu, Moon, Sun, Monitor, Languages } from "lucide-react"

const iconBtn =
    "h-11 w-11 min-h-11 min-w-11 rounded-xl text-foreground/80 " +
    "hover:text-foreground hover:bg-foreground/5 active:bg-foreground/10 " +
    "[-webkit-tap-highlight-color:transparent] focus-visible:ring-1 focus-visible:ring-ring"

export const NavigationTop: React.FC = () => {
    const { theme, setTheme } = useTheme()
    const handleThemeChange = (mode: "light" | "dark" | "system") => setTheme(mode)

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Left */}
                <div className="flex items-center gap-3">
                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1 ml-6 text-sm">
                        {[
                            ["홈", "/"],
                            ["뉴스", "/workspace"],
                            ["코인골라보기", "/tools"],
                            ["차트", "/chart"],
                        ].map(([label, href]) => (
                            <a
                                key={label}
                                href={href}
                                className="rounded-md px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors"
                            >
                                {label}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Right */}
                <div className="flex items-center gap-1.5">
                    {/* Language */}
                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Change language"
                        className={iconBtn}
                    >
                        <Languages className="h-[18px] w-[18px]" />
                    </Button>

                    {/* Theme toggle */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                aria-label="Toggle theme"
                                className={`${iconBtn} data-[state=open]:bg-foreground/7`}
                            >
                                {theme === "dark" ? (
                                    <Moon className="h-5 w-5" />
                                ) : theme === "light" ? (
                                    <Sun className="h-5 w-5" />
                                ) : (
                                    <Monitor className="h-5 w-5" />
                                )}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            align="end"
                            sideOffset={8}
                            className="w-36 bg-popover border border-border/50 rounded-xl shadow-md"
                        >
                            <DropdownMenuItem onClick={() => handleThemeChange("light")}>
                                <Sun className="mr-2 h-4 w-4" /> Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleThemeChange("dark")}>
                                <Moon className="mr-2 h-4 w-4" /> Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleThemeChange("system")}>
                                <Monitor className="mr-2 h-4 w-4" /> System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Mobile Menu */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className={`lg:hidden ${iconBtn}`}
                                aria-label="Open menu"
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            align="end"
                            sideOffset={8}
                            className="w-48 bg-popover border border-border/50 rounded-xl shadow-md"
                        >
                            {[
                                ["홈", "/"],
                                ["뉴스", "/workspace"],
                                ["코인골라보기", "/tools"],
                                ["차트", "/chart"],
                            ].map(([label, href]) => (
                                <DropdownMenuItem key={label} asChild>
                                    <a href={href} className="w-full">
                                        {label}
                                    </a>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}
