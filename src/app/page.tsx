import React from 'react'
import Hero from './portfolio/hero/page';
import Skills from './portfolio/skills/page';
import Projects from './portfolio/projects/page';
import Resume from './portfolio/resume/page';
import Testimonial from './portfolio/testimonial/page';
import PopularClients from './portfolio/popular-clients/page';
import ContactForm from './portfolio/contact-form/page';
import ClientsPage from './portfolio/clients/page';
import Navbar from '@/components/Navbar';


const portfolio = () => {
  return (
    
    <>
    <Navbar/>
    <Hero/>
    <ClientsPage/>
    <Skills/>
    <Projects/>
    <Resume/>
    <Testimonial/>
    <PopularClients/>
    <ContactForm/>
    </>

  )
}

export default portfolio