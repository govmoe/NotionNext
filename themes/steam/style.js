/**
 * Steam Theme Styles
 * Steam游戏商店风格主题样式
 */

const steamStyles = \
  /* CSS Variables - Steam Color Palette */
  :root {
    --steam-bg: #0e1525;
    --steam-bg-secondary: #1a2332;
    --steam-bg-tertiary: #0d1117;
    --steam-card-bg: #1b2838;
    --steam-card-hover: #243447;
    --steam-border: #2a3a4d;
    --steam-border-light: #3d4f63;
    --steam-text: #c5d4e8;
    --steam-text-muted: #8b9cb5;
    --steam-text-light: #e0e8f0;
    --steam-accent: #66c0f4;
    --steam-accent-hover: #89d3f7;
    --steam-orange: #ffa500;
    --steam-green: #5da65d;
    --steam-red: #d94545;
  }

  /* Base Styles */
  body {
    background-color: var(--steam-bg);
    color: var(--steam-text);
    font-family: 'Motiva Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    color: var(--steam-text-light);
    font-weight: 600;
    margin-bottom: 1rem;
  }

  h1 { font-size: 2.25rem; }
  h2 { font-size: 1.875rem; }
  h3 { font-size: 1.5rem; }
  h4 { font-size: 1.25rem; }
  h5 { font-size: 1.125rem; }
  h6 { font-size: 1rem; }

  p {
    color: var(--steam-text);
    margin-bottom: 1rem;
  }

  a {
    color: var(--steam-accent);
    text-decoration: none;
    transition: color 250ms ease;
  }

  a:hover {
    color: var(--steam-accent-hover);
  }

  /* Layout Container */
  .steam-container {
    display: flex;
    min-height: 100vh;
    background-color: var(--steam-bg);
  }

  /* Header */
  .steam-header {
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: var(--steam-bg-secondary);
    border-bottom: 1px solid var(--steam-border);
    padding: 0 20px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }

  .steam-header-logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--steam-accent);
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .steam-header-nav {
    display: flex;
    gap: 30px;
    align-items: center;
  }

  .steam-header-nav a {
    color: var(--steam-text);
    font-size: 0.95rem;
    transition: color 250ms ease;
  }

  .steam-header-nav a:hover {
    color: var(--steam-accent);
  }

  /* Sidebar */
  .steam-sidebar {
    width: 240px;
    background-color: var(--steam-bg-secondary);
    border-right: 1px solid var(--steam-border);
    padding: 20px 0;
    height: calc(100vh - 56px);
    overflow-y: auto;
    position: sticky;
    top: 56px;
  }

  .steam-sidebar-section {
    padding: 0 15px;
    margin-bottom: 30px;
  }

  .steam-sidebar-title {
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--steam-text-muted);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 12px;
    padding: 0 5px;
  }

  .steam-sidebar-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .steam-sidebar-item {
    margin-bottom: 8px;
  }

  .steam-sidebar-link {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 12px;
    color: var(--steam-text);
    border-radius: 4px;
    transition: all 250ms ease;
    font-size: 0.95rem;
  }

  .steam-sidebar-link:hover {
    background-color: var(--steam-card-hover);
    color: var(--steam-accent);
    padding-left: 16px;
  }

  .steam-sidebar-link.active {
    background-color: var(--steam-card-bg);
    color: var(--steam-accent);
    border-left: 3px solid var(--steam-accent);
    padding-left: 9px;
  }

  /* Main Content */
  .steam-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: var(--steam-bg);
  }

  .steam-content {
    flex: 1;
    padding: 30px 40px;
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
  }

  /* Hero Section */
  .steam-hero {
    position: relative;
    height: 400px;
    background: linear-gradient(135deg, var(--steam-bg-secondary) 0%, var(--steam-card-bg) 100%);
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 40px;
    display: flex;
    align-items: flex-end;
  }

  .steam-hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.6;
  }

  .steam-hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(14, 21, 37, 0.9), transparent);
  }

  .steam-hero-content {
    position: relative;
    z-index: 2;
    padding: 30px;
    color: var(--steam-text-light);
  }

  .steam-hero-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 10px;
    color: var(--steam-text-light);
  }

  .steam-hero-subtitle {
    font-size: 1rem;
    color: var(--steam-text-muted);
  }

  /* Post Grid */
  .steam-post-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
  }

  @media (max-width: 1024px) {
    .steam-post-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .steam-post-grid {
      grid-template-columns: 1fr;
    }
  }

  /* Post Card */
  .steam-post-card {
    background-color: var(--steam-card-bg);
    border: 1px solid var(--steam-border);
    border-radius: 6px;
    overflow: hidden;
    transition: all 250ms ease;
    display: flex;
    flex-direction: column;
    height: 100%;
    cursor: pointer;
  }

  .steam-post-card:hover {
    background-color: var(--steam-card-hover);
    border-color: var(--steam-accent);
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(102, 192, 244, 0.15);
  }

  .steam-post-thumbnail {
    width: 100%;
    height: 180px;
    object-fit: cover;
    background-color: var(--steam-bg-secondary);
  }

  .steam-post-content {
    padding: 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .steam-post-category {
    display: inline-block;
    background-color: var(--steam-accent);
    color: var(--steam-bg);
    font-size: 0.7rem;
    font-weight: 700;
    padding: 4px 8px;
    border-radius: 3px;
    margin-bottom: 8px;
    width: fit-content;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .steam-post-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--steam-text-light);
    margin-bottom: 8px;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .steam-post-meta {
    display: flex;
    gap: 12px;
    font-size: 0.85rem;
    color: var(--steam-text-muted);
    margin-bottom: 12px;
  }

  .steam-post-author {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .steam-post-date {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .steam-post-excerpt {
    font-size: 0.9rem;
    color: var(--steam-text);
    margin-bottom: 12px;
    flex: 1;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.5;
  }

  .steam-post-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 12px;
    border-top: 1px solid var(--steam-border);
  }

  .steam-post-tags {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  }

  .steam-post-tag {
    background-color: var(--steam-bg-secondary);
    color: var(--steam-text-muted);
    font-size: 0.75rem;
    padding: 3px 6px;
    border-radius: 3px;
    border: 1px solid var(--steam-border);
  }

  .steam-post-read-more {
    color: var(--steam-accent);
    font-weight: 600;
    font-size: 0.9rem;
    transition: color 250ms ease;
  }

  .steam-post-read-more:hover {
    color: var(--steam-accent-hover);
  }

  /* Footer */
  .steam-footer {
    background-color: var(--steam-bg-secondary);
    border-top: 1px solid var(--steam-border);
    padding: 30px 40px;
    text-align: center;
    color: var(--steam-text-muted);
    font-size: 0.9rem;
    margin-top: auto;
  }

  .steam-footer-content {
    max-width: 1400px;
    margin: 0 auto;
  }

  .steam-footer-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 15px;
    flex-wrap: wrap;
  }

  .steam-footer-links a {
    color: var(--steam-text-muted);
    transition: color 250ms ease;
  }

  .steam-footer-links a:hover {
    color: var(--steam-accent);
  }

  /* Back to Top Button */
  .steam-back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 48px;
    height: 48px;
    background-color: var(--steam-accent);
    color: var(--steam-bg);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    transition: all 250ms ease;
    opacity: 0;
    visibility: hidden;
    z-index: 50;
  }

  .steam-back-to-top.visible {
    opacity: 1;
    visibility: visible;
  }

  .steam-back-to-top:hover {
    background-color: var(--steam-accent-hover);
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(102, 192, 244, 0.3);
  }

  /* Buttons */
  .steam-btn {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 250ms ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .steam-btn-primary {
    background-color: var(--steam-accent);
    color: var(--steam-bg);
  }

  .steam-btn-primary:hover {
    background-color: var(--steam-accent-hover);
    box-shadow: 0 4px 12px rgba(102, 192, 244, 0.3);
  }

  .steam-btn-secondary {
    background-color: var(--steam-card-bg);
    color: var(--steam-text);
    border: 1px solid var(--steam-border);
  }

  .steam-btn-secondary:hover {
    background-color: var(--steam-card-hover);
    border-color: var(--steam-accent);
    color: var(--steam-accent);
  }

  /* Article Detail Page */
  .steam-article {
    background-color: var(--steam-card-bg);
    border: 1px solid var(--steam-border);
    border-radius: 8px;
    padding: 40px;
    margin-bottom: 40px;
  }

  .steam-article-header {
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid var(--steam-border);
  }

  .steam-article-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--steam-text-light);
    margin-bottom: 15px;
  }

  .steam-article-meta {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    color: var(--steam-text-muted);
    font-size: 0.95rem;
  }

  .steam-article-body {
    font-size: 1rem;
    line-height: 1.8;
    color: var(--steam-text);
  }

  .steam-article-body img {
    max-width: 100%;
    height: auto;
    border-radius: 6px;
    margin: 20px 0;
  }

  .steam-article-body code {
    background-color: var(--steam-bg-secondary);
    color: var(--steam-orange);
    padding: 2px 6px;
    border-radius: 3px;
    font-family: 'Source Code Pro', Consolas, monospace;
    font-size: 0.9rem;
  }

  .steam-article-body pre {
    background-color: var(--steam-bg-secondary);
    border: 1px solid var(--steam-border);
    border-radius: 6px;
    padding: 15px;
    overflow-x: auto;
    margin: 20px 0;
  }

  .steam-article-body pre code {
    background-color: transparent;
    color: var(--steam-text);
    padding: 0;
  }

  /* Search Page */
  .steam-search-container {
    margin-bottom: 40px;
  }

  .steam-search-input {
    width: 100%;
    padding: 12px 16px;
    background-color: var(--steam-card-bg);
    border: 1px solid var(--steam-border);
    border-radius: 6px;
    color: var(--steam-text);
    font-size: 1rem;
    transition: all 250ms ease;
  }

  .steam-search-input:focus {
    outline: none;
    border-color: var(--steam-accent);
    box-shadow: 0 0 0 3px rgba(102, 192, 244, 0.1);
  }

  /* Responsive */
  @media (max-width: 768px) {
    .steam-sidebar {
      display: none;
    }

    .steam-content {
      padding: 20px;
    }

    .steam-header-nav {
      gap: 15px;
    }

    .steam-article {
      padding: 20px;
    }

    .steam-article-title {
      font-size: 1.75rem;
    }

    .steam-back-to-top {
      width: 40px;
      height: 40px;
      bottom: 20px;
      right: 20px;
      font-size: 1rem;
    }
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--steam-bg);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--steam-border);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--steam-accent);
  }
\

export default steamStyles
