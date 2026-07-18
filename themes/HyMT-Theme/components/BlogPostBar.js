import { useGlobal } from '@/lib/global'

export default function BlogPostBar(props) {
  const { tag, category } = props
  const { locale } = useGlobal()

  return (
    <div className='sticky top-[100px] z-[3] h-[56px] flex items-center bg-[#0f1924]'>
      {tag && (
        <h2 className='text-lg font-semibold tracking-wider uppercase text-[#e5e5e5]'>
          TAG: <span className='text-[#1a9fff]'>{tag}</span>
        </h2>
      )}
      {category && (
        <h2 className='text-lg font-semibold tracking-wider uppercase text-[#e5e5e5]'>
          CATEGORY: <span className='text-[#1a9fff]'>{category}</span>
        </h2>
      )}
      {!tag && !category && (
        <h2 className='text-lg font-semibold tracking-wider uppercase text-[#e5e5e5]'>
          {locale.COMMON.TAGS}
        </h2>
      )}
      <div className='flex-1 mx-4 border-t border-[#373c44]' />
    </div>
  )
}
