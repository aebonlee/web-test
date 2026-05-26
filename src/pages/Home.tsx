import { Link } from 'react-router-dom';

const PILLARS = [
  {
    n: '/01',
    t: '대화로 코딩한다',
    d: '문법을 외우는 게 아니라 AI와 자연어로 의도를 정확히 전달합니다. 좋은 프롬프트가 좋은 코드를 만든다는 원칙으로 매 세션을 기록합니다.',
  },
  {
    n: '/02',
    t: '작게 만들고 빠르게 배포한다',
    d: '한 주에 한 개의 작은 결과물을 만들고 GitHub Pages·Vercel에 바로 올립니다. 동작하는 코드가 가장 빠른 학습입니다.',
  },
  {
    n: '/03',
    t: '풀스택을 끝까지 본다',
    d: 'UI부터 API, DB, 인증, 배포까지 한 흐름으로 익힙니다. 부분이 아닌 시스템 전체를 이해하는 것을 목표로 합니다.',
  },
];

const TOOLS_PREVIEW = [
  { name: 'Cursor', cat: 'AI IDE', desc: 'AI 자동완성과 인라인 채팅으로 빠르게 코드 작성.', mark: 'C' },
  { name: 'Claude Code', cat: 'AGENT · CLI', desc: '터미널에서 에이전트로 풀스택 작업을 수행.', mark: 'CC' },
  { name: 'React', cat: 'FRONTEND', desc: '컴포넌트 기반 UI. SPA의 표준 라이브러리.', mark: 'R' },
  { name: 'Vite', cat: 'BUILD TOOL', desc: '초고속 개발 서버와 ESM 기반 번들러.', mark: 'V' },
  { name: 'Supabase', cat: 'BACKEND', desc: 'PostgreSQL · 인증 · Realtime을 즉시 제공.', mark: 'S' },
  { name: 'GitHub Pages', cat: 'DEPLOY', desc: '정적 사이트 무료 호스팅. CI 연동.', mark: 'G' },
];

