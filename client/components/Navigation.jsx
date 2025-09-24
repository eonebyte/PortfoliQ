"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun, User, Code, Briefcase, BookOpen } from "lucide-react";

import { cn } from "@/lib/utils";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Navigation({ isDark, toggleTheme }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const megaMenuItems = [
        { title: "About", href: "/#about", icon: User, description: "Learn more about me and my background" },
        { title: "Skills", href: "/#skills", icon: Code, description: "See my technical abilities and expertise" },
        { title: "Projects", href: "/#projects", icon: BookOpen, description: "Check out my work and side projects" },
        { title: "Experience", href: "/#experience", icon: Briefcase, description: "Discover my professional journey" },
    ];

    const normalItems = [
        { title: "Home", href: "/" },
        { title: "Contact", href: "/#contact" },
        { title: "Blog", href: "/blog" },
    ];

    const handleNavClick = (href) => {
        if (href.startsWith("#")) {
            const element = document.querySelector(href);
            if (element) element.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
        } else {
            window.location.href = href;
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                            PortfoliQ
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Home */}
                        <button
                            onClick={() => handleNavClick("/")}
                            className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-accent rounded-md"
                        >
                            Home
                        </button>

                        {/* Explore / Mega Menu */}
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[200px] gap-1 md:w-[300px] md:grid-cols-2 lg:w-[400px] p-2">
                                            {megaMenuItems.map((item) => {
                                                const Icon = item.icon;
                                                return (
                                                    <li key={item.title}>
                                                        <NavigationMenuLink asChild>
                                                            <button
                                                                onClick={() => handleNavClick(item.href)}
                                                                className="flex items-start gap-3 p-3 rounded-md w-full hover:bg-accent transition-colors duration-200"
                                                            >
                                                                <Icon className="h-5 w-5 text-primary mt-1" />
                                                                <div className="text-left">
                                                                    <p className="font-medium text-sm text-foreground">{item.title}</p>
                                                                    <p className="text-xs text-muted-foreground">{item.description}</p>
                                                                </div>
                                                            </button>
                                                        </NavigationMenuLink>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>

                        {/* Contact & Blog */}
                        {normalItems.slice(1).map((item) => (
                            <button
                                key={item.title}
                                onClick={() => handleNavClick(item.href)}
                                className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-accent rounded-md"
                            >
                                {item.title}
                            </button>
                        ))}
                    </div>

                    {/* Theme toggle + Mobile menu button */}
                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm" onClick={toggleTheme}>
                            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                        </Button>

                        <div className="md:hidden">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={cn(
                        "md:hidden transition-all duration-300 ease-in-out",
                        isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                    )}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t">
                        {/* Home */}
                        <button
                            onClick={() => handleNavClick("/")}
                            className="text-muted-foreground hover:text-foreground block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 hover:bg-accent rounded-md"
                        >
                            Home
                        </button>

                        {/* Explore */}
                        {megaMenuItems.map((item) => (
                            <button
                                key={item.title}
                                onClick={() => handleNavClick(item.href)}
                                className="text-muted-foreground hover:text-foreground block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 hover:bg-accent rounded-md"
                            >
                                {item.title}
                            </button>
                        ))}

                        {/* Contact & Blog */}
                        {normalItems.slice(1).map((item) => (
                            <button
                                key={item.title}
                                onClick={() => handleNavClick(item.href)}
                                className="text-muted-foreground hover:text-foreground block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 hover:bg-accent rounded-md"
                            >
                                {item.title}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
