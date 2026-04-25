import Link from "next/link";

export default function Footer() {
  return (
    // 💡 배경을 아주 밝은 회색(slate-50)으로, 텍스트 기본값을 slate-600으로 변경
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* 상단: 로고, 슬로건 및 네비게이션 */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
          <div className="flex flex-col gap-2">
            {/* 💡 로고 및 슬로건 */}
            <span className="font-bold text-2xl text-slate-900 tracking-tight">
              보구정<span className="text-indigo-600">디벨롭</span>
            </span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
              Tech-Driven Agency
            </span>
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm font-semibold text-slate-600">
            <Link href="/solutions" className="hover:text-indigo-600 transition-colors">Solutions</Link>
            <Link href="/case-studies" className="hover:text-indigo-600 transition-colors">Case Studies</Link>
            <Link href="/tech-dna" className="hover:text-indigo-600 transition-colors">Tech & DNA</Link>
            <Link href="/contact" className="hover:text-indigo-600 transition-colors text-indigo-600">구축문의</Link>
          </div>
        </div>
        
        {/* 중앙: 회사 정보 (Address, Contact, License) */}
        <div className="border-t border-slate-200 py-8 flex flex-col gap-3 text-sm text-slate-500">
          <div className="flex flex-wrap gap-x-3 gap-y-1 items-center">
            {/* 💡 강조 텍스트는 진한 검은색(slate-900)으로, 구분자(|)는 연한 회색(slate-300)으로 */}
            <span className="font-bold text-slate-900">웹/앱 솔루션 전문제작 주식회사 보구정</span>
            <span className="text-slate-300">|</span>
            <span>대표자. <span className="text-slate-900 font-medium">김경환</span></span>
            <span className="text-slate-300">|</span>
            <span>주소. <span className="text-slate-900 font-medium">제주특별자치도 제주시 오도5길 20 1층(이호이동)</span></span>
          </div>
          
          <div className="flex flex-wrap gap-x-3 gap-y-1 items-center">
            <span>사업자등록번호. <span className="text-slate-900 font-medium">701-88-01774</span></span>
            <span className="text-slate-300">|</span>
            <span>통신판매업신고. <span className="text-slate-900 font-medium">제 2019-제주이호-0015호</span></span>
            <span className="text-slate-300">|</span>
            <span>품질경영시스템인증. <span className="text-slate-900 font-medium">ISO9001:2015</span></span>
          </div>

          <div className="flex flex-wrap gap-x-3 gap-y-1 items-center">
            <span>신규문의. <strong className="text-indigo-600 font-bold">064-745-4728</strong></span>
            <span className="text-slate-300">|</span>
            <span>수정문의. <span className="text-slate-900 font-medium">064-749-4728</span></span>
            <span className="text-slate-300">|</span>
            <span>팩스. <span className="text-slate-900 font-medium">064-746-4728</span></span>
            <span className="text-slate-300">|</span>
            <span>이메일. <span className="text-slate-900 font-medium">bo9jeong@naver.com</span></span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-900 font-medium">카카오톡 '보구정' 친구추가</span>
          </div>
        </div>
        
        {/* 하단: 카피라이트 및 크레딧 */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          {/* 💡 영문 명칭도 DEVELOP으로 변경 */}
          <p>Copyright © {new Date().getFullYear()} BO9JEONG DEVELOP. All Rights Reserved.</p>
          <p className="font-semibold text-slate-700">Digital Experience & Engineered by 보구정디벨롭</p>
        </div>
        
      </div>
    </footer>
  );
}