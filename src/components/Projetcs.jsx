import { ArrowRight, ExternalLinkIcon, Github } from "lucide-react";
// import { SiGithub } from "react-icons/si";

const projects= [
    {
        id : 1,
        title : "Price Tracker",
        description : "A web application that tracks product prices and notifies users of price drops.",
        image : "/projects/price_tracker.png",
        technologies : ["Next", "Node.js", "Express", "MongoDB"],
        github : "https://github.com/AbhishekDovari/pricetracker.git",
        liveDemo : "https://pricetracker-woad.vercel.app/",
    },

    {
        id : 2,
        title : "StudyGroups",
        description : "A platform for students to create and join study groups, share resources, and collaborate on projects.",
        image : "/projects/studygroups.png",
        technologies : ["Django", "dbSqlite3", "HTML", "CSS", "JavaScript"],
        github : "#",
        liveDemo : "#",
    },

    {
        id : 3,
        title : "Portfolio Website",
        description : "A personal portfolio website to showcase my projects and skills.",
        image : "/projects/portfolio.png",
        technologies : ["React", "Tailwind CSS"],
        github : "https://github.com/AbhishekDovari/pricetracker",
        liveDemo : "https://abhishekdovari.github.io/portfolio/",

    },
]

export const Projects = () =>{
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured
                    <span className="text-primary"> Projects</span>

                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"> 
                    Here are some of my recent projects that showcase my skills in full-stack development and problem-solving.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg shadow-lg overflow-hidden card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

                            </div>
                            <div className="p-6 space-y-4">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/10 text-secondary-foreground">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            <h3 className="text-xl font-semibold mb-1">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center">
                                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLinkIcon size={20}/>
                                    </a>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a 
                        className="cosmic-button w-fit flex items-center mx-auto"
                        target="_blank"
                        href="https://github.com/AbhishekDovari"
                    >
                        Check out all my projects on  <ArrowRight size={16}/>

                    </a>

                </div>
            </div>
        </section>
    );
};
