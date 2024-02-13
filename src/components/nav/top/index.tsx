import TopNavItem from './nav-item'

export default function TopNav() {
  return (
    <nav className="flex gap-3">
      <TopNavItem href="#section1" name="section1" />
      <TopNavItem href="#section2" name="section2" />
      <TopNavItem href="#section3" name="section3" />
    </nav>
  )
}
