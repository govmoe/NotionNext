/**
 * Steam Theme Configuration
 * Steam游戏商店风格主题配置
 */

const steamConfig = {
  name: 'steam',
  colorScheme: 'dark',
  
  colors: {
    bg: '#0e1525',
    bgSecondary: '#1a2332',
    bgTertiary: '#0d1117',
    cardBg: '#1b2838',
    cardHover: '#243447',
    border: '#2a3a4d',
    borderLight: '#3d4f63',
    text: '#c5d4e8',
    textMuted: '#8b9cb5',
    textLight: '#e0e8f0',
    accent: '#66c0f4',
    accentHover: '#89d3f7',
    orange: '#ffa500',
    green: '#5da65d',
    red: '#d94545',
    buttonPrimary: '#66c0f4',
    buttonPrimaryHover: '#89d3f7',
    buttonSecondary: '#2a3a4d',
    buttonSecondaryHover: '#3d4f63',
  },
  
  layout: {
    sidebar: {
      enabled: true,
      defaultCollapsed: false,
      width: '240px',
      mobileBreakpoint: 768,
    },
    header: {
      sticky: true,
      height: '56px',
    },
    content: {
      maxWidth: '1400px',
      padding: '20px',
    },
    grid: {
      columns: 3,
      gap: '20px',
      mobileColumns: 1,
      tabletColumns: 2,
    },
  },
  
  components: {
    postCard: {
      showThumbnail: true,
      showExcerpt: true,
      showAuthor: true,
      showDate: true,
      showCategory: true,
      excerptLength: 120,
      thumbnailRatio: '16/9',
    },
    hero: {
      enabled: true,
      height: '400px',
      showOverlay: true,
    },
    backToTop: {
      enabled: true,
      showBelow: 300,
    },
  },
  
  typography: {
    fontFamily: {
      base: '" Motiva Sans\, -apple-system, BlinkMacSystemFont, \Segoe UI\, Roboto, sans-serif',
 heading: '\Motiva Sans\, -apple-system, BlinkMacSystemFont, \Segoe UI\, Roboto, sans-serif',
 mono: '\Source Code Pro\, \Consolas\, monospace',
 },
 },
 
 animation: {
 transition: {
 fast: '150ms ease',
 normal: '250ms ease',
 slow: '400ms ease',
 },
 },
 
 i18n: {
 zh: {
 allNews: '全部新闻',
 gameUpdates: '游戏更新',
 announcements: '公告',
 trending: '热门',
 yourTags: '你的标签',
 readMore: '阅读更多',
 backToTop: '回到顶部',
 },
 en: {
 allNews: 'All News',
 gameUpdates: 'Game Updates',
 announcements: 'Announcements',
 trending: 'Trending',
 yourTags: 'Your Tags',
 readMore: 'Read More',
 backToTop: 'Back to Top',
 },
 },
}

export default steamConfig
