import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { ExperienceCard } from "./ui/ExperienceCard";

const experiences = [
  {
    title: "AI-ML Engineer Intern",
    company: "Shamgar Software Solutions",
    period: "Oct 2025 – Present",
    description: [
      "Currently pursuing a structured, 3-phase AI/ML internship program involving hands-on training, advanced learning modules, and real-time project execution.",
      "Completed Level 1 (Foundation Phase) with focus on Python programming, communication skills, and core AI/ML fundamentals.",
      "Progressed into Level 2 (Advanced Phase) — undergoing in-depth training on TensorFlow, PyTorch, machine learning frameworks, and deployment practices under industry mentors.",
      "Contributing to Level 3 (Project Phase) initiatives, working on live business and R&D projects involving model development, evaluation, and deployment.",
      "Implementing end-to-end AI pipelines including data preprocessing, model training, hyperparameter tuning, and performance optimization.",
      "Collaborating with cross-functional mentors to ensure efficient integration of AI solutions into real-world applications.",
      "Actively improving problem-solving, analytical thinking, and model scalability skills through iterative feedback and mentor reviews.",
      "Demonstrating strong commitment to professional growth, continuous learning, and ethical AI development practices."
    ],
    skills: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "PyTorch",
      "Model Deployment",
      "Data Preprocessing",
      "AI Pipelines",
      "Collaboration",
      "Continuous Learning"
    ],
  },
  {
    title: "Data Science Intern",
    company: "Exposys Data Labs",
    period: "Aug 2025 – Sep 2025",
    description: [
      "Led a comprehensive Data Science internship project to predict company profits based on R&D Spend, Administration Cost, and Marketing Spend for 50 companies.",
      "Implemented and compared multiple regression models including Linear Regression, Ridge, Lasso, and Decision Tree Regressors.",
      "Performed advanced data preprocessing, outlier detection, feature scaling, and feature selection to optimize model performance.",
      "Conducted thorough exploratory data analysis (EDA) with visualizations using Pandas, NumPy, Matplotlib, Seaborn, and Plotly to identify patterns and correlations.",
      "Evaluated models using metrics like RMSE, MAE, R², and cross-validation to ensure robust predictions.",
      "Engineered a complete end-to-end ML pipeline including training, testing, and deployment-ready scripts, transforming raw data into actionable business insights.",
      "Documented the entire workflow with clear reproducibility, including library versions (e.g., Python 3.11, Pandas 1.5, Scikit-learn 1.2, Matplotlib 3.7, Seaborn 0.12, TensorFlow 2.12).",
      "Delivered a structured report, presentation, and demo video to showcase methodology, results, and insights to stakeholders."
    ],
    skills: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "Regression",
      "EDA",
      "Feature Engineering",
      "Model Evaluation",
      "Data Visualization",
      "Pipeline Deployment",
      "Business Insights"
    ],
    certificate: "https://drive.google.com/file/d/17nfZYBeobDR6z2PwGLp7A4khJHEQ2GnR/view?usp=sharing",
  },
];

export function Experience() {
  return (
    <SectionBackground>
      <section id="experience">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="Transforming Data into Actionable Insights with AI & ML">
            Experience
          </SectionTitle>

          <div className="relative border-l-2 border-blue-600 dark:border-blue-500 max-w-5xl mx-auto space-y-10">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
