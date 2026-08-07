import { useState, useEffect } from 'react'

export default function JumpToTopButton() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const listener = () => setShow(window.pageYOffset > 400)
    document.addEventListener('scroll', listener, { passive: true })
    return () => document.removeEventListener('scroll', listener)
  }, [])

  if (!show) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className='px-3 py-1.5 text-xs bg-[#1e1e2e] border border-[#313244] rounded text-[#585b70] hover:text-[#89b4fa] hover:border-[#89b4fa] transition-colors shadow-lg'
    >
      cd /
    </button>
  )
}
