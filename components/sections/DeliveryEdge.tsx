"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const achievements = [
  "Architected CDC-driven medallion platforms in BigQuery to cut reporting latency by 40%.",
  "Designed metadata-driven ETL onboarding that reduced new-source setup time by 60%.",
  "Delivered production RAG pipelines that sped up semantic retrieval by 50%.",
];

export default function DeliveryEdge() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-brand-primary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative bg-card border-2 border-border rounded-3xl p-10 transition-all shadow-xl">
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="p-3 bg-brand-primary/10 rounded-2xl">
                <TrendingUp className="h-6 w-6 text-brand-primary" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                  Delivery Edge
                </p>
                <h3 className="text-3xl font-bold text-foreground">What teams gain working with me</h3>
              </div>
            </div>
            <div className="space-y-5">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2.5 h-2.5 rounded-full mt-2 flex-shrink-0 bg-brand-primary" />
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {achievement}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
