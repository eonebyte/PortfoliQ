import { useEffect, useState } from 'react';
import { useRouteContext } from '@fastify/react/client';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
    ArrowLeft,
    Calendar,
    Clock,
    User,
    Tag,
    Twitter,
    Facebook,
    Linkedin,
    Copy,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';
import { blogPosts } from '@/data/blogData';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router'; // gunakan Link dari fastify/react
// ↑ bukan react-router-dom lagi

// ======== Ambil data dari server (SSR) ===========
export function getData({ req }) {
    // [slug] diambil dari path params fastify
    const slug = req.params.slug;
    return { slug };
}

// ======== Komponen Detail ===========
export default function BlogDetail() {
    const { data } = useRouteContext(); // { slug }
    const { slug } = data;
    const { toast } = useToast();
    const [readingProgress, setReadingProgress] = useState(0);

    const post = blogPosts.find((p) => p.slug === slug);

    // dapatkan prev/next/related
    const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
    const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
    const nextPost =
        currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

    const relatedPosts = post
        ? blogPosts
            .filter(
                (p) =>
                    p.id !== post.id &&
                    p.tags.some((tag) => post.tags.includes(tag))
            )
            .slice(0, 3)
        : [];

    // reading progress
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            setReadingProgress(Math.min(100, Math.max(0, progress)));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!post) {
        return (
            <div className="min-h-screen bg-background pt-20 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl mb-4">📄</div>
                    <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
                    <p className="text-muted-foreground mb-6">
                        The article you're looking for doesn't exist or has been moved.
                    </p>
                    <Link to="/blog">
                        <Button>
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Blog
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    const formatDate = (dateString) =>
        new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

    const shareUrl =
        typeof window !== 'undefined' ? window.location.href : '';
    const shareTitle = post.title;

    const handleShare = async (platform) => {
        const urls = {
            twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                shareTitle
            )}&url=${encodeURIComponent(shareUrl)}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                shareUrl
            )}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                shareUrl
            )}`
        };

        if (platform === 'copy') {
            try {
                await navigator.clipboard.writeText(shareUrl);
                toast({
                    title: 'Link copied!',
                    description: 'The article link has been copied to your clipboard.'
                });
            } catch (err) {
                toast({
                    title: 'Failed to copy',
                    description: 'Please copy the link manually.',
                    variant: 'destructive'
                });
            }
        } else {
            window.open(
                urls[platform],
                '_blank',
                'width=600,height=400'
            );
        }
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Reading Progress */}
            <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
                <div
                    className="h-full bg-primary transition-all duration-150 ease-out"
                    style={{ width: `${readingProgress}%` }}
                />
            </div>

            <div className="pt-20 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-4xl mx-auto">
                    <Link to="/blog">
                        <Button variant="ghost" className="mb-8 hover:bg-accent">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Blog
                        </Button>
                    </Link>

                    {/* Header */}
                    <header className="mb-12">
                        <div className="mb-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {post.tags.map((tag, index) => (
                                    <Badge key={index} variant="secondary">
                                        <Tag className="h-3 w-3 mr-1" />
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                                {post.title}
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                {post.excerpt}
                            </p>
                        </div>

                        {/* Meta */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                            <div className="flex items-center gap-6 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    {post.author}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    {formatDate(post.publishedAt)}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4" />
                                    {post.readTime} min read
                                </div>
                            </div>

                            {/* Share */}
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleShare('twitter')}
                                >
                                    <Twitter className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleShare('facebook')}
                                >
                                    <Facebook className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleShare('linkedin')}
                                >
                                    <Linkedin className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleShare('copy')}
                                >
                                    <Copy className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="relative overflow-hidden rounded-lg mb-12">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-64 sm:h-96 object-cover"
                            />
                        </div>
                    </header>

                    {/* Content */}
                    <article className="prose prose-lg max-w-none mb-12">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: post.content.replace(/\n/g, '<br>')
                            }}
                        />
                    </article>

                    <Separator className="my-12" />

                    {/* Nav prev next */}
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {previousPost && (
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                        <ChevronLeft className="h-4 w-4" />
                                        Previous Article
                                    </div>
                                    <Link
                                        to={`/blog/${previousPost.slug}`}
                                        className="block hover:text-primary transition-colors"
                                    >
                                        <h3 className="font-semibold line-clamp-2">
                                            {previousPost.title}
                                        </h3>
                                    </Link>
                                </CardContent>
                            </Card>
                        )}

                        {nextPost && (
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground mb-2">
                                        Next Article
                                        <ChevronRight className="h-4 w-4" />
                                    </div>
                                    <Link
                                        to={`/blog/${nextPost.slug}`}
                                        className="block hover:text-primary transition-colors text-right"
                                    >
                                        <h3 className="font-semibold line-clamp-2">
                                            {nextPost.title}
                                        </h3>
                                    </Link>
                                </CardContent>
                            </Card>
                        )}
                    </div>

                    {/* Related */}
                    {relatedPosts.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {relatedPosts.map((relatedPost) => (
                                    <Card
                                        key={relatedPost.id}
                                        className="hover:shadow-lg transition-shadow"
                                    >
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={relatedPost.image}
                                                alt={relatedPost.title}
                                                className="w-full h-32 object-cover"
                                            />
                                        </div>
                                        <CardContent className="p-4">
                                            <div className="text-xs text-muted-foreground mb-2">
                                                {formatDate(relatedPost.publishedAt)} •{' '}
                                                {relatedPost.readTime} min read
                                            </div>
                                            <Link to={`/blog/${relatedPost.slug}`}>
                                                <h3 className="font-semibold line-clamp-2 hover:text-primary transition-colors">
                                                    {relatedPost.title}
                                                </h3>
                                            </Link>
                                            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                                                {relatedPost.excerpt}
                                            </p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
}
