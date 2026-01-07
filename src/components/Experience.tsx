import React from 'react';
import { motion } from 'motion/react';
import {TrendingUp } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: "AI Engineer",
      company: "NTT Data VDS Co.,Ltd",
      period: "July 2025 - Present",
      description: "Collaborated on Generative AI initiatives, delivered enterprise LLM systems and multi-agent AI solutions, developed backend services to support AI copilots and document intelligence workflows, and contributed to MCP server integration, testing framework enhancements, and CI automation to ensure system reliability. Worked closely with cross-functional teams to deliver real-world AI solutions.",
      icon: TrendingUp,
      skills: ["LLM", "Multi-Agent Systems", "Azure Cloud Services", "Backend Development"]
    },
    {
      title: "AI Engineer",
      company: "Panasonic R&D Center Vietnam",
      period: "August 2024 - June 2025",
      description: "Collaborated on computer vision initiatives, researched and delivered solutions for 3D reconstruction projects, built automated image-based pipelines for retail analysis using Azure cloud services, and designed backend APIs integrated with database systems.",
      icon: TrendingUp,
      skills: ["Computer Vision", "Backend Development", "Cloud Engineering"]
    },
    {
      title: "AI Engineer",
      company: "ARS Vietnam",
      period: "April 2023 - July 2024",
      description: "Collaborated on computer vision projects, built intelligent OCR pipelines for processing Japanese invoices, optimized inference performance through ONNX and TensorRT model conversion, and developed real-time computer vision solutions for video streaming and object detection.",
      icon: TrendingUp,
      skills: ["OCR", "Object Detection", "Model Training & Optimization"]
    },
    {
      title: "Frontend Developer",
      company: "FPT Software",
      period: "July 2021 - April 2022",
      description: "Collaborated with clients through daily meetings to align on tasks, processes, and project progress, and implemented technical tasks assigned by team leads and clients to support project objectives and timely delivery.",
      icon: TrendingUp,
      skills: ["ReactJs", "NodeJs"]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Experience Timeline
          </h2>
          <p className="text-gray-400 text-lg">
            My journey in data science and AI engineering
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Timeline node */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.3 + 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-gray-900 z-10"
              />

              {/* Content card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`w-5/12 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
              >
                <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-500/20 rounded-full mr-4">
                      <exp.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-blue-400">{exp.company}</p>
                    </div>
                  </div>
                  
                  <p className="text-purple-300 text-sm mb-3">{exp.period}</p>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}