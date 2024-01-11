import React, { useState } from "react";

const AddProject = () => {
  const [images, setImages] = useState([]);
  var selectedImage = "";
  const handleImageChange = (e) => {
    selectedImage = e.target.files[0];
  };
  const addPorject=()=>{
    setImages((pre)=>[...pre,selectedImage])
  }

  return (
    <div className="m-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <label className="block text-xl font-semibold mb-4">Add Project</label>
      <input
        type="file"
        name="file"
        onChange={handleImageChange}
        className="border border-black p-2 mb-4"
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4 ml-2"
        onClick={addPorject}
      >
        Add Image
      </button>
      <div className="flex flex-wrap justify-center">
        {images.map((image, index) => (
          <div key={index} className="m-2 relative">
            <img
              src={URL.createObjectURL(image)}
              width="150"
              height="100"
              alt={`Selected ${index + 1}`}
              className="rounded-md transition-transform transform hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddProject;
