import { Container } from '@mui/material'
import aboutme from './assets/aboutme2.jpg'

export default function About() {
  return (
    <Container maxWidth='sm' id='about'>
      <div className='flex flex-row mt-40 gap-4 items-center'>
        <div className='relative w-1/2'>
          <img src={aboutme} className='w-60 rounded-2xl' />
        </div>
        <div className='w-1/2'>
          <h1 className="text-[oklch(54.6%_0.245_262.881)] mb-5">ABOUT ME</h1>
          <p> As a junior front-end developer with a background in <span className='font-semibold'>International Business</span>, I’m passionate about <span className='font-semibold'>creating clean and responsive interfaces</span> using <span className='font-semibold'>React, JavaScript, HTML, CSS, and a bit of TypeScript, Tailwind and Git.</span> I’m a <span className='font-semibold'>fast learner, easy to adapt, and value teamwork and integrity</span> in everything I do. I love exploring new tech and improving my skills. I speak <span className='font-semibold'>Indonesian, English, and Chinese,</span> which helps me connect and collaborate with people from different backgrounds.
          </p>
        </div>
      </div>
    </Container>
  )
}