"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter">프로토콜 배포 준비</h2>
          <p className="text-slate-500 mt-4">전문가 팀이 내용을 검토한 후 24시간 이내에 연락드립니다.</p>
        </div>

        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest">성함 / 담당자명</label>
              <input type="text" className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-indigo-600 transition-all outline-none" placeholder="홍길동" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest">연락처</label>
              <input type="tel" className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-indigo-600 transition-all outline-none" placeholder="010-1234-5678" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest">이메일 주소</label>
            <input type="email" className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-indigo-600 transition-all outline-none" placeholder="example@bo9jeong.com" />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest">프로젝트 상세 설명</label>
            <textarea rows={5} className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-indigo-600 transition-all outline-none" placeholder="아이디어의 핵심 기능이나 원하시는 요구사항을 자유롭게 적어주세요." />
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-5 bg-indigo-600 text-white rounded-[24px] font-black text-lg shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-colors"
          >
            전문가 팀에게 구축 문의하기
          </motion.button>
        </form>
      </div>
    </section>
  );
}