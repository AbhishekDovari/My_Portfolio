"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Mock AnimatedCircularProgressBar component since the original isn't available
// const AnimatedCircularProgressBar = ({ max, min, value, gaugePrimaryColor, gaugeSecondaryColor, className }) => {
//   const [displayValue, setDisplayValue] = useState(0);
  
//   useEffect(() => {
//     const duration = 2000; // 2 seconds
//     const steps = 60; // 60 frames for smooth animation
//     const increment = value / steps;
//     let current = 0;
    
//     const timer = setInterval(() => {
//       current += increment;
//       if (current >= value) {
//         setDisplayValue(value);
//         clearInterval(timer);
//       } else {
//         setDisplayValue(Math.round(current));
//       }
//     }, duration / steps);
    
//     return () => clearInterval(timer);
//   }, [value]);
  
//   // Simple circular progress bar implementation
//   const radius = 40;
//   const circumference = 2 * Math.PI * radius;
//   const strokeDasharray = circumference;
//   const strokeDashoffset = circumference - (displayValue / max) * circumference;
  
//   return (
//     <div className={`relative w-24 h-24 ${className}`}>
//       <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
//         <circle
//           cx="50"
//           cy="50"
//           r={radius}
//           stroke={gaugeSecondaryColor}
//           strokeWidth="8"
//           fill="transparent"
//         />
//         <circle
//           cx="50"
//           cy="50"
//           r={radius}
//           stroke={gaugePrimaryColor}
//           strokeWidth="8"
//           fill="transparent"
//           strokeDasharray={strokeDasharray}
//           strokeDashoffset={strokeDashoffset}
//           strokeLinecap="round"
//           className="transition-all duration-100 ease-out"
//         />
//       </svg>
//       <div className="absolute inset-0 flex items-center justify-center">
//         <span className="text-sm font-semibold text-foreground">{displayValue}%</span>
//       </div>
//     </div>
//   );
// };
const AnimatedCircularProgressBar = ({
  max,
  min,
  value,
  gaugePrimaryColor,
  gaugeSecondaryColor,
  className,
  logo,
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.round(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (displayValue / max) * circumference;

  return (
    <div className={`relative w-24 h-24 ${className}`}>
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke={gaugeSecondaryColor}
          strokeWidth="8"
          fill="transparent"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke={gaugePrimaryColor}
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-100 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {logo ? (
          <img src={logo} alt="skill logo" className="w-8 h-8 object-contain" />
        ) : (
          <span className="text-sm font-semibold text-foreground">{displayValue}%</span>
        )}
      </div>
    </div>
  );
};

const skills = [
  { name: 'HTML/CSS', level: 95, category: 'Frontend', logo: '/logos/html-css.svg' },
  { name: 'JavaScript', level: 90, category: 'Frontend', logo: '/logos/javascript.svg' },
  { name: 'React', level: 80, category: 'Frontend', logo: '/logos/react.svg' },
  { name: 'Node.js', level: 80, category: 'Backend', logo: '/logos/nodejs.svg' },
  { name: 'Express.js', level: 75, category: 'Backend', logo: '/logos/express.png' },
  { name: 'Django', level: 70, category: 'Backend', logo: '/logos/django.svg' },
  { name: 'Git/GitHub', level: 80, category: 'Tools', logo: '/logos/github.svg' },
  { name: 'VS Code', level: 90, category: 'Tools', logo: '/logos/vscode.svg' },
  { name: 'Linux', level: 85, category: 'Tools', logo: '/logos/linux.svg' },
  { name: 'MongoDB', level: 70, category: 'Database', logo: '/logos/mongodb.svg' },
  { name: 'PostgreSQL', level: 65, category: 'Database', logo: '/logos/postgresql.svg' },
  { name: 'MySQL', level: 80, category: 'Database', logo: '/logos/mysql.svg' }
];


export const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeCategory, setActiveCategory] = useState('Frontend');

    useEffect(() => {
        // Trigger animation when component mounts
        const timer = setTimeout(() => setIsVisible(true), 500);
        return () => clearTimeout(timer);
    }, []);

    // Get unique categories
    const categories = ['All', ...new Set(skills.map(skill => skill.category))];

    // Filter skills based on active category
    const filteredSkills = activeCategory === 'All' 
        ? skills 
        : skills.filter(skill => skill.category === activeCategory);

    return (
        <section id="skills" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
                    My <span className="text-primary">Skills</span>
                </h2>
                
                {/* Category Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-forefround hover:bd-secondary"
                        )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredSkills.map((skill, index) => (
                        <div 
                            key={index} 
                            className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex flex-col items-center space-y-4">
                                <AnimatedCircularProgressBar
                                max={100}
                                min={0}
                                value={isVisible ? skill.level : 0}
                                gaugePrimaryColor="rgb(37 99 235)"
                                gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
                                className="mb-2"
                                logo={skill.logo}
                                />
                                <div className="text-center">
                                    <h4 className="font-semibold mb-1">
                                        {skill.name}
                                    </h4>
                                    {/* <p className="text-sm text-slate-600">
                                        {skill.category}
                                    </p> */}
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