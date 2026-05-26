type Status = 'doing' | 'done' | 'planned';
type Project = {
  title: string;
  status: Status;
  desc: string;
  stack: string[];
  week: string;
};

const PROJECTS: Project[] = [
  {
    title: 'Vibe Lab (이 사이트)',
    status: 'doing',
    week: 'Week 0 · 자기 소개 페이지',
    desc: 'KDN 디자인 시스템을 참고해 만든 개인 학습 사이트. 첫 React + Vite 프로젝트로 학습 동기와 로드맵을 정리.',
    stack: ['React 19', 'Vite', 'TypeScript', 'GitHub Pages'],
  },
  {
    title: 'Hello World 배포',
    status: 'planned',
    week: 'Week 1 · 환경 셋업 미션',
    desc: 'Cursor로 만든 가장 단순한 HTML 페이지를 GitHub Pages에 첫 배포. 배포 동선 자체를 체득하는 것이 목표.',
    stack: ['HTML', 'Cursor', 'Git', 'Pages'],
  },
  {
    title: '포트폴리오 랜딩',
    status: 'planned',
    week: 'Week 2 · 반응형 UI 미션',
    desc: 'CSS Grid · Flexbox · 변수로 1인 포트폴리오 페이지를 만들고 모바일까지 깔끔하게 대응.',
    stack: ['HTML', 'CSS', '디자인 토큰'],
  },
  {
    title: 'Todo App',
    status: 'planned',
    week: 'Week 3 · React 미션',
    desc: 'React 19 + LocalStorage. 컴포넌트 분리·state 끌어올리기·커스텀 훅 패턴 익히기.',
    stack: ['React 19', 'TypeScript', 'Vite'],
  },
  {
    title: 'Notes API',
    status: 'planned',
    week: 'Week 4 · 백엔드 미션',
    desc: 'Express로 만든 4개 REST 엔드포인트. Postman으로 검증하고 README에 API 명세 정리.',
    stack: ['Node.js', 'Express', 'REST'],
  },
  {
    title: '로그인 Notes 앱',
    status: 'planned',
    week: 'Week 5 · 풀스택 통합',
    desc: 'Supabase 인증을 붙인 Notes 앱. 첫 풀스택 통합 후 Vercel 배포까지.',
    stack: ['Supabase', 'React', 'Vercel'],
  },
  {
    title: '/lint 슬래시 커맨드',
    status: 'planned',
    week: 'Week 6 · Claude Code',
    desc: '본인 프로젝트에 ESLint·TypeScript 검증을 자동 수행하는 슬래시 커맨드 추가.',
    stack: ['Claude Code', 'CLAUDE.md', 'Hooks'],
  },
  {
    title: '최종 풀스택 앱',
    status: 'planned',
    week: 'Week 8 · 졸업 작품',
    desc: '본인이 매일 쓰고 싶은 작은 도구 하나. 프론트 + 백 + DB + 배포까지 1주 안에 완성.',
    stack: ['React', 'Supabase', 'Vercel', 'Claude Code'],
  },
];

const STATUS_LABEL: Record<Status, string> = {
  doing: 'In Progress',
  done: 'Completed',
  planned: 'Planned',
};

export default function Projects() {
  const counts = PROJECTS.reduce(
    (acc, p) => {
      acc[p.status]++;
      return acc;
    },
    { doing: 0, done: 0, planned: 0 } as Record<Status, number>
  );

  return (
    <>
      <header className="page-header-ed">
        <div className="container">
          <div className="eyebrow"><span>Projects · 8 Items</span></div>
          <h2>프로젝트 쇼케이스</h2>
          <p>
            8주 동안 만들 미니 프로젝트들. 한 주 한 개 원칙으로
            작더라도 끝까지 배포해 GitHub에 남기는 것을 목표로 합니다.
          </p>
        </div>
      </header>

      <section className="section-ed">
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; Status</div>
            <h2 className="section-title-ed">
              현재 <span className="accent">{counts.done}</span> / {PROJECTS.length} 완료
            </h2>
            <div className="section-meta">
              {counts.doing} doing · {counts.planned} planned
            </div>
          </div>

          <div className="projects-grid">
            {PROJECTS.map((p) => (
              <article className="project-card" key={p.title}>
                <span className={`project-status ${p.status}`}>{STATUS_LABEL[p.status]} · {p.week}</span>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-stack">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-ed">
        <div className="container">
          <div className="cta-inner">
            <div>
              <div className="cta-eyebrow">&mdash; Principle</div>
              <h2 className="cta-title-ed">
                작아도 좋다.<br />
                <span className="accent">끝까지 배포</span>한다.
              </h2>
            </div>
            <div className="cta-side">
              <p>
                완벽한 프로젝트보다 동작하는 프로젝트.
                README와 데모 한 장이라도 남기는 것을 우선합니다.
                매주 GitHub의 contribution 그래프가 학습의 증거가 됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
