import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Introduction } from '@/components/introduction'
import { SocialMediaIcons } from '@/components/common/social-media-icons'
import Image from 'next/image'

// Define your projects and blog posts
const projects = [
  { title: "No Couch, No TV", description: "Experimenting with an unconventional setup, my logic and experience.", slug: "space_around" },
  { title: "Project 2", description: "Description of Project 2", slug: "project2" },
  // Add more projects as needed
]

const blogPosts = [
  { 
    title: "No Couch, No TV", 
    description: "Experimenting with an unconventional setup, my logic and experience.", 
    slug: "space_around", 
    readTime: "5 min",
    image: "/space_around_you/pic1.jpg"
  },
  { 
    title: "Blog Post 2", 
    description: "Summary of Blog Post 2", 
    slug: "post2", 
    readTime: "3 min",
    image: "/images/blog-post-2.jpg"
  },
  // Add more blog posts as needed
]

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Introduction/>
      <SocialMediaIcons></SocialMediaIcons>
      
      <Tabs defaultValue="blog" className="w-full mt-10">
        <TabsList>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="blog">Writing</TabsTrigger>
        </TabsList>
        
        <TabsContent value="projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {projects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <p className="text-sm text-blue-600">Learn more →</p>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="blog">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/writing/${post.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <div className="relative w-full h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <button className="px-3 py-1 text-xs font-semibold text-gray-700 bg-gray-200 hover:bg-gray-300 transition-colors rounded-lg">
                      {post.readTime} read
                    </button>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm">Read more →</p>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}