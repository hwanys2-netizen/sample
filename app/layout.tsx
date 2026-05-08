import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "나만의 교육용 웹앱",
  description: "Next.js와 Tailwind CSS로 구축된 교육용 웹앱의 기본 뼈대입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {/* 상단 헤더 영역 */}
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-indigo-600">EduWebApp</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">홈</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">강의 목록</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">소개</a>
              {/* 여기에 새로운 네비게이션 메뉴를 추가하세요 */}
            </nav>
            <div className="flex items-center md:hidden">
              <button className="text-gray-500 hover:text-gray-900 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* 메인 콘텐츠 영역 */}
        <main className="flex-grow">
          {children}
        </main>

        {/* 하단 푸터 영역 */}
        <footer className="bg-white border-t border-gray-200 mt-auto">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left text-sm text-gray-500">
              &copy; {new Date().getFullYear()} EduWebApp. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">이용약관</a>
              <a href="#" className="text-gray-400 hover:text-gray-500">개인정보처리방침</a>
              {/* 여기에 푸터 링크나 부가 정보를 추가하세요 */}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
