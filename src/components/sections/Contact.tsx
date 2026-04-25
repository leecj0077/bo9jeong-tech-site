"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, CheckCircle2, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 💡 전송 프로토콜 가동
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      // ⚠️ PUBLIC_KEY는 EmailJS 대시보드 Account 메뉴에서 확인 후 아래에 직접 넣으세요.
      await emailjs.sendForm(
        "service_glxooks", 
        "template_cedh8kt", 
        formRef.current, 
        "rDWJ-P-AppIX4GPF7" // 👈 여기에 Public Key를 입력하세요!
      );

      alert("보구정디벨롭 전문가 팀에게 구축 프로토콜이 성공적으로 전달되었습니다.");
      formRef.current.reset();
    } catch (error) {
      console.error("전송 에러:", error);
      alert("전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* 좌측: 안내 문구 및 정보 */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-indigo-600 font-bold tracking-[0.3em] uppercase mb-4 text-sm">
                Deployment Protocol
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8 leading-[1.1]">
                아이디어를 <br />
                <span className="text-indigo-600">무결점 시스템</span>으로 <br />
                구축할 준비가 되셨나요?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-12 font-medium">
                모호한 상상을 정교한 엔지니어링 아키텍처로 치환합니다. <br className="hidden md:block" />
                보구정디벨롭의 전문가 팀이 24시간 이내에 분석 리포트를 전달합니다.
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                { icon: <Phone size={20} />, label: "대표 번호", value: "064-745-4728" },
                { icon: <Mail size={20} />, label: "프로젝트 문의", value: "bo9jeong@naver.com" },
                { icon: <MapPin size={20} />, label: "오피스", value: "제주특별자치도 제주시 오도5길 20 1층" },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex items-center gap-5 p-4 rounded-3xl border border-transparent hover:border-slate-100 hover:bg-slate-50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="font-bold text-slate-900">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 우측: 상담 폼 (EmailJS 연동) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-[48px] p-8 md:p-14 border border-slate-100 shadow-2xl shadow-slate-200/50"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">성함 / 담당자</label>
                  <input 
                    name="user_name" // 💡 템플릿의 {{user_name}}과 매칭
                    type="text" 
                    required
                    placeholder="홍길동" 
                    className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all placeholder:text-slate-300 font-medium text-slate-900" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">기업 / 기관명</label>
                  <input 
                    name="company" // 💡 템플릿의 {{company}}와 매칭
                    type="text" 
                    placeholder="보구정디벨롭" 
                    className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all placeholder:text-slate-300 font-medium text-slate-900" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">연락처</label>
                  <input 
                    name="user_phone" 
                    type="tel" 
                    required
                    placeholder="010-1234-5678" 
                    className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all placeholder:text-slate-300 font-medium text-slate-900" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">이메일 주소</label>
                  <input 
                    name="user_email" // 💡 템플릿의 {{user_email}}과 매칭
                    type="email" 
                    required
                    placeholder="partner@bo9jeong.com" 
                    className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all placeholder:text-slate-300 font-medium text-slate-900" 
                  />
                </div>
              </div>

              <div className="space-y-2 relative">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">관심 구축 서비스</label>
                <div className="relative">
                    <select 
                      name="service_type" // 💡 템플릿의 {{service_type}}와 매칭
                      required
                      defaultValue="" 
                      className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all appearance-none cursor-pointer text-slate-900 font-bold"
                    >
                      <option value="" disabled>서비스 유형을 선택해주세요</option>
                      <option value="홍보형 웹/앱">브랜드 홍보형 웹 / 앱 (High-End)</option>
                      <option value="예약/커머스">예약 및 커머스 시스템 (Biz Standard)</option>
                      <option value="엔터프라이즈">관공서 및 엔터프라이즈 커스텀</option>
                      <option value="기술컨설팅">기타 전문 기술 상담 (AI / R&D)</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">프로젝트 상세 내용</label>
                <textarea 
                  name="message" // 💡 템플릿의 {{message}}와 매칭
                  required
                  rows={4} 
                  placeholder="아이디어의 핵심 기능이나 원하시는 일정을 자유롭게 적어주세요." 
                  className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all resize-none placeholder:text-slate-300 font-medium text-slate-900"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-indigo-600 text-white font-black rounded-[24px] hover:bg-indigo-700 shadow-2xl shadow-indigo-600/30 transition-all flex items-center justify-center gap-3 group disabled:bg-slate-400 disabled:shadow-none text-slate-900"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    프로토콜 전송 중...
                  </>
                ) : (
                  <>
                    상담 신청하기
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
              
              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-bold">
                <CheckCircle2 size={14} className="text-emerald-500" />
                영업일 기준 24시간 이내 담당자 배정 및 회신
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}