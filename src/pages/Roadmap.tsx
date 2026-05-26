import { useState } from 'react';

type TrackKey = 'frontend' | 'backend' | 'agent';

type WeekItem = {
  n: string;
  time: string;
  title: string;
  points: (string | { p: true; t: string })[];
};

const FRONTEND: WeekItem[] = [
  {
    n: '01',
    time: 'Week 1 · 5h',
    title: '환경 셋업 & Cursor 적응',
    points: [
      'Node.js · Git · GitHub 환경 셋업',
      'Cursor 설치 및 단축키 정리 (Cmd+K, Cmd+L, Cmd+I)',
      '좋은 프롬프트 패턴 5개 수집',
      { p: true, t: '미션 — Cursor로 Hello World 사이트 만들고 GitHub Pages 배포' },
    ],
  },
  {
    n: '02',
    time: 'Week 2 · 6h',
    title: 'HTML/CSS · 반응형 UI',
    points: [
      '시맨틱 HTML과 접근성 기초',
      'CSS Grid · Flexbox로 레이아웃 만들기',
      'CSS 변수로 디자인 토큰 만들기',
      { p: true, t: '미션 — 1인 포트폴리오 랜딩 페이지 (반응형)' },
    ],
  },
  {
    n: '03',
    time: 'Week 3 · 7h',
    title: 'React 19 + Vite',
    points: [
      'Vite 프로젝트 셋업 & TypeScript 설정',
      'JSX · props · state 핵심',
      'React Router로 멀티 페이지 구성',
      { p: true, t: '미션 — Todo 앱을 LocalStorage 연동까지 완성' },
    ],
  },
];

const BACKEND: WeekItem[] = [
  {
    n: '04',
    time: 'Week 4 · 6h',
    title: 'Node.js & REST API',
    points: [
      'Node.js + Express로 첫 API 서버 띄우기',
      'REST 설계 원칙 (자원·메서드·상태코드)',
      'Postman으로 API 테스트',
      { p: true, t: '미션 — Notes API (CRUD 4개 엔드포인트)' },
    ],
  },
  {
    n: '05',
    time: 'Week 5 · 7h',
    title: 'Supabase · DB · 인증',
    points: [
      'Supabase 프로젝트 셋업 & 테이블 설계',
      'SQL 기초 & Row Level Security',
      '이메일·OAuth 인증 붙이기',
      { p: true, t: '미션 — 로그인 가능한 Notes 앱으로 확장 + Vercel 배포' },
    ],
  },
];

const AGENT: WeekItem[] = [
  {
    n: '06',
    time: 'Week 6 · 6h',
    title: 'Claude Code 기초',
    points: [
      'Claude Code CLI 설치 · 첫 세션',
      'CLAUDE.md 파일로 컨텍스트 주입',
      '슬래시 커맨드 만들기',
      { p: true, t: '미션 — 본인 프로젝트에 /lint, /fix-test 슬래시 커맨드 추가' },
    ],
  },
  {
    n: '07',
    time: 'Week 7 · 7h',
    title: 'Sub-agent · Hook · MCP',
    points: [
      'Sub-agent로 코드 리뷰 자동화',
      'Hook으로 커밋 전 검증 자동화',
      'MCP 서버 한 개 연결 (GitHub, Notion 등)',
      { p: true, t: '미션 — PR 자동 리뷰 워크플로 1개 완성' },
    ],
  },
  {
    n: '08',
    time: 'Week 8 · 10h',
    title: '최종 풀스택 프로젝트',
    points: [
      '주제 정하기 — 본인이 매일 쓰고 싶은 작은 도구',
      '프론트 + 백 + DB + 배포까지 1주 안에 완성',
      'README와 데모 GIF 작성',
      { p: true, t: '미션 — 풀스택 앱 배포 + 회고 글 1편 작성' },
    ],
  },
];

