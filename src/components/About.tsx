import { User2, Code2, Lightbulb } from "lucide-react";
import { GoGoal } from "react-icons/go";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";

const aboutSections = [
  {
    icon: User2,
    title: "Who I Am",
   description: [
  "An aspiring AI/ML Engineer passionate about building intelligent systems.",
  "Skilled in Python, Machine Learning, and building AI-powered applications.",
  "Driven by curiosity to explore AI, train models, and solve real-world problems."
],
    color: "bg-blue-600",
  },
  {
    icon: Code2,
   title: "What I Do",
description: [
  "Design and develop Machine Learning models to solve real-world problems.",
  "Build AI-powered applications using ML, Generative AI, and intelligent automation.",
  "Analyze and transform data to train models and generate actionable insights.",
],
    color: "bg-purple-600",
  },
  {
    icon: GoGoal,
    title: "My Goals",
description: [
  "Become a highly skilled AI/ML Engineer focused on Machine Learning and Generative AI.",
  "Develop intelligent systems that automate complex tasks and improve decision-making.",
  "Contribute to cutting-edge AI innovation and impactful real-world applications.",
],
    color: "bg-green-600",
  },
  {
    icon: Lightbulb,
    title: "My Philosophy",
description: [
  "Artificial Intelligence should augment human potential, not replace it.",
  "Responsible AI means building systems that are transparent, fair, and impactful.",
  "Innovation in AI must always be guided by ethics and real-world purpose.",
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
  Hey there! 👋 I'm <span className="text-blue-600 font-semibold">Arun Chinthalapally</span>, 
  a Computer Science Engineering graduate focused on Artificial Intelligence and Machine Learning. 
  I enjoy building intelligent systems using Machine Learning, Deep Learning, and Generative AI to solve real-world problems. 
  My work involves developing models, experimenting with AI technologies, and turning data into impactful AI-driven solutions.
</p>
            <div className="mt-6 flex justify-center">
              <span className="text-sm sm:text-base inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-lg shadow">
                🚀 Transforming insights into action, and action into innovation
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



