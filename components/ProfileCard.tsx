"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, PhoneCall, MapPin, FileText } from "lucide-react";
import Image from "next/image";

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-card rounded-3xl p-8 shadow-2xl border border-border max-w-sm"
    >
      {/* Profile Image with Orange Background */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-brand-primary rounded-3xl" />
        <div className="relative aspect-square rounded-3xl overflow-hidden">
          <Image
            src="/photo.jpg"
            alt="Saurabh Pandey"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Name */}
      <h2 className="text-2xl font-bold text-center mb-1">Saurabh Pandey</h2>
      <p className="text-center text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
        AI & Data Engineer
      </p>

      {/* Highlights */}
      <div className="grid grid-cols-1 gap-3 mb-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-brand-primary" />
          Chandigarh • Open to remote
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <FileText className="h-4 w-4 text-brand-primary" />
          Data platforms, CDC, and production RAG systems
        </div>
      </div>

      {/* Bio */}
      <p className="text-center text-base text-muted-foreground mb-6 leading-relaxed">
        Partner with product, finance, and compliance teams to ship measurable outcomes—CDC ingestion, governed warehouses, and latency-obsessed AI services across GCP & AWS.
      </p>

      {/* Spacer */}
      <div className="mb-4" />

      {/* Social Links */}
      <div className="flex justify-center gap-4">
        <a
          href="https://github.com/saurabh4748"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-brand-primary/10 transition-colors"
        >
          <Github className="h-5 w-5 text-brand-primary" />
        </a>
        <a
          href="mailto:pandey.saurabh4748@gmail.com"
          className="p-2 rounded-lg hover:bg-brand-primary/10 transition-colors"
        >
          <Mail className="h-5 w-5 text-brand-primary" />
        </a>
        <a
          href="https://linkedin.com/in/saurabh4748"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-brand-primary/10 transition-colors"
        >
          <Linkedin className="h-5 w-5 text-brand-primary" />
        </a>
      </div>
    </motion.div>
  );
}
