import { User2, Code2, Lightbulb } from "lucide-react";
import { GoGoal } from "react-icons/go";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";

const aboutSections = [
  {
    icon: User2,
    title: "Who I Am",
    description: [
      "An aspiring Data Scientist passionate about AI and Machine Learning.",
      "Skilled in data analysis, visualization, and building intelligent systems.",
      "Driven by curiosity and a vision to turn data into meaningful impact.",
    ],
    color: "bg-blue-600",
  },
  {
    icon: Code2,
    title: "What I Do",
    description: [
      "Design and implement ML models that address real-world challenges.",
      "Leverage AI and generative tools to innovate and automate solutions.",
      "Transform raw data into insights through analytics and visualization.",
    ],
    color: "bg-purple-600",
  },
  {
    icon: GoGoal,
    title: "My Goals",
    description: [
      "Advance as a Data Scientist and AI Engineer specializing in ML & GenAI.",
      "Build intelligent platforms that create measurable social and global impact.",
      "Contribute research and solutions that shape the future of technology.",
    ],
    color: "bg-green-600",
  },
  {
    icon: Lightbulb,
    title: "My Philosophy",
    description: [
    "True intelligence is not in algorithms alone, but in how they empower humanity.",
    "Complex systems should deliver clarity, fairness, and meaningful transformation.",
    "Every line of code carries responsibility to shape a more ethical future with AI.",
  ],
    color: "bg-orange-600",
  },
];

export function About() {
  return (
    <SectionBackground>
      <section id="about">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Designing intelligent solutions through AI, ML, and advanced data analytics.">About Me</SectionTitle>

          {/* Introduction */}
          <div className="max-w-5xl mx-auto mb-10 text-center">
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Hey there! 👋 I'm <span className="text-blue-600 font-semibold">Arun Chinthalapally</span>, 
              a Computer Science Engineering graduate with a deep focus on Data Science, Machine Learning, and Artificial Intelligence. 
              I specialize in building intelligent systems, from predictive models to generative AI applications, 
              while also translating complex data into clear insights through analytics and visualization. 
              My journey blends curiosity, research, and practical projects — all driven by a vision to create impactful AI-driven solutions for real-world problems.
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



