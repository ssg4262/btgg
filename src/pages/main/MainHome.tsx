"use client"
import {MainLayout} from "@/layouts/main/MainLayout.tsx"

import {MainHero} from "@/components/hero/main/MainHero.tsx";
import React from "react";
import {MainFooter} from "@/components/common/footer/MainFooter.tsx";




export const MainHome: React.FC = () => {
    return (
        <MainLayout showScrollIndicator>
            <MainHero/>

            <MainFooter/>
        </MainLayout>
    )
}
