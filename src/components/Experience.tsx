import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { ExperienceCard } from "./ui/ExperienceCard";

const experiences = [
  {
    title: "Data Science Intern",
    company: "Exposys Data Labs",
    period: "Aug 2025 – Sep 2025",
    description: `Led a comprehensive Data Science internship project to predict company profits based on R&D Spend, Administration Cost, and Marketing Spend for 50 companies. 
Implemented and compared multiple regression models including Linear Regression, Ridge, Lasso, and Decision Tree Regressors. 
Performed advanced data preprocessing, outlier detection, feature scaling, and feature selection to optimize model performance. 
Conducted thorough exploratory data analysis (EDA) with visualizations using Pandas, NumPy, Matplotlib, Seaborn, and Plotly to identify patterns and correlations. 
Evaluated models using metrics like RMSE, MAE, R2, and cross-validation to ensure robust predictions. 
Engineered a complete end-to-end ML pipeline including training, testing, and deployment-ready scripts, transforming raw data into actionable business insights. 
Documented the entire workflow with clear reproducibility, including library versions (e.g., Python 3.11, Pandas 1.5, Scikit-learn 1.2, Matplotlib 3.7, Seaborn 0.12, TensorFlow 2.12). 
Delivered a structured report, presentation, and demo video to showcase methodology, results, and insights to stakeholders.`,
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
