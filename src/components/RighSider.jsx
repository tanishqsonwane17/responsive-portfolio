import React from 'react'
import Skills from './Skills'
import dp from '../assets/dp.jpeg'
import PhoneNavigation from './phoneNavigation'
const RighSider = () => {
  return (
    <div className="MainDiv h-full w-full bg-cover bg-center bg-[rgb(20,19,26)] bg-no-repeat  left-[12vw] overflow-x-hidden fixed before:content-[''] before:absolute before:inset-0  before:mix-blend-overlay">
    <section id='Home'>
    <div className='profileParent flex h-28  w-full  p-1  md:relative fixed'>
      <div className="profile h-20 w-20  rounded-full ml-[2vw] my-4 md:border-2 ">
        <img className="h-full w-full object-cover overflow-hidden rounded-full" src={dp} alt="" />
        <h1 className="myName mx-[18vw] -mt-[7vh]  whitespace-nowrap text-xl  font-bold md:-mt-[10vh] md:text-2xl md:mx-[7vw] ">Tanishq  sonwane</h1>
        <a href="https://www.instagram.com/tanishqsonwane17/" className="ig text-gray-600 mx-20 md:mx-36 cursor-pointer whitespace-nowrap text-[12px] md:mt-1   ">@tanishqsonwane17</a>       <PhoneNavigation/>
        <h1 className="Profession  mx-[32vw]  mt-[-6vh]  whitespace-nowrap text-2xl font-semibold uppercase ">a full stack web developer</h1>
      </div>
      </div>
    </section>

      {/* paragraph */}
      <h2 className='phoneProfession text-[6vh] my-24 uppercase  text-gray-400'><span className='text-zinc-300 mx-4 text-4xl'>🚀 a full stack </span> <span className='tracking-tight mx-2 text-zinc-400'>web developer</span></h2>
      <p className="text-gray-400 -mt-16 text-[14px] leading-7 px-[4vw] md:mr-[10vw]   md:mt-[22vh] text-justify">
      I am Tanishq Sonwane, a dedicated Full-Stack Web Developer with a sharp creative edge, currently pursuing my Bachelor of Computer Applications (BCA) at Makhanlal Chaturvedi National University. My journey into coding reflects a passion for uniting technical precision with imaginative innovation to craft meaningful digital experiences.
            <br /><br />
            Being a full-stack developer, I specialize in crafting seamless, end-to-end digital experiences that are both visually compelling and functionally robust. I believe in blending the unconventional with the practical, designing web solutions that go beyond meeting requirements—they tell a story, engage users, and solve real-world problems.
            <br /><br />
<p className='font-bold'>A real coder is not just someone who clone websites, but someone who turns their own ideas into working code.</p>
            <br /><br />
            {/* I am proficient in DevOps practices, utilizing tools like Docker and Kubernetes for containerization and orchestration, ensuring smooth CI/CD pipelines with platforms like Jenkins and GitHub Actions. Beyond coding and technical development, <span className="Highlited">I have strong skills in version control</span> systems like Git, and I consistently follow best practices to maintain clean, readable, and maintainable code. */}
            <br /><br /> 
            {/* <span className="Highlited">I have experience with UI/UX principles</span>, wireframing, and prototyping using tools like Figma and Adobe XD to create intuitive interfaces that meet user needs. I am also continuously learning and staying up-to-date with emerging trends in web technologies to ensure that my skill set remains cutting-edge. Whether it's optimizing front-end performance, scaling back-end systems, designing database architectures, or ensuring the security of a web application, I have the expertise and drive to deliver high-quality solutions in a fast-paced development environment. */}
        </p>
        <Skills/>
    </div>
    
  )
}

export default RighSider