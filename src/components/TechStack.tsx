import React from 'react';
import { motion } from 'motion/react';

export function TechStack() {
  const techCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "SQL", icon: "🗃️" },
        { name: "JavaScript", icon: "⚡" },
      ]
    },
     {
      category: "AI/ML Frameworks",
      skills: [
        { name: "PyTorch", icon: "🔥" },
        { name: "Scikit-learn", icon: "🔬" },
        { name: "LangChain", icon: "🦜" },
        // { name: "LangGraph", icon: "🕸️" }
      ]
    },
     {
      category: "Cloud Development",
      skills: [
        { name: "AWS", icon: "☁️" },
        { name: "Azure", icon: "☁️" }
      ]
    },
      {
      category: "Backend Development",
      skills: [
         { name: "FastAPI", icon: "🚀" },
        { name: "Flask", icon: "⚗️" },
      ]
    },
    {
      category: "Data & Visualization",
      skills: [
        { name: "Pandas", icon: "🐼" },
        { name: "NumPy", icon: "🔢" },
        { name: "Matplotlib", icon: "📊" }
      ]
    },
   
    
    {
      category: "Tools & Platforms",
      skills: [
        // { name: "Docker", icon: "🐳" },
        { name: "Git", icon: "🌱" },
        { name: "Linux", icon: "🐧" },
        { name: "Jira", icon: "📋" },
      ]
    },
   
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies and tools I use to build intelligent systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-lg shadow-md hover:bg-gray-700/50 transition-colors duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 15 }}
                      className="text-3xl text-purple-400"
                    >
                      {skill.icon}
                    </motion.div>

                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-white font-semibold text-lg">{skill.name}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}