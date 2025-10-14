import { Container } from '@mui/material'
import netflix1 from './assets/netflix-1.png'
import netflix2 from './assets/netflix-2.png'
import linklogo from './assets/link-logo.png'
import githublogo from './assets/github-logo.png'
import weatherimg from './assets/weatherimg.png'
import todoapp from './assets/todoapp.png'

export default function Projects() {
  return (
    <Container maxWidth='sm' id='project'>
      <div className='items-center justify-center text-center'>
        <h1 className='text-[oklch(54.6%_0.245_262.881)] mt-40'>PORTFOLIO</h1>
        <div className='flex flex-row gap-4 items-center mt-10'>
          <div className='relative w-1/2'>
            <img src={netflix1} className='w-60 rounded-xl' />
          </div>
          <div className='w-1/2 text-center items-center'>
            <h1 className="font-bold mb-5">NETFLIX CLONE</h1>
            <p> A Netflix clone that lets users browse and search a wide range of movies and series with a clean, responsive interface inspired by the original platform.
            </p>
          </div>
        </div>
        <div className='flex flex-row gap-4 items-center mt-10'>
          <div className='w-1/2 text-center items-center'>
            <p> Users can log in with any email (no verification needed) to save favorites, while guests can browse freely without this feature.
            </p>
          </div>
          <div className='relative w-1/2'>
            <img src={netflix2} className='w-60 rounded-xl' />
          </div>
        </div>
        <h1 className='mb-5 font-semibold mt-10'>React&nbsp;&nbsp; Typescript &nbsp;&nbsp; Tailwind</h1>
        <div className="flex flex-row items-center justify-center gap-6 mt-10">
          <a
            href="https://github.com/michella1233/movie-project"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2">
            Code <img className="logo-icon" src={githublogo} />
          </a>
          <a
            href="https://michellalaoh.github.io/movie-project/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2">
            Live Demo <img className="logo-icon" src={linklogo} />
          </a>
        </div>
      </div>

      <div className='items-center justify-center text-center mt-40'>
        <div className='flex flex-row gap-4 items-center mt-10'>
          <div className='relative w-1/2'>
            <img src={weatherimg} className='w-80 rounded-xl' />
          </div>
          <div className='w-1/2 text-center items-center'>
            <h1 className="font-bold mb-5">WEATHER APP</h1>
            <p> A responsive weather app where users can search any city and view real-time data in Celsius or Fahrenheit, including humidity, wind speed, and conditions — all in a clean, easy-to-use interface.
            </p>
          </div>
        </div>
        <h1 className='mb-5 font-semibold mt-10'>React &nbsp;&nbsp; Javascript &nbsp;&nbsp; CSS</h1>
        <div className="flex flex-row items-center justify-center gap-6 mt-10">
          <a
            href="https://github.com/michella1233/weather-app"
            target="_blank"
            rel="noopener noreferrer" className="flex items-center gap-2">
            Code <img className="logo-icon" src={githublogo} />
          </a>
          <a
            href="https://michellalaoh.github.io/weather-app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2">
            Live Demo <img className="logo-icon" src={linklogo} />
          </a>
        </div>
      </div>

      <div className='items-center justify-center text-center mt-40'>
        <div className='flex flex-row gap-4 items-center mt-10'>
          <div className='w-1/2 text-center items-center'>
            <h1 className="font-bold mb-5">TODO APP</h1>
            <p> A simple and intuitive to-do app where users can add, edit, and remove tasks with custom titles and dates, helping them stay organized and manage daily goals efficiently.
            </p>
          </div>
          <div className='relative w-1/2'>
            <img src={todoapp} className='w-80 rounded-xl' />
          </div>
        </div>
        <h1 className='mb-5 font-semibold mt-10'>Javascript &nbsp;&nbsp; CSS</h1>
        <div className="flex flex-row items-center justify-center gap-6 mt-10">
          <a
            href="https://github.com/michella1233/Michella-Todo-App"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2">
            Code <img className="logo-icon" src={githublogo} />
          </a>
          <a
            href="https://michellalaoh.github.io/todo-app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2">
            Live Demo <img className="logo-icon" src={linklogo} />
          </a>
        </div>

      </div>
    </Container>
  )
}