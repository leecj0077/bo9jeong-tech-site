"use client";

import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* 좌측: 안내 문구 */}
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-indigo-600 font-bold tracking-widest uppercase mb-4"
            >
              Contact Us
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-8"
            >
              함께 혁신을 시작할 <br />
              준비가 되셨나요?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 leading-relaxed mb-12"
            >
              프로젝트의 목적과 규모를 알려주시면, 보구정디벨롭의 <br className="hidden md:block" />
              하드코어 엔지니어링 팀이 최적의 솔루션을 제안해 드립니다.
            </motion.p>

            <div className="space-y-6">
              {[
                { icon: <Phone size={20} />, label: "대표 번호", value: "064-745-4728" },
                { icon: <Mail size={20} />, label: "프로젝트 문의", value: "bo9jeong@naver.com" },
                { icon: <MapPin size={20} />, label: "오피스", value: "제주특별자치도 제주시 오도5길 20 1층" },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex items-center gap-4 text-slate-600"
                >
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-indigo-600 border border-slate-100">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">{item.label}</p>
                    <p className="font-semibold text-slate-900">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 우측: 상담 폼 (Placeholder 가독성 개선) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-sm"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">성함</label>
                  {/* 💡 placeholder:text-slate-400 클래스로 가독성 보강 */}
                  <input 
                    type="text" 
                    placeholder="홍길동" 
                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400 placeholder:font-medium" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">기업/기관명</label>
                  <input 
                    type="text" 
                    placeholder="보구정테크" 
                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400 placeholder:font-medium" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">이메일 주소</label>
                <input 
                  type="email" 
                  placeholder="example@company.com" 
                  className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400 placeholder:font-medium" 
                />
              </div>

              <div className="space-y-2 relative">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">관심 구축 서비스</label>
                <div className="relative">
                    <select 
                    defaultValue="" 
                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all appearance-none cursor-pointer text-slate-900 font-medium"
                    >
                    <option value="" disabled>구축하고자 하는 서비스 타입을 선택해주세요</option>
                    
                    {/* 💡 14일 코스에 적합한 서비스 */}
                    <option value="promo">브랜드 홍보형 웹 / 앱 (High-End Showcase)</option>
                    
                    {/* 💡 30일 코스에 적합한 서비스 */}
                    <option value="booking">예약 및 커머스 시스템 웹 / 앱 (Standard Biz)</option>
                    
                    {/* 💡 90일+ 엔터프라이즈 코스에 적합한 서비스 */}
                    <option value="government">관공서 및 엔터프라이즈 커스텀 시스템</option>
                    
                    {/* 💡 기술 컨설팅 및 R&D */}
                    <option value="etc">기타 전문 기술 상담 (AI / 3D / 아키텍처 R&D)</option>
                    </select>
                    
                    {/* 💡 appearance-none을 사용했으므로 커스텀 화살표 아이콘을 추가하면 더 전문적입니다. */}
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </div>
                </div>
                </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">프로젝트 상세 내용</label>
                <textarea 
                  rows={4} 
                  placeholder="진행하시려는 프로젝트의 목적, 요구사항, 일정 등을 자유롭게 적어주세요." 
                  className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none placeholder:text-slate-400 placeholder:font-medium"
                ></textarea>
              </div>

              <button className="w-full py-5 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 shadow-xl shadow-indigo-600/20 transition-all flex items-center justify-center gap-2 group">
                상담 신청하기
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <p className="text-center text-xs text-slate-400 font-medium">
                보내주신 정보는 확인 후 영업일 기준 24시간 이내에 담당자가 연락드립니다.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}