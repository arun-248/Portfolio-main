import { User2, Code2, Lightbulb } from "lucide-react";
import { GoGoal } from "react-icons/go";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";

const aboutSections = [
  {
    icon: User2,
    title: "Who I Am",
   description: [
  "An M.Tech Artificial Intelligence student with a passion for intelligent technologies.",
  "Curious, analytical, and driven to continuously learn and innovate in AI.",
  "Aspiring to become an AI Engineer who creates meaningful real-world impact."
],
    color: "bg-blue-600",
  },
  {
    icon: Code2,
   title: "What I Do",
description: [
  "Develop AI-powered applications using Generative AI, LLMs, NLP, Agentic AI, RAG, and Computer Vision.",
  "Design intelligent systems that automate complex tasks and enhance decision-making.",
  "Build scalable AI solutions from research, data, and modern AI technologies."
],
    color: "bg-purple-600",
  },
  {
    icon: GoGoal,
    title: "My Goals",
description: [
  "Advance AI through impactful research and innovative real-world applications.",
  "Build next-generation intelligent systems that are scalable, reliable, and human-centered.",
  "Continuously grow as an AI Engineer while contributing to the future of Artificial Intelligence."
],
    color: "bg-green-600",
  },
  {
    icon: Lightbulb,
    title: "My Philosophy",
description: [
  "Artificial Intelligence should empower people and amplify human potential.",
  "Responsible AI begins with transparency, fairness, and ethical innovation.",
  "The best AI solutions combine cutting-edge technology with meaningful purpose."
],
    color: "bg-orange-600",
  },
];

export function About() {
  return (
    <SectionBackground>
      <section id="about">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Building intelligent systems with AI, ML, and data-driven innovation.">About Me</SectionTitle>

          {/* Introduction */}
          <div className="max-w-5xl mx-auto mb-10 text-center">
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
  Hey there! 👋 I'm <span className="text-blue-600 font-semibold">Arun Chinthalapally</span>, an M.Tech Artificial Intelligence student at <span className="text-blue-600 font-semibold">Amrita Vishwa Vidyapeetham, Coimbatore</span>. I'm passionate about designing and building intelligent AI systems using Generative AI, Large Language Models (LLMs), Agentic AI, Retrieval-Augmented Generation (RAG), Computer Vision, and Machine Learning to solve real-world challenges. My work focuses on developing innovative AI-powered applications, exploring emerging AI technologies, and creating scalable, intelligent solutions that bridge research with real-world impact.
</p>
            <div className="mt-6 flex justify-center">
              <span className="text-sm sm:text-base inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-lg shadow">
                🚀 Building intelligent AI systems for real-world impact
              </span>
            </div>
          </div>

          {/* About Section Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {aboutSections.map(({ icon: Icon, title, description, color }) => (
              <div key={title} className="relative group">
                {/* Background Effect */}
                <div className={`absolute inset-0 ${color} rounded-xl blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`} />

                {/* Card Content */}
                <div className="relative bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-4 space-x-4">
                    {/* Icon */}
                    <div className={`p-3 ${color} rounded-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
                  </div>
                  <ul className="text-sm sm:text-base list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1">
                    {description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}



