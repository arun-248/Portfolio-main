import { SectionTitle } from './ui/SectionTitle'; 
import { SectionBackground } from './ui/SectionBackground';
import { ProjectCard } from './ui/ProjectCard';
import {
  SiPython,
  SiStreamlit,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiGooglecolab,
  SiTensorflow,
  SiPytorch,
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
  SiJavascript,
  SiFastapi,
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
  javascript: { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  fastapi: { icon: SiFastapi, name: 'FastAPI', color: '#009688' },
};

// Define projects
const projects = [
  {
    title: 'AI Study Buddy',
    description: `Developed an advanced AI-powered intelligent study assistant using React, FastAPI, and Gemini API with multi-format document processing, AI-generated summaries, quizzes, flashcards, and a personalized adaptive study planner. Designed an intuitive, responsive, and visually engaging UI with TailwindCSS and integrated seamless AI-driven interactions for an immersive learning experience.`,
    image: '/assets/Ai_Study_Buddy.jpg',
    link: 'https://aistudybuddybyarun.vercel.app/',
    github: 'https://github.com/arun-248/Ai-Study-Buddy.git',
    techStack: [
      techStacks.react,
      techStacks.fastapi,
      techStacks.tailwind,
      techStacks.typescript,
      techStacks.python,
      techStacks.gpt,
    
    ],
  },
  {
    title: 'Personalized Book Recommender',
    description: `Built a collaborative filtering system to provide personalized book suggestions. 
Analyzed user-book interactions using Python and Scikit-learn. 
Engineered a system that processes large datasets efficiently. 
Created a full-stack web app with Streamlit. 
Focused on generating accurate and highly relevant recommendations.`,
    image: '/assets/book.jpg',
    link: 'https://arunpersonalizedbookrecommender.streamlit.app/',
    github: 'https://github.com/arun-248/Personalized-Book-Recommender.git',
    techStack: [
      techStacks.python,
      techStacks.scikit,
      techStacks.streamlit,
      techStacks.pandas,
      techStacks.numpy,
      techStacks.colab,
    ],
  },
  {
    title: 'Lung Cancer Risk Analyzer',
    description: `This ML-powered application predicts personalized lung cancer risk using an ensemble of Logistic Regression and Random Forest, achieving 94.2% accuracy with a 0.987 AUC-ROC. It provides real-time risk classification with confidence scoring through an interactive Streamlit dashboard.`,
    image: '/assets/cancerimage.jpg',
    link: 'https://arun24-lung-cancer-analyzer.streamlit.app/',
    github: 'https://github.com/arun-248/lung-cancer-risk-analyzer.git',
    techStack: [
      techStacks.python,
      techStacks.scikit,
      techStacks.streamlit,
      techStacks.pandas,
      techStacks.numpy,
      techStacks.jupyter,
    ],
  },
  {
    title: 'IPL Victory Probability Estimator',
    description: `Developed a robust machine learning pipeline to forecast live IPL match win probabilities with high accuracy. Extracted and engineered predictive features from extensive historical and real-time in-game data. Trained and optimized a classification model for dynamic probability updates and implemented an interactive, user-friendly Streamlit web application for real-time match insights and detailed visual analytics.`,
    image: '/assets/ipl.jpg',
    link: 'https://iplwinpredictorbyarun.streamlit.app/',
    github: 'https://github.com/arun-248/ipl-win-probability-app.git',
    techStack: [
      techStacks.python,
      techStacks.scikit,
      techStacks.streamlit,
      techStacks.pandas,
      techStacks.numpy,
      techStacks.jupyter,
    ],
  },
  {
    title: 'Agentic-RAG-Chatbot-MCP',
    description: `Built an agent-based Retrieval-Augmented Generation (RAG) chatbot to answer contextual questions from diverse documents. Implemented a three-agent architecture (Ingestion, Retrieval, Response) and the MCP for structured communication. Used vector embeddings for efficient semantic retrieval and built a UI for upload, multi-turn Q&A, and detailed source context viewing.`,
    image: '/assets/Agentic_RAG_Chatbot.jpg',
    link: 'https://arun24ragchatbot.streamlit.app/',
    github: 'https://github.com/arun-248/Agentic-RAG-Chatbot-MCP.git',
    techStack: [
      techStacks.python,
      techStacks.gpt,
      techStacks.streamlit,
      { icon: FaProjectDiagram, name: 'FAISS', color: '#009688' },
      { icon: SiPython, name: 'HuggingFace Embeddings', color: '#FFAE00' },
      { icon: SiNodedotjs, name: 'MCP Protocol', color: '#6D28D9' },
    ],
  },
  {
    title: 'Heart Disease Prediction',
    description: `Developed a robust and scalable Logistic Regression model to accurately predict the presence of heart disease using key clinical, physiological, and demographic indicators. Conducted extensive data preprocessing, exploratory analysis, feature engineering, and model evaluation to ensure high accuracy, reliability, and interpretability. Showcases a complete, production-ready, and deployable end-to-end machine learning workflow tailored for critical, real-world healthcare applications.`,
    image: '/assets/heart_2.jpg',
    github: 'https://github.com/arun-248/Heart-Disease-Prediction.git',
    techStack: [
      techStacks.python,
      techStacks.scikit,
      techStacks.pandas,
      techStacks.jupyter,
      techStacks.streamlit,
    ],
  },
  {
    title: 'Stock Trend Analyzer',
    description: `Built an advanced AI-powered analyzer for financial news using semantic search and intelligent information retrieval. Implemented efficient document chunking, vector embeddings, and FAISS similarity search for fast, accurate querying. Integrated a LLM for contextual Q&A, trend prediction, and actionable insights on complex financial data.`,
    image: '/assets/stock.jpg',
    github: 'https://github.com/arun-248/Stock-Trend-Analyzer',
    techStack: [
      techStacks.python,
      techStacks.tensorflow,
      techStacks.pytorch,
      techStacks.jupyter,
      techStacks.pandas,
    ],
  },
  {
    title: 'GPT-Based Smart Assistant',
    description: `Developed a voice-controlled assistant powered by OpenAI GPT. Recognizes voice commands and converts them into text. Processes queries with GPT to generate intelligent responses. Converts text back to speech for natural interaction. Automates tasks like opening Google or YouTube. Demonstrates integration of AI, NLP, and automation.`,
    image: '/assets/gpt.jpg',
    github: 'https://github.com/arun-248/GPT-Based-Smart-Assistant.git',
    techStack: [
      techStacks.python,
      techStacks.gpt,
      techStacks.jupyter,
      { icon: FaRobot, name: 'Speech Recognition', color: '#E63946' },
      { icon: FaRobot, name: 'pyttsx3 (TTS)', color: '#1D3557' },
      { icon: SiJavascript, name: 'Web Automation', color: '#F7DF1E' },
    ],
  },
  {
    title: 'HR Analytics Dashboard',
    description: `Developed a comprehensive and interactive HR Analytics Dashboard using Power BI to visualize workforce metrics and performance trends. Analyzed extensive employee data to identify key patterns in attrition, engagement, and recruitment efficiency. Enabled strategic, data-driven decision-making with clear, dynamic, and actionable insights for HR management.`,
    image: '/assets/hr.jpg',
    github: 'https://github.com/arun-248/HR-Analytics-Dashboard.git',
    techStack: [
      techStacks.powerbi,
      techStacks.python,
      techStacks.pandas,
      techStacks.seaborn,
      techStacks.jupyter,
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
