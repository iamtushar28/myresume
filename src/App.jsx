import About from './components/About'
import Awards from './components/Awards'
import Education from './components/Education'
import Footer from './components/Footer'
import Profile from './components/Profile'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import './index.css'

function App() {

  return (
    <main className='w-full mb-4 px-4 md:w-[600px] h-auto pt-8 md:pt-14 flex flex-col gap-8'>

      <Profile />

      <About />

      <TechStack />

      <Projects />

      <Education />

      <Awards/>

      <Footer/>

    </main>
  )
}

export default App
