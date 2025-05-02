import React from 'react'
import { FaHeadphonesSimple } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaRegChessKing } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegImage } from "react-icons/fa6";
import { BsShare } from "react-icons/bs";
import { CiBadgeDollar } from "react-icons/ci";
import { SlGameController } from "react-icons/sl";
import PhoneNavigation from './PhoneNavigation'

const Project = () => {
  const ChildProjects = [
    {
      Icon:<FaHeadphonesSimple/>,
      backgroundColor:'bg-[#254653]',
      title: 'Spotify clone',
      description: 'html, css, javascript.',
      link: 'https://github.com/Lucas-Mazzucato/spotify-clone',
    },
    {
      Icon:<FaRegChessKing/>,
      backgroundColor:'bg-[#299e8e]',
      title: 'Chess.com',
      description: 'Node.js, Ejs, Mongodb.',
      link: 'https://github.com/Lucas-Mazzucato/spotify-clone',
    },
    {
      Icon:<FiShoppingCart/>,
      backgroundColor:'bg-[#ecbf67]',
      title: 'E-commerce',
      description: 'React, Redux-tool-Kit, tailwindcss.',
      link: 'https://github.com/Lucas-Mazzucato/spotify-clone',
    },
    {
      Icon:<FaRegImage/>,
      backgroundColor:'bg-[#fd2c59]',
      title: 'pinterest clone',
      description: 'Node.js, Ejs, Mongodb.',
      link: 'https://github.com/Lucas-Mazzucato/spotify-clone',
    },
    {
      Icon:<BsShare/>,
      backgroundColor:'bg-[#e86e4d]',
      title: 'instagram clone',
      description: 'Node.js, React.js, tailwindcss.',
      link: 'https://github.com/Lucas-Mazzucato/spotify-clone',
    },
    {
      Icon:<BsShare/>,
      backgroundColor:'bg-[#472817]',
      title: 'file sharing',
      description: 'Node.js, Ejs, Mongodb.',
      link: 'https://github.com/Lucas-Mazzucato/spotify-clone',
    },
    {
      Icon:<SlGameController/>,
      backgroundColor:'bg-[#2e2e30]',
      title: 'snake game clone',
      description: 'Html, Css, Javascript.',
      link: 'https://github.com/Lucas-Mazzucato/spotify-clone',
    },
    
  ]
  return (
    <>
    
   <section id='projects'className='h-[140vh] w-full mt-40  '>
    <h1  className="title -ml-40 pt-5">Projects</h1>
    <div  className="ParentProjects w-full flex gap-10 mx-10 flex-wrap object ">
      {ChildProjects.map((item, index)=>{
        return(
           
          <div key={index} className="ChildrenProjects  h-16 md:w-[40vw]  mt-10 md:bg-[#1c1b22] bg-gray-200  rounded-md overflow-hidden  ">
          <div className={`insider  h-full  md:w-[4.5vw] ${item.backgroundColor} flex justify-center items-center md:text-white text-gray-200 text-2xl`}>
           {item.Icon}
          </div>
          <h1 id="spotifyClone" className="spotify uppercase mx-20 md:text-gray-200 text-slate-600   tracking-wide text-md font-mono -mt-14 z-1">{item.title}</h1>
          <p className="text-gray-500 pt-1 text-xs px-20 uppercase">{item.description}</p>
          <a href={`${item.link}`}>
          <HiOutlineExternalLink className=' md:text-zinc-200 text-slate-600 float-right text-[3.8vh] -mt-[6.7vh] cursor-pointer'/>
          </a>
      </div>
        )
      })}

             </div>
         
   </section >
   <h2 className=' w-full flex justify-center  text-sm'><span className='text-red-400 -mt-2'><span className='text-xl'>&copy;</span><span className='relative -top-[2px]'>Portfolio</span> </span>  <span className='text-zinc-400  font-bold text-xs px-1 -mt-[2px]'> 2025</span></h2>

</>
  ) 
}
export default Project