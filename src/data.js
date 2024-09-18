import {DiReact} from "react-icons/di";
import {FaNodeJs} from "react-icons/fa";
import {SiExpress,SiMongodb} from "react-icons/si";
// import { TuringLogo } from "../images"
// import { SiFiverr } from "react-icons/si";
import { AiFillGithub,AiFillLinkedin,AiFillYoutube } from "react-icons/ai";
import { CgFigma } from "react-icons/cg";
import { TbBrandReactNative } from "react-icons/tb";
import { SiAdobexd } from "react-icons/si";
import { SiAngular } from "react-icons/si";

export const menu = [
    {name:"About"},
    {name:"Services"},
    {name:"Skill"},
    {name:"Projects"},
    // {name:"Testimonial"},
    {name:"Contact"},
]



export const projects = [
    { 
      id:1,
      title: 'Aplicacion de citas',
      image: 'https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/64c3a98c73d554712f4559f7/screenshot_2023-07-28-11-42-39-0000.png&fit=cover&h=500&q=40&w=800',
      category:"SPA",
      data:{
         description: `Create a SPA to create apoiments`,
         demoLink: "https://dandemslay-angular-listadocitas.netlify.app/",
      },
      stack:[
        {
          name:"Angular",
          icon: <SiAngular />,
          iconColor:"magenta",
        },
      ]
    },
    {
      id:2,
      title: 'E-Commerce Application',
      image: 'https://cdn.dribbble.com/userupload/8002230/file/original-c8eec16edea4d5c836b2bfabe7fbaa5a.jpg',
      category:"Web",
      data:{
        description:`Enhance your online shopping experience with our E-Commerce Application 
        UI design project. Seamlessly blending aesthetics with functionality, our intuitive 
        interface offers easy navigation, personalized recommendations, and secure 
        transactions. Elevate your digital storefront and captivate customers with a visually 
        stunning design tailored to your brand`,
        demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"ReactJs",
          icon: <DiReact/>,
          iconColor:"skyblue",
        },
        {
          name:"NodeJs",
          icon: <FaNodeJs/>,
          iconColor:"green",
        },
        {
          name:"ExpressJs",
          icon: <SiExpress/>,
        },
        {
          name:"MongoDB",
          icon: <SiMongodb/>,
          iconColor:"limegreen",
        },
      ]
    },
    {
      id:3,
      title: 'Robotic Engineering Web Application',
      image: 'https://s3-alpha.figma.com/hub/file/5101537097/c4a1ed2c-4ab9-43fb-a248-d7ac6b0c3161-cover.png',
      category:"Web",
      data:{
        description: `Unlock the future of robotics with our Robotic Engineering Web Application
        project. Seamlessly integrating cutting-edge technology, data analytics, 
        and collaborative tools, our platform empowers engineers to design, simulate, 
        and optimize robotic systems. Experience innovation at its peak as we redefine the 
        boundaries of robotic engineering.`,
        demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"ReactJs",
          icon: <DiReact/>,
          iconColor:"skyblue",
        },
        {
          name:"NodeJs",
          icon: <FaNodeJs/>,
          iconColor:"green",
        },
        {
          name:"ExpressJs",
          icon: <SiExpress/>,
        },
        {
          name:"MongoDB",
          icon: <SiMongodb/>,
          iconColor:"limegreen",
        },
        {
          name:"MongoDBT",
          icon: <SiMongodb/>,
          iconColor:"limegreen",
        },
        {
          name:"MongoDBT",
          icon: <SiMongodb/>,
          iconColor:"limegreen",
        },
        {
          name:"MongoDBT",
          icon: <SiMongodb/>,
          iconColor:"limegreen",
        },
      ]
    },
    {
      id:4,
      title: 'Project Management application',
      image: 'https://miro.medium.com/v2/resize:fit:1400/1*6iO0wm8q4cByvxY6kB9WiQ.png',
      category:"Apps",
      data:{
        description: `Simplify project coordination with our intuitive Project Management application. Track tasks, collaborate in real-time, and streamline workflows effortlessly. With customizable features and robust reporting, stay organized and efficient.
                       Elevate your project management experience and achieve success with ease.`,
        demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"React Native",
          icon: <TbBrandReactNative/>,
          iconColor:"skyblue",
        },
        {
          name:"NodeJs",
          icon: <FaNodeJs/>,
          iconColor:"green",
        },
        {
          name:"ExpressJs",
          icon: <SiExpress/>,
        },
        {
          name:"MongoDB",
          icon: <SiMongodb/>,
          iconColor:"limegreen",
        },
      ]
    },
    {
      id:5,
      title: 'BMI Calculator',
      image: 'https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/63b45554f750b00668838262/screenshot_2023-01-03-16-18-33-0000.png&fit=cover&h=500&q=40&w=800',
      category:"SPA",
      data:{
        description: `Create a ese BMI Calculator`,
        demoLink: "https://dandemslay-angular-bmicalculator.netlify.app/",
      },
      stack:[
        {
          name:"Angular",
          icon: <SiAngular />,
          iconColor:"magenta",
        },
      ]
    },
    {
      id:6,
      title: 'Quiz App Development',
      image: 'https://i.pinimg.com/originals/b3/35/02/b33502e465346ace2a7f1df203d851a3.jpg',
      category:"Apps",
      data:{
        description: `Elevate engagement and knowledge retention with our Quiz App 
                      Development project. Seamlessly crafted for interactive learning 
                      experiences, our app offers customizable quizzes, real-time feedback, 
                      and captivating visuals. Empower users to test their knowledge anytime,
                       anywhere, fostering a dynamic learning environment tailored to their 
                       needs.`,
        demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"React Native",
          icon: <TbBrandReactNative/>,
          iconColor:"skyblue",
        },
        {
          name:"NodeJs",
          icon: <FaNodeJs/>,
          iconColor:"green",
        },
        {
          name:"ExpressJs",
          icon: <SiExpress/>,
        },
        {
          name:"MongoDB",
          icon: <SiMongodb/>,
          iconColor:"limegreen",
        },
      ]
    },
  ]
  


