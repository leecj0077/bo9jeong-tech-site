import Link from "next/link";
import { ExternalLink } from "lucide-react"; // 💡 외부 링크임을 알리는 아이콘 추가

export default function Footer() {
  const navLinks = [
    { name: "사업 분야", href: "/solutions" },
    { name: "구축 경험", href: "/case-studies" },
    { name: "기술 이야기", href: "/tech-dna" },
  ];

  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* 상단: 로고, 슬로건 및 네비게이션 */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
          <div className="flex flex-col gap-2">
            <span className="font-bold text-2xl text-slate-900 tracking-tight">
              보구정<span className="text-indigo-600">디벨롭</span>
            </span>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                Tech-Driven Agency
              </span>
              {/* 💡 보구정 공식 홈페이지 바로가기 추가 */}
              <a 
                href="https://www.bo9jeong.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[10px] font-bold text-indigo-500 hover:text-indigo-700 transition-colors border-l border-slate-300 pl-3"
              >
                보구정 홈페이지 바로가기 <ExternalLink size={10} />
              </a>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm font-bold text-slate-600">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="hover:text-indigo-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className="hover:text-indigo-600 transition-colors text-indigo-600">
              구축문의
            </Link>
          </div>
        </div>
        
        {/* 중앙: 회사 정보 */}
        <div className="border-t border-slate-200 py-8 flex flex-col gap-3 text-sm text-slate-500">
          <div className="flex flex-wrap gap-x-3 gap-y-1 items-center">
            <span className="font-black text-slate-900">웹/앱 솔루션 전문제작 주식회사 보구정</span>
            <span className="text-slate-300">|</span>
            <span>대표자. <span className="text-slate-900 font-bold">김경환</span></span>
            <span className="text-slate-300">|</span>
            <span>주소. <span className="text-slate-900 font-bold">제주특별자치도 제주시 오도5길 20 1층</span></span>
          </div>
          
          <div className="flex flex-wrap gap-x-3 gap-y-1 items-center">
            <span>사업자등록번호. <span className="text-slate-900 font-bold">701-88-01774</span></span>
            <span className="text-slate-300">|</span>
            <span>통신판매업신고. <span className="text-slate-900 font-bold">제 2019-제주이호-0015호</span></span>
            <span className="text-slate-300">|</span>
            <span>품질경영시스템인증. <span className="text-slate-900 font-bold">ISO9001:2015</span></span>
          </div>

          <div className="flex flex-wrap gap-x-3 gap-y-1 items-center">
            <span>신규문의. <strong className="text-indigo-600 font-black">064-745-4728</strong></span>
            <span className="text-slate-300">|</span>
            <span>수정문의. <span className="text-slate-900 font-bold">064-749-4728</span></span>
            <span className="text-slate-300">|</span>
            <span>팩스. <span className="text-slate-900 font-bold">064-746-4728</span></span>
            <span className="text-slate-300">|</span>
            <span>이메일. <span className="text-slate-900 font-bold hover:text-indigo-600 transition-colors">bo9jeong@naver.com</span></span>
          </div>
          
          <div className="mt-1 flex items-center gap-2">
             <span className="inline-block px-2 py-0.5 bg-yellow-100 text-yellow-700 text-[10px] font-black rounded-md">KAKAO</span>
             <span className="text-slate-900 font-bold text-xs">카카오톡 '보구정' 친구추가로 빠른 실시간 상담이 가능합니다.</span>
          </div>
        </div>
        
        {/* 하단: 카피라이트 및 크레딧 */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p className="font-medium uppercase tracking-wider">
            Copyright © {new Date().getFullYear()} BO9JEONG DEVELOP. All Rights Reserved.
          </p>
          <p className="font-black text-slate-600">
            Digital Experience & Engineered by 보구정디벨롭
          </p>
        </div>
        
      </div>
    </footer>
  );
}