import { AdSlot } from '@/components/GoogleAdsense'
import replaceSearchResult from '@/components/Mark'
import NotionPage from '@/components/NotionPage'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { isBrowser } from '@/lib/utils'
import dynamic from 'next/dynamic'
import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import CONFIG from './config'
import { Style } from './style'
import Header from './components/Header'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import BlogListPage from './components/BlogListPage'
import BlogListScroll from './components/BlogListScroll'
import BlogArchiveItem from './components/BlogArchiveItem'
import ArticleLock from './components/ArticleLock'
import ArticleInfo from './components/ArticleInfo'
import ArticleAround from './components/ArticleAround'
import ShareBar from './components/ShareBar'
import SearchInput from './components/SearchInput'
import RecommendPosts from './components/RecommendPosts'
import JumpToTopButton from './components/JumpToTopButton'

const Comment = dynamic(() => import('@/components/Comment'), { ssr: false })
const AlgoliaSearchModal = dynamic(() => import('@/components/AlgoliaSearchModal'), { ssr: false })

const LayoutBase = props => {
  const { children } = props
  const { fullWidth } = useGlobal()
  const showSidebar = !fullWidth && siteConfig('TERMINAL_SIDEBAR', false, CONFIG)

  return (
    <div id='theme-terminal' className='min-h-screen bg-[#11111b] text-[#cdd6f4]'>
      <Style />

      <div className='max-w-3xl mx-auto px-5 md:px-8'>
        <div className='pt-12 pb-4'>
          <Header {...props} />
          <NavBar {...props} />
        </div>

        <div className='flex gap-10'>
          <div className='flex-1 min-w-0 pb-16'>
            {children}
          </div>

          {showSidebar && (
            <div className='w-56 shrink-0 hidden lg:block'>
              <div className='sticky top-8'>
                <SideBar {...props} />
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer {...props} />

      <div className='fixed right-4 bottom-4 z-30'>
        <JumpToTopButton />
      </div>

      <AlgoliaSearchModal {...props} />
    </div>
  )
}

const LayoutIndex = props => {
  return <LayoutPostList {...props} />
}

const LayoutPostList = props => {
  const { category, tag } = props

  return (
    <>
      {category && (
        <div className='text-xs text-[#585b70] mb-6'>
          ~/<span className='text-[#a6e3a1]'>category</span>/{category}
        </div>
      )}
      {tag && (
        <div className='text-xs text-[#585b70] mb-6'>
          ~/<span className='text-[#f9e2af]'>tag</span>/{tag}
        </div>
      )}

      {siteConfig('POST_LIST_STYLE') === 'page' ? (
        <BlogListPage {...props} />
      ) : (
        <BlogListScroll {...props} />
      )}
    </>
  )
}

const LayoutSearch = props => {
  const { keyword } = props

  useEffect(() => {
    if (isBrowser) {
      replaceSearchResult({
        doms: document.getElementById('posts-wrapper'),
        search: keyword,
        target: {
          element: 'span',
          className: 'text-[#f9e2af] bg-[#f9e2af]/10 px-0.5 rounded'
        }
      })
    }
  }, [])

  return (
    <>
      <div className='border border-[#313244] rounded bg-[#1e1e2e] px-4 py-3 mb-8'>
        <SearchInput {...props} />
      </div>
      <LayoutPostList {...props} />
    </>
  )
}

const LayoutArchive = props => {
  const { archivePosts } = props

  return (
    <div>
      <div className='text-xs text-[#585b70] mb-8'>
        ~/<span className='text-[#a6e3a1]'>archive</span>
      </div>

      {Object.keys(archivePosts).map(archiveTitle => (
        <BlogArchiveItem key={archiveTitle} archiveTitle={archiveTitle} archivePosts={archivePosts} />
      ))}
    </div>
  )
}

const LayoutSlug = props => {
  const { post, lock, validPassword, prev, next, recommendPosts } = props

  return (
    <>
      {lock && <ArticleLock validPassword={validPassword} />}

      {!lock && post && (
        <div>
          {post?.pageCover && (
            <div className='w-full mb-8 overflow-hidden rounded-lg border border-[#313244]'>
              <div
                className='w-full h-48 md:h-64 bg-cover bg-center'
                style={{ backgroundImage: `url(${post.pageCover})` }}
              />
            </div>
          )}

          <ArticleInfo post={post} />

          <div id='article-wrapper' className='bg-[#1e1e2e] border border-[#313244] rounded-lg p-6 md:p-10 mt-6'>
            {!lock && <NotionPage post={post} />}
          </div>

          <ShareBar post={post} />

          <AdSlot type={'in-article'} />

          {post?.type === 'Post' && (
            <>
              <ArticleAround prev={prev} next={next} />
              {siteConfig('TERMINAL_ARTICLE_RECOMMEND_POSTS', true, CONFIG) && (
                <RecommendPosts recommendPosts={recommendPosts} />
              )}
            </>
          )}

          <div className='mt-8'>
            <Comment frontMatter={post} />
          </div>
        </div>
      )}
    </>
  )
}

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
    <div className='flex items-center justify-center min-h-[50vh]'>
      <div className='text-sm space-y-3'>
        <div className='flex items-baseline gap-2'>
          <span className='text-[#a6e3a1]'>~</span>
          <span className='text-[#89b4fa]'>$</span>
          <span className='text-[#f38ba8]'>command not found:</span>
          <span className='text-[#cdd6f4]'>{router.asPath}</span>
        </div>
        <div className='ml-9 text-xs text-[#585b70]'>
          Redirecting to / in 3s...
        </div>
      </div>
    </div>
  )
}

const LayoutCategoryIndex = props => {
  const { categoryOptions } = props

  return (
    <div>
      <div className='text-xs text-[#585b70] mb-8'>
        ~/<span className='text-[#a6e3a1]'>category</span>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
        {categoryOptions?.map(category => (
          <SmartLink key={category.name} href={`/category/${category.name}`} passHref legacyBehavior>
            <div className='border border-[#313244] rounded bg-[#1e1e2e] hover:border-[#89b4fa] p-4 transition-colors cursor-pointer group'>
              <div className='text-sm text-[#a6e3a1] group-hover:text-[#89b4fa] transition-colors font-bold mb-1'>
                /{category.name}
              </div>
              <div className='text-xs text-[#585b70]'>
                {category.count} posts
              </div>
            </div>
          </SmartLink>
        ))}
      </div>
    </div>
  )
}

const LayoutTagIndex = props => {
  const { tagOptions } = props

  return (
    <div>
      <div className='text-xs text-[#585b70] mb-8'>
        ~/<span className='text-[#f9e2af]'>tag</span>
      </div>

      <div className='flex flex-wrap gap-2'>
        {tagOptions.map(tag => (
          <SmartLink key={tag.name} href={`/tag/${encodeURIComponent(tag.name)}`} passHref>
            <span className='inline-flex items-center border border-[#313244] rounded bg-[#1e1e2e] hover:border-[#89b4fa] px-3 py-1.5 text-xs text-[#cdd6f4] hover:text-[#f9e2af] transition-colors cursor-pointer'>
              #{tag.name}
              {tag.count ? <span className='ml-1.5 text-[#585b70]'>({tag.count})</span> : ''}
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
