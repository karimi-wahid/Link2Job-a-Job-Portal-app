import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import { JobCategories, JobLocations } from "../assets/assets";

const AddJob = () => {
  const [job, setJob] = useState({
    title: "",
    location: "Kabul",
    category: "Programming",
    level: "Beginner level",
    salary: 0,
  });

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  useEffect(() => {
    // Initiate Quill once
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  },[]);

  return (
    <form className="container p-4 flex flex-col w-full items-start gap-3">
      <div className="w-full">
        <p className="mb-2">Job Title</p>
        <input
          className="w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded outline-none"
          type="text"
          placeholder="Type here"
          name="title"
          onChange={handleInputChange}
          value={job.title}
          required
        />
      </div>

      <div className="w-full max-w-lg">
        <p className="my-2">Job Description</p>
        <div ref={editorRef}></div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Job Category</p>
          <select
            className="w-full px-3 py-2 border-2 border-gray-300 outline-none"
            name="category"
            onChange={handleInputChange}>
            {JobCategories.map((category, index) => (
              <option value={category} key={index}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p className="mb-2">Job Location</p>
          <select
            className="w-full px-3 py-2 border-2 border-gray-300 outline-none"
            name="location"
            onChange={handleInputChange}>
            {JobLocations.map((location, index) => (
              <option value={location} key={index}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p className="mb-2">Job Level</p>
          <select
            className="w-full px-3 py-2 border-2 border-gray-300 outline-none"
            name="level"
            onChange={handleInputChange}>
            <option value="Begginner level">Begginner level</option>
            <option value="Intermediate level">Begginner level</option>
            <option value="Senior level">Begginner level</option>
          </select>
        </div>
      </div>

      <div>
        <p className="mb-2">Job Salary</p>
        <input
          className="w-full px-3 py-2 border-2 border-gray-300 rounded sm:w-[120px] outline-none"
          type="number"
          name="salary"
          placeholder="2500"
          value={job.salary}
          onChange={handleInputChange}
          required
        />
      </div>

      <button className="w-28 py-3 mt-4 bg-green-600 hover:bg-green-700 text-white rounded">Add</button>
    </form>
  );
};

export default AddJob;
