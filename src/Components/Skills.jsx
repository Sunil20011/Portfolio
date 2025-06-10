import React, { useState } from 'react';
import SkillCategory from './SkillCategory';
import SkillList from './SkillList';

function Skills() {
    const [selectedCategory, setSelectedCategory] = useState('Frontend');

    const skills = {
        Frontend: [
            { name: 'HTML5', level: '80%' },
            { name: 'Tailwind CSS', level: '50%' },
            { name: 'BootStrap', level: '50%' },
            { name: 'JavaScript', level: '50%' },
            { name: 'React.js', level: '60%' },
        ],
        Backend: [
            { name: 'NodeJS', level: '50%' },
            { name: 'ExpressJS', level: '45%' },
            { name: 'MongoDB', level: '50%' },
            { name: 'SQL', level: '65%' },
        ],
        Database: [
            { name: 'MS SQL Server', level: '60%' },
            { name: 'MongoDB', level: '50%' }

        ],
        Tools: [
            { name: 'VSCode', level: '70%' },
            { name: 'Git', level: '60%' },
            { name: 'GitHub', level: '60%' },
            { name: 'Autocad', level: '65%' },

        ]
    };

    return (
        <div name="Skills" className=''>
            <div className="bg-black text-white pl-8 pr-8 pt-5 pb-[8%] shadow-lg max-w-8xl ">
                <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-8 pt-8 ">Technical Skills</h2>
                <div className="grid grid-cols-2 gap-4 mb-8 ">
                    {Object.keys(skills).map((category) => (
                        <SkillCategory
                            key={category}
                            category={category}x
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                        />
                    ))}
                </div>
                <SkillList skills={skills[selectedCategory]} category={selectedCategory} />
            </div>
        </div>
    );
};
export default Skills;
