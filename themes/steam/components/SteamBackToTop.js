/**
 * SteamBackToTop Component
 * 回到顶部按钮组件
 */

import React, { useState, useEffect } from 'react'

const SteamBackToTop = ({ showBelow = 300 }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > showBelow)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showBelow])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={steam-back-to-top \}
      title='Back to Top'
    >
      ↑
    </button>
  )
}

export default SteamBackToTop
