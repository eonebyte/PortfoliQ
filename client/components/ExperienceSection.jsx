import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function ExperienceSection() {
    const experiences = [
        {
            position: "Senior Full Stack Developer",
            company: "Tech Innovators Inc.",
            period: "2022 - Present",
            description: "Lead development of large-scale web applications using React, Node.js, and AWS. Mentored junior developers and implemented best practices for code quality.",
            achievements: [
                "Reduced application load time by 40%",
                "Led team of 5 developers",
                "Implemented CI/CD pipeline"
            ]
        },
        {
            position: "Full Stack Developer",
            company: "Digital Solutions Ltd.",
            period: "2020 - 2022",
            description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create pixel-perfect implementations.",
            achievements: [
                "Delivered 15+ successful projects",
                "Improved user engagement by 60%",
                "Migrated legacy systems to modern stack"
            ]
        },
        {
            position: "Frontend Developer",
            company: "StartupXYZ",
            period: "2019 - 2020",
            description: "Built responsive web applications and contributed to the company's design system. Worked closely with UX designers to implement user-friendly interfaces.",
            achievements: [
                "Created reusable component library",
                "Improved accessibility compliance",
                "Optimized mobile performance"
            ]
        }
    ];

    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="mb-4">Experience</Badge>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Professional Journey
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            My career path and the impact I've made in various organizations.
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                                <CardHeader>
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                        <div>
                                            <CardTitle className="text-xl">{exp.position}</CardTitle>
                                            <CardDescription className="text-lg font-medium text-primary">
                                                {exp.company}
                                            </CardDescription>
                                        </div>
                                        <Badge variant="outline" className="self-start sm:self-center">
                                            {exp.period}
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4 leading-relaxed">
                                        {exp.description}
                                    </p>
                                    <div className="space-y-2">
                                        <h4 className="font-medium text-sm text-foreground">Key Achievements:</h4>
                                        <ul className="space-y-1">
                                            {exp.achievements.map((achievement, achIndex) => (
                                                <li key={achIndex} className="text-sm text-muted-foreground flex items-center">
                                                    <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}