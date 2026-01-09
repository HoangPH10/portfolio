import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: "Global ICT (Advanced Program)",
      school: "Hanoi University of Science and Technology",
      location: "Hanoi, Vietnam",
      period: "August 2018 - August 2023",
      gpa: "GPA: 3.06/4.0 - Good Degree",
      icon: GraduationCap,
      highlights: [
        // "Advanced program focusing on Information and Communication Technology",
        // "Comprehensive coursework in Computer Science and Engineering",
        // "Strong foundation in algorithms, data structures, and software development"
      ]
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-400 text-lg">
            Academic background and qualifications
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full" />

          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative flex items-center mb-16 justify-start"
            >
              {/* Timeline node */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900 z-10"
              />

              {/* Content card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-5/12 mr-auto"
              >
                <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-cyan-500/20 rounded-full mr-4">
                      <edu.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-cyan-400">{edu.school}</p>
                    </div>
                  </div>
                  
                  <p className="text-purple-300 text-sm mb-2">{edu.period}</p>
                  <p className="text-gray-300 mb-2">{edu.location}</p>
                  <p className="text-cyan-300 font-semibold mb-4">{edu.gpa}</p>
                  
                  <div className="space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        <p className="text-gray-300 text-sm">{highlight}</p>
                      </div>
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
