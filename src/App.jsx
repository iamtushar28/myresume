import About from './components/About'
import Profile from './components/Profile'
import TechStack from './components/TechStack'
import './index.css'

function App() {

  return (
    <main className='w-full mb-4 px-4 md:w-[600px] h-auto pt-8 md:pt-14 flex flex-col gap-6'>

      <Profile />

      <About />

      <TechStack />

    </main>
  )
}

export default App
