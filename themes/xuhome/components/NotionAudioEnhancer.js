import { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import AudioPlayer from './AudioPlayer'

const enhanceAudio = () => {
  const containers = document.querySelectorAll('#notion-article .notion-audio')
  const mounted = []

  containers.forEach(container => {
    const nativeAudio = container.querySelector('audio')
    const src = nativeAudio?.getAttribute('src')
    if (!src) return

    container.replaceChildren()
    const root = createRoot(container)
    root.render(<AudioPlayer src={src} />)
    mounted.push(root)
  })

  return mounted
}

export default function NotionAudioEnhancer({ post }) {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const roots = enhanceAudio()
    return () => roots.forEach(root => root.unmount())
  }, [post?.id])

  return null
}
