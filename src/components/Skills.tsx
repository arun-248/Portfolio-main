import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { SkillCard } from "./ui/SkillCard";
import { 
  SiPython, 
  SiMysql, 
  SiNumpy, 
  SiPandas, 
  SiTensorflow, 
  SiPytorch, 
  SiScikitlearn, 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs,  
  SiStreamlit, 
  SiPowers, 
  SiGit, 
  SiGithub, 
  SiJupyter, 
  SiGooglecolab, 
  SiMongodb, 
  SiPostgresql, 
  SiApachespark, 
  SiAmazon,
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";

const skills = [
  // Programming & Core Concepts
  { name: "Python", icon: SiPython, color: "#3776AB", url: "https://www.python.org/" },
  { name: "SQL", icon: SiMysql, color: "#4479A1", url: "https://www.mysql.com/" },
  { name: "DSA", icon: SiNumpy, color: "#013243", url: "https://www.geeksforgeeks.org/data-structures/" },
  

  // Data Processing & Visualization
  { name: "Pandas", icon: SiPandas, color: "#A9D1F2", url: "https://pandas.pydata.org/" },
  { name: "NumPy", icon: SiNumpy, color: "#013243", url: "https://numpy.org/" },
  { name: "Matplotlib", icon: SiPython, color: "#11557C", url: "https://matplotlib.org/" },
  { name: "Plotly", icon: SiPython, color: "#3F4C6B", url: "https://plotly.com/python/" },

  // AI / NLP
  { name: "LLM's", icon: SiPytorch, color: "#EE4C2C", url: "https://openai.com/" },
  { name: "RAG", icon: SiTensorflow, color: "#FF4B4B", url: "https://www.tensorflow.org/" },
  { name: "Hugging Face", icon: SiPandas, color: "#FF6D00", url: "https://huggingface.co/" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00", url: "https://www.tensorflow.org/" },
  { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C", url: "https://pytorch.org/" },
  { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E", url: "https://scikit-learn.org/" },
  { name: "OpenCV", icon: SiPython, color: "#00FF00", url: "https://opencv.org/" },
  { name: "CNN", icon: SiTensorflow, color: "#FF6F00", url: "https://www.tensorflow.org/tutorials/images/cnn" },

  // Web & Frontend
  { name: "HTML", icon: SiHtml5, color: "#E34F26", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", icon: SiCss3, color: "#1572B6", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "React.js", icon: SiReact, color: "#61DAFB", url: "https://reactjs.org/" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", url: "https://nodejs.org/" },
  

  // Deployment & BI
  { name: "Streamlit", icon: SiStreamlit, color: "#FF4B4B", url: "https://streamlit.io/" },
  { name: "Power BI", icon: SiPowers, color: "#F2C811", url: "https://powerbi.microsoft.com/" },

  // Version Control & Tools
  { name: "Git", icon: SiGit, color: "#F05032", url: "https://git-scm.com/" },
  { name: "GitHub", icon: SiGithub, color: "#A8A8A8", url: "https://github.com/" },
  { name: "Jupyter Notebook", icon: SiJupyter, color: "#F37626", url: "https://jupyter.org/" },
  { name: "Google Colab", icon: SiGooglecolab, color: "#F9AB00", url: "https://colab.research.google.com/" },
  { name: "VS Code", icon: SiPython, color: "#007ACC", url: "https://code.visualstudio.com/" },

  // Databases
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", url: "https://www.mongodb.com/" },

  // Advanced Tools
  { name: "NLTK", icon: SiPython, color: "#FF4500", url: "https://www.nltk.org/" },
  { name: "spaCy", icon: SiPython, color: "#09A3BA", url: "https://spacy.io/" },
  { name: "Object Detection (YOLO, Faster R-CNN)", icon: SiTensorflow, color: "#FF6F00", url: "https://pjreddie.com/darknet/yolo/" },
  { name: "Apache Spark", icon: SiApachespark, color: "#E25A1C", url: "https://spark.apache.org/" },
  { name: "AWS", icon: SiAmazon, color: "#FF9900", url: "https://aws.amazon.com/" },
  { name: "Azure", icon: FaMicrosoft, color: "#0078D4", url: "https://azure.microsoft.com/" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", url: "https://www.postgresql.org/" }
];

export function Skills() {
  return (
    <SectionBackground>
      <section id="skills">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Equipped with AI, ML, NLP, LLMs, and Data Science tools – transforming ideas into intelligent solutions 🤖📊">
            Skills & Tools
          </SectionTitle>

          <div className="max-w-7xl mx-auto grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 sm:gap-6">
            {skills.map((tech) => (
              <SkillCard 
                key={tech.name} 
                name={tech.name} 
                icon={tech.icon} 
                color={tech.color} 
                url={tech.url} 
              />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
