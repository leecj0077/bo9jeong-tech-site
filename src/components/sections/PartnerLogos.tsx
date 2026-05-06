"use client";

export default function PartnerLogos() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-slate-400 font-black uppercase tracking-[0.4em] mb-12 text-sm">
          Trusted Partners
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all">
          {/* 💡 실제 로고 이미지 파일명으로 교체하세요 */}
          <div className="text-2xl font-black text-slate-400">제주특별자치도</div>
          <div className="text-2xl font-black text-slate-400">한국경주마생산자협회</div>
          <div className="text-2xl font-black text-slate-400">삼성중공업</div>
          <div className="text-2xl font-black text-slate-400">지역 교육센터</div>
        </div>
      </div>
    </section>
  );
}