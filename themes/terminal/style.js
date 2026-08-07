/* eslint-disable react/no-unknown-property */
import { themeConsoleStyle } from '@/lib/themeConsoleStyle'
import CONFIG from './config'

const Style = () => {
  return <style jsx global>{`

    @font-face {
      font-family: 'TerminalFont';
      src: url('https://file.devhub.eu.org/file/font/0BuUers7.ttf') format('truetype');
      font-display: swap;
    }

    #theme-terminal {
      font-family: 'TerminalFont', 'Cascadia Code', 'JetBrains Mono', 'Fira Code', 'Consolas', 'Microsoft YaHei', monospace;
      background-color: #11111b;
      color: #cdd6f4;
      min-height: 100vh;
    }

    #theme-terminal #article-wrapper,
    #theme-terminal #notion-article {
      color: #cdd6f4;
      font-size: 0.95rem;
      line-height: 1.8;
      font-family: 'TerminalFont', 'Cascadia Code', 'JetBrains Mono', 'Fira Code', 'Consolas', 'Microsoft YaHei', monospace;
    }

    #theme-terminal #notion-article h1,
    #theme-terminal #notion-article h2,
    #theme-terminal #notion-article h3,
    #theme-terminal #notion-article h4,
    #theme-terminal #notion-article h5,
    #theme-terminal #notion-article h6 {
      color: #cdd6f4;
      font-weight: 700;
      margin-top: 1.5em;
      margin-bottom: 0.5em;
    }

    #theme-terminal #notion-article h1 { font-size: 1.5rem; border-bottom: 1px solid #313244; padding-bottom: 0.3em; }
    #theme-terminal #notion-article h2 { font-size: 1.3rem; }
    #theme-terminal #notion-article h3 { font-size: 1.15rem; }

    #theme-terminal #notion-article a {
      color: #89b4fa;
      text-decoration: none;
      border-bottom: 1px solid transparent;
    }

    #theme-terminal #notion-article a:hover {
      color: #b4d0fb;
      border-bottom-color: #89b4fa;
    }

    #theme-terminal #notion-article p,
    #theme-terminal #notion-article li {
      color: #cdd6f4;
      margin-bottom: 0.75em;
    }

    #theme-terminal #notion-article strong,
    #theme-terminal #notion-article b {
      color: #f9e2af;
    }

    #theme-terminal #notion-article code {
      color: #f38ba8;
      background: #1e1e2e;
      border-radius: 3px;
      padding: 1px 5px;
      font-size: 0.9em;
    }

    #theme-terminal #notion-article pre {
      background: #1e1e2e;
      border: 1px solid #313244;
      border-radius: 6px;
      padding: 1em;
      overflow-x: auto;
    }

    #theme-terminal #notion-article pre code {
      color: #cdd6f4;
      background: none;
      padding: 0;
      border: none;
    }

    #theme-terminal #notion-article blockquote {
      border-left: 3px solid #89b4fa;
      color: #a6adc8;
      padding: 4px 16px;
      margin: 1em 0;
      font-style: italic;
    }

    #theme-terminal #notion-article hr {
      border: none;
      border-top: 1px dashed #313244;
      margin: 2em 0;
    }

    #theme-terminal #notion-article table {
      border-spacing: 0;
      width: 100%;
    }

    #theme-terminal #notion-article th {
      color: #89b4fa;
      font-weight: 600;
      text-align: left;
      padding: 8px 12px;
      border-bottom: 2px solid #313244;
    }

    #theme-terminal #notion-article td {
      padding: 6px 12px;
      border-bottom: 1px solid #313244;
      color: #cdd6f4;
    }

    #theme-terminal #notion-article img,
    #theme-terminal #notion-article figure img {
      max-width: 100%;
      height: auto;
      border-radius: 6px;
    }

    #theme-terminal #notion-article .notion-bookmark {
      background: #1e1e2e;
      border: 1px solid #313244;
      border-radius: 6px;
      overflow: hidden;
    }

    #theme-terminal #notion-article .notion-bookmark:hover {
      border-color: #89b4fa;
    }

    #theme-terminal #notion-article .notion-bookmark a {
      border-bottom: none;
    }

    #theme-terminal #notion-article .notion-bookmark-title {
      color: #89b4fa;
    }

    #theme-terminal #notion-article .notion-bookmark-description {
      color: #a6adc8;
    }

    #theme-terminal #notion-article .notion-bookmark-link div {
      color: #585b70;
    }

    #theme-terminal #notion-article .notion-callout {
      background: #1e1e2e;
      border: 1px solid #313244;
      border-radius: 6px;
      padding: 1em;
    }

    #theme-terminal #notion-article .notion-toggle {
      color: #f9e2af;
    }

    #theme-terminal #notion-article .notion-collection,
    #theme-terminal #notion-article .notion-collection-row {
      border-color: #313244;
    }

    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: #11111b; }
    ::-webkit-scrollbar-thumb { background: #313244; border-radius: 3px; }
    ::-webkit-scrollbar-thumb:hover { background: #45475a; }

    ::selection {
      background: rgba(137, 180, 250, 0.25);
      color: #cdd6f4;
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }

    .cursor-blink {
      animation: blink 1s step-end infinite;
    }

    ${themeConsoleStyle('terminal', CONFIG)}
  `}</style>
}

export { Style }
