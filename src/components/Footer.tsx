import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center">
                <span className="text-primary-foreground font-bold">M</span>
              </div>
              <span className="text-2xl font-bold text-foreground tracking-wide">MAUM TALK</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              마음통은 국내 최고의 타로 상담 플랫폼입니다. 
              검증된 상담사들과 함께 여러분의 운명을 찾아드립니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">서비스</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">서비스 소개</Link></li>
              <li><Link to="/reviews" className="text-muted-foreground hover:text-primary text-sm transition-colors">고객 후기</Link></li>
              <li><Link to="/enjoy" className="text-muted-foreground hover:text-primary text-sm transition-colors">무료 콘텐츠</Link></li>
              <li><Link to="/cards" className="text-muted-foreground hover:text-primary text-sm transition-colors">오늘의 운세</Link></li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">더 알아보기</h4>
            <ul className="space-y-2">
              <li><Link to="/join" className="text-muted-foreground hover:text-primary text-sm transition-colors">상담사 지원</Link></li>
              <li><Link to="/buy" className="text-muted-foreground hover:text-primary text-sm transition-colors">카드 구매</Link></li>
              <li><Link to="/learn" className="text-muted-foreground hover:text-primary text-sm transition-colors">타로 배우기</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-muted-foreground text-center md:text-left">
            <p>© 2025 마음통. All rights reserved.</p>
            <p className="mt-1">서울특별시 강남구 테헤란로 123, 마음빌딩 10층</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary text-xs transition-colors">이용약관</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-xs transition-colors">개인정보처리방침</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-xs transition-colors">사업자정보</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
