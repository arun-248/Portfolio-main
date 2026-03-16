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
import { FaChartBar, FaProjectDiagram, FaRobot, FaEye } from 'react-icons/fa';

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
    title: 'Image Intelligence Risk Analysis System',
    description: `Built an AI-powered computer vision platform for automated scene understanding and risk detection using dual YOLOv8 deep learning models. Combined object detection, scene classification, and rule-based risk scoring to generate explainable safety insights. Designed an interactive analytical interface with visual outputs, similarity-based image comparison, and risk visualization dashboards. Integrated AI-generated investigation reports to support better awareness and decision-making.`,
    image: '/assets/Image-Intelligence-Risk-Analysis-System.png',
    link: 'https://visioniqbyarun.streamlit.app/',
    github: 'https://github.com/arun-248/Image-Intelligence-Risk-Analysis-System',
    techStack: [
      techStacks.python,
      { icon: FaEye, name: 'YOLOv8', color: '#FF6B35' },
      
      { icon: FaProjectDiagram, name: 'OpenCV', color: '#5C3317' },
      { icon: FaEye, name: 'Computer Vision', color: '#00B4D8' },
      techStacks.streamlit,
      techStacks.pandas,
    ],
  },
  {
    title: 'JobFit Analyzer',
    description: `Created an AI-powered job–candidate matching system that analyzes resumes and job descriptions using NLP and machine learning techniques. Implemented skill matching, semantic similarity analysis, experience evaluation, and learning potential scoring for transparent candidate assessment. Built a complete end-to-end application with FastAPI and Streamlit for resume analysis and intelligent recommendations. Enabled scalable candidate evaluation with clear and explainable recruiter insights.`,
    image: '/assets/Job Fit Analyzer.png',
    link: 'https://jobfitanalyzerbyarun.streamlit.app/',
    github: 'https://github.com/arun-248/JOB-FIT-ANALYZER',
    techStack: [
      techStacks.python,
      { icon: FaRobot, name: 'NLP', color: '#7C3AED' },
      techStacks.scikit,
      techStacks.fastapi,
      techStacks.streamlit,
      techStacks.pandas,
    ],
  },
  {
    title: 'AI Study Buddy',
    description: `Developed an AI-powered intelligent study assistant that processes multi-format documents to generate summaries, quizzes, flashcards, and personalized study plans. Integrated React, FastAPI, and Gemini API to enable real-time AI-powered learning features. Designed a responsive and visually engaging interface using TailwindCSS for a smooth user experience. Delivered an adaptive learning platform that improves student productivity through personalized study workflows and AI-assisted learning experiences.`,
    image: '/assets/Ai_Buddy.png',
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
    description: `Built a collaborative filtering recommendation system to generate personalized book suggestions based on user reading preferences. Analyzed user–book interaction data using Python, Pandas, and Scikit-learn to identify meaningful recommendation patterns. Implemented an efficient pipeline capable of handling large-scale datasets for accurate recommendation generation. Created an interactive web application that delivers highly relevant and personalized book recommendations.`,
    image: '/assets/book.png',
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
    description: `Created an ML-powered healthcare risk prediction system to estimate personalized lung cancer risk using clinical and lifestyle data. Implemented an ensemble model combining Logistic Regression and Random Forest, achieving 94.2% accuracy with a 0.987 AUC-ROC score. Performed data preprocessing, feature analysis, and model evaluation to ensure reliable predictions. Built an interactive Streamlit dashboard that provides real-time risk classification with confidence scoring.`,
    image: '/assets/cancerimage.png',
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
    description: `Developed a machine learning pipeline to estimate live IPL match win probabilities using historical and real-time match data. Engineered predictive features such as run rate, wickets remaining, and match context variables for improved model performance. Trained and optimized a classification model to provide dynamic probability updates during live matches. Implemented an interactive Streamlit application for real-time match insights and visual analytics for enhanced match analytics.`,
    image: '/assets/ipl.png',
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
    description: `Built an agent-based Retrieval-Augmented Generation (RAG) chatbot to answer contextual questions from diverse document sources. Implemented a three-agent architecture (Ingestion, Retrieval, Response) along with the MCP protocol for structured communication. Utilized vector embeddings and FAISS semantic search for efficient document retrieval and contextual response generation. Developed an interactive Streamlit interface supporting document upload, multi-turn Q&A, and transparent source context visualization.`,
    image: '/assets/Agentic_RAG_Chatbot.png',
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
    description: `Created a machine learning model using Logistic Regression to predict the likelihood of heart disease based on clinical and demographic health indicators. Performed data preprocessing, exploratory data analysis, and feature engineering to prepare reliable training data. Evaluated the model using standard performance metrics to ensure prediction accuracy and interpretability. Built an interactive Streamlit dashboard to demonstrate real-time predictions for healthcare decision support applications.`,
    image: '/assets/heart.jpg',
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
    title: 'GPT-Based Smart Assistant',
    description: `Developed a voice-controlled AI assistant powered by OpenAI GPT for natural language interaction and task automation. Implemented speech recognition to convert voice commands into text for intelligent query processing. Integrated text-to-speech synthesis to generate natural spoken responses for seamless interaction. Enabled web automation tasks such as opening applications and websites through simple voice commands for efficient hands-free user productivity enhancement across everyday digital tasks and workflows and activities.`,
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
];

export function Projects() {
  return (
    <SectionBackground>
      <section id="projects">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="Crafting code into solutions I'm proud of, from concept to creation">
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