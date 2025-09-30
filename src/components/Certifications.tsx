import React, { useState } from "react";
import Slider from "react-slick";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { CertificationCard } from "./ui/CertificationCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Certificates grouped
const groups = {
  oracle: [
    {
      title: "Generative AI Professional",
      issuer: "Oracle",
      date: "Aug 2025",
      image: "/assets/OCI_GEN_AI.jpg",
      verifyLink:
        "https://catalog-education.oracle.com/ords/certview/sharebadge?id=13AAE10267D0D2036FE44CD7D545D04A6F76BB08DA4D6325B04C2DBBAA70E044",
      certLink:
        "https://drive.google.com/file/d/12PTrzUzxq66tvm8Lc1osmtXcEHurLx7_/view?usp=sharing",
    },
    {
      title: "Data Science Professional",
      issuer: "Oracle",
      date: "Sept 2025",
      image: "/assets/OCI_DS.jpg",
      verifyLink:
        "https://catalog-education.oracle.com/pls/certview/sharebadge?id=461201BCB7B5C97A95724C9B7E495B64111BE5E949BAFF7B93AC2FA0AD304D45",
      certLink:
        "https://drive.google.com/file/d/15aHL14jGyHuhJu3sSQFCd641yc6caf-k/view?usp=sharing",
    },
    {
      title: "AI Foundations Associate",
      issuer: "Oracle",
      date: "Aug 2025",
      image: "/assets/OCI_AI.jpg",
      verifyLink:
        "https://catalog-education.oracle.com/ords/certview/sharebadge?id=008C99E5E343A1FCD0BC2DE7FDFB7C9FA14EAB6B259439917EB6CD97DF280B0C",
      certLink:
        "https://drive.google.com/file/d/1f-mk9PQxTagy4bgzIUG4B6EupIvxxWRg/view?usp=sharing",
    },
    {
      title: "Vector Search Certified Professional",
      issuer: "Oracle",
      date: "Sept 2025",
      image: "/assets/OCI_VS.jpg",
      verifyLink:
        "https://catalog-education.oracle.com/pls/certview/sharebadge?id=A34A3B491F9D977F07DFBD9F86605F286E11E3D77DBB251E21D5566D719338EE",
      certLink:
        "https://drive.google.com/file/d/1PBvnjPmFP1CyNSUO4nQG0gJ9vBEGTY23/view?usp=sharing",
    },
  ],

  nxtwave: [
    {
      title: "Programming Foundations with Python",
      issuer: "NxtWave",
      date: "Jan 2024",
      image: "/assets/NXTWAVE_PYTHON.jpg",
      verifyLink:
        "https://certificates.ccbp.in/academy/programming-foundations-with-python?id=TUNWAYKLOV",
      certLink:
        "https://drive.google.com/file/d/1joIuqFzL4fXDrxl7X506UJ_qQxZRSaVC/view?usp=sharing",
    },
    {
      title: "Databases",
      issuer: "NxtWave",
      date: "May 2024",
      image: "/assets/NXTWAVE_DB.jpg",
      verifyLink:
        "https://certificates.ccbp.in/academy/introduction-to-databases?id=DTMCIYUNUQ",
      certLink:
        "https://drive.google.com/file/d/1kzNPUMqo_KNKI2w1AAS9c7N1IkPFssWX/view?usp=sharing",
    },
    {
      title: "XPM 4.0 Fundamentals",
      issuer: "NxtWave",
      date: "Nov 2023",
      image: "/assets/NXTWAVE_XPM_4.O.jpg",
      verifyLink:
        "https://certificates.ccbp.in/academy/xpm-4-0-fundamentals?id=TFPKETMXTF",
      certLink:
        "https://drive.google.com/file/d/1dZO94oOoUPg__UTbU6oJ-WNEzE2AzOOB/view?usp=sharing",
    },
    {
      title: "Developer Foundations",
      issuer: "NxtWave",
      date: "May 2024",
      image: "/assets/NXTWAVE_DEV_FOUNDATIONS.jpg",
      verifyLink:
        "https://certificates.ccbp.in/academy/developer-foundations?id=BDIPPQRSIX",
      certLink:
        "https://drive.google.com/file/d/1ezhL5WLcWLV50g4usKHsv8fbdSxR-aSM/view?usp=sharing",
    },
    {
      title: "React JS",
      issuer: "NxtWave",
      date: "2023",
      image: "/assets/NXTWAVE_REACT.jpg",
      verifyLink: "https://certificates.ccbp.in/academy/react-js?id=JGTARRRMEP",
      certLink:
        "https://drive.google.com/file/d/1a61naEHu9-RHVs_LziS8-uPpI8mvgIxx/view?usp=sharing",
    },
    {
      title: "JavaScript Essentials",
      issuer: "NxtWave",
      date: "Sept 2024",
      image: "/assets/NXTWAVE_JS.jpg",
      verifyLink:
        "https://certificates.ccbp.in/academy/javascript-essentials?id=BXZFVEBSSD",
      certLink:
        "https://drive.google.com/file/d/1xh9h1dsTjpQ9pnx7wqWk3marpURH3JNW/view?usp=sharing",
    },
    {
      title: "Node.js",
      issuer: "NxtWave",
      date: "April 2025",
      image: "/assets/NXTWAVE_NODE.jpg",
      verifyLink: "https://certificates.ccbp.in/academy/node-js?id=GNGOLALCND",
      certLink:
        "https://drive.google.com/file/d/1nIXH3STXP1rAL-2oygLOMcW_rmZb4TAx/view?usp=sharing",
    },
    {
      title: "Build Your Own Dynamic Web Application",
      issuer: "NxtWave",
      date: "2025",
      image: "/assets/NXTWAVE_DYNAMIC_WEB.jpg",
      verifyLink:
        "https://certificates.ccbp.in/academy/dynamic-web-application?id=ALFXWPLGXS",
      certLink:
        "https://drive.google.com/file/d/1rqic0t7en1DvTJ2NHf3iIAQhDewuUr97/view?usp=sharing",
    },
    {
      title: "Responsive Web Design using Flexbox",
      issuer: "NxtWave",
      date: "2023",
      image: "/assets/NXTWAVE_FLEXBOX.jpg",
      verifyLink:
        "https://certificates.ccbp.in/academy/responsive-web-design-using-flexbox?id=JGDAPDZVWZ",
      certLink:
        "https://drive.google.com/file/d/1VW1RoUyLrQOYVvjpR5NAyhiDgv8n0SeU/view?usp=sharing",
    },
    {
      title: "Responsive Website",
      issuer: "NxtWave",
      date: "Aug 2023",
      image: "/assets/NXTWAVE_RESPONSIVE_WEB.jpg",
      verifyLink:
        "https://certificates.ccbp.in/academy/build-your-own-responsive-website?id=JAGOYTMGZP",
      certLink:
        "https://drive.google.com/file/d/1bd09OkVah2Jkgomv1bOjBgA_Eizkh3d2/view?usp=sharing",
    },
    {
      title: "Static Website",
      issuer: "NxtWave",
      date: "Feb 2023",
      image: "/assets/NXTWAVE_STATIC.jpg",
      verifyLink:
        "https://certificates.ccbp.in/academy/static-website?id=XIXYUHDDAE",
      certLink:
        "https://drive.google.com/file/d/1Q_aRmMnAMHtvGJuxxcI3FV7xpD6Q2GVZ/view?usp=sharing",
    },
  ],

  tata: [
    {
      title: "GenAI Powered Data Analytics",
      issuer: "Tata",
      date: "Aug 2025",
      image: "/assets/TATA_DA.jpg",
      certLink:
        "https://drive.google.com/file/d/1ob8d8MFdXqNRuG50jWO9l7tmAyPgOQo_/view?usp=sharing",
    },
    {
      title: "Data Visualisation: Empowering Business with Insights",
      issuer: "Tata",
      date: "Sept 2025",
      image: "/assets/TATA_DV.jpg",
      certLink:
        "https://drive.google.com/file/d/1jTkdmWDvtW6fSkXXi1kmNG1EOdVJM3Wa/view?usp=sharing",
    },
  ],

  bcgx: [
    {
      title: "GenAI Job Simulation",
      issuer: "BCGX",
      date: "Sept 2025",
      image: "/assets/BCGX_GENAI.jpg",
      certLink:
        "https://drive.google.com/file/d/1b_BcAJuGrOnQgEihGdZf0kDueYfKOjhZ/view?usp=sharing",
    },
    {
      title: "Data Science Job Simulation",
      issuer: "BCGX",
      date: "2024",
      image: "/assets/BCGX_DS.jpg",
      certLink:
        "https://drive.google.com/file/d/1typnVATaEpF7eJDYuCqF6A9_nn5u_YJQ/view?usp=sharing",
    },
  ],

  others: [
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "Sept 2025",
      image: "/assets/DELOITTE_DA.jpg",
      certLink:
        "https://drive.google.com/file/d/1cArjbCkJcKCEE8rIL0laQd9JrH1Mmoo8/view?usp=sharing",
    },
    {
      title: "Data Science Job Simulation",
      issuer: "British Airways",
      date: "Sept 2025",
      image: "/assets/BRITISH_AIRWAYS_DS.jpg",
      certLink:
        "https://drive.google.com/file/d/1Z3nHNahME6LR5vF_roKxPuSjFfN24YZT/view?usp=sharing",
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Quantium",
      date: "Sept 2025",
      image: "/assets/QUANTIUM_DA.jpg",
      certLink:
        "https://drive.google.com/file/d/1Jv9mSRZvCCASRJmDMKDEC_LHSRPVB4yX/view?usp=sharing",
    },
  ],

  workshops: [
    {
      title: "Generative AI Mastery Workshop (Buildathon)",
      issuer: "NxtWave",
      date: "Sept 2025",
      image: "/assets/NXTWAVE_WS_GEN_AI_BUILDATHON.jpg",
      verifyLink:
        "https://openai-buildathon.nxtwave.tech/certificate?cid=S5ZB0XUKNU",
    },
    {
      title: "Model Context Protocol Mega Workshop",
      issuer: "NxtWave",
      date: "Aug 2025",
      image: "/assets/NXTWAVE_WS_MCP.jpg",
      verifyLink:
        "https://cdn1.ccbp.in/misc/workshop-acad-mcp-mega-workshop-completion/W7E8FREEBX.png",
    },
    
    {
      title: "Data Analytics Mega Workshop",
      issuer: "NxtWave",
      date: "Jan 2024",
      image: "/assets/NXTWAVE_WS_DA.jpg",
      verifyLink:
        "https://cdn1.ccbp.in/misc/da-workshop-completion-certificate/DCG5Y24DX6.png",
    },
    {
      title: "Generative AI Mega Workshop",
      issuer: "NxtWave",
      date: "Aug 2023",
      image: "/assets/NXTWAVE_WS_GEN_AI.jpg",
      verifyLink:
        "https://cdn1.ccbp.in/misc/gen-ai-completion-cer/72IOMAWTTQ.png",
    },
    {
      title: "Amazon Web Services Workshop",
      issuer: "NxtWave",
      date: "Jun 2024",
      image: "/assets/NXTWAVE_WS_AWS.jpg",
      verifyLink:
        "https://cdn1.ccbp.in/misc/aws-workshop-completion-certificate/STZ036E9UJ.png",
    },
    {
      title: "Ethical Hacking Mega Workshop",
      issuer: "NxtWave",
      date: "Oct 2023",
      image: "/assets/NXTWAVE_WS_HACKING.jpg",
      verifyLink:
        "https://cdn1.ccbp.in/misc/ethical-hacking-mega-workshop-completion/66RRAF4YWX.png",
    },
  ],
};

