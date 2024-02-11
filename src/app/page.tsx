import Header from '@/components/header'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function Home() {
  return (
    <article className="h-screen">
      <Header />
      <ScrollArea className='pt-12' >
        <section className="h-screen border border-blue-400">
          <p>top page</p>
        </section>
        <section className="h-screen border border-blue-400"></section>
        <section className="h-screen border border-blue-400"></section>
      </ScrollArea>
    </article>
  )
}
