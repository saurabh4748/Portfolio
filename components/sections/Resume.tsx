"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="py-16 bg-background">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="bg-card border-2 border-border rounded-xl p-8 md:p-12 shadow-lg">
            <FileText className="h-16 w-16 mx-auto mb-6 text-brand-primary" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Resume</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Download my complete resume to learn more about my experience,
              skills, and achievements in data engineering and AI.
            </p>
            <a
              href="/SaurabhPandeyResume_2026.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary hover:bg-brand-primaryDark text-white rounded-lg font-medium transition-colors text-lg"
            >
              <Download className="h-5 w-5" />
              Download Resume (PDF)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