export function Certifications() {
  const [showMoreNxtWave, setShowMoreNxtWave] = useState(false);

  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <SectionBackground>
      <section id="certifications" className="space-y-12">
        <div className="container mx-auto px-6 text-left">
          <SectionTitle subtitle="Verified certifications and professional achievements">
            Certifications
          </SectionTitle>

          {/* Oracle */}
          <h3 className="text-2xl font-bold text-cyan-500 mb-6">Oracle</h3>
          <Slider {...sliderSettings} className="mb-12">
            {groups.oracle.map((c) => (
              <div key={c.title} className="px-4">
                <CertificationCard {...c} />
              </div>
            ))}
          </Slider>

          {/* NxtWave */}
          <h3 className="text-2xl font-bold text-cyan-500 mb-6">NxtWave</h3>
          {/* First 6 certificates visible */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {groups.nxtwave.slice(0, 6).map((c) => (
              <CertificationCard key={c.title} {...c} />
            ))}
          </div>

          {/* Remaining certificates hidden initially */}
          {showMoreNxtWave && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              {groups.nxtwave.slice(6).map((c) => (
                <CertificationCard key={c.title} {...c} />
              ))}
            </div>
          )}

          {!showMoreNxtWave && (
            <div className="text-center mb-12">
              <button
                onClick={() => setShowMoreNxtWave(true)}
                className="px-6 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition"
              >
                Show More
              </button>
            </div>
          )}

          {/* Tata */}
          <h3 className="text-2xl font-bold text-cyan-500 mb-6">Tata</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {groups.tata.map((c) => (
              <CertificationCard key={c.title} {...c} />
            ))}
          </div>

          {/* BCGX */}
          <h3 className="text-2xl font-bold text-cyan-500 mb-6">BCGX</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {groups.bcgx.map((c) => (
              <CertificationCard key={c.title} {...c} />
            ))}
          </div>

          {/* Others */}
          <h3 className="text-2xl font-bold text-cyan-500 mb-6">Others</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {groups.others.map((c) => (
              <CertificationCard key={c.title} {...c} />
            ))}
          </div>

          {/* Workshops */}
          <h3 className="text-2xl font-bold text-cyan-500 mb-6">Workshops</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {groups.workshops.map((c) => (
              <CertificationCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
