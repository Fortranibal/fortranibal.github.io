'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Github, Linkedin, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Toaster } from "@/components/ui/toaster"
import { useToast } from '@/hooks/use-toast'
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isClient, setIsClient] = useState(false);
  const { toast } = useToast();

  // Prevent hydration errors by only rendering on client side
  useEffect(() => {
    setIsClient(true);
    // Initialize EmailJS
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
      };

      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams
      );

      if (response.status === 200) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you as soon as possible!",
        });
        setName('');
        setEmail('');
        setMessage('');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: 'destructive',
      });
    }
  };

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="py-4 px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-lg font-semibold">Anibal Guerrero Hernandez</Link>
          <ul className="hidden md:flex space-x-4">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li><Link href="/experience" className="hover:text-primary">Experience</Link></li>
            <li><Link href="/education" className="hover:text-primary">Education</Link></li>
            <li><Link href="/projects" className="hover:text-primary">Projects</Link></li>
            <li><Link href="/awards" className="hover:text-primary">Awards</Link></li>
            <li><Link href="/contact" className="text-primary">Contact</Link></li>
          </ul>
          <div className="flex space-x-4">
            <Link href="https://github.com/Fortranibal" aria-label="GitHub">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="https://linkedin.com/in/anibal-guerrero" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Button asChild className="mb-6">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Let's Connect!</CardTitle>
              <CardDescription>
                Looking for an innovative aerospace engineer to join your team? I'm ready to launch my career with you! 
                Whether you have a job opportunity or just want to discuss potential collaborations, I'd love to hear from you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      name="name"
                      placeholder="Your name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email"
                      placeholder="Your email" 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message"
                      name="message" 
                      placeholder="Your message or job opportunity details" 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <Button className="mt-4 w-full" type="submit">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <p className="text-sm text-muted-foreground">I will respond to all inquiries within 24-48 hours.</p>
            </CardFooter>
          </Card>
        </div>
      </main>

      <footer className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>&copy; 2024 Anibal Guerrero Hernandez</p>
          <div className="flex space-x-4">
            <Link href="https://github.com/Fortranibal" aria-label="GitHub">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="https://linkedin.com/in/anibal-guerrero" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </footer>
      <Toaster />
    </div>
  )
}
