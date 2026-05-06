"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsEnglish((prev) => !prev);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // const navLinks = [
  //   { name: "Solutions", href: "/solutions" },
  //   { name: "Case Studies", href: "/case-studies" },
  //   { name: "Tech & DNA", href: "/tech-dna" },
  // ];
  const navLinks = [
    { name: "사업 분야", href: "/solutions" },   // 기존: Solutions
    { name: "구축 경험", href: "/case-studies" }, // 기존: Case Studies
    { name: "기술 이야기", href: "/tech-dna" },     // 기존: Tech & DNA
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm" // 💡 스크롤 시 밝고 투명한 유리 질감
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 transition-colors flex items-center justify-center">
            <Image 
              src="/logo.png" 
              alt="Bo9jeong Logo" 
              width={24} 
              height={24} 
              className="object-contain" // 💡 로고 비율을 유지하면서 박스 안에 맞춤
              quality={75}
            />
          </div>
            {/* 💡 보구정디벨롭 브랜딩 반영 */}
            <div className="flex items-center gap-2 select-none">
              <span className="font-bold text-xl tracking-tight text-slate-900">
                보구정
              </span>
              
              {/* 💡 애니메이션이 일어날 텍스트 영역 */}
              <div className="relative h-[1.5em] overflow-hidden inline-flex items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={isEnglish ? "en" : "ko"}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className="text-xl font-black text-indigo-600 block"
                  >
                    {isEnglish ? "Develop" : "디벨롭"}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                // 💡 메뉴 글씨를 진한 회색으로, 호버 시 검은색으로
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors shadow-sm"
            >
              구축 문의
            </Link>
            
            <button
              className="md:hidden p-2 text-slate-600 hover:text-slate-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (Light Mode) */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-200 px-6 py-4 shadow-lg"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-semibold text-slate-700 hover:text-indigo-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-slate-900 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              구축 문의
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}

