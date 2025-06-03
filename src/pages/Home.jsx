import { Navbar } from "../components/Navbar";
import { StarsMeteors } from "../components/StarsMeteors";
import { ThemeToggle } from "../components/ThemeToggle";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutMe";
// import { StarsMeteors } from "../components/StarsMeteors";

export const Home = () => {
    return (

        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme toggle */}
        <ThemeToggle/>
         
        {/* Backgrounf Effect */}
        <StarsMeteors/>

        {/*Navbar */}
        <Navbar/>

        {/*Main Content */}
        <main>
            <HeroSection/>
            <AboutSection/>
            {/* Add other sections like Skills, Projects, Contact here */}
        </main>

        {/* Footer */}
        </div>
    );
}