export default function Home() {
  const marqueePhrase = 'Vibe Coding · Cursor · Claude Code · React · TypeScript · Vite · Supabase · GitHub · Vercel';

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero-editorial">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="hero-eyebrow">
                <span>Personal Lab · 2026 · Vibe Coding Journal</span>
              </div>
              <h1 className="hero-title-ed">
                코드를 외우지 않고,<br />
                <span className="accent">AI와 대화하며</span><br />
                <span className="accent">풀스택</span>을 익힙니다.
              </h1>
              <p className="hero-lead">
                개인 학습 기록 사이트입니다. Cursor와 Claude Code로
                매주 작은 프로젝트를 만들고, 8주 동안 프론트엔드부터
                백엔드·배포까지 직접 손으로 완성합니다.
              </p>
              <div className="hero-actions-ed">
                <Link className="btn btn-primary" to="/roadmap">
                  8주 로드맵 보기
                  <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Link>
                <Link className="btn btn-ghost" to="/projects">
                  프로젝트 보기
                </Link>
              </div>
            </div>

            <div className="hero-side">
              <div className="metric-stack">
                <div className="metric">
                  <div className="metric-num"><span className="accent">8</span></div>
                  <div className="metric-label">주 학습 기간</div>
                </div>
                <div className="metric">
                  <div className="metric-num">30<span className="small">d</span></div>
                  <div className="metric-label">집중 학습일</div>
                </div>
                <div className="metric">
                  <div className="metric-num">6+</div>
                  <div className="metric-label">미니 프로젝트</div>
                </div>
                <div className="metric">
                  <div className="metric-num"><span className="accent">90</span><span className="small">%</span></div>
                  <div className="metric-label">실습 비율</div>
                </div>
              </div>

              <div className="hero-card-eyebrow">2026 · Weekly Goal</div>
              <div className="hero-card-title">이번 주 학습 계획</div>
              <ul className="hero-card-list">
                <li>월 — Cursor 단축키 & 프롬프트 패턴 정리</li>
                <li>화 — React 19 새 기능 정리</li>
                <li>수 — Supabase 인증 셋업</li>
                <li>목 — 미니 프로젝트 한 개 배포</li>
                <li>금 — 한 주 회고 작성</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="marquee">
        <div className="marquee-track">
          <span>
            {[0, 1, 2, 3].map((i) => (
              <span key={i}>
                {marqueePhrase.split(' · ').map((w, j) => (
                  <span key={`${i}-${j}`}>{w}<span className="dot">&#10022;</span></span>
                ))}
              </span>
            ))}
          </span>
        </div>
      </div>

      {/* ── Three Tracks ── */}
      <section className="section-ed">
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 01 / Programs</div>
            <h2 className="section-title-ed">세 갈래 <span className="accent">학습 트랙</span></h2>
            <div className="section-meta">8 weeks · 3 tracks · hands-on</div>
          </div>
          <div className="courses">
            <Link className="course featured" to="/roadmap">
              <div className="course-row">
                <span className="course-tag">TRACK / 01</span>
                <span className="course-level"><i className="on" /><i /><i /></span>
              </div>
              <div className="course-num"><span className="slash">/</span>01</div>
              <h3 className="course-title">Frontend 기초</h3>
              <p className="course-desc">
                HTML·CSS·JavaScript 기본기에서 React 19와 Vite까지.
                Cursor로 컴포넌트를 빠르게 만드는 패턴을 익힙니다.
              </p>
              <div className="course-meta-row">
                <span>1–3주차</span><span>HTML · CSS · React</span><span>실습</span>
              </div>
              <span className="course-cta">
                로드맵 보기
                <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
            </Link>

            <Link className="course" to="/roadmap">
              <div className="course-row">
                <span className="course-tag">TRACK / 02</span>
                <span className="course-level"><i className="on" /><i className="on" /><i /></span>
              </div>
              <div className="course-num"><span className="slash">/</span>02</div>
              <h3 className="course-title">Backend & DB</h3>
              <p className="course-desc">
                Node.js/Express와 Supabase로 REST API와 인증을 구현하고,
                프론트엔드와 통합하는 과정을 한 흐름으로 익힙니다.
              </p>
              <div className="course-meta-row">
                <span>4–5주차</span><span>Node · Supabase</span><span>API</span>
              </div>
              <span className="course-cta">
                로드맵 보기
                <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
            </Link>

            <Link className="course" to="/roadmap">
              <div className="course-row">
                <span className="course-tag">TRACK / 03</span>
                <span className="course-level"><i className="on" /><i className="on" /><i className="on" /></span>
              </div>
              <div className="course-num"><span className="slash">/</span>03</div>
              <h3 className="course-title">AI Agent 활용</h3>
              <p className="course-desc">
                Claude Code로 멀티스텝 작업을 자동화하고,
                Sub-agent·Hook·MCP로 자신만의 워크플로를 구성합니다.
              </p>
              <div className="course-meta-row">
                <span>6–7주차</span><span>Claude Code · MCP</span><span>심화</span>
              </div>
              <span className="course-cta">
                로드맵 보기
                <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
            </Link>

            <Link className="course" to="/projects">
              <div className="course-row">
                <span className="course-tag">FINAL / 04</span>
                <span className="course-level"><i className="on" /><i className="on" /><i className="on" /></span>
              </div>
              <div className="course-num"><span className="slash">/</span>04</div>
              <h3 className="course-title">최종 프로젝트</h3>
              <p className="course-desc">
                지금까지 익힌 모든 스택을 모아 풀스택 앱 하나를 완성하고
                GitHub와 Vercel에 배포해 포트폴리오로 정리합니다.
              </p>
              <div className="course-meta-row">
                <span>8주차</span><span>Full-stack</span><span>배포</span>
              </div>
              <span className="course-cta">
                프로젝트 보기
                <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Pillars ── */}
      <section className="section-ed" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 02 / Approach</div>
            <h2 className="section-title-ed">학습 <span className="accent">3원칙</span></h2>
            <div className="section-meta">how I learn</div>
          </div>
          <div className="pillars">
            {PILLARS.map((p) => (
              <div className="pillar" key={p.n}>
                <div className="pillar-num">{p.n}</div>
                <h4>{p.t}</h4>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tools Preview ── */}
      <section className="section-ed" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 03 / Toolkit</div>
            <h2 className="section-title-ed">자주 쓰는 <span className="accent">도구</span></h2>
            <div className="section-meta">core stack</div>
          </div>
          <div className="tools-grid">
            {TOOLS_PREVIEW.map((t) => (
              <div className="tool" key={t.name}>
                <div className="tool-mark">{t.mark}</div>
                <div>
                  <div className="tool-cat">{t.cat}</div>
                  <div className="tool-name">{t.name}</div>
                </div>
                <p className="tool-desc">{t.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 'var(--s-7)', textAlign: 'center' }}>
            <Link className="btn btn-ghost" to="/tools">
              전체 도구 카탈로그 보기
              <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-ed">
        <div className="container">
          <div className="cta-inner">
            <div>
              <div className="cta-eyebrow">&mdash; Get Started</div>
              <h2 className="cta-title-ed">
                8주 뒤,<br />
                <span className="accent">동작하는 풀스택 앱</span>이 남습니다.
              </h2>
            </div>
            <div className="cta-side">
              <p>
                한 주에 한 개의 작은 결과물. 8주 후에는 여섯 개의 미니
                프로젝트와 한 개의 풀스택 앱이 GitHub에 남아 있습니다.
                지금 이 순간이 1주차의 첫 커밋입니다.
              </p>
              <Link className="btn btn-cta" to="/roadmap">
                지금 1주차 시작하기
                <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
