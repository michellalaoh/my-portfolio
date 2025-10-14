import './App.css'
import About from './About'
import Home from './Home'
import Projects from './Projects'
import Contact from './Contact'

function App() {

  return (
    <>
      <div className='fixed top-0 left-0 w-full bg-rose-200 z-50 shadow-md backdrop-blur-md'>
        <div className='max-w-screen-lg mx-auto flex justify-between items-center py-4 px-6'>
          <div className='font-bold text-sm pr-3'>
            michellalaoh.space
          </div>
          <div className='flex gap-8'>
            <a href="#home" className='cursor-pointer hover:text-[oklch(54.6%_0.245_262.881)]'>Home</a>
            <a href="#about" className='cursor-pointer hover:text-[oklch(54.6%_0.245_262.881)]'>About</a>
            <a href="#project" className='cursor-pointer hover:text-[oklch(54.6%_0.245_262.881)]'>Projects</a>
            <a href="#contact" className='cursor-pointer hover:text-[oklch(54.6%_0.245_262.881)]'>Contact</a>
          </div>
        </div>
      </div>

      <Home />
      <About />
      <Projects />
      <Contact />


    </>
  )
}

export default App
