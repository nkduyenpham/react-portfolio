import './App.css'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Introduction from './components/Introduction/Introduction'
// import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Project'
import Skills from './components/Skills/Skills'
// import { ThemeProvider } from './reuse/ThemeContext'

function App() {

  return (
    <>
      <Introduction />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
