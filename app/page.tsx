import Guestbook from '@/components/Guestbook';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem-5rem)] py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-3xl w-full space-y-8 text-center animate-fade-in-up">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            나만의 교육용 <span className="text-indigo-600 bg-indigo-50 px-2 rounded-lg">웹앱 만들기</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            이곳은 Next.js와 Tailwind CSS로 구성된 빠르고 안정적인 기본 보일러플레이트입니다.
            복잡한 설정 없이 바로 아이디어를 실현해 보세요.
          </p>
        </div>

        <div className="mt-8 flex justify-center gap-4 flex-col sm:flex-row">
          {/* 가짜(Placeholder) 버튼 */}
          <button className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-lg font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
            학습 시작하기
          </button>
          <button className="inline-flex justify-center items-center px-8 py-3.5 border border-gray-300 text-lg font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 shadow-sm hover:shadow-md transition-all duration-200">
            더 알아보기
          </button>
        </div>

        {/* 확장성을 위한 주석 공간 */}
        <div className="mt-20 pt-10 border-t border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">기능 확장 영역</h2>
          <p className="text-sm text-gray-500 mb-6">
            아래 공간에 새로운 기능 컴포넌트를 배치해 보세요.
          </p>
          {/* 
            // 여기에 새로운 컴포넌트를 추가하세요
            // 예시: 
            // <FeatureSection />
            // <CourseList />
            // <Testimonial />
          */}
          <Guestbook />
        </div>
      </div>
    </div>
  );
}
