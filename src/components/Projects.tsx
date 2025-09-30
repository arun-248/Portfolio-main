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
};

// Define projects in correct order
const projects = [
  {
    title: 'Personalized Book Recommender',
    description: `Built a collaborative filtering system to provide personalized book suggestions. 
Analyzed user-book interactions using Python and Scikit-learn. 
Engineered a system that processes large datasets efficiently. 
Created a full-stack web app with Streamlit. 
Focused on generating accurate and highly relevant recommendations. Demonstrates comprehensive end-to-end development skills effectively and efficiently.`,
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
    title: 'Lung Cancer Risk Analyzer',
    description: `This ML-powered application predicts personalized lung cancer risk using an ensemble of Logistic Regression and Random Forest, achieving 94.2% accuracy with a 0.987 AUC-ROC. It provides real-time risk classification with confidence scoring through an interactive Streamlit dashboard, emphasizing feature importance and transparent communication for early intervention.`,
    image: '/assets/cancerimage.jpg',
    link: 'https://arun24-lung-cancer-analyzer.streamlit.app/',
    github: 'https://github.com/arun-248/lung-cancer-risk-analyzer.git',
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
    title: 'IPL Victory Probability Estimator',
    description: `Developed a machine learning pipeline to forecast live IPL match win probabilities. 
Extracted predictive features from historical and in-game data. 
Trained a classification model for dynamic probability updates. 
Implemented an interactive Streamlit web application. Provided real-time predictive insights for users during matches. Focused on accuracy and usability in dynamic live conditions.`,
    image: '/assets/ipl.jpg',
    link: 'https://iplwinpredictorbyarun.streamlit.app/',
    github: 'https://github.com/arun-248/ipl-win-probability-app.git',
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
    title: 'Agentic-RAG-Chatbot-MCP',
    description: `Built an agent-based Retrieval-Augmented Generation (RAG) chatbot to answer contextual questions from diverse documents. Implemented a three-agent architecture (Ingestion, Retrieval, Response) and the MCP for structured communication. Used vector embeddings for efficient semantic retrieval and built a UI for upload, multi-turn Q&A, and source context viewing.`,
    image: '/assets/Agentic_RAG_Chatbot.jpg',
    link: 'https://arun24ragchatbot.streamlit.app/',
    github: 'https://github.com/arun-248/Agentic-RAG-Chatbot-MCP.git',
    techStack: [
      techStacks.python,
      techStacks.gpt,
      techStacks.streamlit,
      { icon: FaProjectDiagram, name: 'FAISS', color: '#009688' },         // Added FAISS
    { icon: SiPython, name: 'HuggingFace Embeddings', color: '#FFAE00' }, // Added Embeddings
    { icon: SiNodedotjs, name: 'MCP Protocol', color: '#6D28D9' }, 
    ],
  },
  
  {
    title: 'Heart Disease Prediction',
    description: `Developed a Logistic Regression model to predict the presence of heart disease. Conducted data analysis and preprocessing to ensure data quality, reliability and accuracy. 
Trained and tested the model for optimal accuracy. 
Evaluated predictive capabilities using diverse performance metrics thoroughly. Showcases a comprehensive end-to-end ML workflow for critical healthcare applications.`,
    image: '/assets/heart_2.jpg',
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
    title: 'Stock Trend Analyzer',
    description: `Built an AI-powered analyzer for financial news using semantic search. 
Implemented document chunking, vector embeddings, and FAISS similarity search. 
Integrated with an LLM to answer queries contextually. 
Simulates an equity research assistant. Designed for efficient retrieval of financial information. Provides actionable insights using advanced AI techniques for decision-making.`,
    image: '/assets/stock.jpg',
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
Analyzed employee data comprehensively to accurately identify trends and insights. 
Implemented visualizations for attrition, performance, and recruitment metrics. 
Enabled data-driven decision making for HR managers. 
Focused on clarity, usability, and meaningful actionable insights.`,
    image: '/assets/hr.jpg',
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
    github: 'https://github.com/arun-248/GPT-Based-Smart-Assistant.git',
    techStack: [
      techStacks.python,
      techStacks.gpt,
      techStacks.jupyter,
      { icon: FaRobot, name: 'Speech Recognition', color: '#E63946' },  // Added STT
    { icon: FaRobot, name: 'pyttsx3 (TTS)', color: '#1D3557' },       // Added TTS
    { icon: SiJavascript, name: 'Web Automation', color: '#F7DF1E' },
    ],
  },
  {
    title: 'Portfolio Website',
    description: `Designed and developed a personal portfolio to showcase AI, ML, and Data Analytics projects. 
Implemented a modern, responsive design using React, TypeScript, and Tailwind CSS. 
Integrated interactive animations with Framer Motion. 
Highlighted professional experience, certifications, and projects. Deployed on Vercel for fast, reliable performance. Demonstrates front-end expertise and professional presentation.`,
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
