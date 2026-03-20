"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, CheckCircle2, Copy, Download } from "lucide-react";
import { useMemo, useState } from "react";
import { calculateTotalExperience } from "@/lib/experience";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const experienceYears = useMemo(() => calculateTotalExperience(), []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("pandey.saurabh4748@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (error) {
      console.error("Clipboard copy failed", error);
    }
  };

  return (
    <section id="contact" className="py-16 bg-background relative overflow-hidden">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Specialized in designing scalable, cloud-native data platforms and AI-integrated systems.
            Open to collaboration and opportunities.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch md:[&>div]:h-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col h-full"
          >
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <div className="flex flex-col gap-4 flex-1">
              <div className="p-5 bg-card border border-border rounded-2xl hover:border-brand-primary/50 hover:shadow-xl transition-all group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-primary/10 rounded-lg group-hover:bg-brand-primary/20 transition-colors">
                    <Mail className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">
                        pandey.saurabh4748@gmail.com
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="mailto:pandey.saurabh4748@gmail.com"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-primary text-white text-sm font-semibold hover:bg-brand-primaryDark"
                      >
                        <Mail className="h-4 w-4" />
                        Send email
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="inline-flex items-center gap-1 px-4 py-2 rounded-lg border border-border text-sm font-semibold text-brand-primary hover:text-brand-primaryDark"
                      >
                        {copiedEmail ? (
                          <>
                            <CheckCircle2 className="h-4 w-4" /> Copied
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" /> Copy email
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/saurabh4748"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-card border border-border rounded-2xl hover:border-brand-primary/50 hover:shadow-xl transition-all group"
              >
                <div className="p-3 bg-brand-primary/10 rounded-lg group-hover:bg-brand-primary/20 transition-colors">
                  <Linkedin className="h-6 w-6 text-brand-primary" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">
                    linkedin.com/in/saurabh4748
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/saurabh4748"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-card border border-border rounded-2xl hover:border-brand-primary/50 hover:shadow-xl transition-all group"
              >
                <div className="p-3 bg-brand-primary/10 rounded-lg group-hover:bg-brand-primary/20 transition-colors">
                  <Github className="h-6 w-6 text-brand-primary" />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-sm text-muted-foreground">
                    github.com/saurabh4748
                  </p>
                </div>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col h-full"
          >
            <h3 className="text-2xl font-semibold mb-6">ATS Snapshot</h3>
            <div className="bg-card border border-border rounded-2xl p-6 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {experienceYears} years designing CDC platforms, governed warehouses, and production RAG services across regulated fintech environments.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-primary" />
                    GCP + AWS native stacks (BigQuery, Dataflow, Vertex AI, Redshift)
                  </li>
                  <li className="flex gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-primary" />
                    Governance-first medallion architectures, metadata-driven ETL
                  </li>
                  <li className="flex gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-primary" />
                    RAG pipelines, vector stores, latency and cost optimizations
                  </li>
                </ul>
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="/SaurabhPandeyResume_2026.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-primary text-white font-semibold shadow-brand-primary/30 shadow-lg hover:bg-brand-primaryDark"
                >
                  <Download className="h-4 w-4" />
                  ATS Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/saurabh4748"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-border font-semibold text-sm hover:border-brand-primary/60 hover:text-brand-primary"
                >
                  Continue on LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
