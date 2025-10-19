import React, { useContext, useEffect, useRef, useState } from "react";
import Quill from "quill";
import { JobCategories, JobLocations } from "../assets/assets";
import axios from "axios";
import toast from "react-hot-toast";
import { AppContext } from "../context/AppContext";


const AddJob = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('Dhaka');
  const [category, setCategory] = useState('Programming');
  const [level, setLevel] = useState('Beginner level');
  const [salary, setSalary] = useState(0);
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const {backendUrl, companyToken}=useContext(AppContext)

  const onSubmitHandler = async (e) => {

    e.preventDefault()

    try {
      const description = quillRef.current.root.innerHTML

      const {data}=await axios.post(backendUrl+'/api/company/post-job',
        {title,description,location,salary,category,level},
        {headers: {token:companyToken}}
      )
      if(data.success){
        toast.success(data.message)
        setTitle('')
        setSalary(0)
        quillRef.current.root.innerHTML= ""
      } else{
        toast.error(data.message)
      }

      
    } catch (error) {
      toast.error(error.message)
      
    }

  }

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        placeholder: 'Type the job description here...',
      });
    }
  }, []);

  return (
    <div>
      <form onSubmit={onSubmitHandler} className="container p-6 flex flex-col w-full items-start gap-6 bg-white shadow-lg rounded-xl">
        
        {/* Job Title */}
        <div className="w-full max-w-lg flex flex-col gap-1">
          <label className="font-medium text-gray-700">Job Title</label>
          <input 
            type="text" 
            placeholder="Type here" 
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#00A88E] focus:ring-2 focus:ring-[#00A88E]/30 transition-all duration-300"
          />
        </div>

        {/* Job Description */}
        <div className="w-full max-w-lg flex flex-col gap-1">
          <label className="font-medium text-gray-700">Job Description</label>
          <div 
            ref={editorRef} 
            className="h-40 border-2 border-gray-300 rounded-lg p-2 focus-within:border-[#00A88E] focus-within:ring-2 focus-within:ring-[#00A88E]/30 transition-all duration-300 shadow-sm hover:shadow-md"
          ></div>
        </div>

        {/* Selects */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          
          {/* Category */}
          <div className="flex-1 flex flex-col gap-1">
            <label className="font-medium text-gray-700">Job Category</label>
            <select 
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#00A88E] focus:ring-2 focus:ring-[#00A88E]/30 transition-all duration-300"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              {JobCategories.map((cat, idx) => (
                <option key={idx} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Location */}
          <div className="flex-1 flex flex-col gap-1">
            <label className="font-medium text-gray-700">Job Location</label>
            <select 
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#00A88E] focus:ring-2 focus:ring-[#00A88E]/30 transition-all duration-300"
              value={location}
              onChange={e => setLocation(e.target.value)}
            >
              {JobLocations.map((loc, idx) => (
                <option key={idx} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          {/* Level */}
          <div className="flex-1 flex flex-col gap-1">
            <label className="font-medium text-gray-700">Job Level</label>
            <select 
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#00A88E] focus:ring-2 focus:ring-[#00A88E]/30 transition-all duration-300"
              value={level}
              onChange={e => setLevel(e.target.value)}
            >
              <option value="Beginner level">Beginner level</option>
              <option value="Intermediate level">Intermediate level</option>
              <option value="Senior level">Senior level</option>
            </select>
          </div>
        </div>

        {/* Salary */}
        <div className="flex flex-col gap-1">
          <label className="font-medium text-gray-700">Job Salary</label>
          <input 
            type="number" 
            min={0} 
            placeholder="2500" 
            value={salary} 
            onChange={e => setSalary(e.target.value)}
            className="w-full sm:w-[120px] px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#00A88E] focus:ring-2 focus:ring-[#00A88E]/30 transition-all duration-300"
          />
        </div>

        {/* Submit Button */}
        <button 
          type="submit"
          className="w-32 py-3 mt-4 bg-gradient-to-r from-[#00A88E] to-[#007a6e] hover:from-[#007a6e] hover:to-[#00A88E] text-white font-semibold rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-500"
        >
          ADD
        </button>
      </form>
    </div>
  );
}

export default AddJob;
