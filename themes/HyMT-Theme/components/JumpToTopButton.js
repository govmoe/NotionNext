import { useGlobal } from '@/lib/global'
import { useEffect, useState } from 'react'

const JumpToTopButton = () => {
  const { locale } = useGlobal()
  const [show, switchShow] = useState(false)
  const scrollListener = () => {
    const scrollY = window.pageYOffset
    if (scrollY > 300 !== show) switchShow(scrollY > 300)
  }
  useEffect(() => {
    document.addEventListener('scroll', scrollListener, { passive: true })
    return () => document.removeEventListener('scroll', scrollListener)
  }, [show])

  return (
    <button
      title={locale.POST.TOP}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`${show ? 'opacity-100' : 'opacity-0 pointer-events-none'} w-10 h-10 rounded-sm bg-[#3d4450] hover:bg-[#4f5764] flex items-center justify-center text-[#c6d4df] shadow-lg transition-all duration-300`}>
      <i className='fas fa-chevron-up text-sm' />
    </button>
  )
}
export default JumpToTopButton
