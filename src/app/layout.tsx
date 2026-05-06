import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingKakao from "@/components/layout/FloatingKakao";
import GlobalLoader from "@/components/layout/loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // 💡 기본 타이틀 및 템플릿 설정
  title: {
    default: "보구정디벨롭 | 하이엔드 엔지니어링 & AI 솔루션",
    template: "%s | 보구정디벨롭",
  },
  // 💡 검색 엔진 설명 문구 (핵심 키워드 포함)
  description: "보구정디벨롭은 지능형 관제 시스템, 비정형 데이터 OCR, 하이엔드 웹/앱 구축 전문 엔지니어링 그룹입니다. 14일/30일/90일 맞춤형 구축 프로토콜로 아이디어를 무결점의 현실로 구현합니다.",
  
  // 💡 검색 최적화 키워드
  keywords: [
    "보구정디벨롭", "웹개발", "앱개발", "AI 비전", "OCR 연구", 
    "지능형 관제 시스템", "디지털 트윈", "Next.js 개발", "하이엔드 UIUX", 
    "기업용 플랫폼 구축", "제주 소프트웨어 개발", "엔지니어링 DNA"
  ],

  // 💡 파비콘 및 아이콘 설정
  icons: {
    icon: "/favicon.png", // public 폴더의 파일을 참조
    shortcut: "/favicon.png",
    apple: "/favicon.png", // 아이폰 홈 화면 추가 시 아이콘
  },

  // 💡 오픈 그래프 (카톡, 페이스북 공유 시 노출되는 카드)
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.bo9jeong.com", // 실제 도메인으로 변경 필요
    title: "보구정디벨롭 | Engineering is our DNA",
    description: "아이디어를 설계하고 무결점의 현실로 구축합니다. 전문적인 구축 프로토콜을 확인하세요.",
    siteName: "보구정디벨롭",
    images: [
      {
        url: "/og-image.png", // 공유 시 보여줄 대표 이미지 (public에 추가 권장)
        width: 1200,
        height: 630,
        alt: "보구정디벨롭 대표 이미지",
      },
    ],
  },

  // 💡 트위터 카드 설정
  twitter: {
    card: "summary_large_image",
    title: "보구정디벨롭 | 하이엔드 솔루션 파트너",
    description: "무결점 엔지니어링으로 비즈니스의 골조를 세웁니다.",
    images: ["/og-image.png"],
  },

  // 💡 검색 엔진 로봇 설정
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 💡 변경: className="dark" 제거
    <html lang="ko">
      
      {/* 💡 변경: bg-slate-950 -> bg-white, text-slate-50 -> text-slate-900 */}
      <body className={`${inter.className} bg-white text-slate-900 min-h-screen flex flex-col antialiased`}>
      <Suspense fallback={null}>
      <GlobalLoader />
      </Suspense>
        <Header />
        <main className="flex-1 flex flex-col w-full z-10 relative">
          {children}
        </main>
        {/* 💡 전역 플로팅 버튼 배치 */}
        <FloatingKakao />
        <Footer />
      </body>
    </html>
  );
}