# Steam Theme - Quick Reference Guide

## 🚀 Quick Start

1. **Enable the theme** in your NotionNext log.config.js:
   `javascript
   const blogConfig = {
     theme: 'steam',
   }
   `

2. **Restart** your development server

3. **Customize** by editing config.js and style.js

## 📋 File Overview

| File | Purpose | Customization |
|------|---------|---------------|
| config.js | Theme settings, colors, layout | Edit colors, enable/disable features |
| style.js | All CSS styles | Modify colors, spacing, animations |
| index.js | Layout components | Add/remove sections, change structure |
| components/ | Reusable UI components | Modify individual components |

## 🎨 Quick Color Changes

Edit the colors object in config.js:

`javascript
colors: {
  accent: '#66c0f4',        // Steam blue
  orange: '#ffa500',        // Orange accent
  bg: '#0e1525',            // Dark background
  text: '#c5d4e8',          // Light text
}
`

## 🔧 Common Customizations

### Change Grid Columns
In config.js:
`javascript
layout: {
  grid: {
    columns: 2,  // Default: 3
  }
}
`

### Hide Hero Section
In config.js:
`javascript
components: {
  hero: {
    enabled: false,  // Default: true
  }
}
`

### Change Sidebar Width
In config.js:
`javascript
layout: {
  sidebar: {
    width: '300px',  // Default: '240px'
  }
}
`

### Modify Font Family
In config.js:
`javascript
typography: {
  fontFamily: {
    base: 'Your Font Family, sans-serif',
  }
}
`

## 📱 Responsive Design

The theme automatically adapts to screen sizes:
- **Mobile** (< 768px): 1 column, hidden sidebar
- **Tablet** (768px - 1024px): 2 columns
- **Desktop** (> 1024px): 3 columns, full sidebar

## 🎯 Layout Components

### LayoutIndex
Homepage with hero section and post grid

### LayoutSlug
Individual article detail page

### LayoutPostList
Generic post list (used for search, categories, tags)

### LayoutArchive
Posts grouped by year

### LayoutCategoryIndex
List of all categories

### LayoutTagIndex
List of all tags

### Layout404
Error page

## 🔗 Component Usage

### Using SteamPostCard
`javascript
import SteamPostCard from './components/SteamPostCard'

<SteamPostCard post={postObject} showThumbnail={true} />
`

### Using SteamHero
`javascript
import SteamHero from './components/SteamHero'

<SteamHero post={featuredPost} />
`

## 🎨 CSS Variables

All colors are defined as CSS variables in style.js:

`css
--steam-bg: #0e1525
--steam-accent: #66c0f4
--steam-text: #c5d4e8
/* ... more variables */
`

Use them in custom CSS:
`css
.my-element {
  background-color: var(--steam-bg);
  color: var(--steam-accent);
}
`

## 🌍 i18n Support

The theme includes Chinese and English labels. Add more languages in config.js:

`javascript
i18n: {
  zh: { /* Chinese labels */ },
  en: { /* English labels */ },
  fr: { /* Add French */ },
}
`

## 🐛 Debug Tips

1. **Check browser console** for JavaScript errors
2. **Inspect elements** to verify CSS is applied
3. **Clear cache** if styles don't update
4. **Check image paths** if thumbnails don't load
5. **Verify post data** structure matches component expectations

## 📊 Post Data Structure

Expected post object structure:

`javascript
{
  id: 'unique-id',
  slug: 'post-slug',
  title: 'Post Title',
  date: '2026-03-31',
  author: 'Author Name',
  category: 'Category Name',
  categories: ['Cat1', 'Cat2'],
  tags: ['tag1', 'tag2'],
  image: '/path/to/image.jpg',
  cover: '/path/to/cover.jpg',
  thumbnail: '/path/to/thumb.jpg',
  summary: 'Post summary text',
  excerpt: 'Post excerpt',
  description: 'Post description',
  content: '<html>Full post content</html>',
}
`

## 🎯 Performance Optimization

1. **Compress images** before using as thumbnails
2. **Use WebP format** for better compression
3. **Lazy load** images below the fold
4. **Minimize CSS** in production
5. **Enable caching** on your server

## 🔄 Updating the Theme

To update to a newer version:
1. Backup your customizations
2. Replace theme files
3. Reapply your customizations
4. Test thoroughly

## 📞 Getting Help

- Check the README.md for detailed documentation
- Review component files for implementation details
- Check NotionNext documentation for framework-specific questions
- Inspect browser console for error messages

## ✅ Checklist for Setup

- [ ] Copy steam folder to themes directory
- [ ] Update blog.config.js with theme: 'steam'
- [ ] Restart development server
- [ ] Verify theme loads without errors
- [ ] Customize colors in config.js
- [ ] Test on mobile devices
- [ ] Verify all images load correctly
- [ ] Test navigation and links
- [ ] Check performance in production

---

**Happy theming! 🎮**
