"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { calculateTotalExperience, formatDateRange } from "@/lib/experience";

const experiences = [
  {
    startDate: new Date(2024, 7), // Aug 2024
    endDate: null, // Present
    company: "Harmony Data Integration Technology Pvt. Ltd.",
    role: "AI & Data Engineer",
    location: "Mohali, Punjab",
    achievements: [
      "Architected CDC-based Bronze–Silver–Gold data platform in BigQuery, improving reporting performance by 40% and reducing warehouse costs through partitioning and clustering strategies",
      "Designed metadata-driven ETL framework enabling scalable schema evolution and accelerating onboarding of new data sources by 60%",
      "Developed idempotent ingestion pipelines in AlloyDB and implemented CI/CD workflows for automated testing and deployment",
      "Optimized complex SQL workloads and warehouse schemas, reducing downstream API latency by 30% for product-facing analytics services",
      "Led development of production-grade RAG system integrating vector embeddings and LLM APIs, reducing semantic retrieval latency by 50%",
    ],
  },
  {
    startDate: new Date(2022, 6), // July 2022
    endDate: new Date(2024, 7), // Aug 2024
    company: "Priority Technology Holdings, Inc.",
    role: "Data Engineer",
    location: "Chandigarh",
    achievements: [
      "Led database and warehouse performance optimization initiatives, improving API and query performance by 70–80% through indexing, execution plan analysis, and query refactoring",
      "Owned MS SQL Server → MySQL & Snowflake migration strategy, ensuring full data reconciliation and zero critical downtime",
      "Designed optimized reporting models and stored procedures for high-volume financial transaction systems handling sensitive payment data",
      "Automated compliance and audit workflows using API-based integrations, improving traceability and reducing manual intervention",
    ],
  },
  {
    startDate: new Date(2022, 0), // Jan 2022
    endDate: new Date(2022, 5), // June 2022
    company: "Finxera",
    role: "Database Engineering Intern",
    location: "Chandigarh",
    achievements: [
      "Automated financial reporting pipelines using Python schedulers, eliminating repetitive manual reporting tasks",
      "Optimized complex financial analytics queries, improving execution time and reporting accuracy",
    ],
  },
];

type Experience = (typeof experiences)[number];
const sortedExperiences: Experience[] = [...experiences].sort(
  (a, b) => b.startDate.getTime() - a.startDate.getTime()
);

export default function Journey() {
  return (
    <section
      id="journey"
      className="py-16 bg-background"
    >
      <div className="space-y-8">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-2">
            <span className="text-foreground">{calculateTotalExperience()} YEARS OF</span>
            <br />
            <span className="text-muted-foreground/40">EXPERIENCE</span>
          </h2>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative pt-4">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-brand-primary/40 via-border to-transparent" />
          <div className="space-y-12">
            {sortedExperiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-16"
              >
                <div className="absolute left-4 -translate-x-1/2 top-7 w-3 h-3 rounded-full bg-brand-primary shadow shadow-brand-primary/40" />

                <div className="group bg-card border border-border rounded-2xl p-6 hover:border-brand-primary/60 hover:shadow-xl transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground/70 mb-2">
                        {formatDateRange(exp.startDate, exp.endDate)}
                      </p>
                      <h3 className="text-2xl font-semibold text-foreground">
                        {exp.company}
                      </h3>
                      <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                        <span>{exp.role}</span>
                        <span className="text-border">•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                        {achievement}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
