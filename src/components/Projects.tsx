import { SectionTitle } from './ui/SectionTitle'; 
import { SectionBackground } from './ui/SectionBackground';
import { ProjectCard } from './ui/ProjectCard';
import {
  SiPython,
  SiStreamlit,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiPowers,
  SiJupyter,
  SiGooglecolab,
  SiTensorflow,
  SiPytorch,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiApachespark,
} from 'react-icons/si';
import { FaChartBar, FaProjectDiagram } from 'react-icons/fa';

// Define tech stack icons & colors
const techStacks = {
  python: { icon: SiPython, name: 'Python', color: '#3776AB' },
  scikit: { icon: SiScikitlearn, name: 'Scikit-learn', color: '#F7931E' },
  streamlit: { icon: SiStreamlit, name: 'Streamlit', color: '#FF4B4B' },
  pandas: { icon: SiPandas, name: 'Pandas', color: '#150458' },
  numpy: { icon: SiNumpy, name: 'NumPy', color: '#013243' },
  seaborn: { icon: FaProjectDiagram, name: 'Seaborn', color: '#4C9A91' },
  powerbi: { icon: FaChartBar, name: 'Power BI', color: '#F2C811' },
  jupyter: { icon: SiJupyter, name: 'Jupyter Notebook', color: '#F37626' },
  colab: { icon: SiGooglecolab, name: 'Google Colab', color: '#F9AB00' },
  tensorflow: { icon: SiTensorflow, name: 'TensorFlow', color: '#FF6F00' },
  pytorch: { icon: SiPytorch, name: 'PyTorch', color: '#EE4C2C' },
  html: { icon: SiHtml5, name: 'HTML', color: '#E34F26' },
  css: { icon: SiCss3, name: 'CSS', color: '#1572B6' },
  js: { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  react: { icon: SiReact, name: 'React.js', color: '#61DAFB' },
  node: { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
  express: { icon: SiExpress, name: 'Express.js', color: '#000000' },
  mongodb: { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  postgresql: { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
  spark: { icon: SiApachespark, name: 'Apache Spark', color: '#E25A1C' },
};

// Define projects
const projects = [
  {
    title: 'IPL Victory Probability Estimator',
    description: `Developed a machine learning pipeline to forecast live IPL match win probabilities. 
Extracted predictive features from historical and in-game data. 
Trained a classification model for dynamic probability updates. 
Implemented an interactive Streamlit web application. 
Provided real-time insights for users during matches. 
Focused on accuracy and usability in live conditions.`,
    image: '/assets/ipl.jpg',
    link: 'https://iplvictoryestimatorbyarun.streamlit.app/',
    github: 'https://github.com/arun-248/ipl-victory-prediction-system.git',
    techStack: [
      techStacks.python,
      techStacks.scikit,
      techStacks.streamlit,
      techStacks.pandas,
      techStacks.numpy,
      techStacks.jupyter
    ],
  },
  {
    title: 'Personalized Book Recommender',
    description: `Built a collaborative filtering system to provide personalized book suggestions. 
Analyzed user-book interactions using Python and Scikit-learn. 
Engineered a system that processes large datasets efficiently. 
Created a full-stack web app with Streamlit. 
Focused on generating accurate and relevant recommendations. 
Demonstrates end-to-end development skills.`,
    image: '/assets/book.jpg',
    link: 'https://arunpersonalizedbookrecommender.streamlit.app/',
    github: 'https://github.com/arun-248/Personalized-Book-Recommender.git',
    techStack: [
      techStacks.python,
      techStacks.scikit,
      techStacks.streamlit,
      techStacks.pandas,
      techStacks.numpy,
      techStacks.colab
    ],
  },
  {
    title: 'Stock Trend Analyzer',
    description: `Built an AI-powered analyzer for financial news using semantic search. 
Implemented document chunking, vector embeddings, and FAISS similarity search. 
Integrated with an LLM to answer queries contextually. 
Simulates an equity research assistant for investors. 
Designed for efficient retrieval of relevant financial information. 
Provides actionable insights using AI techniques.`,
    image: '/assets/stock.jpg',
    link: '#',
    github: 'https://github.com/arun-248/Stock-Trend-Analyzer',
    techStack: [
      techStacks.python,
      techStacks.tensorflow,
      techStacks.pytorch,
      techStacks.jupyter,
      techStacks.pandas
    ],
  },
  {
    title: 'HR Analytics Dashboard',
    description: `Developed an interactive HR Analytics Dashboard using Power BI. 
Analyzed employee data to identify trends and insights. 
Implemented visualizations for attrition, performance, and recruitment metrics. 
Enabled data-driven decision making for HR managers. 
Focused on clarity, usability, and actionable insights. 
Demonstrates skills in data visualization and analytics.`,
    image: '/assets/hr.png',
    link: '#',
    github: 'https://github.com/arun-248/HR-Analytics-Dashboard.git',
    techStack: [
      techStacks.powerbi,
      techStacks.python,
      techStacks.pandas,
      techStacks.seaborn,
      techStacks.jupyter
    ],
  },
  {
    title: 'Zomato Exploratory Data Analysis',
    description: `Performed in-depth Exploratory Data Analysis (EDA) on Zomato restaurant dataset. 
Cleaned and preprocessed data, handled missing values, and removed irrelevant columns. 
Renamed features for better clarity. 
Visualized restaurant distribution by category and cuisine. 
Analyzed rating vs. cost relationships. 
Derived insights to understand trends in the restaurant industry.`,
    image: '/assets/zomato.jpg',
    link: '#',
    github: 'https://github.com/arun-248/Exploratory-Data-Analysis-Zomato.git',
    techStack: [
      techStacks.python,
      techStacks.pandas,
      techStacks.numpy,
      techStacks.seaborn,
      techStacks.jupyter
    ],
  },
  {
    title: 'Heart Disease Prediction',
    description: `Developed a Logistic Regression model to predict the presence of heart disease. 
Conducted data analysis and preprocessing to ensure data quality. 
Trained and tested the model for optimal accuracy. 
Evaluated predictive capabilities using performance metrics. 
Showcases end-to-end ML workflow for healthcare applications.`,
    image: '/assets/heart_2.jpg',
    link: '#',
    github: 'https://github.com/arun-248/Heart-Disease-Prediction.git',
    techStack: [
      techStacks.python,
      techStacks.scikit,
      techStacks.pandas,
      techStacks.jupyter,
      techStacks.streamlit
    ],
  },
];

export function Projects() {
  return (
    <SectionBackground>
      <section id="projects">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="Crafting code into solutions I’m proud of, from concept to creation">
            Projects
          </SectionTitle>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
