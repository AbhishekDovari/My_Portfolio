import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        id: 1,
        role: "Software Development Engineer Intern",
        company: "Texas Instruments",
        location: "Bangalore, Karnataka",
        duration: "Jan 2026 - Present",
        description: [
            "Designed a full-stack web application (Next.js, PostgreSQL) automating a manual confidential-information request workflow, serving 1,000+ employees org-wide.",
            "Implemented parallel multi-level approval workflows with automated email notifications, cron-job expiration reminders, and multi-stage request handling.",
            "Streamlined audit evidence collection for IT audit controls via SOAP APIs and Boomi automation, saving 5-10 hrs/week of manual effort.",
        ],
        technologies: ["Next.js", "Node.js", "PostgreSQL", "SOAP APIs", "Boomi"],
    },
    {
        id: 2,
        role: "Summer Intern",
        company: "Reliance Industries (RIL)",
        location: "Navi Mumbai",
        duration: "May 2025 - Jul 2025",
        description: [
            "Implemented business rule automation using Drools Rules Engine, encoding 5-10 procurement rules across workflows.",
            "Prototyped 3 frontend microapps on the Rio platform (ConvergentIS) for business stakeholder validation.",
            "Acted as a cross-functional liaison between business and engineering teams, translating requirements into functional rule logic.",
        ],
        technologies: ["Drools", "Microapps", "ConvergentIS Rio"],
    },
    {
        id: 3,
        role: "Software Engineer Intern",
        company: "RINL Steel Plant",
        location: "Visakhapatnam, AP",
        duration: "May 2024 - Jun 2024",
        description: [
            "Developed a Production Management System with role-based auth, department management, and dashboards for production monitoring.",
            "Engineered department-level daily production tracking across 20+ departments with add/remove functionality and historical records.",
        ],
        technologies: ["Full-Stack", "Dashboards", "RBAC"],
    },
];

export const Experience = () => {
    return (
        <section id="experience" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Work{" "}
                    <span className="text-primary">Experience</span>
                </h2>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary/30" />

                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className={`relative flex flex-col md:flex-row items-start mb-12 ${
                                index % 2 === 0
                                    ? "md:flex-row-reverse"
                                    : ""
                            }`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 mt-6" />

                            {/* Content card */}
                            <div
                                className={`w-full md:w-[calc(50%-2rem)] ${
                                    index % 2 === 0
                                        ? "md:mr-auto md:pr-0 md:pl-0"
                                        : "md:ml-auto md:pl-0 md:pr-0"
                                } ml-6 md:ml-0`}
                            >
                                <div className="bg-card p-6 rounded-lg shadow-lg border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                                    <div className="flex flex-col gap-1 mb-3">
                                        <h3 className="text-lg font-bold text-foreground">
                                            {exp.role}
                                        </h3>
                                        <span className="text-primary font-semibold text-sm">
                                            {exp.company}
                                        </span>
                                        <div className="flex items-center gap-4 text-xs text-muted-foreground/70">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="h-3 w-3" />
                                                {exp.duration}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin className="h-3 w-3" />
                                                {exp.location}
                                            </span>
                                        </div>
                                    </div>

                                    <ul className="space-y-2 mb-4 text-left">
                                        {exp.description.map(
                                            (point, i) => (
                                                <li
                                                    key={i}
                                                    className="text-sm text-muted-foreground/80 flex items-start gap-2"
                                                >
                                                    <span className="text-primary mt-1.5 text-xs">▹</span>
                                                    <span>{point}</span>
                                                </li>
                                            )
                                        )}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map(
                                            (tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/10 text-secondary-foreground"
                                                >
                                                    {tech}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
