import React from 'react';
import { motion } from 'motion/react';
import { Code, Brain , Heart } from 'lucide-react';
import profileImage from 'figma:asset/profile_picture.jpg';

export function About() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-400/30 p-4 flex items-center justify-center overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Hoang Pham" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-blue-400/20 rounded-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Mid-level AI Engineer passionate about building LLM-based systems on the cloud
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I am an AI Engineer with hands-on experience building LLM-powered, cloud-native AI systems in enterprise environments. 
              My work focuses on LLM orchestration and multi-agent architectures, alongside Python-based backend development. 
              I am motivated by building real-world AI systems at scale, collaborating with cross-functional teams, and delivering advanced solutions into production.
            </p>

            <div className="flex items-center space-x-6 text-gray-400">
              <div className="flex items-center space-x-2">
                <Code className="text-blue-400" size={30} />
                <span>Proficiency in Python</span>
              </div>
              <div className="flex items-center space-x-2">
                <Brain className="text-purple-400" size={30} />
                <span>Powered by LLM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="text-pink-400" size={30} />
                <span>Passionate about AI</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-lg border border-blue-400/20"
            >
              <p className="text-blue-300 italic">
                "Machine learning engineering is 10% machine learning and 90% engineering." - Huyen Chip
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}