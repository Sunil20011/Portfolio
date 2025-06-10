import React from 'react';
import pic1 from "../../public/Chat.jpeg";
const projects = [

     {
        title: 'User Authentication',
        description: 'Made a frontend for handling the user authenticationn from API and Databse havinng login and new user signup',
        technologies: ['MongoDB', 'ReactJS', 'NodeJS' ,'JWT', 'JOI'],
        image: 'https://swoopnow.com/wp-content/uploads/2020/07/User-Authentication_-Understanding-the-Basics-Top-Tips.jpg',
        url: 'https://authentication-jwt-w7lp-pi.vercel.app/login',
        codeUrl: 'https://github.com/Sunil20011/Authentication_JWT'
    },
    {
        title: 'FashionNest',
        description: 'An Application for Ecommerce shopping made with muti features such as filtering and adding to cart with eye catchy styling.',
        technologies: ['HTML', 'TailwindCSS', 'NodeJS', 'React', 'Redux Toolkit'],
        image: 'https://fashionnest.netlify.app/assets/hero-fozJKOYE.png',
        url: 'https://ecommerce-website-ui.vercel.app/',
        codeUrl: 'https://github.com/Sunil20011/Ecommerce_website'
    },
    {
        title: 'Task Manager',
        description: '•	Developed a full-stack MERN application enabling users to add and update their daily tasks.',
        technologies: [ 'React', 'ExpressJS', 'TailwindCSS', 'Javascript' ],
        image: 'https://humanhood.co.in/cdn/shop/files/1_76e4e2ba-17c4-4be4-85ee-e44e4def29af.png?v=1723438778',
        url: 'https://expense-tracker-mern-production-9819.up.railway.app/login',
        codeUrl: 'https://github.com/shivam3245/Expense-Tracker-MERN'
    }
    
 
];

const Projects = () => {
    return (
        <div name='Projects' className='bg-black pt-10 pb-10'>
            <div className='flex justify-center font-bold text-2xl md:text-3xl pt-4 pb-2 text-white'>
                <h1>My Projects</h1>
            </div>
            <div className="flex flex-wrap justify-center md:gap-8 gap-5 p-8">
                {projects.map((project, index) => (
                    <div
                        className="bg-gray-800 hover:scale-105 duration-200 font-semibold cursor-pointer text-white rounded-lg overflow-hidden shadow-lg md:w-72 border border-2 border-black flex flex-col"
                        key={index}
                    >
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-6 flex-grow">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="bg-gray-700 rounded-full px-3 py-1 text-sm">{tech}</span>
                                ))}
                            </div>
                        </div>
                        <div className="p-6 mt-auto">
                            <div className="flex justify-between">
                                {project.codeUrl && (
                                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                                        <button className="bg-black hover:bg-blue-950 text-white font-bold py-2 px-4 rounded">
                                            View Code
                                        </button>
                                    </a>
                                )}
                                {project.url && (
                                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                                        <button className="bg-[#ff000b] hover:bg-red-500 text-white font-bold py-2 px-4 rounded">
                                            Live App
                                        </button>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
