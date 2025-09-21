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
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiGithub,
} from 'react-icons/si';
import { FaChartBar, FaProjectDiagram, FaRobot } from 'react-icons/fa';

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
  gpt: { icon: FaRobot, name: 'OpenAI GPT', color: '#412991' },
  typescript: { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  tailwind: { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
  vercel: { icon: SiVercel, name: 'Vercel', color: '#000000' },
  github: { icon: SiGithub, name: 'GitHub', color: '#181717' },
};

// Define projects
const projects = [
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
Provides actionable insights using advanced AI techniques for decision-making..`,
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
    title: 'Heart Disease Prediction',
    description: `Developed a Logistic Regression model to predict the presence of heart disease. Conducted data analysis and preprocessing to ensure data quality,reliability and accuracy. 
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
  {
    title: 'HR Analytics Dashboard',
    description: `Developed an interactive HR Analytics Dashboard using Power BI. 
Analyzed employee data comprehensively to accurately identify trends and insights. 
Implemented visualizations for attrition, performance, and recruitment metrics. 
Enabled data-driven decision making for HR managers. 
Focused on clarity, usability, and meaningful actionable insights.`,
    image: '/assets/hr.jpg',
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
    title: 'GPT-Based Smart Assistant',
    description: `Developed a voice-controlled assistant powered by OpenAI GPT. 
Recognizes voice commands and converts them into text. 
Processes queries with GPT to generate intelligent responses. 
Converts text back to speech for natural interaction. 
Automates tasks like opening Google or YouTube. 
Demonstrates integration of AI, NLP, and automation.`,
    image: '/assets/gpt.jpg',
    link: '#',
    github: 'https://github.com/arun-248/GPT-Based-Smart-Assistant.git',
    techStack: [
      techStacks.python,
      techStacks.gpt,
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
    title: 'Portfolio Website',
    description: `Designed and developed a personal portfolio to showcase AI, ML, and Data Analytics projects. 
Implemented a modern, responsive design using React, TypeScript, and Tailwind CSS. 
Integrated interactive animations with Framer Motion. 
Highlighted professional experience, skills, certifications, and projects. 
Deployed on Vercel for fast, reliable performance. 
Demonstrates front-end development expertise and professional presentation.`,
    image: '/assets/portfolio.png',
    link: 'https://arun248-portfolio.vercel.app/',
    github: 'https://github.com/arun-248/Portfolio-main.git',
    techStack: [
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.vercel,
      techStacks.github
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