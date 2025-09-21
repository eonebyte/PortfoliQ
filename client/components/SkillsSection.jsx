import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function SkillsSection() {
    const skillCategories = [
        {
            title: "Frontend",
            skills: ["React", "Next.js", "JavaScript", "Tailwind CSS", "shadcn/ui", "Antd", "Vite"]
        },
        {
            title: "Backend",
            skills: ["Node.js", "Express", "Fastify", "Laravel", "Codeigniter", "MySql", "PostgreSQL", "MongoDB"]
        },
        {
            title: "Tools & Others",
            skills: ["Git", "VPS", "AWS", "Figma", "Jest", "Vitest"]
        }
    ];

    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="mb-4">Skills & Technologies</Badge>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Technical Expertise
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Here are the technologies and tools I work with to bring ideas to life.
                        </p>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {skillCategories.map((category, index) => (
                            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <CardHeader>
                                    <CardTitle className="text-center text-lg font-semibold">
                                        {category.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {category.skills.map((skill, skillIndex) => (
                                            <Badge
                                                key={skillIndex}
                                                variant="secondary"
                                                className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                                            >
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Professional Skills */}
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold text-center mb-8">Professional Skills</h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { skill: "Problem Solving", level: "Expert" },
                                { skill: "Team Leadership", level: "Advanced" },
                                { skill: "UI/UX Design", level: "Intermediate" },
                                { skill: "Project Management", level: "Advanced" }
                            ].map((item, index) => (
                                <div key={index} className="text-center space-y-2">
                                    <div className="text-lg font-medium">{item.skill}</div>
                                    <Badge variant="outline">{item.level}</Badge>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}