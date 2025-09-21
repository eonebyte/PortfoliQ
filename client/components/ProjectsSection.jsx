import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

export function ProjectsSection() {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-featured e-commerce platform built with Next.js and Stripe integration. Features include user authentication, product management, and order tracking.",
            image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
            technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates, team collaboration features, and advanced filtering options.",
            image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
            technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Weather Dashboard",
            description: "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
            image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
            technologies: ["Vue.js", "Express", "Weather API", "Chart.js"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Portfolio Website",
            description: "A responsive portfolio website showcasing modern web development practices with smooth animations and optimized performance.",
            image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
            technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
            liveUrl: "#",
            githubUrl: "#"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="mb-4">Featured Work</Badge>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Projects & Case Studies
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Here are some of my favorite projects I've worked on recently.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <CardHeader>
                                    <CardTitle className="text-xl">{project.title}</CardTitle>
                                    <CardDescription className="text-muted-foreground">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <Badge key={techIndex} variant="secondary" className="text-xs">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>

                                <CardFooter className="flex gap-4">
                                    <Button size="sm" variant="default" className="flex-1">
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Live Demo
                                    </Button>
                                    <Button size="sm" variant="outline" className="flex-1">
                                        <Github className="w-4 h-4 mr-2" />
                                        Code
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    {/* View More Button */}
                    <div className="text-center mt-12">
                        <Button size="lg" variant="outline">
                            View All Projects
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}