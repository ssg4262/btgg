"use client"
import React, {useEffect, useState} from "react";
import { Button } from "@/components/ui/button"
import coin from '@/assets/image/coin.png'

export const MainHero:React.FC = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20
            const y = (e.clientY / window.innerHeight - 0.5) * 20
            setMousePos({ x, y })
        }
        window.addEventListener("mousemove", onMouseMove)
        return () => window.removeEventListener("mousemove", onMouseMove)
    }, [])

    return(
        <section className="relative overflow-hidden">
            {/* 배경 */}
            <div className="absolute inset-0 -z-10">
                <div className="h-full w-full bg-[linear-gradient(180deg,#0c0b14_0%,#15121f_100%)]" />
            </div>

            <div className="max-w-7xl mx-auto px-6">
                {/* 헤더(타이틀/버튼) */}
                <div className="relative pt-16 md:pt-20 pb-24 md:pb-28">
                    <div className="text-center mx-auto max-w-[1100px]">
                        <h1 className="font-extrabold tracking-[-0.025em] leading-[0.95] text-[clamp(40px,8vw,120px)] text-[#2A0B4D] dark:text-white">
                            웹3에서 나만의 공간
                        </h1>
                        <div className="mt-6 flex items-center justify-center">
                            <Button
                                size="lg"
                                className="rounded-full px-6 h-11 bg-black text-white hover:bg-black dark:bg-white dark:text-black"
                            >
                                SuperChart 보기
                            </Button>
                        </div>
                    </div>

                    {/* Center Image */}
                    <div className="relative h-[340px] md:h-[540px] mt-8 md:mt-6 select-none flex items-center justify-center">
                        <div
                            className="transition-transform duration-200 ease-out"
                            style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
                        >
                            <img
                                src={coin}
                                alt="Coin"
                                className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}