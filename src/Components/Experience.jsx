import React from 'react';
import ExperienceItem from './ExperienceItem';

function Experience() {
    const experiences = [
        {
            role: 'Web developer Intern                                              ',
            company: 'VirtuNexa',
            date: 'October 2024 - December 2024',
            description: [
                'Developed and maintained MERN stack (MongoDB, Express.js, ReactJS, Node.js) web applications, focusing on performance optimization.',
                ' Reduced overall latency by 20% through efficient API call management',
            ],
        },
        {
            role: 'Intern',
            company: 'Code Soft PVT LTD ',
            date: 'August 2023 - September 2024',
            description: [
                'Developed website mock-ups, designed UI elements (buttons, forms, menus, navigation), debugged code',
                'managed back-end databases via SQL queries, and created technical documentation for all internship projects.',
            ],
        }
    ];

    return (
        <div name="Work Experience" className="bg-[url(https://img.lovepik.com/bg/20231228/an-empty-office-with-people-working-on-computers_2495630_wh860.png)] bg-fixed bg-cover bg-center text-white p-10 shadow-lg max-w-8xl mx-auto pt-10 md:pt-16">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 hover:scale-110 duration-200 cursor-pointer">Work Experience</h2>
            <div className="flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0 md:text-lg text-sm mb-8 md:mb-16">
                {experiences.map((experience, index) => (
                    <ExperienceItem key={index} experience={experience} />
                ))}
            </div>
        </div>
    );
}

export default Experience;
