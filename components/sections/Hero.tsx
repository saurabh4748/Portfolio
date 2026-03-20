"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import ProfileCard from "@/components/ProfileCard";
import { calculateTotalExperience } from "@/lib/experience";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 items-start">
          {/* Left: Profile Card */}
          <div className="hidden lg:block">
            <ProfileCard />
          </div>

          {/* Right: Main Content */}
          <div className="space-y-12">
            {/* Title Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
                <span className="text-foreground">AI & DATA</span>
                <br />
                <span className="text-muted-foreground/40">ENGINEER</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Shipping dependable CDC platforms, governed warehouses, and latency-tuned RAG services for finance-scale workloads across GCP + AWS.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-brand-primary text-white font-semibold shadow-lg shadow-brand-primary/30 hover:bg-brand-primaryDark transition-colors"
                >
                  Book a call
                </a>
                <a
                  href="/SaurabhPandeyResume_2026.pdf"
                  download
                  className="inline-flex items-center justify-center px-8 py-4 rounded-2xl border border-border font-semibold hover:border-brand-primary/70 hover:text-brand-primary transition-colors"
                >
                  Download resume
                </a>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-8"
            >
              <div>
                <div className="text-5xl sm:text-6xl font-bold mb-2">{calculateTotalExperience()}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">YEARS IN<br />DATA ENGINEERING</div>
              </div>
              <div>
                <div className="text-5xl sm:text-6xl font-bold mb-2">40%+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">PERFORMANCE<br />GAINS SHIPPED</div>
              </div>
            </motion.div>

            {/* Skill Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className="bg-brand-primary rounded-2xl p-8 text-white">
                <Layers className="h-10 w-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">CDC PIPELINES,<br />WAREHOUSE OPTIMIZATION</h3>
              </div>
              <div className="bg-brand-navy rounded-2xl p-8 text-white">
                <Layers className="h-10 w-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">RAG SYSTEMS,<br />AI INTEGRATION</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
