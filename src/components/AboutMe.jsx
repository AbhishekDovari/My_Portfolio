import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
 return (
    <section id="#about" className="py-24 px-4 relative">
        {""}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About
                <span className="text-primary"> Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Passionate Developer & Tech creator
                    </h3>

                    <p>
                        I'm a Computer Science undergraduate at NIT Durgapur with a strong interest in full-stack development and creating practical, user-focused applications. As a Senior Developer at the GNU/Linux Users' Group, I've worked on several collaborative projects that sharpened both my technical and problem-solving skills.
                    </p>

                    <p>
                        Beyond academics, I serve as a Training and Placement Coordinator, where I bridge communication between students and companies. I enjoy learning new technologies, taking on real-world challenges, and continuously improving as a developer.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get in Touch
                        </a>


                        <a className="px-6 py-2 rounded-full border border-primary hover:bg-primary/10 transition-colors duration-300 text-primary font-semibold">
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/20 ">
                                <Code className="h-6 w-6 text-primary" />
                            </div>

                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/20 ">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/20 ">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </section>
 );
}