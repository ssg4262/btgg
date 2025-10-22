"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Clock, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export const CryptoNewsStream: React.FC = () => {
    return (
        <section
            className={cn(
                "relative overflow-hidden",
            )}
        >
            <div className="mx-auto max-w-[1400px] px-4 md:px-6">
                {/* 헤더 */}
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between pt-6">
                    <div className="flex items-center gap-3">
                        <Badge
                            variant="secondary"
                            className="rounded-md border border-white/10 bg-white/5 text-white/90"
                        >
                            <Globe className="mr-1 h-3.5 w-3.5" />
                            실시간 코인 뉴스
                        </Badge>
                        <span className="text-xs text-white/50 flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          20초마다 자동 업데이트
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

