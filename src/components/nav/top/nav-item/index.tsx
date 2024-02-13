import Link from 'next/link'

export default function TopNavItem({
  href,
  name,
}: {
  href: string
  name: string
}) {
  return <Link href={href}>{name}</Link>
}
