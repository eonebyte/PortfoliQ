import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navigation({ isDark, toggleTheme }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/#about' },
        { name: 'Skills', href: '/#skills' },
        { name: 'Projects', href: '/#projects' },
        { name: 'Experience', href: '/#experience' },
        { name: 'Contact', href: '/#contact' },
        { name: 'Blog', href: '/blog' },
    ];

    const handleNavClick = (href) => {
        if (href.startsWith('#')) {
            // scroll section
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            setIsMenuOpen(false);
        } else {
            // SSR: full reload ke route
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
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => handleNavClick(item.href)}
                                    className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-accent rounded-md"
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm" onClick={toggleTheme}>
                            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                        </Button>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {isMenuOpen ? (
                                    <X className="h-5 w-5" />
                                ) : (
                                    <Menu className="h-5 w-5" />
                                )}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={cn(
                        'md:hidden transition-all duration-300 ease-in-out',
                        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    )}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className="text-muted-foreground hover:text-foreground block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 hover:bg-accent rounded-md"
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
