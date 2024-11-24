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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // EmailJS keys (not sensitive)
  const publicKey = 'IdcCHP7UMbLzJFl5s';
  const serviceId = 'service_bvnkjv7';
  const templateId = 'template_xosm7pa';

  useEffect(() => {
    // Log keys to ensure they are read correctly
    // console.log('Debugging EmailJS Keys:');
    // console.log('Public Key:', publicKey);
    // console.log('Service ID:', serviceId);
    // console.log('Template ID:', templateId);

    if (!publicKey || !serviceId || !templateId) {
      console.error('EmailJS configuration is incomplete');
      toast({
        title: "Configuration Error",
        description: "Email service is not properly configured. Please check the setup.",
        variant: 'destructive',
      });
      return;
    }

    try {
      emailjs.init(publicKey);
      setIsClient(true);
    } catch (error) {
      console.error('Error initializing EmailJS:', error);
      toast({
        title: "Service Error",
        description: "Failed to initialize email service. Please try again later.",
        variant: 'destructive',
      });
    }
  }, [publicKey, serviceId, templateId, toast]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Hardcoded values instead of environment variables
    const serviceId = 'service_bvnkjv7'; // hardcoded
    const templateId = 'template_xosm7pa'; // hardcoded

    if (!serviceId || !templateId) {
      toast({
        title: "Configuration Error",
        description: "Email service configuration is incomplete.",
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
      };

      console.log('Sending email with params:', {
        serviceId,
        templateId,
        params: templateParams
      });

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      );

      console.log('Email response:', response);

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
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: error instanceof Error 
          ? `Error sending message: ${error.message}`
          : "Something went wrong. Please try again later.",
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
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
              <CardTitle className="text-3xl font-bold">Let&apos;s Connect!</CardTitle>
              <CardDescription>
                Looking for an innovative aerospace engineer to join your team? I&apos;m ready to launch my career with you! 
                Whether you have a job opportunity or just want to discuss potential collaborations, I&apos;d love to hear from you.
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
                <Button 
                  className="mt-4 w-full" 
                  type="submit"
                  disabled={isSubmitting}
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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
