import React from 'react';
import { motion } from 'motion/react';
import { Award, Cloud, Container, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function Certifications() {
  const certifications = [
    {
      title: "Microsoft Certified: Azure AI Engineer Associate",
      issuer: "Microsoft",
      period: "Dec 2025 - Dec 2026",
      icon: Cloud,
      gradient: "from-blue-400 to-cyan-500",
      description: "Demonstrates expertise in designing and implementing AI solutions using Azure AI services"
    },
    {
      title: "Certified Kubernetes Application Developer",
      issuer: "Cloud Native Computing Foundation",
      period: "May 2025 - May 2027",
      icon: Container,
      gradient: "from-purple-400 to-blue-500",
      description: "Validates skills in designing, building, and deploying cloud-native applications for Kubernetes"
    },
    {
      title: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      period: "Feb 2025 - Feb 2028",
      icon: Cloud,
      gradient: "from-orange-400 to-yellow-500",
      description: "Demonstrates knowledge of designing distributed systems on AWS platform"
    },
    {
      title: "Professional Scrum Master II",
      issuer: "Scrum.org",
      period: "Feb 2025",
      icon: Users,
      gradient: "from-green-400 to-teal-500",
      description: "Advanced understanding of Scrum framework and how to apply it in complex situations"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
            style={{ 
              backgroundImage: 'linear-gradient(to right, rgb(34, 211, 238), rgb(96, 165, 250), rgb(168, 85, 247))',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent'
            }}
          >
            Certifications & Awards
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications demonstrating expertise across cloud platforms and development practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-gray-900/50 border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 overflow-hidden relative h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <CardHeader className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-full bg-gradient-to-r ${cert.gradient} bg-opacity-20 flex-shrink-0`}
                    >
                      <cert.icon className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                  
                  <CardTitle className="text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {cert.issuer}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative">
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <Award className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-300">{cert.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
