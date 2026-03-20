"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Database,
  Code,
  Brain,
  Layers,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: [
      "GCP: BigQuery, Dataflow, Datastream, Cloud Run, Vertex AI, AlloyDB",
      "AWS: S3, Glue, Lambda, Redshift",
    ],
  },
  {
    title: "Architecture & Engineering",
    icon: Layers,
    skills: [
      "Medallion (Bronze–Silver–Gold)",
      "CI/CD Pipelines, CDC Pipelines",
      "Incremental Processing, Partitioning & Clustering",
      "Metadata-Driven ETL, Data Governance, Query Optimization",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      "BigQuery, Snowflake",
      "PostgreSQL, MySQL, MS SQL Server",
    ],
  },
  {
    title: "Programming",
    icon: Code,
    skills: [
      "Python, Advanced SQL",
      "FastAPI, Stored Procedures",
      "Docker, Git",
    ],
  },
  {
    title: "Generative AI",
    icon: Brain,
    skills: [
      "RAG Pipelines, ChromaDB",
      "Embedding Workflows, LLM Integration",
      "Semantic Search Optimization",
    ],
  },
  {
    title: "Analytics & Monitoring",
    icon: Wrench,
    skills: [
      "Looker, Splunk, Periscope",
    ],
  },
];

export default function TechnicalSkills() {
  return (
    <section id="skills" className="py-16 bg-background relative overflow-hidden">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cloud-native data platforms, CDC pipelines, and AI-integrated systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border-2 border-border hover:border-brand-primary/50 rounded-xl p-8 hover:shadow-xl transition-all h-full flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-brand-primary/10">
                  <category.icon className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-start gap-2 group/item">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform bg-brand-primary" />
                    <span className="text-muted-foreground group-hover/item:text-foreground text-sm transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
