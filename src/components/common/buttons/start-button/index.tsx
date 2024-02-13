import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'

export default function GetStartedButton({
  type,
}: {
  type: 'default' | 'outline'
}) {
  return (
    <Link
      href="/dashboard"
      className={`${buttonVariants({ variant: type })} bg-brand-2/20 border-brand-1 text-brand-1`}
    >
      さあ初めましょう！
    </Link>
  )
}
