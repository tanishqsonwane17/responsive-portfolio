import React from 'react'
import { FaHome } from "react-icons/fa";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { LuPaintbrush2 } from "react-icons/lu";;
import { CgProfile } from "react-icons/cg";
import { FaPenToSquare } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { BiBasketball } from "react-icons/bi";
import { FaDiscord } from "react-icons/fa"
import { ImStackoverflow } from "react-icons/im";
import { SiAzuredevops } from 'react-icons/si';
import { MdOutlineTouchApp } from "react-icons/md"; 
const Sidebar = () => {
  return (
    <>
    
    <div className='navbar w-[12vw] h-full bg-[#1c1b22] fixed '>
        <nav>
        <ul className="flex text-[rgb(196,194,194)] flex-col gap-7 px-10  text-xs">
            <li className="home pt-11 ">
                <a href="#Home"><FaHome className='-mx-6 text-[2.2vh] fixed '/>  Home</a>
            </li>
            <li className="home ">
                <a href="#"><CgProfile className='-mx-6 text-[2.2vh] fixed '/>  About</a>
            </li>
            <li>
                <a href="#projects">
                    <span className="home"><FaPenToSquare className='-mx-6 text-[2.2vh] fixed '/> Projects</span>
                </a>
            </li>
            <div className="line h-[.1px] w-[10vw] -mx-7"></div>
            <li className="sideworks">
                <a href="" className="home tracking-tighter text-sm text-zinc-400 font-semibold">What i know ?</a>
            </li>
            <li>
                <a href="#Frontend-skills" className="uppercase">
                    <span className="home "><LuPaintbrush2 className='-mx-6 text-[2.2vh] fixed '/> Frontend</span>
                </a>
            </li>
            <li>
                <a href="#Backend-skills" className="uppercase">
                    <span className="home"><HiOutlineWrenchScrewdriver className='-mx-6 text-[2.2vh] fixed '/> Backend</span>
                </a>
            </li>
            <li>
                <a href="#Devops-skills" className="uppercase">
                    <span className="home"><SiAzuredevops className='-mx-6 text-[2.2vh] fixed '/> devops</span>
                </a>
            </li>
            <div className="line h-[.1px] w-[10vw] -mx-7"></div>
            <li className="sideworks">
                <a href="#" className="home tracking-tighter text-sm text-zinc-400 font-semibold flex">Get in touch  </a>
              
            </li>
            <li>
                <a target="_blank" rel="noopener noreferrer" href="https://x.com/tanxocean">
                    <span className="home"><RiTwitterXLine className='-mx-6 text-[2.2vh] fixed'/> X.com</span>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tanishq-sonwane-5097542b1/">
 <span className="home"><FaLinkedin className='-mx-6 text-[2.2vh] fixed'/> LinkedIn</span>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/tanishqsonwane17">
                    <span className="home"><BiBasketball className='-mx-6 text-[2.2vh] fixed'/> Dribbble</span>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noopener noreferrer" href="https://discord.com/channels/@me">
                    <span className="home"><FaDiscord className='-mx-6 text-[2.2vh] fixed'/> Discord</span>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/27250599/tanishqsonwane">
                    <span className="home text-[13px]"><ImStackoverflow className='-mx-6 text-[2.2vh] fixed'/> Stack Overflow</span>
                </a>
            </li>
            <div className="line h-[.1px] w-[10vw] -mx-7"></div>
            <p className="home text-gray-300 text-xs">
                <span className="text-red-400">Portfolio</span> @2024
            </p>
        </ul>
        </nav>
    </div>
    
    </>
  )
}

export default Sidebar