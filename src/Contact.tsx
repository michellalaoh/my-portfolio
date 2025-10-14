import { Container } from '@mui/material'
import mail from './assets/mail.png'
import address from './assets/adress.png'
import walogo from './assets/walogo.png'

export default function Contact() {
  return (
    <Container maxWidth='sm' id='contact'>
      <div>
        <h1 className='text-[oklch(54.6%_0.245_262.881)] mt-40 mb-2'>CONTACT</h1>
        <h1 className='font-bold'>Feel free to reach me out anytime! 👇🏼</h1>
        <div className='flex sm:flex-row flex-col flex-col-reverse
 sm:gap-10 gap-5'>
          <div className='flex flex-row justtify-center items-center sm:mt-5 mt-0'>
            <img className='logo-icon' src={mail} />
            <div className='pl-5'>
              <h1 className='font-bold'>Mail</h1>
              <a
                href='mailto:michellalaoh@gmail.com'
                className='underline cursor-pointer hover:text-[oklch(54.6%_0.245_262.881)] transition-colors'
              >
                michellalaoh@gmail.com
              </a>
            </div>
          </div>
          <div className='flex flex-row justtify-center items-center mt-5'>
            <img className='logo-icon' src={address} />
            <div className='pl-5'>
              <h1 className='font-bold'>Location</h1>
              <span>West Jakarta, Indonesia</span>
            </div>
          </div>
        </div>
        <div className='flex flex-row justtify-center items-center mt-5'>
          <img className='logo-icon' src={walogo} />
          <div className='pl-5'>
            <h1 className='font-bold'>Whatsapp</h1>
            <a
              href='https://wa.me/6289510187928'
              target='_blank'
              rel='noopener noreferrer'
              className='underline cursor-pointer hover:text-[oklch(54.6%_0.245_262.881)] transition-colors'
            >
              0895-1018-7928
            </a>
          </div>
        </div>
      </div>
    </Container>
  )
}