/* eslint-disable react/no-unknown-property */
import { themeConsoleStyle } from '@/lib/themeConsoleStyle'
import CONFIG from './config'

const Style = () => {
  return <style jsx global>{`

    body {
      background-color: #ffffff;
    }
    .dark body {
      background-color: #0f172a;
    }

    #theme-xuhome {
      background-color: #ffffff;
    }
    .dark #theme-xuhome {
      background-color: #0f172a;
    }

    ::selection {
      background: #f59e0b;
      color: #0f172a;
    }

    #theme-xuhome #article-wrapper,
    #theme-xuhome #notion-article {
      font-size: 1rem;
      line-height: 1.85;
    }

    #theme-xuhome #notion-article h1 { font-size: 1.75rem; font-weight: 800; margin: 1.5em 0 0.5em; }
    #theme-xuhome #notion-article h2 { font-size: 1.35rem; font-weight: 800; margin: 1.4em 0 0.4em; border-bottom: 3px solid #0f172a; padding-bottom: 0.3em; }
    #theme-xuhome #notion-article h3 { font-size: 1.15rem; font-weight: 800; margin: 1.2em 0 0.3em; }

    #theme-xuhome #notion-article a {
      color: #0f172a;
      font-weight: 700;
      text-decoration: underline;
      text-decoration-thickness: 2px;
      text-underline-offset: 3px;
    }
    #theme-xuhome #notion-article a:hover {
      color: #1e293b;
    }

    #theme-xuhome #notion-article code {
      font-size: 0.875em;
      border-radius: 0.125rem;
      padding: 0.2em 0.4em;
      background: #f59e0b;
      color: #0f172a;
      font-weight: 600;
      font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace;
    }
    .dark #theme-xuhome #notion-article code {
      background: #334155;
      color: #f59e0b;
    }

    #theme-xuhome #notion-article pre {
      border-radius: 0.125rem;
      padding: 16px;
      overflow-x: auto;
      background: #f8fafc;
      border: 2px solid #0f172a;
      font-size: 0.8125rem;
      line-height: 1.5;
    }
    .dark #theme-xuhome #notion-article pre {
      background: #1e293b;
    }

    #theme-xuhome #notion-article blockquote {
      border-left: 4px solid #f59e0b;
      padding: 0.5em 1em;
      margin: 1em 0;
      background: rgba(253, 230, 138, 0.1);
      font-weight: 500;
    }
    .dark #theme-xuhome #notion-article blockquote {
      background: rgba(253, 230, 138, 0.05);
    }

    #theme-xuhome #notion-article hr {
      border: none;
      height: 3px;
      background: #0f172a;
      margin: 2em 0;
    }

    #theme-xuhome #notion-article table {
      border-spacing: 0;
      border-collapse: collapse;
    }
    #theme-xuhome #notion-article th,
    #theme-xuhome #notion-article td {
      padding: 8px 12px;
      border: 2px solid #0f172a;
    }
    #theme-xuhome #notion-article th {
      font-weight: 800;
      background: #f59e0b;
      color: #0f172a;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .dark #theme-xuhome #notion-article th {
      background: #334155;
      color: #f59e0b;
      border-color: #0f172a;
    }

    #theme-xuhome #notion-article img {
      max-width: 100%;
      border-radius: 0.125rem;
      border: 3px solid #0f172a;
    }

    #theme-xuhome #notion-article .notion-bookmark {
      border: 2px solid #0f172a;
      border-radius: 0.125rem;
      box-shadow: 4px 4px 0 0 #0f172a;
    }
    .dark #theme-xuhome #notion-article .notion-bookmark {
      background: #1e293b;
    }
    #theme-xuhome #notion-article .notion-bookmark a {
      font-weight: 600;
      text-decoration: none;
    }

    ::-webkit-scrollbar { width: 8px; height: 8px; }
    ::-webkit-scrollbar-track { background: #f1f5f9; }
    ::-webkit-scrollbar-thumb { background: #0f172a; border-radius: 0; }
    ::-webkit-scrollbar-thumb:hover { background: #1e293b; }
    .dark ::-webkit-scrollbar-track { background: #1e293b; }

    ${themeConsoleStyle('xuhome', CONFIG)}
  `}</style>
}

export { Style }
