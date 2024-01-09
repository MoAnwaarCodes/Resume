import React from "react";

const Resume = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-200 shadow-md rounded-md my-16">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-600">Muhammad Anwaar Ul Haq</h1>
        <p className="text-lg text-gray-800">Web Developer | Rawalpindi, Pakistan | anwar9101901@gmail.com | 03318900144</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      
        <div className="bg-white p-6 rounded-md shadow-md">
        
          <h2 className="text-2xl font-bold text-indigo-600 mb-2">Education</h2>
        <div>
          <h2 className="text-xl font-bold text-indigo-500 mb-2">Bachelors</h2>
          <p className="text-gray-700"><strong>Arid Agriculture University</strong></p>
          <p className="text-gray-700">09/2020 - Present</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold text-indigo-600 mb-2">Work Experience</h2>
          {/* Work experience entries */}
          {/* ... */}
        </div>

        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold text-indigo-600 mb-2">Skills</h2>
          <div className="flex flex-wrap">
            <button className="bg-indigo-500 text-white rounded-md py-2 px-4 m-1">React.js</button>
            <button className="bg-indigo-500 text-white rounded-md py-2 px-4 m-1">JavaScript</button>
            <button className="bg-indigo-500 text-white rounded-md py-2 px-4 m-1">HTML/CSS</button>
            {/* Add more skills as buttons */}
          </div>
        </div>

        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold text-indigo-600 mb-2">Projects</h2>
          <p className="text-gray-700"><strong>Portfolio Website</strong></p>
          <p className="text-gray-700">Developed a personal portfolio website showcasing skills and projects.</p>
          {/* Add other project entries similarly */}
        </div>

        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold text-indigo-600 mb-2">Certifications</h2>
          <p className="text-gray-700"><strong>Web Development Certification</strong></p>
          <p className="text-gray-700">Issued by XYZ Institute, 2022</p>
          {/* Add other certification entries similarly */}
        </div>
      </div>

      <div className="text-center text-gray-700 mt-8">
        &copy; 2024 Muhammad Anwaar
      </div>
    </div>
  );
};

export default Resume;
