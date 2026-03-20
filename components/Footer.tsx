"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent/30 border-t border-border relative overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 tech-grid opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-vibrant-blue via-vibrant-purple to-vibrant-pink bg-clip-text text-transparent code-accent">
              &lt;Saurabh Pandey /&gt;
            </h3>
            <p className="text-muted-foreground">
              AI & Data Engineer building scalable data platforms and AI-powered
              systems.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a
                href="#hero"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </a>
              <a
                href="#journey"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Journey
              </a>
              <a
                href="#skills"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="mailto:pandey.saurabh4748@gmail.com"
                className="p-3 rounded-lg border border-border hover:bg-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/saurabh4748"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border hover:bg-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/saurabh4748"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>
            © {currentYear} Saurabh Pandey. Built with Next.js, TypeScript, and
            Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
