import React from "react";

const Resume = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-200 shadow-md rounded-md my-16">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-600">
          Muhammad Anwaar Ul Haq
        </h1>
        <p className="text-lg text-gray-800">
          Web Developer | Rawalpindi, Pakistan | anwar9101901@gmail.com |
          03318900144
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold text-indigo-600 mb-2">Education</h2>
          <div className="mt-4">
            <h2 className="text-xl font-bold text-indigo-500 mb-2">
              Bachelors
            </h2>
            <p className="text-gray-700">
              <strong>Arid Agriculture University</strong>
            </p>
            <p className="text-gray-700">09/2020 - Present</p>
            <p className="text-gray-700">Courses</p>

            <p className="text-gray-950">- Computer Science</p>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-bold text-indigo-500 mb-2">
              DAE Civil
            </h2>
            <p className="text-gray-700">
              <strong>Swedish Institute of Technology</strong>
            </p>
            <p className="text-gray-700">08/2017 - 06/2020</p>
            <p className="text-gray-700">Courses</p>

            <p className="text-gray-950">- Civil Technology</p>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-bold text-indigo-500 mb-2">
              Matriculation
            </h2>
            <p className="text-gray-700">
              <strong>F.G Boys High School No 1 Tariqabad Rawalpindi</strong>
            </p>
            <p className="text-gray-700">04/2014 - 12/2016</p>
            <p className="text-gray-700">Courses</p>

            <p className="text-gray-950">- Computer Science</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold text-indigo-600 mb-2">
            Work Experience
          </h2>
          <div className="mt-4">
            <h2 className="text-xl font-bold text-indigo-500 mb-2">
              Social Media Handler
            </h2>
            <p className="text-gray-700">
              <strong>Write For You</strong>
            </p>
            <p className="text-gray-700">06/2022 - 2023</p>
            <p className="text-gray-700">
              Write For You is Creative agency which provides services globally.
              And i worked there as a team lead.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold text-indigo-600 mb-2">Skills</h2>
          <div className="flex flex-wrap">
            <button className="bg-indigo-500 text-white rounded-md py-2 px-4 m-1">
              HTML
            </button>
            <button className="bg-indigo-500 text-white rounded-md py-2 px-4 m-1">
              CSS
            </button>
            <button className="bg-indigo-500 text-white rounded-md py-2 px-4 m-1">
              HTML/CSS
            </button>
            <button className="bg-indigo-500 text-white rounded-md py-2 px-4 m-1">
              JAVASCRIPT
            </button>
            <button className="bg-indigo-500 text-white rounded-md py-2 px-4 m-1">
              REACT JS
            </button>
            <button className="bg-indigo-500 text-white rounded-md py-2 px-4 m-1">
              JAVA
            </button>
            <button className="bg-indigo-500 text-white rounded-md py-2 px-4 m-1">
              OOP
            </button>
            <button className="bg-indigo-500 text-white rounded-md py-2 px-4 m-1">
              DSA
            </button>
            <button className="bg-indigo-500 text-white rounded-md py-2 px-4 m-1">
              REACTNATIVE
            </button>
            <button className="bg-indigo-500 text-white rounded-md py-2 px-4 m-1">
              GITHUB
            </button>
            <button className="bg-indigo-500 text-white rounded-md py-2 px-4 m-1">
              GOOGLE DOCS
            </button>
            <button className="bg-indigo-500 text-white rounded-md py-2 px-4 m-1">
              C# API
            </button>
            <button className="bg-indigo-500 text-white rounded-md py-2 px-4 m-1">
              MS OFFICE
            </button>
            <button className="bg-indigo-500 text-white rounded-md py-2 px-4 m-1">
              SOCIAL MEDIA HANDLER
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold text-indigo-600 mb-2">
            CERTIFICATION
          </h2>
          <p className="text-gray-700 mt-4">
            <strong>IT Advance (6 Month)</strong>
          </p>
          <p className="text-gray-700">02/2017 - 08/2017</p>
          <p className="text-gray-700 mt-4">
            <strong>Artificial Intelligence (3 Months)</strong>
          </p>
          <p className="text-gray-700">2023 Summer WorkShop</p>
       

         </div>

        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold text-indigo-600 mb-2">
            Certifications
          </h2>
          <p className="text-gray-700">
            <strong>Web Development Certification</strong>
          </p>
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
