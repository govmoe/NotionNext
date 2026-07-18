import { useGlobal } from '@/lib/global'
import throttle from 'lodash.throttle'
import { uuidToId } from 'notion-utils'
import { useEffect, useRef, useState } from 'react'

const Catalog = ({ post }) => {
  const { locale } = useGlobal()
  const tRef = useRef(null)
  const [activeSection, setActiveSection] = useState(null)

  useEffect(() => {
    const actionSectionScrollSpy = throttle(() => {
      const sections = document.getElementsByClassName('notion-h')
      let prevBBox = null
      let currentSectionId = activeSection
      for (let i = 0; i < sections.length; ++i) {
        const section = sections[i]
        if (!section || !(section instanceof Element)) continue
        if (!currentSectionId) currentSectionId = section.getAttribute('data-id')
        const bbox = section.getBoundingClientRect()
        const prevHeight = prevBBox ? bbox.top - prevBBox.bottom : 0
        const offset = Math.max(150, prevHeight / 4)
        if (bbox.top - offset < 0) { currentSectionId = section.getAttribute('data-id'); prevBBox = bbox; continue }
        break
      }
      setActiveSection(currentSectionId)
      const index = post?.toc?.findIndex(obj => uuidToId(obj.id) === currentSectionId)
      tRef?.current?.scrollTo({ top: 28 * index, behavior: 'smooth' })
    }, 200)
    window.addEventListener('scroll', actionSectionScrollSpy, { passive: true })
    actionSectionScrollSpy()
    return () => window.removeEventListener('scroll', actionSectionScrollSpy)
  }, [post])

  if (!post?.toc?.length) return <></>

  return (
    <div>
      <div className='text-xs uppercase tracking-wider text-[#a7aeb4] mb-3'>
        {locale.COMMON.TABLE_OF_CONTENTS}
      </div>
      <div className='overflow-y-auto max-h-80' ref={tRef}>
        <nav className='space-y-0.5'>
          {post.toc.map(tocItem => {
            const id = uuidToId(tocItem.id)
            const isActive = activeSection === id
            return (
              <a key={id} href={`#${id}`}
                style={{ paddingLeft: `${8 + tocItem.indentLevel * 16}px` }}
                className={`block py-1.5 text-sm border-l-2 transition-colors ${
                  isActive ? 'border-[#1a9fff] text-[#1a9fff] bg-[#1a9fff]/10' : 'border-transparent text-[#8c8c8c] hover:text-[#c6d4df] hover:border-[#4f5764]'
                }`}>
                <span className='truncate block'>{tocItem.text}</span>
              </a>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
export default Catalog
