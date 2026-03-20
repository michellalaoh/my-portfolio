import { Container } from '@mui/material'
import linklogo from './assets/link-logo.png'
import githublogo from './assets/github-logo.png'
import gogreenly1 from './assets/gogreenly1.png'
import gogreenly2 from './assets/gogreenly2.png'

export default function Projects() {
  return (
    <Container maxWidth='sm' id='project'>
      <div className='items-center justify-center text-center'>
        <h1 className='text-[oklch(54.6%_0.245_262.881)] mt-40'>PORTFOLIO</h1>
        <div className='flex flex-row gap-4 items-center mt-10'>
          <div className='relative w-1/2'>
            <img src={gogreenly1} className='w-60 rounded-xl' />
          </div>
          <div className='w-1/2 text-center items-center'>
            <h1 className="font-bold mb-5">GOGREENLY BUSINESS PAGE</h1>
            <p>GoGreenly is a simple full-stack web application built with React.js on the frontend and Node.js on the backend. It lets users browse vegan products, view details, add items to their cart, and manage their checkout flow.
            </p>
          </div>
        </div>
        <div className='flex flex-row gap-4 items-center mt-10'>
          <div className='w-1/2 text-center items-center'>
            <p> The backend handles loading product data and processing cart operations, while the React interface keeps the experience fast, clean, and responsive.
            </p>
          </div>
          <div className='relative w-1/2'>
            <img src={gogreenly2} className='w-60 rounded-xl' />
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
    </Container>
  )
}