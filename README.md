# Vibe Lab — 개인 바이브코딩 학습 사이트

KDN 디자인 시스템을 참고해 만든 개인 학습 기록 사이트.
Cursor·Claude Code와 함께 8주 동안 풀스택을 익히는 학습 동선을 정리합니다.

## Stack

- React 19 + Vite + TypeScript
- React Router (Hash routing for static hosting)
- Pure CSS (Navy editorial palette ported from KDN)

## Pages

- `/` — Home (히어로 · 3원칙 · 도구 미리보기 · CTA)
- `/roadmap` — 8주 학습 로드맵 (Frontend · Backend · Agent 3개 트랙)
- `/tools` — 16개 도구 카탈로그
- `/projects` — 8개 미니 프로젝트 쇼케이스

## Dev

```bash
npm install
npm run dev        # http://localhost:5175
npm run build
npm run preview
```

## Deploy

- GitHub Pages: `npm run build` 후 `dist/` 폴더를 배포
- 또는 Vercel: 저장소 연결 → 자동 배포
