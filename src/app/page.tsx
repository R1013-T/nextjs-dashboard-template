import Header from '@/components/header'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function Home() {
  return (
    <article className="h-screen">
      <Header />
      <ScrollArea className="pt-12 px-2">
        <section className="h-screen">
          <p>top page</p>
        </section>
        <section className="h-screen"></section>
      </ScrollArea>
    </article>
  )
}
