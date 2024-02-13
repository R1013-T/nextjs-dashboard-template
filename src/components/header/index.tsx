import TopHeader from './top'

export default function Header({ type }: { type: 'top' | 'dashboard' }) {
  return <>{type === 'top' && <TopHeader />}</>
}
