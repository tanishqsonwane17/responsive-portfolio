import React from 'react';
import Project from './Project';

const Skills = () => {
  const FrontData = [
    {
      name: 'HTML, CSS',
      value: '1,126',
      img: 'https://banner2.cleanpng.com/20180811/jei/4a1de814e3691021bf8c94671ed712d4.webp',
      date: '2 days ago',
         obj:'object-contain'
    },
    {
      name: 'js & ts',
      value: '1,140',
      img: 'https://miro.medium.com/v2/resize:fit:1400/1*N6ugtpXET1pOLysSk_DWaQ.png',
      date: '5 days ago',
      
    },
    {
      name: 'Next.js',
      value: '1,250',
      img: 'https://kyan-2015.s3.eu-west-1.amazonaws.com/production-2018/uploads/news_entry/image/255/medium_news_size_next-js-header.jpg',
      date: '5 days ago',
         obj:'object-cover'
       
    },
    {
      name: 'react.js',
      value: '1,300',
      img: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/136324251/original/59e87f1327c9a2ef6a2e68a9828611aa3d778cb3/develop-react-app-for-you.jpg',
      date: '5 days ago',
         obj:'object-cover'
    },
    {
      name: 'three.js',
      value: '1,020',
      img: 'https://i.ytimg.com/vi/d-70Ow7htHE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCWgSRnSS8IOiRFTWfwKnMG2AkblA',
      date: '5 days ago',
         obj:'object-cover'
    },
    {
      name: 'Tailwind css',
      value: '2,320',
      img: 'https://krs.co.za/wp-content/uploads/2024/03/Tailwind-logo-on-a-soft-blue-background.jpg',
      date: '5 days ago',
         obj:'object-cover'
    },
    {
      name: 'Gsap',
      value: '0,920',
      img: 'https://imgs.search.brave.com/5y4vOy3a3MLJf_S1OWJa_sBXQKVeD5StuQtLEuYxaHI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0LzI1/MlVTRndoVWFWZUZt/NjY0aFd6RkEtMzIw/LTgwLmpwZw',
      date: '5 days ago',
         obj:'object-cover'
    },
    {
      name: 'framer Motion',
      value: '0,230',
      img: 'https://dimitrisanastasiadis.com/images/motion.png',
      date: '5 days ago',
    },
  ];
  const BackData = [
    {
      name: 'Node.js',
      value: '1,140',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw0uM3M25tDITF6GSHpe8TyNDGPKujgzWXkg&s',
      date: '5 days ago',
    },
    {
      name: 'express.js',
      value: '1,140',
      img: 'https://cdn.prod.website-files.com/6320125ace536b6ad148eca3/66502d746f57d299fe0e0c31_Image%201-Express.js.webp',
      date: '5 days ago',
    },
    {
      name: 'Deno',
      value: '1,140',
      img: 'https://miro.medium.com/v2/resize:fit:1200/1*O8n5d6QlAhrCARUfvW7BLA.png',
      date: '5 days ago',
    },
    {
      name: 'Nextauth.js',
      value: '1,140',
      img: 'https://external-preview.redd.it/NlXfI2V7xWs2qBXSCofuS_LK6h35fUGHCJFNTQO28xw.jpg?auto=webp&s=40dd2bedee03bd4f185a231e15b592c5043ea9d0',
      date: '5 days ago',
    },

   
  ]
  const Databse=[
    {
      name: 'mongodb',
      value: '1,140',
      img: 'https://coursework.vschool.io/content/images/2015/11/f0c6acff24bc794.png',
      date: '5 days ago',
    },
    {
      name: 'postgress',
      value: '1,140',
      img: 'https://d4.alternativeto.net/vKbRomDznPtICSaWPiWVIIEWJMNuXWym-tb9MGg7vUE/rs:fill:1520:760:0/g:ce:0:0/YWJzOi8vZGlzdC9jb250ZW50LzE2OTQ3NzQzMDE0MzYucG5n.png',
      date: '5 days ago',
    },
    {
      name: 'redis',
      value: '1,140',
      img: 'https://i.ytimg.com/vi/OG610oe_kxs/maxresdefault.jpg',
      date: '5 days ago',
    },
    {
      name: 'elastic search',
      value: '1,140',
      img: 'https://www.sixt.tech/assets/elastic-serach/elastic.png',
      date: '5 days ago',
    },
  ]
 const DevData=[
  {
    name: 'version cotrol: git',
    value: '1,140',
    img: 'https://miro.medium.com/v2/resize:fit:1400/1*mtsk3fQ_BRemFidhkel3dA.png',
    date: '5 days ago',
  },
  {
    name: 'jenkins',
    value: '1,140',
    img: 'https://ac.appcircle.io/wp-content/uploads/2022/11/AnyConv.com__jenkins-issues.webp',
    date: '5 days ago',
  },
  {
    name: ' Docker',
    value: '1,140',
    img: 'https://static1.howtogeekimages.com/wordpress/wp-content/uploads/csit/2021/04/075c8694.jpeg',
    date: '5 days ago',
  },
  {
    name: ' Terraform',
    value: '1,140',
    img: 'https://spinspire.com/sites/default/files/2023-03/1640019487-og-image.png',
    date: '5 days ago',
  },

  {
    name: 'r-t-c tool: slack',
    value: '1,140',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ4rcVhxdxmoaEY34umCCh2g4djpTCy-GxyQ&s',
    date: '5 days ago',
  },
  {
    name: 'new relic',
    value: '1,140',
    img: 'https://vercel.com/_next/image?url=https%3A%2F%2Fvercel.com%2Fapi%2Fv1%2Fintegrations%2Fassets%2Foac_mVqlCxaQSQG7o2rHWeUsC4ep%2Fimages%2F263b8a9f9bfd6b4040f9810022e26cc4e6bdb640.png&w=3840&q=75',
    date: '5 days ago',
  },
 ]

  return (
    <>
      <section id="Frontend-skills">
        {/* <h1 className="title -ml-40">Skills</h1> */}
        <h1 className="Header uppercase pt-20  mx-12 text-[3.2vh]">
  <span className="SkillTitle">front<span>end</span></span>
</h1>
        {/* Parent Div */}
        <div className="parentDiv flex flex-wrap gap-[5vw] mx-[3vw] -mt-4 ">
          {FrontData.map((item, index) => {
            return (
              <div key={index} className="childDivs text-gray-300 -pt-40 h-52  ">
                <img
                  className={`h-[20vh] w-[17vw] ${item.obj}  rounded-md my-10 bg-white border-b-[5px] border-white`}
                  src={item.img}
                  alt="Skill"
                  
                />
                <div className="GreenLine h-[5px] w-[12vw] rounded-2xl bg-[#33cd78] mt-[-6.1vh]"></div>
                <h1 className="Name text-sm font-medium mt-1 uppercase tracking-wide">{item.name}</h1>
                <p className="text-xs text-gray-600 mt-1">
                  {item.value} <i className="ri-history-line mx-[1.5vw]">{item.date}</i>
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <section id="Backend-skills" >
      <h1 className="Header uppercase pt-14 mt-[15.2vh] mx-12 text-[3.2vh]">
  <span className="SkillTitle">Back<span>end</span></span>
</h1>
        {/* Parent Div */}
        <div className="parentDiv flex flex-wrap gap-[5vw] mx-[3vw] -mt-4">
          {BackData.map((item, index) => {
            return (
              <div key={index} className="childDivs text-gray-300 -pt-40 h-52">
                <img
                  className="h-[20vh] w-[17vw] object-cover rounded-md my-10 bg-[#474556] border-b-[5px] border-white"
                  src={item.img}
                  alt="Skill"
                  
                />
                <div className="GreenLine h-[5px] w-[12vw] rounded-2xl bg-[#33cd78] mt-[-6.1vh]"></div>
                <h1 className="text-sm font-medium mt-1 uppercase tracking-wide">{item.name}</h1>
                <p className="text-xs text-gray-600 mt-1">
                  {item.value} <i className="ri-history-line mx-[1.5vw]">{item.date}</i>
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <section id="databse-Skills">
      <h1 className="Header uppercase pt-10 mt-[6.2vh] mx-12 ">
  <span className="SkillTitle">Data<span>base</span></span>
</h1>
        {/* Parent Div */}
        <div className="parentDiv flex flex-wrap gap-[5vw] mx-[3vw] -mt-4">
          {Databse.map((item, index) => {
            return (
              <div key={index} className="childDivs text-gray-300 -pt-40 h-52 ">
                <img
                  className="h-[20vh] w-[17vw] object-cover rounded-md my-10 bg-green-200 border-b-[5px] border-white"
                  src={item.img}
                  alt="Skill"
                  
                />
                <div className="GreenLine h-[5px] w-[12vw] rounded-2xl bg-[#33cd78] mt-[-6.1vh]"></div>
                <h1 className="text-sm font-medium mt-1 uppercase tracking-wide">{item.name}</h1>
                <p className="text-xs text-gray-600 mt-1">
                  {item.value} <i className="ri-history-line mx-[1.5vw]">{item.date}</i>
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <section id="Devops-skills" >
      <h1 className="Header uppercase pt-20 mt-[15.2vh] mx-12 ">
  <span className="SkillTitle">Dev<span>ops</span></span>
</h1>

        {/* Parent Div */}
        <div className="parentDiv flex flex-wrap gap-[5vw] mx-[3vw] -mt-4">
          {DevData.map((item, index) => {
            return (
              <div key={index} className="childDivs text-gray-300 -pt-40 h-52">
                <img
                  className="h-[20vh] w-[17vw] object-cover rounded-md my-10 bg-[#474556] border-b-[5px] border-white"
                  src={item.img}
                  alt="Skill"
                  
                />
                <div className="GreenLine h-[5px] w-[12vw] rounded-2xl bg-[#33cd78] mt-[-6.1vh]"></div>
                <h1 className="text-sm font-medium mt-1 uppercase tracking-wide">{item.name}</h1>
                <p className="text-xs text-gray-600 mt-1">
                  {item.value} <i className="ri-history-line mx-[1.5vw]">{item.date}</i>
                </p>
              </div>
            );
          })}
        </div>
      </section>
      

      <Project/>
    </>
  );
};

export default Skills;
