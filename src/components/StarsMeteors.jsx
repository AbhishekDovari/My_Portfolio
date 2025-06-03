import { useEffect, useState } from "react";

export const StarsMeteors = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
            generateMeteors();
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }
    , []);
    
    const generateMeteors = () => {
        
        const numberOfMeteors = 6;
        const meteorsArray = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            const meteor = {
                id : i,
                x: Math.random() *100,
                y: Math.random() * 40,
                size: Math.random() * 2 + 1,
                // delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 2,
            };
            meteorsArray.push(meteor);
        }
        setMeteors(meteorsArray);
    };

    const generateStars = () => {
        
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight)/7000
        );
        const starsArray = [];

        for (let i = 0; i < numberOfStars; i++) {
            const star = {
                id : i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() *3 + 1,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2, 
            };
            starsArray.push(star);
        }
        setStars(starsArray);
    };


    return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map(star => (
            <div 
                key={star.id} 
                className="star animate-pulse-subtle"
                style={{
                    left: star.x + '%',
                    top: star.y + '%',
                    width: star.size + 'px',
                    height: star.size + 'px',
                    opacity: star.opacity,
                    animationDuration: star.animationDuration + 's',    
                    animationName: 'twinkle', 
                    // animationIterationCount: 'infinite',s
                }}
            />
        ))}

        {meteors.map(meteor => (
            <div 
                key={meteor.id} 
                className="meteor animate-meteor"
                style={{
                    left: meteor.x + '%',
                    top: meteor.y + '%',
                    width: meteor.size *25+ 'px',
                    height: meteor.size+ 'px',
                    // animationDelay: meteor.delay + 's',
                    animationDuration: meteor.animationDuration + 's',    
                    // animationName: 'twinkle', 
                    // animationIterationCount: 'infinite',s
                }}
            />
        ))}
    </div>
    
    );
};