export const experience = [
    {
        title:"Front End Web Development",
        data:[
            {
                skill:"HTML",
                level:"Experienced",
            },
            {
                skill:"CSS",
                level:"Experienced",
            },
            {
                skill:"Javascript",
                level:"Intermediate",
            },
            {
              skill:"Angular",
              level:"Intermediate",
            },{
              skill:"React",
              level:"Intermediate",
            },{
              skill:"Next",
              level:"Beginner",
            },{
              skill:"Astro",
              level:"Intermediate",
            },{
              skill:"Tailwind",
              level:"Intermediate",
          },{
              skill:"Bootstrap",
              level:"Experienced",
          },
        ]
    },
    {
        title:"Back End Development",
        data:[
            {
                skill:"Node",
                level:"Intermediate",
            },
            {
                skill:"C#",
                level:"Intermediate",
            },
            {
                skill:"PHP",
                level:"Intermediate",
            },
            {
                skill:"SQL",
                level:"Intermediate",
            },
            {
                skill:"MySQL",
                level:"Experienced",
            },
            {
                skill:"MongoDB",
                level:"Experienced",
            },
            {
                skill:"Nest",
                level:"Beginner",
            },
        ]
    },
    {
        title:"DevSecOps",
        data:[
            {
                skill:"AWS",
                level:"Intermediate",
            },
            {
                skill:"Azure",
                level:"Beginner",
            },
            {
                skill:"Git",
                level:"Experienced",
            },
            {
                skill:"CI/CD",
                level:"Intermediate",
            },
            {
                skill:"SAST/DAST",
                level:"Intermediate",
            },
            {
                skill:"OWASP",
                level:"Intermediate",
            },
            {
                skill:"Jenkins",
                level:"Beginer",
            },
            {
                skill:"SonarQube",
                level:"Beginner",
            },
        ]
    },
]


export const socialHandles = [
  /*{
    name:"Turing",
    icon:<TuringLogo/>,
    link:"https://storage.googleapis.com/turing_developers/resume/1600462554177_461692_dandemslay.pdf",
  }, */
  {
    name:"Github",
    icon:<AiFillGithub/>,
    link:"https://github.com/dandemslay",
  },
  {
    name:"LinkedIn",
    icon:<AiFillLinkedin/>,
    link:"https://www.linkedin.com/in/danny-rodriguez-0b9aaa54/",
  },
  /*{
    name:"Youtube",
    icon:<AiFillYoutube/>,
    link:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  },*/
];