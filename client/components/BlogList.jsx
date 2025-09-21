import { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, Search, Tag, ArrowRight } from 'lucide-react';
import { blogPosts, blogCategories } from '@/data/blogData';


export function getMeta() {
    return {
        title: 'Blog List'
    }
}

export function BlogList() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredPosts = useMemo(() => {
        return blogPosts.filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

            const matchesCategory = selectedCategory === 'all' ||
                post.tags.some(tag => tag.toLowerCase() === selectedCategory.toLowerCase());

            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, selectedCategory]);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="min-h-screen pt-10 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-5">
                        <Badge variant="outline" className="mb-2">Blog</Badge>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-2">
                            Latest Articles & Insights
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Sharing knowledge about web development, design, and technology trends.
                        </p>
                    </div>

                    {/* Search and Filters */}
                    <div className="mb-5">
                        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                            {/* Search */}
                            <div className="relative w-full lg:w-96">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                <Input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10"
                                />
                            </div>

                            {/* Category Filter */}
                            <div className="flex flex-wrap gap-2">
                                {blogCategories.map((category) => (
                                    <Button
                                        key={category.id}
                                        variant={selectedCategory === category.id ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => setSelectedCategory(category.id)}
                                        className="text-sm"
                                    >
                                        {category.name}
                                        <Badge variant="secondary" className="ml-2 text-xs">
                                            {category.count}
                                        </Badge>
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="mb-8">
                        <p className="text-muted-foreground">
                            {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                            {searchTerm && ` for "${searchTerm}"`}
                            {selectedCategory !== 'all' && ` in ${blogCategories.find(c => c.id === selectedCategory)?.name}`}
                        </p>
                    </div>

                    {/* Blog Posts Grid */}
                    {filteredPosts.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post) => (
                                <BlogCard key={post.id} post={post} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4">📝</div>
                            <h3 className="text-2xl font-semibold mb-2">No articles found</h3>
                            <p className="text-muted-foreground mb-6">
                                Try adjusting your search terms or category filter.
                            </p>
                            <Button onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}>
                                Clear Filters
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function BlogCard({ post }) {
    // Bayangan teks diperkuat untuk kontras maksimal
    const textShadowStyle = { textShadow: '1px 1px 5px rgb(0 0 0 / 0.8)' };

    return (
        <Card className="relative group overflow-hidden rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            {/* 1. Gambar sebagai lapisan dasar */}
            <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 ease-in-out group-hover:scale-105"
            />

            {/* 2. Lapisan KACA BURAM dengan gradien yang lebih gelap */}
            <div
                className="
                    absolute bottom-0 left-0 right-0 h-2/6
                    bg-gradient-to-t from-black/60 to-black/20  /* <-- DIUBAH: Gradien lebih pekat */
                    backdrop-blur-sm 
                    transition-all duration-500 ease-in-out 
                    group-hover:h-full group-hover:from-black/70 group-hover:backdrop-blur-md
                "
                aria-hidden="true"
            />

            {/* 3. Konten Teks di atas lapisan buram */}
            <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-end p-4 text-white h-full">
                {/* Wrapper untuk konten yang akan dianimasikan */}
                <div className="transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
                    {/* Judul Artikel dengan bayangan teks yang lebih kuat */}
                    <CardTitle
                        style={textShadowStyle}
                        className="text-xl line-clamp-2 text-white mb-3"
                    >
                        <Link to={`/blog/${post.slug}`} className="before:absolute before:inset-0">
                            <span className="relative z-10">{post.title}</span>
                        </Link>
                    </CardTitle>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs backdrop-blur-sm bg-white/20 text-white border-0">
                                <Tag className="h-3 w-3 mr-1" />
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    );
}