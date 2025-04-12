import React, { useState } from "react";


import banner from "../assets/banner.jpg";
import owner from "../assets/owner.png";
import student1 from "../assets/student1.png";
import student2 from "../assets/student2.png";
import student3 from "../assets/student3.png";
import student4 from "../assets/student4.png";
import student5 from "../assets/student5.png";
import student6 from "../assets/student6.png";
import student7 from "../assets/student7.png";
import student8 from "../assets/student8.png";
import student9 from "../assets/student9.png";
import student10 from "../assets/student10.jpg;
import Gallery from "./Gallery";






export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const studentData = [
     { name: "Hari(Nanu)", image: student10, department: "SSC grade c" },
    { name: "Sachin Kumar", image: student1, department: "SSC grade d" },
    { name: "vinay kumar", image: student2, department: "ssc grade d" },
    { name: "Mukesh sukharalia", image: student3, department: "ssc grade d" },
    { name: "Pavan kumar", image: student4, department: "DSSB" },
    { name: "Sucheta", image: student5, department: "ssc grade d" },
    { name: "Komal Kaushik", image: student6, department: "SSC grade d" },
    { name: "Sarswati ", image: student7, department: "Ssc grade d" },
    { name: "Pooja", image: student8, department: "Ssc Chsl" },
    { name: "Neelu", image: student9, department: "Crpf asi" },
    
  
  
  ];
  const handleLinkClick = () => {
    setMenuOpen(false);
  };


 
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
        {/* Navbar */}
        <nav className="p-6 bg-purple-800 text-white shadow-lg sticky top-0 z-80">
        <div className="flex items-center justify-between">
          <img src="/logo.png" alt="Sarswati College Logo" className="h-10 w-10 rounded-full" />
          <div className="text-2xl font-bold">Sarswati College</div>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <ul className="hidden md:flex gap-6 font-medium">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#courses" className="hover:underline">Courses</a></li>
            <li><a href="#results" className="hover:underline">Results</a></li>
            <li><a href="#reviews" className="hover:underline">Reviews</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        {menuOpen && (
          <div className="md:hidden fixed top-16 left-0 w-3/4 bg-purple-800 opacity-90 text-white shadow-lg p-10 space-y-4 z-40">
            <ul className="space-y-2 font-medium">
              <li><a href="#about" onClick={handleLinkClick} className="block hover:underline">About</a></li>
              <li><a href="#courses" onClick={handleLinkClick} className="block hover:underline">Courses</a></li>
              <li><a href="#results" onClick={handleLinkClick} className="block hover:underline">Results</a></li>
              <li><a href="#reviews" onClick={handleLinkClick} className="block hover:underline">Reviews</a></li>
              <li><a href="#contact" onClick={handleLinkClick} className="block hover:underline">Contact</a></li>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="text-center space-y-4 bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-10 rounded-xl shadow-lg">
        <img src={banner} alt="students" className="mx-auto w-full lg:h-70  object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
        <h1 className="text-5xl font-bold">Sarswati Commercial College</h1>
        <p className="text-lg">Best Steno & Typing Coaching in New Delhi</p>
        <p className="text-md font-medium">Over 200+ students are now living their dream in top government jobs!</p>
        <a
          href="https://wa.me/919650676672"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 inline-block rounded bg-white text-purple-700 font-semibold hover:bg-gray-200 transition"
        >
          Contact Now
        </a>
      </section>

      {/* About Us */}
      <section id="about" className="space-y-4 px-6">
        <h2 className="text-2xl font-semibold">About Us</h2>
        <p>
          Established in New Delhi, Saarswati Commercial College has been leading students toward success in stenography and typing for over a decade.
          With experienced faculty and a high success rate, we provide a structured learning environment focused on results.
        </p>
        <p>
          We offer both Hindi and English courses for steno and typing. Our institution takes pride in the consistent success of our students in government job placements. We are committed to excellence and guiding students to a brighter future.
        </p>
      </section>

      {/* Founder Section */}
      <section className="space-y-4 px-6  bg-indigo-50">
        <h2 className="text-2xl font-semibold">Meet Our Founder</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img src={owner} alt="Founder" className="rounded-full w-40 h-40 object-cover transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
          <div>
            <h3 className="text-xl font-bold">Mr. Vinod Verma</h3>
            <p>Our founder, Mr. Vinod verma, is a highly experienced educator with over 20 years in the field of stenography and typing training. His vision is to empower students with the skills necessary to secure top government positions. Under his leadership, Saarswati Commercial College has successfully guided thousands of students toward their dream careers.</p>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="space-y-4 px-6">
        <h2 className="text-2xl font-semibold">Courses Offered</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {["Hindi Stenography",  "Hindi Typing","English Stenography", "English Typing"].map((course, i) => (
            <div key={i} className="p-4 bg-white rounded-lg shadow hover:scale-105 hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-purple-700">{course}</h3>
              <p>Duration: {i % 2 === 0 ? "1 year" : "6 months"}</p>
              <p>Eligibility: {i % 2 === 0 ? "12th Pass" : "Basic Knowledge"}</p>
            </div>
          ))}
        </div>
      </section>
{/*why choose us */}
      <section className="py-16 px-6 bg-indigo-50">
      <h2 className="text-3xl font-semibold mb-8 text-indigo-700">Why Choose Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="rounded-2xl shadow-md p-6 bg-white transition-transform transform hover:-translate-y-1 hover:shadow-xl">
          <h3 className="font-semibold text-lg mb-2">10+ Years of Experience</h3>
          <p className="text-sm text-gray-700">
            We’ve been shaping futures for over a decade with trusted training programs.
          </p>
        </div>
        <div className="rounded-2xl shadow-md p-6 bg-white transition-transform transform hover:-translate-y-1 hover:shadow-xl">
          <h3 className="font-semibold text-lg mb-2">200+ Successful Students</h3>
          <p className="text-sm text-gray-700">
            Our alumni have secured jobs in various government departments and private firms.
          </p>
        </div>
        <div className="rounded-2xl shadow-md p-6 bg-white transition-transform transform hover:-translate-y-1 hover:shadow-xl">
          <h3 className="font-semibold text-lg mb-2">Expert Faculty</h3>
          <p className="text-sm text-gray-700">
            Learn from experienced mentors with real-world exam and typing knowledge.
          </p>
        </div>
        <div className="rounded-2xl shadow-md p-6 bg-white transition-transform transform hover:-translate-y-1 hover:shadow-xl">
          <h3 className="font-semibold text-lg mb-2">Regular Practice Tests</h3>
          <p className="text-sm text-gray-700">
            Stay exam-ready with consistent mock tests and personalized feedback.
          </p>
        </div>
      </div>
    </section>
    
            {/* Results */}
            <section id="results" className="space-y-4 px-6">
        <h2 className="text-2xl font-semibold">Our Successful Students</h2>
        <div className="overflow-x-auto whitespace-nowrap">
          <div className="flex space-x-4">
            {studentData.map((student, i) => (
              <div key={i} className="w-60 bg-white shadow-md rounded-lg p-4 text-center hover:scale-105 hover:shadow-xl transition-transform">
                <img src={student.image} alt={student.name} className="mx-auto rounded-full hover:scale-105 transition-transform hover:shadow-md" />
                <p className="mt-2 font-semibold">{student.name}</p>
                <p className="text-sm text-gray-600">Placed in {student.department}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Reviews */}
      <section id="reviews" className="space-y-4 px-6  bg-indigo-50">
        <h2 className="text-2xl font-semibold">Student Reviews</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Anjali Verma", dept: "Income Tax Dept." },
            { name: "Rakesh Singh", dept: "Railway Board" },
            { name: "Neha Sharma", dept: "Delhi Secretariat" },
          ].map(({ name, dept }, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 hover:shadow-2xl transition duration-300"
            >
             
              <h3 className="font-semibold text-lg text-purple-700">{name}</h3>
              <p className="text-xs text-gray-500">Placed in: {dept}</p>
              <p className="text-sm text-gray-600 italic mt-2">
                "Great coaching experience! Highly recommended."
              </p>
            </div>
          ))}
        </div>
      </section>

       <Gallery/>
     

      {/* Contact Us */}
      <section id="contact" className="space-y-4 px-6  bg-indigo-50">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p><strong>Address:</strong> Shop No. 1, 1st Floor,
Main Najafgarh Road, Opp. Krishna Mandir,
Nangloi, New Delhi – 110041</p>
        <p><strong>Phone:</strong> 9650676672</p>
        <p><strong>Email:</strong>  vinod6420@gmail.com</p>
        <p>For inquiries, reach us on WhatsApp:</p>
        <a
          href="https://wa.me/919650676672"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 inline-block rounded bg-green-500 text-white font-semibold hover:bg-green-600 transition"
        >
          WhatsApp Us
        </a>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
              src="https://www.google.com/maps?q=Shop%20No.%201,%201st%20Floor,%20Main%20Najafgarh%20Road,%20Opp.%20Krishna%20Mandir,%20Nangloi,%20New%20Delhi%20%E2%80%93%20110041&output=embed"
            className="rounded-lg border w-full h-full"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 pt-8 border-t px-6">
        © 2025 Saarswati Commercial College. All rights reserved.
      </footer>
    </div>
  );
}
