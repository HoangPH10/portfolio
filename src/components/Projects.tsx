import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Bot, Briefcase, Linkedin   } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export function Projects() {
  const projects = [
    {
      title: "Brose Multi-Agent Services",
      description: "The Requirements Engineer Agent is equipped with tools to extract requirements from PDF specifications, classify them, and import them into Codebeamer ALM. The KBE Agent is capable of extracting parameters such as weight, angle, and height of power tailgates from requirements, as well as interpreting simulation results from KBE tools. Both agents are deployed as independent MCP servers and expose their tools to the Deep Agent Framework. This project is presented at Microsoft AI Tour Frankfurt on Nov 06, 2025",
      icon: Bot,
      tech: ["LangChain", "LangGraph", "OpenAI", "Azure Cloud Services"],
      gradient: "from-orange-400 to-red-500",
      linkedin: "https://www.linkedin.com/posts/jens-krueger-780a131_nttdata-brose-microsoft-activity-7392509382149701632-Ajqd/",
    },
      {
      title: "Portfolio Generation Project",
      description: "This project is an automated CV-to-portfolio generation system that transforms a PDF resume into a fully responsive personal portfolio website. It uses Azure Document Intelligence to extract text from CV PDFs, Azure OpenAI to intelligently structure and interpret resume content, and LangChain to orchestrate the end-to-end AI workflow. The system generates clean, production-ready HTML, CSS, and JavaScript files, and supports both CLI and Streamlit-based web usage, demonstrating practical application of LLM-powered document understanding, code generation, and AI-driven automation.",
      icon: Briefcase,
      tech: ["Streamlit", "Azure Doc Intel", "Azure OpenAI", "LangChain"],
      gradient: "from-green-400 to-blue-500",
      demo: "https://drive.google.com/file/d/1oFWhfoUGskSf19dxkTFCbtE9AoEW5NCf/view?usp=sharing",
      github: "https://github.com/HoangPH10/portfolio-generation-project"
    },
    {
      title: "AI Chatbot System using Model Context Protocol",
      description: "This project is an end-to-end AI chatbot built on the Model Context Protocol (MCP), combining LLM agents, tool calling, and hybrid semantic search. It includes an MCP Server that provides reusable search tools powered by Azure AI Search and Azure OpenAI, and an MCP Client featuring a LangChain-based conversational agent with a Streamlit UI using Google Gemini models. The system demonstrates modern AI application design using tool-augmented LLMs, RAG, and standardized agent–tool communication via MCP.",
      icon: Bot,
      tech: ["Azure AI Search", "Azure OpenAI","FastMCP", "Gemini", "Streamlit"],
      gradient: "from-blue-400 to-purple-500",
      demo: "https://drive.google.com/file/d/1NuNBUe9TLHiv0r2vAkU0NWsw14qBnTeV/view?usp=drive_linkhttps://drive.google.com/file/d/1NuNBUe9TLHiv0r2vAkU0NWsw14qBnTeV/view?usp=sharing",
      github: "https://github.com/HoangPH10/ai-chatbot-project"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Interactive gallery showcasing AI/ML projects that push the boundaries of what's possible
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-gray-900/50 border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-20`}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex space-x-2">
                      {project.demo && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-gray-400 hover:text-blue-400"
                          onClick={() => {
                            const videoPopup = window.open('', '_blank', 'width=800,height=600,scrollbars=no,resizable=no');
                            if (videoPopup) {
                              videoPopup.document.write(`
                                <!DOCTYPE html>
                                <html lang="en">
                                <head>
                                  <title>Video Demo</title>
                                  <style>
                                    body { margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #000; }
                                    iframe { width: 100%; height: 100%; border: none; }
                                  </style>
                                </head>
                                <body>
                                  <iframe src="${project.demo}" allowfullscreen></iframe>
                                </body>
                                </html>
                              `);
                              videoPopup.document.close();
                            }
                          }}
                        >
                          <ExternalLink size={16} />
                        </Button>
                      )}
                      {project.github && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-gray-400 hover:text-blue-400"
                          onClick={() => window.open(project.github, '_blank', 'noopener noreferrer')}
                        >
                          <Github size={16} />
                        </Button>
                      )}
                      {project.linkedin && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-gray-400 hover:text-blue-400"
                          onClick={() => window.open(project.linkedin, '_blank', 'noopener noreferrer')}
                        >
                          <Linkedin size={16} />
                        </Button>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}