"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: 'JavaScript', level: 90, category: 'Frontend' },
  { name: 'React', level: 80, category: 'Frontend' },
  { name: 'Next.js', level: 80, category: 'Frontend' },
  { name: 'HTML/CSS', level: 95, category: 'Frontend' },
  { name: 'Node.js', level: 80, category: 'Backend' },
  { name: 'Express.js', level: 75, category: 'Backend' },
  { name: 'Django', level: 70, category: 'Backend' },
  { name: 'Python', level: 80, category: 'Backend' },
  { name: 'C/C++', level: 75, category: 'Backend' },
  { name: 'PostgreSQL', level: 70, category: 'Database' },
  { name: 'MongoDB', level: 70, category: 'Database' },
  { name: 'SQLite', level: 75, category: 'Database' },
  { name: 'Git/GitHub', level: 80, category: 'Tools' },
  { name: 'Linux', level: 85, category: 'Tools' },
  { name: 'REST APIs', level: 80, category: 'Tools' },
];


export const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', ...new Set(skills.map(skill => skill.category))];

    const filteredSkills = activeCategory === 'All' 
        ? skills 
        : skills.filter(skill => skill.category === activeCategory);

    return (
        <section id="skills" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
                    My <span className="text-primary">Skills</span>
                </h2>
                
                {/* Category Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn("px-5 py-2 rounded-full transition-all duration-300 capitalize text-sm font-medium",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground shadow-md"
                                    : "bg-card border border-border/50 text-foreground/70 hover:bg-primary/10 hover:text-primary"
                        )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {filteredSkills.map((skill, index) => (
                        <div 
                            key={index} 
                            className="group bg-card border border-border/50 rounded-xl p-5 
                                       hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5
                                       transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="flex flex-col items-center space-y-3">
                                <h4 className="font-semibold text-sm text-center">
                                    {skill.name}
                                </h4>

                                {/* Progress bar */}
                                <div className="w-full">
                                    <div className="w-full h-1.5 bg-border/50 rounded-full overflow-hidden">
                                        <div 
                                            className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                    <p className="text-xs text-muted-foreground/60 mt-1 text-center">
                                        {skill.level}%
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;