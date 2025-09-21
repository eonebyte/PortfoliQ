import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    const contactInfo = [
        {
            icon: <Mail className="h-5 w-5" />,
            label: "Email",
            value: "john.doe@example.com",
            href: "mailto:john.doe@example.com"
        },
        {
            icon: <Phone className="h-5 w-5" />,
            label: "Phone",
            value: "+1 (555) 123-4567",
            href: "tel:+15551234567"
        },
        {
            icon: <MapPin className="h-5 w-5" />,
            label: "Location",
            value: "Jakarta, Indonesia",
            href: "#"
        }
    ];

    return (
        <section id="contact" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="mb-4">Get In Touch</Badge>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Let's Work Together
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Send me a message</CardTitle>
                                <CardDescription>
                                    I'll get back to you as soon as possible.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <Input
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            name="email"
                                            type="email"
                                            placeholder="Your Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <Textarea
                                            name="message"
                                            placeholder="Your Message"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <Button type="submit" className="w-full">
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                                <div className="space-y-4">
                                    {contactInfo.map((info, index) => (
                                        <a
                                            key={index}
                                            href={info.href}
                                            className="flex items-center space-x-4 p-4 rounded-lg hover:bg-accent transition-colors group"
                                        >
                                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <div className="font-medium text-foreground">{info.label}</div>
                                                <div className="text-muted-foreground">{info.value}</div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-4">Available for</h3>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary">Freelance Projects</Badge>
                                    <Badge variant="secondary">Full-time Roles</Badge>
                                    <Badge variant="secondary">Consulting</Badge>
                                    <Badge variant="secondary">Mentoring</Badge>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-4">Response Time</h3>
                                <p className="text-muted-foreground">
                                    I typically respond to emails within 24 hours. For urgent matters,
                                    please feel free to call me directly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}