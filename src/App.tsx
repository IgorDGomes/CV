import * as ContextMenu  from "@radix-ui/react-context-menu"
import { Toaster, toast } from 'sonner'

import { Contact } from "./sections/Contact"
import { Footer } from "./sections/Footer"
import { Header } from "./sections/Header"
import { Hero } from "./sections/Hero"
import { Projects } from "./sections/Projects"
import { Skills } from "./sections/Skills"

function App() {
  
  return (
    <ContextMenu.Root onOpenChange={() => {
      toast.info("The right click only works in the header!")
    }}>
      <Header />
      <Toaster richColors />
      <ContextMenu.Trigger>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </ContextMenu.Trigger>
    </ContextMenu.Root>
  )
}

export default App
