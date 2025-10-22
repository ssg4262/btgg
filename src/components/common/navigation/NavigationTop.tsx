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
import {
    Menu,
    Moon,
    Sun,
    Monitor,
    Languages,
} from "lucide-react"

export const NavigationTop: React.FC = () => {
    const { theme, setTheme } = useTheme()
    const handleThemeChange = (mode: "light" | "dark" | "system") => setTheme(mode)

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Left ───────────────────────────── */}
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
                                className="rounded-md px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                            >
                                {label}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Right ───────────────────────────── */}
                <div className="flex items-center space-x-2">
                    {/* Language */}
                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Change language"
                        className="hover:bg-muted/50"
                    >
                        <Languages className="h-[18px] w-[18px]" />
                    </Button>

                    {/* Theme toggle */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label="Toggle theme">
                                {theme === "dark" ? (
                                    <Moon className="h-5 w-5" />
                                ) : theme === "light" ? (
                                    <Sun className="h-5 w-5" />
                                ) : (
                                    <Monitor className="h-5 w-5" />
                                )}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-36">
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

                    {/* User Profile */}
                    {/*<DropdownMenu>*/}
                    {/*    <DropdownMenuTrigger asChild>*/}
                    {/*        <Button variant="ghost" className="pl-1 pr-2 flex items-center gap-2">*/}
                    {/*            <Avatar className="h-7 w-7 border border-border">*/}
                    {/*                <AvatarImage*/}
                    {/*                />*/}
                    {/*                <AvatarFallback>EC</AvatarFallback>*/}
                    {/*            </Avatar>*/}
                    {/*            <ChevronDown className="h-4 w-4 opacity-70" />*/}
                    {/*        </Button>*/}
                    {/*    </DropdownMenuTrigger>*/}
                    {/*    <DropdownMenuContent align="end" className="w-44">*/}
                    {/*        <DropdownMenuItem className="font-medium">*/}
                    {/*            <User className="mr-2 h-4 w-4" /> Profile*/}
                    {/*        </DropdownMenuItem>*/}
                    {/*        <DropdownMenuItem>*/}
                    {/*            <Settings className="mr-2 h-4 w-4" /> Settings*/}
                    {/*        </DropdownMenuItem>*/}
                    {/*        <Separator className="my-1" />*/}
                    {/*        <DropdownMenuItem className="text-destructive">*/}
                    {/*            <LogOut className="mr-2 h-4 w-4" /> Log out*/}
                    {/*        </DropdownMenuItem>*/}
                    {/*    </DropdownMenuContent>*/}
                    {/*</DropdownMenu>*/}

                    {/* Mobile Menu */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="lg:hidden">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
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
