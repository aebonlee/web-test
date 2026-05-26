import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-mark">
              Vibe<span className="accent">Lab</span>
            </div>
            <p className="footer-tag">
              개인 바이브코딩 학습 기록. Cursor, Claude Code, AI 에이전트와
              함께 매주 한 단계씩 풀스택을 익히고 작은 프로젝트로 증명합니다.
            </p>
          </div>

          <div>
            <h5>Explore</h5>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/roadmap">8주 로드맵</Link></li>
              <li><Link to="/tools">도구 카탈로그</Link></li>
              <li><Link to="/projects">프로젝트</Link></li>
            </ul>
          </div>

          <div>
            <h5>External</h5>
            <ul>
              <li><a href="https://docs.cursor.com" target="_blank" rel="noreferrer">Cursor Docs</a></li>
              <li><a href="https://docs.claude.com/claude-code" target="_blank" rel="noreferrer">Claude Code Docs</a></li>
              <li><a href="https://github.com/aebonlee" target="_blank" rel="noreferrer">GitHub Profile</a></li>
              <li><a href="https://react.dev" target="_blank" rel="noreferrer">React</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Vibe Lab · Personal Learning Site</span>
          <span className="footer-version">v0.1.0 · built with Vite + React</span>
        </div>
      </div>
    </footer>
  );
}