const TRACK_META: Record<TrackKey, { title: string; lead: string; tools: string; weeks: string; data: WeekItem[] }> = {
  frontend: {
    title: 'UI 만들기\n프론트엔드 기초',
    lead: 'HTML·CSS·JS 기초를 다지고 React 19 + Vite + TypeScript 스택으로 작은 SPA를 만들 수 있게 됩니다.',
    tools: 'Cursor · React 19 · Vite · TS',
    weeks: '1–3주차 · 총 18h',
    data: FRONTEND,
  },
  backend: {
    title: 'API와 데이터\n백엔드 & 인증',
    lead: 'Node.js로 API를 만들고 Supabase로 DB와 인증을 붙입니다. 프론트엔드와 통합해 배포까지 한 흐름을 완성합니다.',
    tools: 'Node · Express · Supabase',
    weeks: '4–5주차 · 총 13h',
    data: BACKEND,
  },
  agent: {
    title: '에이전트와\n함께 개발',
    lead: 'Claude Code를 본격적으로 활용해 sub-agent·hook·MCP로 자동화하고, 마지막 주에 풀스택 앱 한 개를 완성합니다.',
    tools: 'Claude Code · MCP · GitHub',
    weeks: '6–8주차 · 총 23h',
    data: AGENT,
  },
};

export default function Roadmap() {
  const [track, setTrack] = useState<TrackKey>('frontend');
  const meta = TRACK_META[track];

  return (
    <>
      <header className="page-header-ed">
        <div className="container">
          <div className="eyebrow"><span>8 Weeks · 30 Days</span></div>
          <h2>8주 학습 로드맵</h2>
          <p>
            매주 한 단계씩, 매주 한 개의 결과물. 1주차 환경 셋업부터
            8주차 풀스택 배포까지 — 한 줄로 이어지는 학습 동선입니다.
          </p>
        </div>
      </header>

      <section className="section-ed">
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; Schedule</div>
            <h2 className="section-title-ed">
              <span className="accent">{track === 'frontend' ? 'Frontend' : track === 'backend' ? 'Backend' : 'Agent'}</span> 트랙
            </h2>
            <div className="section-meta">{meta.weeks}</div>
          </div>

          <div className="roadmap-grid">
            <aside className="roadmap-aside">
              <h3 style={{ whiteSpace: 'pre-line' }}>{meta.title}</h3>
              <p>{meta.lead}</p>

              <div style={{ display: 'flex', gap: 4, background: 'rgba(255,255,255,0.1)', padding: 4, borderRadius: 4, marginBottom: 'var(--s-5)' }}>
                {(['frontend', 'backend', 'agent'] as TrackKey[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTrack(t)}
                    style={{
                      flex: 1,
                      padding: '8px 12px',
                      border: 'none',
                      borderRadius: 2,
                      background: track === t ? 'var(--gold)' : 'transparent',
                      color: track === t ? 'var(--navy-900)' : 'rgba(255,255,255,0.92)',
                      fontSize: 12,
                      fontWeight: 700,
                      cursor: 'pointer',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {t === 'frontend' ? 'Frontend' : t === 'backend' ? 'Backend' : 'Agent'}
                  </button>
                ))}
              </div>

              <div className="roadmap-meta">
                <div className="roadmap-meta-row">
                  <span className="roadmap-meta-key">기간</span>
                  <span>{meta.weeks}</span>
                </div>
                <div className="roadmap-meta-row">
                  <span className="roadmap-meta-key">스택</span>
                  <span>{meta.tools}</span>
                </div>
                <div className="roadmap-meta-row">
                  <span className="roadmap-meta-key">결과물</span>
                  <span>주간 1개</span>
                </div>
              </div>
            </aside>

            <div className="timeline">
              {meta.data.map((item) => (
                <div className="tl-item" key={item.n}>
                  <div>
                    <div className="tl-time">{item.time}</div>
                    <div className="tl-num">
                      {item.n}<span>/{String(meta.data.length).padStart(2, '0')}</span>
                    </div>
                  </div>
                  <div className="tl-body">
                    <h4>{item.title}</h4>
                    <ul>
                      {item.points.map((p, i) =>
                        typeof p === 'string' ? (
                          <li key={i}>{p}</li>
                        ) : (
                          <li key={i} className="practice">{p.t}</li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
