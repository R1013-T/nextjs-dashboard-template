import Header from '@/components/header'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function Home() {
  return (
    <article className="h-screen">
      <Header />
      <ScrollArea className="px-2">
        <section
          id="section1"
          className="pt-12 h-screen border-2 border-orange-400"
        >
          <p>section 1</p>
        </section>
        <section
          id="section2"
          className="pt-12 h-screen border-2 border-blue-400"
        >
          <p>section 2</p>
        </section>
        <section id="section3" className="pt-12 `h-screen border-green-400">
          <p>section 3</p>
        </section>
      </ScrollArea>
    </article>
  )
}
