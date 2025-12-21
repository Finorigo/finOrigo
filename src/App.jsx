import { useState } from "react";
import bg_vid from "./assets/bg-vid.mp4";
import "./App.css";

export default function App() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

/* ================= NAVBAR ================= */

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          Fin<span className="text-teal-400">Origo</span>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#Home" className="hover:text-teal-400">Home</a>
          <a href="#Research" className="hover:text-teal-400">Research</a>
          <a href="#Contact" className="hover:text-teal-400">Contact</a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 py-4 flex flex-col gap-4">
          <a href="#Home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#Research" onClick={() => setIsOpen(false)}>Research</a>
          <a href="#Contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}

/* ================= MAIN CONTENT ================= */

function MainContent() {
  
  let equityReports= [
     {
    id: 1,
    name: "Titan",
    date: "1 Sep,2025",
    link: "https://drive.google.com/file/d/1kJdz70Qy9UvkgMPNdzseUv0UJ8IXYs69/view",
  },
  ]
  let  ipoReports = [
     {
    id: 3,
    name: "KSH International",
    date: "16 Dec,2025",
    link: "https://drive.google.com/file/d/1PvtVIC5bssx1ULTVxztkCc3x2Qwl3-ZG/view",
  },
    {
    id: 2,
    name: "Park Medi",
    date: "10 Dec,2025",
    link: "https://drive.google.com/file/d/1rFyjaGRhPB-xggpadbOwqn8bzq9faqB8/view",
  },
     {
    id: 1,
    name: "Meeso",
    date: "03 Dec,2025",
    link: "https://drive.google.com/file/d/10H3O-0s4FaNUl2Xv1Oy12B5QGnyzis9-/view",
  },]
  let valuationReports = []

  return (
    <main className="pt-20">
      {/* HERO SECTION */}
      <section id="Home" className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={bg_vid} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Text */}
        {/* <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Smart Financial Thinking
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl text-gray-200">
            Where curiosity meets structured equity research & valuation.
          </p>
        </div> */}
      </section>

      {/* RESEARCH SECTION */}
      <section
        id="Research"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Research
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <ResearchCard title="Equity Research Reports"  reports={equityReports}/>
          <ResearchCard title="Company Valuation Models"  reports={valuationReports}/>
          <ResearchCard title="IPO Analysis (India)" reports={ipoReports}/>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="bg-teal-900/40 mx-6 md:mx-auto max-w-5xl rounded-2xl p-8 md:p-12 mb-20">
        <h2 className="text-3xl font-bold text-center mb-6">
          Disclaimer
        </h2>
        <p className="text-sm md:text-base text-gray-200 leading-relaxed">
          The content on this website is for educational and informational
          purposes only. I am not a SEBI-registered Research Analyst or
          Investment Advisor. All analysis is based on publicly available
          information and personal interpretation as a student and market
          enthusiast.  
          <br /><br />
          Nothing on this website constitutes investment advice. Readers are
          strongly encouraged to consult a SEBI-registered professional before
          making investment decisions.
        </p>
      </section>
    </main>
  );
}

/* ================= RESEARCH CARD ================= */

function ResearchCard({ title , reports }) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-teal-400 transition">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      {/* <p className="text-gray-400 text-sm">
        In-depth fundamental analysis backed by structured financial models and
        long-term thinking.
      </p> */}
       <table className="w-full border-collapse text-sm">
      <thead>
        <tr className="border-b border-slate-700 text-gray-300">
          <th className="text-left py-2 px-2 font-medium">Name</th>
          <th className="text-left py-2 px-2 font-medium">Date</th>
          <th className="text-center py-2 px-2 font-medium">Open</th>
        </tr>
      </thead>

      <tbody>

        {reports.length === 0 && (
  <tr>
    <td colSpan="3" className="py-4 text-center text-gray-500">
      No reports available yet
    </td>
  </tr>
)}

{reports.map((report, index) => (
    <tr
      key={index}
      className="border-b border-slate-800 hover:bg-slate-800 transition"
    >
      <td className="py-2 px-2">{report.name}</td>
      <td className="py-2 px-2 text-gray-400">{report.date}</td>
      <td className="py-2 px-2 text-center">
        <a
          href={report.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400 hover:text-teal-300 font-medium"
        >
          Click here
        </a>
      </td>
    </tr>
  ))}

        {/* <tr className="border-b border-slate-800 hover:bg-slate-800 transition">
          <td className="py-2 px-2">TCS Equity Report</td>
          <td className="py-2 px-2 text-gray-400">12 Aug 2024</td>
          <td className="py-2 px-2 text-center">
            <a
              href="#"
              className="text-teal-400 hover:text-teal-300 font-medium"
            >
              Click here
            </a>
          </td>
        </tr>

        <tr className="border-b border-slate-800 hover:bg-slate-800 transition">
          <td className="py-2 px-2">Reliance Valuation</td>
          <td className="py-2 px-2 text-gray-400">03 Sep 2024</td>
          <td className="py-2 px-2 text-center">
            <a
              href="#"
              className="text-teal-400 hover:text-teal-300 font-medium"
            >
              Click here
            </a>
          </td>
        </tr>

        <tr className="hover:bg-slate-800 transition">
          <td className="py-2 px-2">IPO Analysis – Tata Tech</td>
          <td className="py-2 px-2 text-gray-400">18 Oct 2024</td>
          <td className="py-2 px-2 text-center">
            <a
              href="#"
              className="text-teal-400 hover:text-teal-300 font-medium"
            >
              Click here
            </a>
          </td>
        </tr> */}
      </tbody>
    </table>
    </div>
  );
}

/* ================= FOOTER ================= */

function Footer() {
  return (
    <footer
      id="Contact"
      className="bg-black py-14 text-center"
    >
      <h2 className="text-2xl font-bold mb-8">Connect With Me</h2>

      <div className="flex justify-center gap-10 text-sm text-gray-300">
       <a href="https://x.com/OrigoFin12102" target="_blank"> <span className="hover:text-teal-400 cursor-pointer">X</span> </a>
       <a href="https://www.linkedin.com/in/vineet-kumar-singh001/" target="_blank"> <span className="hover:text-teal-400 cursor-pointer">LinkedIn</span> </a>
       <a href="https://www.instagram.com/fin.origo/" target="_blank"> <span className="hover:text-teal-400 cursor-pointer">Instagram</span> </a> 
       <a href="mailto:vineetcs001@gmail.com"> <span className="hover:text-teal-400 cursor-pointer">Email</span> </a>
      </div>

      <p className="mt-10 text-xs text-gray-500">
        © {new Date().getFullYear()} FinOrigo. All rights reserved.
      </p>
    </footer>
  );
}
