import { useState } from "react";
import grvid from "./assets/grvid.mp4";
import bg_vid from "./assets/bg-vid.mp4";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <MainContent />
      <Footer />
    </>
  );
}

function MainContent() {
  return (
    <>
      {/*  ABOUT US  */}

      <div id="Home" className="relative h-full w-full overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={bg_vid} type="video/mp4" />
        </video>

        {/* Foreground Content */}
        {/* <div className="absolute inset-0 flex justify-end z-10 text-white">
          <div>
            <span className="text-center text-3xl mt-4">Where Curiosity</span>
            <span className="text-center text-3xl mt-4">Meets Smart</span>
            <span className="text-center text-3xl mt-4">
              Financial Learning.
            </span>
          </div> */}
        {/* <h1 className="text-center text-8xl">Vinnet</h1> */}
        {/* </div> */}
      </div>

      {/* </div> */}
      {/* <div className=" h-5/6 flex flex-col align-middle justify-center gap-5 ">
        <video className="bg-video" autoPlay loop muted playsInline>
          <source src={bg_vid} type="video/mp4" />
        </video>
        <div>
          <h1 className=" text-center  text-8xl ">Vinnet</h1>
        </div>
        <div>
          <h1 className="text-center text-3xl">
            Where Curiosity Meets Smart <br /> Financial Learning.
          </h1>
        </div>
      </div> */}

      {/* Our Research  */}
      <div className=" bg-dark_teal-500 h-5/6 flex flex-col gap-3 p-6 rounded-4xl mt-20">
        <h1 id="Research" className=" text-4xl font-bold text-center">
          Our Research
        </h1>
        <div className=" flex gap-7 h-5/6 sm:flex-col">
          <div className=" bg-res_b-100 w-1/3  border-1 border-black  rounded-4xl h-5/6">
            <div className=" pt-4 font-bold text-center">
              Equity Research Reports
            </div>

            <div> </div>
          </div>

          <div className="  bg-res_b-100 rounded-4xl  border-1 border-black  w-1/3 h-5/6">
            <div className="pt-4 font-bold text-center">Company Valuation</div>
          </div>

          <div className=" rounded-4xl  bg-res_b-100 w-1/3 h-5/6 border-1 border-black ">
            <div className="pt-4 font-bold text-center">
              IPO Analysis (Indian Companies)
            </div>
          </div>
        </div>
      </div>

      {/* Disclamer */}
      <div className="rounded-4xl mt-20 bg-dark_teal-500 p-9">
        <h1 className="text-4xl font-bold text-center pb-7">DISCLIAMER</h1>

        <p className="text-xl font-bold tracking-wide">
          The content presented on this website, including equity research
          reports, company valuations, and IPO analysis, is for educational and
          informational purposes only. I am not a SEBI-registered Research
          Analyst or Investment Advisor. The analysis, views, and opinions
          expressed here are based on publicly available information and my
          personal interpretation as a student and market enthusiast. This
          website does not provide any investment, financial, or trading advice,
          nor is it intended to influence the investment decisions of any
          individual or entity. Readers are strictly advised not to consider the
          information on this website as a recommendation to buy, sell, or hold
          any securities. The content shared here is not intended for commercial
          use and I do not charge any fees, commissions, or monetary
          compensation for the information provided. While utmost care is taken
          to ensure accuracy of the information, I do not guarantee
          completeness, reliability, or timeliness. I am not liable for any
          losses or damages arising from the use of this website or reliance on
          any information provided herein. Visitors are strongly encouraged to
          consult with a SEBI-registered financial advisor or professional
          before making any investment decisions.
          <br /> <br /> By using this website, you acknowledge and agree to this
          disclaimer.
        </p>
      </div>

      {/*  Connect  */}

      {/* <div className=" bg-green-500 h-1/5  flex flex-col  gap-8  p-6 rounded-4xl mt-20">
    <h1 className=" text-center "> Connect With Us </h1>
    <div className=" flex justify-evenly "> 
      <h1>linked In </h1>
      <h1> InstaGram  </h1>
      <h1> X </h1>
    </div>
    </div> */}
    </>
  );
}

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ["Home", "Experience", "Skill"];
  return (
    <>
      {/* Main Navbar */}
      <div className="flex justify-between items-center px-6 py-4 bg-nav_bar-100   w-full">
        {/* Logo */}
        <div className="text-2xl font-bold font-mono">
          <span className="text-white">Fin</span>
          <span className="text-white">Origo</span>
        </div>

        {/* Desktop Nav Links */}

        <div>
          <a className="m-2 text-white" href="#Home">
            Home
          </a>

          {/* <a className="m-2" href="#">About Us</a> */}

          <a className="m-2 text-white" href="#Contact">
            Contact Us
          </a>

          <a href="#Research" className="text-white m-2">
            Research
          </a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="text-white"
          >
            {isMobileMenuOpen ? (
              <AiOutlineClose size={28} />
            ) : (
              // <GiHamburgerMenu size={28} />
              <span> fskdgjks </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col bg-slate-950 px-6 py-4 space-y-4 text-white">
          <div className="flex space-x-4 pt-2">
            <a href=""> Home </a>

            <a href="">About Us</a>

            <a href="#">Contact Us</a>

            <a href="#">Our Product</a>
            {/* <DiGithubBadge size={28} color="white" />
              <FaLinkedin size={26} color="white" />
              <FaXTwitter size={24} color="white" /> */}
          </div>
        </div>
      )}
    </>
  );
}

function Footer() {
  return (
    <>
      <div id="Contact" className=" align-middle p-10 mt-7 bg-dark_teal-500">
        <div className="flex flex-col justify-center gap-10">
          <div className="bg-white w-6 text-center rounded-full">
            <h1>X</h1>
          </div>
          <h1>X</h1>
          <div className="bg-white rounded-full w-6 text-center">
            <h1>L</h1>
          </div>
          <h1>LinkedIn</h1>
          <div className="bg-white rounded-full w-6 text-center">
            <h1>I</h1>
          </div>
          <h1>Instagram</h1>
          <div className="bg-white rounded-full w-6 text-center">
            <h1>E</h1>
          </div>
          <h1>Email</h1>
        </div>
        <div></div>
        {/* <h1 className="text-black"> Contact us : </h1>
        <div>
          <h1 className="text-black">email</h1>
          <h1 className="text-black">x</h1>
          <h1 className="text-black">linkeed in </h1>
          <h1 className="text-black">insta </h1>
        </div> */}
      </div>
    </>
  );
}

export default App;
