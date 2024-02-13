import GetStartedButton from '@/components/common/buttons/start-button'
import TopNav from '@/components/nav/top'

import HeaderLogo from '../logo'

export default function TopHeader() {
  return (
    <header className="fixed z-20 h-12 w-full max-w-screen-xl mx-auto backdrop-blur-sm border-b border-white-4 flex justify-between items-center px-3 py-1">
      <HeaderLogo />
      <TopNav />
      <GetStartedButton type="outline" />
    </header>
  )
}
