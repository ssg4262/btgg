"use client"

import React, { useEffect, useState } from "react"
import { NavigationTop } from "@/components/common/navigation/NavigationTop"
import { cn } from "@/lib/utils"

type MainLayoutProps = {
    children: React.ReactNode
    /** 오른쪽 고정 스크롤 인디케이터 표시 여부 */
    showScrollIndicator?: boolean
    /** 레이아웃 루트에 추가 클래스 */
    className?: string
}

export const MainLayout: React.FC<MainLayoutProps> = ({
                                                   children,
                                                   showScrollIndicator = true,
                                                   className,
                                               }) => {
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const onScroll = () => {
            const st = window.scrollY
            const dh = document.documentElement.scrollHeight - window.innerHeight
            setScrollProgress(Math.min(dh > 0 ? (st / dh) * 100 : 0, 100))
        }
        window.addEventListener("scroll", onScroll)
        onScroll()
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <div className={cn("min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/20", className)}>
            <NavigationTop />
            <main className="flex-1">{children}</main>

            {showScrollIndicator && (
                <div className="pointer-events-none fixed right-3 md:right-6 top-1/2 -translate-y-1/2 z-50 flex items-center justify-center">
                    <div className="h-24 w-6 md:h-32 md:w-8 rounded-2xl bg-black/70 dark:bg-white/20 flex items-start justify-center p-1 md:p-1.5">
                        <div
                            className="w-1.5 md:w-2 rounded-full bg-white/70 dark:bg-white/60 transition-all duration-200 ease-out"
                            style={{ height: `${scrollProgress}%` }}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

