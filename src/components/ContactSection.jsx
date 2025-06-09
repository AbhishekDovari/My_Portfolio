import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { use, useState } from "react";
import { useToast } from "../hooks/use-toast";
// import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {

    const {toast} = useToast();
    
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {  
            toast({
                title : "Message Sent",
                description : "Thank you for reaching out! I'll get back to you as soon as possible.",
            });
            setIsSubmitting(false);
        }, 1000);
    }

    return (
        <section 
                id="contact"
                className="py-24 px-4 relative bg-secondary/10"
        >
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Get in <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                    Whether you have a question, want to collaborate, or just want to say hello, feel free to reach out!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                        </h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-center justify-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-center">
                                    <h4 className="font-medium">
                                        Email
                                    </h4>
                                    <a href="mailto:abhidovari@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        abhidovari@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center justify-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-center">
                                    <h4 className="font-medium">
                                        Phone
                                    </h4>
                                    <a href="tel:+918919525821" className="text-muted-foreground hover:text-primary transition-colors">
                                        +91 89195 25821
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center justify-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-center">
                                    <h4 className="font-medium">
                                        Location
                                    </h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Visakhapatnam, Andhra Pradesh, India
                                    </a>
                                </div>
                            </div>
                            
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">
                                Connect With Me
                            </h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/abhishek-dovari-038021261/" target="_blank">
                                    <Linkedin />
                                </a>
                                <a  href="#" target="_blank">
                                    <Instagram />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                        <h3 className="text-2xl font0semibold mb-6">
                            Drop Me a Message
                        </h3>
                        <form className="space-y-6">
                            <div>
                                <label 
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2">
                                    Name
                                </label>
                                <input 
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                                placeholder = "John Doe"
                                />

                                <label 
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2">
                                    Email
                                </label>
                                <input 
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                                placeholder = "John@example.com"
                                />

                                <label 
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2">
                                    Type Your Message
                                </label>
                                <textarea
                                id="message"
                                name="message"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" 
                                placeholder = "Type your message here..."
                                />
                            </div>
                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className={cn("cosmic-button w-full display flex items-center justify-center gap-2"

                                )}>
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                <Send/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
