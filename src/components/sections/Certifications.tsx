"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Plus } from "lucide-react";

// 인증서 데이터 구성
const certData = [
  { id: 1, title: "청년동행일자리우수기업 선정서" },
  { id: 2, title: "성장유망중소기업 인증서" },
  { id: 3, title: "고용우수기업 인증서" },
  { id: 4, title: "벤처기업확인서" },
  { id: 5, title: "청년일자리 강소기업 선정서" },
  { id: 6, title: "가족친화우수기업표창" },
  { id: 7, title: "가족친화인증서" },
  { id: 8, title: "가족기업협약서" },
  { id: 9, title: "연구개발전담부서인정서" },
  { id: 10, title: "산업디자인전문회사 신고확인증" },
  { id: 11, title: "상표등록증" },
  { id: 12, title: "품질경영시스템인증서" },
  { id: 13, title: "중소기업확인서" },
  { id: 14, title: "직접생산확인증명_동영상제작서비스" },
  { id: 15, title: "직접생산확인증명_정보시스템유지관리서비스" },
  { id: 16, title: "직접생산확인증명_정보시스템개발서비스" },
];

export default function Certifications() {
  const [visibleCount, setVisibleCount] = useState(5);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // 더보기 버튼 핸들러
  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 5, certData.length));
  };

  // 라이트박스 내비게이션
  const showPrev = () => {
    if (selectedIdx !== null) {
      setSelectedIdx(selectedIdx === 0 ? certData.length - 1 : selectedIdx - 1);
    }
  };

  const showNext = () => {
    if (selectedIdx !== null) {
      setSelectedIdx(selectedIdx === certData.length - 1 ? 0 : selectedIdx + 1);
    }
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            검증된 기술력과 신뢰의 지표
          </h2>
          <p className="text-slate-500 font-medium">
            보구정디벨롭은 공신력 있는 기관으로부터 인정받은 탄탄한 기업입니다.
          </p>
        </div>

        {/* 인증서 그리드: 기본 5열 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {certData.slice(0, visibleCount).map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 5) * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedIdx(idx)}
            >
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 group-hover:shadow-md group-hover:border-indigo-200 transition-all aspect-[3/4] flex flex-col justify-between">
                <div className="relative overflow-hidden rounded-lg bg-slate-100 flex-1 flex items-center justify-center">
                  <img
                    src={`/cer/${cert.id}.png`}
                    alt={cert.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                    <Plus className="text-white opacity-0 group-hover:opacity-100 transition-opacity w-10 h-10" />
                  </div>
                </div>
                <h4 className="mt-4 text-sm font-bold text-slate-700 text-center line-clamp-2 break-keep">
                  {cert.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 더보기 버튼 */}
        {visibleCount < certData.length && (
          <div className="mt-16 text-center">
            <button
              onClick={handleLoadMore}
              className="px-8 py-4 bg-white border border-slate-200 rounded-full font-bold text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all inline-flex items-center gap-2 shadow-sm"
            >
              인증서 더보기 ({visibleCount}/{certData.length})
              <Plus size={18} />
            </button>
          </div>
        )}
      </div>

      {/* 라이트박스 (확대 보기) */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedIdx(null)}
          >
            {/* 닫기 버튼 */}
            <button className="absolute top-6 right-6 text-white/70 hover:text-white z-[110]">
              <X size={40} />
            </button>

            {/* 좌우 이동 버튼 */}
            <button
              className="absolute left-4 md:left-10 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={(e) => { e.stopPropagation(); showPrev(); }}
            >
              <ChevronLeft size={60} strokeWidth={1} />
            </button>
            <button
              className="absolute right-4 md:right-10 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={(e) => { e.stopPropagation(); showNext(); }}
            >
              <ChevronRight size={60} strokeWidth={1} />
            </button>

            {/* 메인 이미지 */}
            <motion.div
              key={selectedIdx}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="relative max-w-4xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`/cer/${certData[selectedIdx].id}.png`}
                alt={certData[selectedIdx].title}
                className="max-w-full max-h-[80vh] object-contain shadow-2xl"
              />
              <p className="mt-6 text-white text-xl font-bold">
                {certData[selectedIdx].title}
              </p>
              <span className="mt-2 text-white/50 text-sm font-medium">
                {selectedIdx + 1} / {certData.length}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}