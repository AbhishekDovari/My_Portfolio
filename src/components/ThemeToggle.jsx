import {Moon, Sun} from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export const ThemeToggle = () => {

    const [isDarkmode, setIsDarkmode] = useState(false);

    useEffect(() => {
        // Check local storage for theme preference
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkmode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkmode(false);
        }
    }, []);

    const toggleTheme = () => {
        if(isDarkmode){
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkmode(false);
        }
        else{
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkmode(true);
        }
    }

    return (
        <button onClick={toggleTheme}
            className={cn(
                "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outline-hidden"
            )}>
            {isDarkmode ?(
                <Sun className="h-6 w-6 text-white-300"/>
            ): (
                <Moon className="h-6 w-6 text-blue-900"/>
            )}
        </button>);
}; 