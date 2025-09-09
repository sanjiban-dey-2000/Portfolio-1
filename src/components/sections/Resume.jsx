import React from "react";

const Resume = () => {
  return (
    <section id="cv" className="py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">My CV</h2>

        {/* CV Preview as Image */}
        <div className="flex justify-center">
          <img
            src="/CV.jpg" // Your CV image
            alt="Resume Preview"
            className="w-full max-w-[500px] h-auto rounded-lg shadow-lg object-contain"
          />
        </div>

        {/* Download Button */}
        <a
          href="/RESUME.pdf"
          download
          className="mt-6 inline-block bg-blue-600 px-6 py-2 rounded-lg text-white font-medium hover:bg-blue-700 transition"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Resume;
