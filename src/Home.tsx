import { Container } from '@mui/material'
import myprofile from './assets/myprofile.png'
import linkedinlogo from './assets/linkind.png'
import linkblue from './assets/linkblue.png'
import htmllogo from './assets/html-logo.png'
import csslogo from './assets/css-logo.svg'
import jslogo from './assets/js-logo.png'
import tslogo from './assets/ts-logo.png'
import reactlogo from './assets/react-logo.png'
import gitlogo from './assets/git-logo.png'
import twlogo from './assets/tw-logo.png'

export default function Home() {
  return (
    <Container maxWidth="sm" id="home" className='mt-20'>
      <div className='flex flex-row items-center py-4 gap-8 pb-15'>
        <div className='w-2/3'>
          <h1 className='font-bold text-3xl py-4'>Front-End React Developer 👋🏼</h1>
          <p className='pb-4'>Hi, I'm Michella Laoh. A passionate Front-end React Developer based in Jakarta, Indonesia. 📍</p>
          <div className='flex flex-row gap-4'>

            <a
              href="https://www.linkedin.com/in/michella-laoh-468005289/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center"
            >
              <img
                src={linkedinlogo}
                alt="LinkedIn"
                className="logo-icon absolute transition-all duration-300 group-hover:opacity-0"
              />
              <img
                src={linkblue}
                alt="LinkedIn Hover"
                className="logo-icon transition-all duration-300 transform opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-120"
              />
              <span className="absolute -top-14 left-1/2 -translate-x-1/2 z-20 scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                LinkedIn
              </span>
            </a>


            <div className="group relative">
              <a
                href="https://github.com/michella1233"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center"
              >
                <button>
                  <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" className="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </button>
                <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border  border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">GitHub<span>
                </span>
                </span>
              </a>
            </div>

          </div>
        </div>
        <div className='w-1/3 justify-center'>
          <img src={myprofile} />
        </div>
      </div>
      <div className='flex sm:flex-row flex-col items-center justify-between'>
        <div className='sm:w-1/4 w-full sm:border-r-1 sm:border-black-400 flex items-center justify-center sm:justify-start mb-10 sm:mb-0'>Tech Stack</div>
        <div className='sm:w-3/4 w-full flex flex-row gap-4 sm:justify-end justify-center'>
          <img className='logo-icon' src={htmllogo} />
          <img className='logo-icon' src={csslogo} />
          <img className='logo-icon' src={jslogo} />
          <img className='logo-icon' src={tslogo} />
          <img className='logo-icon' src={reactlogo} />
          <img className='logo-icon' src={twlogo} />
          <img className='logo-icon' src={gitlogo} />
        </div>
      </div>
    </Container>
  )
}