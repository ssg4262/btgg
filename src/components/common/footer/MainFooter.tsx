"use client"
import React from "react";
import { FaXTwitter, FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaTelegram, FaTiktok, FaReddit } from "react-icons/fa6";

export const MainFooter: React.FC = () => {
    const footerData = {
        products: {
            title: "제품 그 이상",
            sections: [
                {
                    subtitle: "슈퍼차트",
                    items: ["스크리너", "주식", "ETF", "채권", "암호화폐", "CEX 레이", "DEX 레이", "Pine"]
                },
                {
                    subtitle: "위젯",
                    items: ["주식", "ETF", "암호화폐"]
                },
                {
                    subtitle: "컬러",
                    items: ["아이콘+픽", "어닝", "배당"]
                },
                {
                    subtitle: "더 많은 제품",
                    items: ["수익률 국선", "검선", "뉴스 플로우", "Pine Script®"]
                },
                {
                    subtitle: "앱",
                    items: ["모바일", "데스크탑"]
                }
            ]
        },
        unity: {
            title: "통일 구축",
            sections: [
                {
                    subtitle: "",
                    items: ["특성", "가격", "마켓 데이터"]
                },
                {
                    subtitle: "트레이딩",
                    items: ["오러닝", "브로커"]
                },
                {
                    subtitle: "스팩울 오더",
                    items: ["CME 그룹 선물", "유렉스 선물", "마국 주식 먼털"]
                },
                {
                    subtitle: "팀식 정보",
                    items: ["회사 소개", "우두 열람", "블로그", "커리어", "미디어 키트"]
                },
                {
                    subtitle: "고즈",
                    items: ["트레이딩뷰 스토어", "트레이더를 타본 가드", "C63 트레이드엄험"]
                },
                {
                    subtitle: "질별 및 보얀",
                    items: ["시용조건", "면획사항", "프라이버시정책", "쿠키 정책", "연근선 정책", "보안 팀"]
                }
            ]
        },
        community: {
            title: "커뮤니티",
            sections: [
                {
                    subtitle: "",
                    items: ["수성 네트월", "시링의 벽", "프런드 리내라기", "하우스룰", "모더레이터"]
                },
                {
                    subtitle: "아이디어",
                    items: ["트레이딩", "교육", "에디터즈 픽"]
                },
                {
                    subtitle: "PINE SCRIPT",
                    items: ["지표 및 전략", "미팀션", "프리엄션"]
                }
            ]
        },
        business: {
            title: "비즈니스 솔루션",
            sections: [
                {
                    subtitle: "",
                    items: [
                        "위젯",
                        "차팅 라이브러리",
                        "Lightweight Charts™",
                        "고급 차트",
                        "트레이딩 플랫폼",
                        "상장 기획",
                        "광고",
                        "브로커 등법",
                        "마른너 프로그램",
                        "교육 프로그램"
                    ]
                }
            ]
        }
    };

    const socialIcons = [
        { Icon: FaXTwitter, href: "#" },
        { Icon: FaFacebook, href: "#" },
        { Icon: FaYoutube, href: "#" },
        { Icon: FaInstagram, href: "#" },
        { Icon: FaLinkedin, href: "#" }
    ];

    const socialIconsSecond = [
        { Icon: FaTelegram, href: "#" },
        { Icon: FaTiktok, href: "#" },
        { Icon: FaReddit, href: "#" }
    ];

    const copyrightTexts = [
        "선택된 시장 데이터는 ICE 데이터 서비스에서 제공됩니다.",
        "선택된 일고 데이터는 팩트셋에서 제공됩니다. Copyright © 2025 팩트셋 리서치 시스템즈 Inc.",
        "Copyright © 2025, 미래에너 평가는 팁원. CUSIP 데이터레머이 수는 팩트셋 리서치 시스템즈 Inc 에서 제공합니다. 모든 것이는 보호됩니다.",
        "SEC 공식 및 거래 보수는 Quart에서 제공됩니다.",
        "© 2025 BTGG Inc."
    ];

    return (
        <footer className="bg-white dark:bg-[#0d0d0d] border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-[1400px] mx-auto px-6 py-12">
                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
                    {/* Left Column - Logo and Social */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white font-PartialSansKR">BTGG</div>
                            <div className="text-base font-semibold text-gray-900 dark:text-white">.GG</div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Look first / Then leap.</p>

                        {/* Social Icons - First Row */}
                        <div className="flex gap-3 mb-3">
                            {socialIcons.map(({ Icon, href }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    className="text-gray-700 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>

                        {/* Social Icons - Second Row */}
                        <div className="flex gap-3 mb-6">
                            {socialIconsSecond.map(({ Icon, href }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    className="text-gray-700 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>

                        {/* Language Selector */}
                        <button className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                            <span className="text-base">🌐</span> 한국어 <span className="text-xs">▼</span>
                        </button>

                        {/* Copyright Text */}
                        <div className="mt-8 text-xs text-gray-500 dark:text-gray-500 space-y-2">
                            {copyrightTexts.map((text, index) => (
                                <p key={index}>{text}</p>
                            ))}
                        </div>
                    </div>

                    {/* 제품 그 이상 */}
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm">
                            {footerData.products.title}
                        </h3>

                        <div className="space-y-4">
                            {footerData.products.sections.map((section, sectionIndex) => (
                                <div key={sectionIndex}>
                                    {section.subtitle && (
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-2 text-sm">
                                            {section.subtitle}
                                        </h4>
                                    )}
                                    <ul className="space-y-1.5">
                                        {section.items.map((item, itemIndex) => (
                                            <li key={itemIndex}>
                                                <a
                                                    href="#"
                                                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                                                >
                                                    {item}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 통일 구축 */}
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm">
                            {footerData.unity.title}
                        </h3>

                        <div className="space-y-4">
                            {footerData.unity.sections.map((section, sectionIndex) => (
                                <div key={sectionIndex}>
                                    {section.subtitle && (
                                        <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2 text-sm">
                                            {section.subtitle}
                                        </h4>
                                    )}
                                    <ul className="space-y-1.5">
                                        {section.items.map((item, itemIndex) => (
                                            <li key={itemIndex}>
                                                <a
                                                    href="#"
                                                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                                                >
                                                    {item}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 커뮤니티 */}
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm">
                            {footerData.community.title}
                        </h3>

                        <div className="space-y-4">
                            {footerData.community.sections.map((section, sectionIndex) => (
                                <div key={sectionIndex}>
                                    {section.subtitle && (
                                        <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2 text-sm">
                                            {section.subtitle}
                                        </h4>
                                    )}
                                    <ul className="space-y-1.5">
                                        {section.items.map((item, itemIndex) => (
                                            <li key={itemIndex}>
                                                <a
                                                    href="#"
                                                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                                                >
                                                    {item}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 비즈니스 솔루션 */}
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm">
                            {footerData.business.title}
                        </h3>

                        <div className="space-y-4">
                            {footerData.business.sections.map((section, sectionIndex) => (
                                <div key={sectionIndex}>
                                    <ul className="space-y-1.5">
                                        {section.items.map((item, itemIndex) => (
                                            <li key={itemIndex}>
                                                <a
                                                    href="#"
                                                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                                                >
                                                    {item}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};