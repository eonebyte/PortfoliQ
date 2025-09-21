import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-background border-t py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                        {/* Logo/Name */}
                        <div className="text-center md:text-left">
                            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                                Ahmad Fauzi Ridwan
                            </h3>
                            <p className="text-muted-foreground mt-1">
                                Full Stack Developer & UI/UX Designer
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4">
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

                    {/* Divider */}
                    <div className="border-t my-8"></div>

                    {/* Copyright */}
                    <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                            <span>Made with</span>
                            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                            <span>by Ahmad Fauzi Ridwan</span>
                        </div>
                        <div className="mt-2 sm:mt-0">
                            © {new Date().getFullYear()} All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}