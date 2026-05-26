type Tool = {
  name: string;
  cat: string;
  desc: string;
  mark: string;
  link: string;
};

const TOOLS: { group: string; items: Tool[] }[] = [
  {
    group: 'AI Coding · IDE',
    items: [
      { name: 'Cursor', cat: 'AI IDE', mark: 'C', link: 'cursor.com', desc: 'AI 자동완성 · 인라인 채팅 · Composer로 멀티파일 편집까지. 바이브코딩의 출발점.' },
      { name: 'Claude Code', cat: 'AGENT · CLI', mark: 'CC', link: 'claude.com/code', desc: '터미널에서 에이전트로 풀스택 작업. Sub-agent · Hook · MCP 확장.' },
      { name: 'GitHub Copilot', cat: 'INLINE AI', mark: 'GH', link: 'github.com/features/copilot', desc: 'VS Code/JetBrains 인라인 자동완성. Cursor 대안 또는 보완.' },
      { name: 'Cline', cat: 'VSCODE AGENT', mark: 'Cl', link: 'cline.bot', desc: 'VS Code 내 오픈소스 에이전트. Plan/Act 모드로 안전한 실행.' },
    ],
  },
  {
    group: 'Frontend',
    items: [
      { name: 'React 19', cat: 'UI LIBRARY', mark: 'R', link: 'react.dev', desc: '컴포넌트 기반 UI. Server Components · Actions 등 새 기능.' },
      { name: 'Vite', cat: 'BUILD TOOL', mark: 'V', link: 'vitejs.dev', desc: 'ESM 기반 초고속 개발 서버 + Rollup 빌드.' },
      { name: 'TypeScript', cat: 'LANGUAGE', mark: 'TS', link: 'typescriptlang.org', desc: '정적 타입으로 안전한 자바스크립트. 리팩토링에 강함.' },
      { name: 'Tailwind CSS', cat: 'STYLING', mark: 'Tw', link: 'tailwindcss.com', desc: '유틸리티 우선 CSS. 빠른 프로토타이핑.' },
    ],
  },
  {
    group: 'Backend · DB',
    items: [
      { name: 'Node.js', cat: 'RUNTIME', mark: 'N', link: 'nodejs.org', desc: '서버 사이드 JavaScript. Express · Hono · Fastify 함께.' },
      { name: 'Supabase', cat: 'BAAS', mark: 'S', link: 'supabase.com', desc: 'PostgreSQL · 인증 · Realtime · Storage 올인원 백엔드.' },
      { name: 'PostgreSQL', cat: 'DATABASE', mark: 'Pg', link: 'postgresql.org', desc: '오픈소스 관계형 DB의 사실상 표준.' },
      { name: 'Hono', cat: 'FRAMEWORK', mark: 'H', link: 'hono.dev', desc: '엣지 런타임용 초경량 웹 프레임워크.' },
    ],
  },
  {
    group: 'Deploy · DevOps',
    items: [
      { name: 'GitHub', cat: 'VCS · CI/CD', mark: 'G', link: 'github.com', desc: '코드 호스팅 · PR · Actions로 자동 배포.' },
      { name: 'Vercel', cat: 'HOSTING', mark: 'Vc', link: 'vercel.com', desc: 'Next.js·Vite·정적 사이트를 git push로 배포.' },
      { name: 'GitHub Pages', cat: 'STATIC HOST', mark: 'GP', link: 'pages.github.com', desc: '무료 정적 사이트 호스팅. 첫 배포에 적합.' },
      { name: 'Cloudflare', cat: 'EDGE', mark: 'CF', link: 'cloudflare.com', desc: 'Pages · Workers · D1로 엣지 풀스택.' },
    ],
  },
];

export default function Tools() {
  return (
    <>
      <header className="page-header-ed">
        <div className="container">
          <div className="eyebrow"><span>Toolkit · 16 Tools</span></div>
          <h2>도구 카탈로그</h2>
          <p>
            바이브코딩 학습에 쓰는 도구를 카테고리별로 정리했습니다.
            모든 도구를 다 쓰는 게 아니라 각 영역에서 한두 개씩 익숙해지는 것이 목표입니다.
          </p>
        </div>
      </header>

      {TOOLS.map((group, idx) => (
        <section className="section-ed" key={group.group} style={{ paddingTop: idx === 0 ? 'var(--s-10)' : 0, paddingBottom: idx === TOOLS.length - 1 ? 'var(--s-11)' : 'var(--s-9)' }}>
          <div className="container">
            <div className="section-head">
              <div className="section-num">&mdash; 0{idx + 1} / {group.group.split(' · ')[0]}</div>
              <h2 className="section-title-ed">
                {group.group.split(' · ').length > 1 ? (
                  <>
                    {group.group.split(' · ')[0]}{' '}
                    <span className="accent">{group.group.split(' · ').slice(1).join(' · ')}</span>
                  </>
                ) : (
                  group.group
                )}
              </h2>
              <div className="section-meta">{group.items.length} tools</div>
            </div>
            <div className="tools-grid">
              {group.items.map((t) => (
                <div className="tool" key={t.name}>
                  <div className="tool-mark">{t.mark}</div>
                  <div>
                    <div className="tool-cat">{t.cat}</div>
                    <div className="tool-name">{t.name}</div>
                  </div>
                  <p className="tool-desc">{t.desc}</p>
                  <div className="tool-link">{t.link}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
