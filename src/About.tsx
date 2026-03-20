import { Container } from '@mui/material'
import aboutme from './assets/aboutme2.jpg'

export default function About() {
  return (
    <Container maxWidth='sm' id='about'>
      <div className='flex sm:flex-row flex-col mt-40 gap-4 items-center'>
        <div className='relative w-1/2'>
          <img src={aboutme} className='w-80 rounded-2xl sm:h-auto h-[120px] sm:w-60 object-cover' />
        </div>
        <div className='sm:w-1/2 w-full'>
          <h1 className="text-[oklch(54.6%_0.245_262.881)] mb-5 justify-center items-center flex">ABOUT ME</h1>
          <p> As a junior <span className='font-semibold'>full-stack developer</span> with a background in <span className='font-semibold'>International Business</span>, I’m passionate about <span className='font-semibold'>creating clean, responsive, and user-friendly web applications.</span> I work with technologies such as <span className='font-semibold'>React, JavaScript, TypeScript, HTML, CSS, Tailwind, Node.js, NestJS and Git.</span> I’m a <span className='font-semibold'>fast learner, easy to adapt, and value teamwork and integrity</span> in everything I do. I’m also fluent in <span className='font-semibold'>Indonesian, English, and Chinese,</span> which helps me to connect and collaborate with people from diverse backgrounds.
          </p>
        </div>
      </div>
    </Container>
  )
}