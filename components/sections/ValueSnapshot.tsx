"use client";

import { motion } from "framer-motion";
import { Target, Users, ShieldCheck, Sparkles, Download } from "lucide-react";

export default function ValueSnapshot() {
  const stats = [
    {
      icon: Target,
      label: "Reporting Performance",
      value: "40% faster",
      description: "BigQuery CDC platform with partitioning & clustering",
    },
    {
      icon: Users,
      label: "Onboarding Speed",
      value: "60% faster",
      description: "Metadata-driven ETL for new data sources",
    },
    {
      icon: ShieldCheck,
      label: "API & Query Gains",
      value: "70-80%",
      description: "Indexing, plan analysis, and refactored SQL",
    },
    {
      icon: Sparkles,
      label: "Semantic Retrieval",
      value: "50% quicker",
      description: "Production RAG system with vector stores",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            About
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Building dependable AI & data platforms for finance-scale workloads.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            I align data engineering, MLOps, and governance so product and ops teams can
            ask real questions without worrying about drift, latency, or compliance. From CDC bronze-silver-gold stacks to
            latency-optimized RAG systems, I design outcomes you can measure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-primary text-white font-semibold shadow-lg shadow-brand-primary/40 hover:bg-brand-primaryDark transition-colors"
            >
              Start a Project
            </a>
            <a
              href="/SaurabhPandeyResume_2026.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-border bg-card font-semibold text-foreground hover:border-brand-primary/60 hover:text-brand-primary transition-colors"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative bg-card border-2 border-border hover:border-brand-primary/70 rounded-3xl p-8 transition-all shadow-xl hover:shadow-2xl"
            >
              <div className="absolute inset-0 rounded-3xl bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-primary/15 text-brand-primary mb-6 group-hover:bg-brand-primary/20 transition-colors">
                  <stat.icon className="h-7 w-7" />
                </div>
                <p className="text-4xl font-bold text-foreground mb-2 group-hover:text-brand-primary transition-colors">{stat.value}</p>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">
                  {stat.label}
                </p>
                {stat.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
