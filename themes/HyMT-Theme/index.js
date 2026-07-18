import { AdSlot } from '@/components/GoogleAdsense'
import replaceSearchResult from '@/components/Mark'
import NotionPage from '@/components/NotionPage'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { isBrowser } from '@/lib/utils'
import { Transition } from '@headlessui/react'
import dynamic from 'next/dynamic'
import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'
import { createContext, useContext, useEffect, useRef } from 'react'
import CONFIG from './config'
import { Style } from './style'

const AlgoliaSearchModal = dynamic(() => import('@/components/AlgoliaSearchModal'), { ssr: false })

const BlogListScroll = dynamic(() => import('./components/BlogListScroll'), { ssr: false })
const BlogListPage = dynamic(() => import('./components/BlogListPage'), { ssr: false })
const BlogArchiveItem = dynamic(() => import('./components/BlogArchiveItem'), { ssr: false })
const ArticleLock = dynamic(() => import('./components/ArticleLock'), { ssr: false })
const ArticleInfo = dynamic(() => import('./components/ArticleInfo'), { ssr: false })
const Comment = dynamic(() => import('@/components/Comment'), { ssr: false })
const ArticleAround = dynamic(() => import('./components/ArticleAround'), { ssr: false })
const ShareBar = dynamic(() => import('./components/ShareBar'), { ssr: false })
const HeroSection = dynamic(() => import('./components/HeroSection'), { ssr: false })
const Header = dynamic(() => import('./components/Header'), { ssr: false })
const NavBar = dynamic(() => import('./components/NavBar'), { ssr: false })
const SideBar = dynamic(() => import('./components/SideBar'), { ssr: false })
const JumpToTopButton = dynamic(() => import('./components/JumpToTopButton'), { ssr: false })
const Footer = dynamic(() => import('./components/Footer'), { ssr: false })
const SearchInput = dynamic(() => import('./components/SearchInput'), { ssr: false })
const RecommendPosts = dynamic(() => import('./components/RecommendPosts'), { ssr: false })

const ThemeGlobalHyMT = createContext()
export const useHyMTGlobal = () => useContext(ThemeGlobalHyMT)

/**
 * 基础布局 - Steam 风格
 */
const LayoutBase = props => {
  const { children, slotTop } = props
  const { onLoading, fullWidth } = useGlobal()
  const searchModal = useRef(null)
  const router = useRouter()

  const showSidebar = !fullWidth

  return (
    <ThemeGlobalHyMT.Provider value={{ searchModal }}>
      <div
        id='theme-hymt'
        className={`${siteConfig('FONT_STYLE')} min-h-screen flex flex-col bg-[#1b2838] dark:bg-[#1b2838] text-[#c6d4df] selection:bg-[#1a9fff]/30`}>
        <Style />

        <div className='sticky top-0 z-30'>
          <Header {...props} />
          <NavBar {...props} />
        </div>

        <div className='flex-1 flex'>
          {/* 左侧边栏 - 固定定位 */}
          {showSidebar && <SideBar {...props} />}

          {/* 主内容区 (含 Footer) */}
          <div className={`flex-1 min-w-0 bg-[#0f1924] dark:bg-[#0f1924] flex flex-col ${showSidebar ? 'lg:pl-[clamp(260px,18vw,400px)]' : ''}`}>
            <div className='flex-1 mx-auto w-full'>
              <Transition
                show={!onLoading}
                appear={true}
                enter='transition ease-out duration-400 transform'
                enterFrom='opacity-0 translate-y-4'
                enterTo='opacity-100 translate-y-0'>
                {slotTop}
                {children}
              </Transition>
            </div>
            <Footer {...props} />
          </div>
        </div>

        <div className='fixed right-6 bottom-6 z-30'>
          <JumpToTopButton />
        </div>

        <AlgoliaSearchModal cRef={searchModal} {...props} />
      </div>
    </ThemeGlobalHyMT.Provider>
  )
}

/**
 * 首页 - Hero Banner + 文章列表
 */
const LayoutIndex = props => {
  const { posts } = props
  const showHero = siteConfig('HYMT_HERO_BANNER_ENABLE', true, CONFIG)

  return (
    <>
      {showHero && <HeroSection {...props} />}
      <LayoutPostList {...props} />
    </>
  )
}

/**
 * 文章列表 - 带分组标题
 */
const LayoutPostList = props => {
  return (
    <div className='px-4 md:px-6 pb-12'>
      {/* 分组标题 */}
      <div className='sticky top-[100px] z-[3] h-[56px] flex items-center bg-[#0f1924] dark:bg-[#0f1924]'>
        <h2 className='text-lg font-semibold tracking-wider uppercase text-[#e5e5e5]'>
          {siteConfig('HYMT_SECTION_LATEST', 'LATEST POSTS', CONFIG)}
        </h2>
        <div className='flex-1 mx-4 border-t border-[#373c44]' />
      </div>

      {siteConfig('POST_LIST_STYLE') === 'page' ? (
        <BlogListPage {...props} />
      ) : (
        <BlogListScroll {...props} />
      )}
    </div>
  )
}

/**
 * 搜索页
 */
const LayoutSearch = props => {
  const { keyword } = props

  useEffect(() => {
    if (isBrowser) {
      replaceSearchResult({
        doms: document.getElementById('posts-wrapper'),
        search: keyword,
        target: {
          element: 'span',
          className: 'text-[#07bfff] bg-[#07bfff]/10 px-0.5 rounded'
        }
      })
    }
  }, [])

  const slotTop = siteConfig('ALGOLIA_APP_ID') ? null : (
    <div className='px-4 md:px-6 pt-16 pb-4'>
      <SearchInput {...props} />
    </div>
  )

  return <LayoutPostList {...props} slotTop={slotTop} />
}

