import { Navbar } from "../components/Navbar";
import { StarsMeteors } from "../components/StarsMeteors";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutMe";
import { Experience } from "../components/Experience";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projetcs";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {
    return (

        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
         
        {/* Background Effect */}
        <StarsMeteors/>

        {/*Navbar */}
        <Navbar/>

        {/*Main Content */}
        <main>
            <HeroSection/>
            <AboutSection/>
            <Experience/>
            <Skills/>
            <Projects/>
            <ContactSection/>
        </main>

        {/* Footer */}
        </div>
    );
}
