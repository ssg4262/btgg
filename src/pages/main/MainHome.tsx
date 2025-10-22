"use client"
import {MainLayout} from "@/layouts/main/MainLayout.tsx"

import { Separator } from "@/components/ui/separator"
import {MainHero} from "@/components/hero/main/MainHero.tsx";
import React from "react";




/* ───────────────────────── Page ───────────────────────── */
export const MainHome: React.FC = () => {
    return (
        <MainLayout showScrollIndicator>
            <MainHero/>
            <Separator className="my-10 opacity-60" />

            {/* 페이지 본문 */}
            <div className="max-w-7xl mx-auto px-6 pb-20">
                <div className="space-y-8">
                    <div className="p-8 bg-white/5 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4">섹션</h2>
                        <p className="text-gray-400">
                            스크롤 인디케이터 테스트용 콘텐츠입니다. 페이지를 스크롤하면 오른쪽 인디케이터가 진행도를 표시합니다.
                        </p>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
