import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export function HeroSection() {
    const scrollToAbout = () => {
        const element = document.querySelector('#about');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-purple-500/10" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div className="space-y-8">
                    {/* Avatar/Image placeholder */}
                    <div className="mx-auto w-32 h-32 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
                        <Avatar className="w-32 h-32 rounded-full overflow-hidden">
                            <AvatarImage
                                src="https://avatars.githubusercontent.com/u/113767491?s=400&u=1b89e5000f964337ff6797084cfd2e589034ab7b&v=4"
                                className="w-full h-full object-cover"
                            />
                            <AvatarFallback className="w-full h-full flex items-center justify-center text-4xl font-bold">
                                CN
                            </AvatarFallback>
                        </Avatar>
                    </div>

                    {/* Name and Title */}
                    <div className="space-y-4">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                                Ahmad Fauzi Ridwan
                            </span>
                        </h1>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground">
                            Full Stack Developer & UI/UX Designer
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
                        Passionate about creating beautiful, functional web applications with modern technologies.
                        I turn ideas into reality through clean code and thoughtful design.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="group">
                            View My Work
                            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                        </Button>
                        <Button variant="outline" size="lg">
                            Download CV
                        </Button>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6">
                        <Button variant="ghost" size="sm" className="hover:scale-110 transition-transform">
                            <Github className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="sm" className="hover:scale-110 transition-transform">
                            <Linkedin className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="sm" className="hover:scale-110 transition-transform">
                            <Mail className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <button
                    onClick={scrollToAbout}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
                >
                    <ArrowDown className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
                </button>
            </div>
        </section>
    );
}