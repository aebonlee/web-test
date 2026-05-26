import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="notfound-wrap">
      <div>
        <h1>4<span className="accent">0</span>4</h1>
        <p>요청하신 페이지를 찾을 수 없습니다.</p>
        <Link className="btn btn-primary" to="/">
          홈으로 돌아가기
          <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
