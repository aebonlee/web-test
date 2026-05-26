import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="topbar-left">
            <span className="topbar-tag">PERSONAL LAB · 2026</span>
            <span>aebon@kyonggi.ac.kr</span>
          </div>
          <div className="topbar-right">
            <a href="https://github.com/aebonlee" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://claude.ai/code" target="_blank" rel="noreferrer">Claude Code</a>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="container nav-wrapper">
          <div className="logo">
            <Link to="/">
              <span className="brand-mark">
                Vibe<span className="accent">Lab</span>
              </span>
              <span className="brand-sep" />
              <span className="brand-sub">Coding Journal</span>
            </Link>
          </div>

          <ul className="nav-menu">
            <li>
              <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/roadmap" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Roadmap
              </NavLink>
            </li>
            <li>
              <NavLink to="/tools" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Tools
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Projects
              </NavLink>
            </li>
          </ul>

          <div className="nav-actions">
            <Link to="/roadmap" className="nav-cta">학습 시작</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
