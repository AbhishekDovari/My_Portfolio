import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
 return (
    <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About
                <span className="text-primary"> Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Passionate Developer & Tech creator
                    </h3>

                    <p className="text-muted-foreground/80">
                        I'm a Computer Science undergraduate at NIT Durgapur, currently interning as a Software Development Engineer at Texas Instruments, Bangalore. I build full-stack web applications using Next.js, Node.js, and PostgreSQL — from automating enterprise workflows to streamlining audit processes.
                    </p>

                    <p className="text-muted-foreground/80">
                        I also serve as a Senior Developer at the GNU/Linux Users' Group and a Training & Placement Coordinator at NIT Durgapur. I'm passionate about solving real-world problems through clean, scalable code.
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
                            <div className="text-left">
                                <h4 className="text-lg font-semibold">
                                    Full Stack Developer
                                </h4>
                                <p className="text-muted-foreground/80">
                                    Building scalable web apps with Next.js, React, Node.js, Django, and PostgreSQL.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/20 ">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="text-lg font-semibold">
                                    Tech Enthusiast
                                </h4>
                                <p className="text-muted-foreground/80">
                                    Always eager to learn new technologies and apply them to solve real-world problems.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/20 ">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="text-lg font-semibold">
                                    Team Player & Coordinator
                                </h4>
                                <p className="text-muted-foreground/80">
                                    Cross-functional liaison between business and engineering teams at Reliance and Texas Instruments.
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </section>
 );
}