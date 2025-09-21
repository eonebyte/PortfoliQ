import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Heart, Target } from 'lucide-react';

export function AboutSection() {
    const values = [
        {
            icon: <User className="h-6 w-6" />,
            title: "User-Centered",
            description: "I prioritize user experience in every design and development decision."
        },
        {
            icon: <Heart className="h-6 w-6" />,
            title: "Passionate",
            description: "I love what I do and it shows in the quality of my work."
        },
        {
            icon: <Target className="h-6 w-6" />,
            title: "Result-Driven",
            description: "Focused on delivering solutions that achieve business goals."
        }
    ];

    return (
        <section id="about" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="mb-4">About Me</Badge>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Crafting Digital Experiences
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            I'm a passionate developer with 5+ years of experience building web applications
                            that users love and businesses rely on.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* About Text */}
                        <div className="space-y-6">
                            <div className="prose prose-lg">
                                <p className="text-muted-foreground leading-relaxed">
                                    Hello! I'm Ahmad, a full-stack developer based in Cikarang, Indonesia.
                                    I enjoy creating things that live on the internet, whether that be
                                    websites, applications, or anything in between.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    My main focus these days is building accessible, inclusive products
                                    and digital experiences for a variety of clients. I also recently
                                    launched a course that covers everything you need to build a web app
                                    with the React ecosystem.
                                </p>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-4">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary">20+</div>
                                    <div className="text-sm text-muted-foreground">Projects</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary">5+</div>
                                    <div className="text-sm text-muted-foreground">Years</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary">10+</div>
                                    <div className="text-sm text-muted-foreground">Clients</div>
                                </div>
                            </div>
                        </div>

                        {/* Values Cards */}
                        <div className="space-y-4">
                            {values.map((value, index) => (
                                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                                {value.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                                                <p className="text-muted-foreground">{value.description}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}