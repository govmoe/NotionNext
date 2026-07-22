/* eslint-disable react/no-unknown-property */
/**
 * HyMT-Theme Steam 风格全局样式
 * 包含 Notion 渲染内容的暗色主题覆盖
 */
const Style = () => {
  return <style jsx global>{`
    /* Notion 内容边距重置 */
    .notion {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }

    /* ===== Notion 内容暗色文本覆盖（核心修复） ===== */
    #theme-hymt #article-wrapper,
    #theme-hymt #notion-article {
      color: #c6d4df;
      font-size: 1.05rem;
      line-height: 1.8;
    }

    #theme-hymt #notion-article .notion,
    #theme-hymt #notion-article .notion-text,
    #theme-hymt #notion-article .notion-blank,
    #theme-hymt #notion-article .notion-h,
    #theme-hymt #notion-article .notion-header,
    #theme-hymt #notion-article .notion-sub_header,
    #theme-hymt #notion-article .notion-sub_sub_header,
    #theme-hymt #notion-article .notion-page,
    #theme-hymt #notion-article .notion-list,
    #theme-hymt #notion-article .notion-list-disc,
    #theme-hymt #notion-article .notion-list-numbered,
    #theme-hymt #notion-article .notion-toggle,
    #theme-hymt #notion-article .notion-quote,
    #theme-hymt #notion-article .notion-callout,
    #theme-hymt #notion-article .notion-collection,
    #theme-hymt #notion-article .notion-collection-row,
    #theme-hymt #notion-article .notion-property,
    #theme-hymt #notion-article .notion-property-text,
    #theme-hymt #notion-article .notion-property-title,
    #theme-hymt #notion-article .notion-simple-table,
    #theme-hymt #notion-article .notion-table,
    #theme-hymt #notion-article .notion-code,
    #theme-hymt #notion-article .notion-equation {
      color: #c6d4df !important;
    }

    #theme-hymt #notion-article p,
    #theme-hymt #notion-article li,
    #theme-hymt #notion-article span,
    #theme-hymt #notion-article figcaption,
    #theme-hymt #notion-article .notion-text,
    #theme-hymt #notion-article .notion-list,
    #theme-hymt #notion-article .notion-list-disc,
    #theme-hymt #notion-article .notion-list-numbered,
    #theme-hymt #notion-article .notion-toggle,
    #theme-hymt #notion-article .notion-collection-row-body,
    #theme-hymt #notion-article .notion-simple-table-cell {
      color: #b8bcbf !important;
    }

    #theme-hymt #notion-article h1,
    #theme-hymt #notion-article h2,
    #theme-hymt #notion-article h3,
    #theme-hymt #notion-article h4,
    #theme-hymt #notion-article h5,
    #theme-hymt #notion-article h6,
    #theme-hymt #notion-article strong,
    #theme-hymt #notion-article b {
      color: #e5e5e5 !important;
    }

    #theme-hymt #notion-article a {
      color: #1a9fff !important;
      text-decoration: none;
    }

    #theme-hymt #notion-article a:hover {
      color: #07bfff !important;
      text-decoration: underline;
    }

    #theme-hymt #notion-article code {
      color: #e5e5e5 !important;
      background: #3d4450 !important;
      border-radius: 2px;
      padding: 2px 6px;
      font-size: 0.9em;
    }

    #theme-hymt #notion-article pre {
      background: #1e2127 !important;
      border: 1px solid #373c44;
      border-radius: 4px;
    }

    #theme-hymt #notion-article blockquote {
      border-left: 3px solid #1a9fff;
      color: #8c8c8c !important;
      background: rgba(255,255,255,0.03);
      padding: 8px 16px;
      margin: 1em 0;
    }

    #theme-hymt #notion-article hr {
      border-color: #373c44 !important;
    }

    #theme-hymt #notion-article table {
      border-color: #373c44 !important;
    }

    #theme-hymt #notion-article th,
    #theme-hymt #notion-article td {
      border-color: #373c44 !important;
      color: #c6d4df !important;
    }

    /* ===== Notion 书签（Bookmark）暗色主题修复 ===== */
    #theme-hymt #notion-article .notion-bookmark {
      background: #1a1d24 !important;
      border: 1px solid #373c44 !important;
      border-radius: 4px;
      color: inherit;
    }

    #theme-hymt #notion-article .notion-bookmark:hover {
      border-color: #1a9fff !important;
      background: #20242b !important;
    }

    #theme-hymt #notion-article .notion-bookmark a {
      color: inherit !important;
      text-decoration: none !important;
    }

    #theme-hymt #notion-article .notion-bookmark-title {
      color: #e5e5e5 !important;
    }

    #theme-hymt #notion-article .notion-bookmark-description {
      color: #8c8c8c !important;
    }

    #theme-hymt #notion-article .notion-bookmark-link {
      color: #8c8c8c !important;
    }

    #theme-hymt #notion-article .notion-bookmark-link div {
      color: #8c8c8c !important;
    }

    #theme-hymt #notion-article .notion-bookmark-link img {
      filter: grayscale(1) brightness(0.7);
    }

    /* ===== 图片响应式 ===== */
    #theme-hymt #notion-article img,
    #theme-hymt #notion-article .notion-image img,
    #theme-hymt #notion-article figure img,
    #theme-hymt #notion-article .notion-asset-wrapper img {
      max-width: min(100%, 800px) !important;
      height: auto !important;
      display: block;
      margin: 1.5em auto;
      border-radius: 4px;
    }

    #theme-hymt #notion-article .notion-image,
    #theme-hymt #notion-article figure,
    #theme-hymt #notion-article .notion-asset-wrapper {
      max-width: 100% !important;
    }

    #theme-hymt #notion-article .notion-bookmark-image img {
      margin: 0 !important;
      border-radius: 0 4px 4px 0 !important;
    }

    /* ===== 导航链接 hover 效果 ===== */
    #theme-hymt .nav-link {
      position: relative;
    }

    #theme-hymt .nav-link::after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 0;
      height: 2px;
      background: #1a9fff;
      transition: width 0.2s ease;
    }

    #theme-hymt .nav-link:hover::after {
      width: 100%;
    }

    /* ===== 卡片环境光 ===== */
    #theme-hymt .card-glow {
      position: relative;
    }

    #theme-hymt .card-glow::before {
      content: '';
      position: absolute;
      inset: 0;
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: -1;
      border-radius: inherit;
    }

    #theme-hymt .card-glow:hover::before {
      opacity: 1;
    }

    /* ===== Steam 风格滚动条 ===== */
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    ::-webkit-scrollbar-track {
      background: #1a1d24;
    }

    ::-webkit-scrollbar-thumb {
      background: #3d4450;
      border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #4f5764;
    }

    /* ===== 选中文字 ===== */
    ::selection {
      background: rgba(26, 159, 255, 0.3);
      color: #fff;
    }
  `}</style>
}

export { Style }
