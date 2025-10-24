// src/components/common/navigation/NavigationTop.tsx
"use client"

import React from "react"
import { NavLink, useLocation } from "react-router-dom"
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
    "h-11 w-11 rounded-xl bg-transparent !bg-transparent appearance-none " +
    "[-webkit-tap-highlight-color:transparent] shadow-none " +
    "text-foreground/80 hover:text-foreground hover:bg-foreground/5 active:bg-foreground/10 " +
    "focus-visible:ring-1 focus-visible:ring-ring"

type NavItem = { label: string; href: string }
const NAV_ITEMS: NavItem[] = [
    { label: "홈", href: "/" },
    { label: "차트", href: "/chart" },
    { label: "뉴스", href: "/news" },
    { label: "코인골라보기", href: "/tools" },
]

export const NavigationTop: React.FC = () => {
    const { theme, setTheme } = useTheme()
    const handleThemeChange = (mode: "light" | "dark" | "system") => setTheme(mode)
    const { pathname } = useLocation()

    return (
        <header
            className="
        sticky top-0 z-50 w-full border-b border-border/40
        bg-background/95 supports-[backdrop-filter]:bg-background/70
        supports-[backdrop-filter]:backdrop-blur
      "
        >
            <div className="mx-auto flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Left */}
                <div className="flex items-center gap-3">
                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1 ml-6 text-sm">
                        {NAV_ITEMS.map(({ label, href }) => (
                            <NavLink
                                key={href}
                                to={href}
                                aria-current={pathname === href ? "page" : undefined}
                                className={({ isActive }) =>
                                    [
                                        "rounded-md px-3 py-2 transition-colors",
                                        isActive
                                            ? "bg-foreground/10 text-foreground"
                                            : "text-muted-foreground hover:text-foreground hover:bg-foreground/5",
                                    ].join(" ")
                                }
                                end
                            >
                                {label}
                            </NavLink>
                        ))}
                    </nav>
                </div>

                {/* Right */}
                <div className="flex items-center space-x-2 isolate">
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
                                className={`${iconBtn} data-[state=open]:bg-foreground/10`}
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
                            {NAV_ITEMS.map(({ label, href }) => (
                                <DropdownMenuItem key={href} asChild>
                                    {/* Radix(shadcn) + React Router 조합: asChild로 NavLink 감싸기 */}
                                    <NavLink
                                        to={href}
                                        className="w-full block px-2 py-1.5"
                                        end
                                    >
                                        {label}
                                    </NavLink>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}
