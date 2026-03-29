import { cn } from "@/lib/utils";
import { X, Menu, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkmode, setIsDarkmode] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
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
        <nav className={cn("fixed w-full z-40 transition-all duration-300 ",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
            )}
            >
                <div className="container flex items-center justify-between">
                <a className="text-xl font-bold text-primary flex items-center" href="#hero">  
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Abhishek</span> {""}
                        Portfolio
                    </span>
                </a>
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-7">   
                    {navItems.map((item,key) => (
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-primary/10 transition-colors duration-300 focus:outline-hidden"
                        aria-label="Toggle theme"
                    >
                        {isDarkmode ? (
                            <Sun className="h-5 w-5 text-yellow-400"/>
                        ) : (
                            <Moon className="h-5 w-5 text-blue-900"/>
                        )}
                    </button>
                </div>
                {/* Mobile Menu Button */}
                <div className="flex items-center gap-2 md:hidden">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-primary/10 transition-colors duration-300 focus:outline-hidden z-50"
                        aria-label="Toggle theme"
                    >
                        {isDarkmode ? (
                            <Sun className="h-5 w-5 text-yellow-400"/>
                        ) : (
                            <Moon className="h-5 w-5 text-blue-900"/>
                        )}
                    </button>
                    <button
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        className="p-2 text-foreground z-50"
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </div>

                <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                "transition-all duration-300 md:hidden",
                    isMobileMenuOpen ? 
                        "opacity-100 pointer-events-auto" : 
                        "opacity-0 pointer-events-none"
                    )}
                
                >
                    <div className="flex flex-col space-y-8 text-xl">   
                        {navItems.map((item,key) => (
                            <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
                </div>
        </nav>
    )
};