"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const projects = [
  {
    title: "CDC-Based Medallion Data Platform",
    description:
      "Architected Bronze–Silver–Gold data platform in BigQuery with CDC pipelines, improving reporting performance by 40% and reducing warehouse costs through partitioning and clustering strategies.",
    technologies: ["BigQuery", "CDC Pipelines", "Python", "SQL", "Dataflow"],
    impact: "40% performance improvement",
  },
  {
    title: "Production-Grade RAG System",
    description:
      "Led development of RAG system integrating vector embeddings and LLM APIs, reducing semantic retrieval latency by 50% and enabling intelligent search across structured and unstructured datasets.",
    technologies: ["ChromaDB", "Python", "FastAPI", "LLM Integration", "Vector Embeddings"],
    impact: "50% faster semantic retrieval",
  },
  {
    title: "Database Performance Optimization",
    description:
      "Led database and warehouse performance optimization initiatives, improving API and query performance by 70–80% through indexing, execution plan analysis, and query refactoring.",
    technologies: ["SQL", "BigQuery", "Snowflake", "MySQL", "Performance Tuning"],
    impact: "70–80% API optimization",
  },
  {
    title: "Iconik Video Analyzer",
    description:
      "Built a scalable, cloud-based video analysis pipeline that processes golf tournament footage with AI on GCP, aligns AI-detected shots with tournament feeds, and auto-tags metadata via Iconik APIs.",
    technologies: ["Python", "GCP", "Vertex AI", "Cloud Run Jobs", "BigQuery", "Iconik APIs"],
    impact: "Automated golf-shot detection & tagging",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-16 bg-background relative overflow-hidden">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Key Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cloud-native data platforms and AI systems delivering measurable business impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-primary/20" />
              
              {/* Card */}
              <div className="relative bg-card border-2 border-border group-hover:border-brand-primary/50 rounded-2xl p-8 transition-all duration-300 shadow-lg group-hover:shadow-2xl h-full flex flex-col">
                {/* Project number badge */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm bg-brand-primary/10 text-brand-primary">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <h3 className="text-2xl font-bold mb-4 transition-colors pr-12 group-hover:text-brand-primary">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Impact badge */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-brand-primary/10 border border-brand-primary/40 text-brand-primary">
                    <TrendingUp className="h-4 w-4" />
                    <span>{project.impact}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-brand-primary/10 hover:bg-brand-primary/20 text-brand-primary text-sm rounded-lg font-medium transition-colors border border-brand-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
