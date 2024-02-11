import React from 'react'

import StartButton from '../common/buttons/start-button'
import TopNav from '../nav/top'
import HeaderLogo from './logo'

export default function Header() {
  return (
    <header className='fixed z-20 h-12 w-full border border-orange-300 flex justify-between items-center px-3' >
      <HeaderLogo />
      <TopNav />
      <StartButton />
    </header>
  )
}
