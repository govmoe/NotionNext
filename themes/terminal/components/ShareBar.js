import { useEffect, useState } from 'react'
import { siteConfig } from '@/lib/config'

export default function ShareBar({ post }) {
  const [shareUrl, setShareUrl] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => { setShareUrl(window.location.href) }, [])

  const copyLink = () => {
    navigator.clipboard?.writeText(shareUrl).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  return (
    <div className='flex items-center gap-4 py-4 mt-6 border-t border-[#313244] text-xs'>
      <button onClick={copyLink} className='text-[#a6adc8] hover:text-[#89b4fa] transition-colors'>
        {copied ? 'copied!' : 'copy link'}
      </button>
      <button
        onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post?.title}`, '_blank', 'noopener,noreferrer,width=760,height=640')}
        className='text-[#a6adc8] hover:text-[#89b4fa] transition-colors'>
        tweet
      </button>
    </div>
  )
}
