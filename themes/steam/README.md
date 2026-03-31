# Steam Theme for NotionNext

A production-ready NotionNext theme inspired by the Steam game store news page design. Features a dark, modern interface with Steam's signature blue accent colors and clean card-based layout.

## 🎮 Features

- **Dark Theme**: Deep blue-black background (#0e1525) with light text for comfortable reading
- **Responsive Design**: Fully responsive layout that adapts to mobile, tablet, and desktop screens
- **Sidebar Navigation**: Collapsible left sidebar with categories, tags, and quick navigation
- **Hero Section**: Featured article showcase on the homepage with overlay text
- **Card-Based Layout**: Clean, modern post cards with hover effects and smooth transitions
- **Steam Branding**: Authentic Steam color palette (Steam Blue #66c0f4, Orange #ffa500)
- **Multiple Layouts**: Support for index, article detail, search, archive, categories, tags, and 404 pages
- **Back to Top Button**: Smooth scroll-to-top functionality
- **Tailwind CSS**: Utility-first CSS framework for easy customization
- **i18n Support**: Built-in support for Chinese and English labels

## 📁 File Structure

`
steam/
├── config.js                 # Theme configuration and color palette
├── style.js                  # Global CSS styles
├── index.js                  # Main entry point with all layouts
└── components/
    ├── SteamHeader.js        # Top navigation bar
    ├── SteamSidebar.js       # Left sidebar with categories and tags
    ├── SteamPostCard.js      # Article card component
    ├── SteamFooter.js        # Footer component
    ├── SteamHero.js          # Featured article hero section
    └── SteamBackToTop.js     # Back to top button
`

## 🎨 Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Background | #0e1525 | Main page background |
| Secondary BG | #1a2332 | Header, sidebar background |
| Card BG | #1b2838 | Post card background |
| Card Hover | #243447 | Post card hover state |
| Border | #2a3a4d | Borders and dividers |
| Text | #c5d4e8 | Primary text color |
| Text Muted | #8b9cb5 | Secondary text color |
| Accent (Steam Blue) | #66c0f4 | Links, buttons, highlights |
| Accent Hover | #89d3f7 | Accent hover state |
| Orange | #ffa500 | Secondary accent |
| Green | #5da65d | Success/online status |
| Red | #d94545 | Error/offline status |

## 🚀 Usage

### Installation

1. Copy the steam folder to your NotionNext 	hemes directory:
   `
   your-notionnext-project/themes/steam/
   `

2. Update your log.config.js to use the steam theme:
   `javascript
   const blogConfig = {
     theme: 'steam',
     // ... other config
   }
   `

3. Restart your NotionNext development server

### Configuration

Edit config.js to customize:

- **Colors**: Modify the colors object to change the color scheme
- **Layout**: Adjust sidebar width, grid columns, and spacing
- **Components**: Enable/disable hero section, back-to-top button, etc.
- **Typography**: Change font families and sizes
- **Animation**: Customize transition speeds and hover effects

Example:
`javascript
const steamConfig = {
  colors: {
    accent: '#66c0f4',  // Change Steam blue
    orange: '#ffa500',  // Change orange accent
  },
  layout: {
    grid: {
      columns: 2,  // Change from 3 to 2 columns
    },
  },
}
`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (1 column grid, collapsed sidebar)
- **Tablet**: 768px - 1024px (2 column grid)
- **Desktop**: > 1024px (3 column grid, full sidebar)

## 🔧 Customization

### Modifying Styles

Edit style.js to customize CSS. All styles use CSS variables for easy theming:

`css
:root {
  --steam-bg: #0e1525;
  --steam-accent: #66c0f4;
  /* ... more variables */
}
`

### Adding Components

Create new components in the components/ folder and import them in index.js:

`javascript
import MyCustomComponent from './components/MyCustomComponent'
`

### Extending Layouts

Modify the layout functions in index.js to add new sections or change the structure:

`javascript
const LayoutIndex = ({ posts, siteInfo, blogConfig }) => {
  // Add your custom logic here
  return (
    <LayoutBase>
      {/* Your custom content */}
    </LayoutBase>
  )
}
`

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Component Props

### SteamPostCard
`javascript
<SteamPostCard 
  post={{
    title: 'Article Title',
    slug: 'article-slug',
    date: '2026-03-31',
    author: 'Author Name',
    category: 'Game Updates',
    tags: ['tag1', 'tag2'],
    image: '/path/to/image.jpg',
    summary: 'Article summary...',
  }}
  showThumbnail={true}
/>
`

### SteamHero
`javascript
<SteamHero 
  post={{
    title: 'Featured Article',
    slug: 'featured-article',
    image: '/path/to/hero-image.jpg',
    summary: 'Featured article summary...',
  }}
/>
`

## 🎯 Performance Tips

1. **Optimize Images**: Use compressed images for thumbnails and hero sections
2. **Lazy Loading**: Implement lazy loading for post images
3. **Code Splitting**: NotionNext handles code splitting automatically
4. **CSS Optimization**: Tailwind CSS is already optimized for production

## 🐛 Troubleshooting

### Sidebar not showing
- Check if layout.sidebar.enabled is set to 	rue in config.js
- Verify the viewport width is > 768px on desktop

### Colors not applying
- Clear browser cache and rebuild the project
- Check if CSS variables are properly defined in style.js
- Verify Tailwind CSS is properly configured in your NotionNext setup

### Images not loading
- Check image paths are correct
- Verify images are accessible from your server
- Check browser console for 404 errors

## 📄 License

This theme is provided as-is for use with NotionNext. Feel free to modify and customize it for your needs.

## 🙏 Credits

- Inspired by [Steam Store](https://store.steampowered.com/)
- Built with [NotionNext](https://github.com/tangly1024/NotionNext)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

## 📞 Support

For issues or questions about this theme, please refer to the NotionNext documentation or create an issue in the NotionNext repository.

---

**Version**: 1.0.0  
**Last Updated**: 2026-04-01  
**Theme Name**: steam