/**
 * 归档页
 */
const LayoutArchive = props => {
  const { archivePosts } = props
  return (
    <div className='px-4 md:px-6 pb-12 min-h-screen'>
      <div className='sticky top-[100px] z-[3] h-[56px] flex items-center bg-[#0f1924]'>
        <h2 className='text-lg font-semibold tracking-wider uppercase text-[#e5e5e5]'>ARCHIVE</h2>
        <div className='flex-1 mx-4 border-t border-[#373c44]' />
      </div>
      <div className='py-6'>
        {Object.keys(archivePosts).map(archiveTitle => (
          <BlogArchiveItem key={archiveTitle} archiveTitle={archiveTitle} archivePosts={archivePosts} />
        ))}
      </div>
    </div>
  )
}

/**
 * 文章详情
 */
const LayoutSlug = props => {
  const { post, lock, validPassword, prev, next, recommendPosts } = props

  return (
    <div className='px-4 md:px-6 pb-12'>
      {lock && <ArticleLock validPassword={validPassword} />}

      {!lock && post && (
        <div className='pt-8'>
          {post?.pageCover && (
            <div className='w-full mb-8 overflow-hidden rounded-sm'>
              <div
                className='w-full h-48 md:h-72 bg-cover bg-center rounded-sm'
                style={{ backgroundImage: `url(${post.pageCover})` }}
              />
            </div>
          )}

          <ArticleInfo post={post} />

          <div id='article-wrapper' className='bg-[#202227] rounded-sm p-6 md:p-10 mt-6'>
            {!lock && <NotionPage post={post} />}
          </div>

          <ShareBar post={post} />

          <AdSlot type={'in-article'} />

          {post?.type === 'Post' && (
            <>
              <ArticleAround prev={prev} next={next} />
              <RecommendPosts recommendPosts={recommendPosts} />
            </>
          )}

          <Comment frontMatter={post} />
        </div>
      )}
    </div>
  )
}

/**
 * 404
 */
const Layout404 = props => {
  const { post } = props
  const router = useRouter()
  const waiting404 = siteConfig('POST_WAITING_TIME_FOR_404') * 1000
  useEffect(() => {
    if (!post) {
      setTimeout(() => {
        if (isBrowser) {
          const article = document.querySelector('#article-wrapper #notion-article')
          if (!article) {
            router.push('/404').then(() => console.warn('Page not found'))
          }
        }
      }, waiting404)
    }
  }, [post])
  return (
    <div className='flex items-center justify-center min-h-[60vh]'>
      <div className='text-center'>
        <div className='text-8xl font-bold text-[#3d4450] mb-4'>404</div>
        <div className='text-[#8c8c8c] uppercase tracking-widest text-sm'>Page Not Found</div>
      </div>
    </div>
  )
}

/**
 * 分类页
 */
const LayoutCategoryIndex = props => {
  const { categoryOptions } = props
  return (
    <div className='px-4 md:px-6 pb-12'>
      <div className='sticky top-[100px] z-[3] h-[56px] flex items-center bg-[#0f1924]'>
        <h2 className='text-lg font-semibold tracking-wider uppercase text-[#e5e5e5]'>CATEGORIES</h2>
        <div className='flex-1 mx-4 border-t border-[#373c44]' />
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pt-6'>
        {categoryOptions?.map(category => (
          <SmartLink key={category.name} href={`/category/${category.name}`} passHref legacyBehavior>
            <div className='group cursor-pointer rounded-sm bg-gradient-to-b from-white/[0.08] to-white/[0.02] hover:from-white/[0.14] hover:to-white/[0.05] p-4 border border-[#373c44]/30 hover:border-[#1a9fff]/50 transition-all duration-200'>
              <div className='text-lg font-medium text-[#e5e5e5] group-hover:text-[#1a9fff] transition-colors'>{category.name}</div>
              <div className='text-xs text-[#8c8c8c] mt-1'>{category.count} posts</div>
            </div>
          </SmartLink>
        ))}
      </div>
    </div>
  )
}

/**
 * 标签页
 */
const LayoutTagIndex = props => {
  const { tagOptions } = props
  return (
    <div className='px-4 md:px-6 pb-12'>
      <div className='sticky top-[100px] z-[3] h-[56px] flex items-center bg-[#0f1924]'>
        <h2 className='text-lg font-semibold tracking-wider uppercase text-[#e5e5e5]'>TAGS</h2>
        <div className='flex-1 mx-4 border-t border-[#373c44]' />
      </div>
      <div className='flex flex-wrap gap-2 pt-6'>
        {tagOptions.map(tag => (
          <SmartLink key={tag} href={`/tag/${encodeURIComponent(tag.name)}`} passHref>
            <span className='cursor-pointer inline-flex items-center rounded-sm px-3 py-1.5 text-xs font-medium bg-[#3d4450] text-[#c6d4df] hover:bg-[#1a9fff] hover:text-white transition-colors'>
              {tag.name}
              {tag.count ? <span className='ml-1.5 text-[#8c8c8c]'>({tag.count})</span> : ''}
            </span>
          </SmartLink>
        ))}
      </div>
    </div>
  )
}

export {
  Layout404,
  LayoutArchive,
  LayoutBase,
  LayoutCategoryIndex,
  LayoutIndex,
  LayoutPostList,
  LayoutSearch,
  LayoutSlug,
  LayoutTagIndex,
  CONFIG as THEME_CONFIG
}
