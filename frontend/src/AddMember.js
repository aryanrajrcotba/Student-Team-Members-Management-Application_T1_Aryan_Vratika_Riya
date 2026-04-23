import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddMember() {
  const [formData, setFormData] = useState({});
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    // Append text fields
    Object.keys(formData).forEach(key => data.append(key, formData[key]));
    // Append file
    if (image) data.append('image', image);

    try {
      await axios.post('http://localhost:5001/api/members', data);
      alert('Member Added Successfully!');
      navigate('/view');
    } catch (err) {
      console.error(err);
      alert('Error adding member');
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 style={{textAlign: 'center', color: '#3b82f6'}}>Add Team Member</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" required onChange={handleChange} />
          <input type="text" name="roll" placeholder="Roll Number" onChange={handleChange} />
          <input type="text" name="year" placeholder="Year" onChange={handleChange} />
          <input type="text" name="degree" placeholder="Degree" onChange={handleChange} />
          <textarea name="project" placeholder="About Project" onChange={handleChange}></textarea>
          <input type="text" name="hobbies" placeholder="Hobbies (comma separated)" onChange={handleChange} />
          <input type="text" name="certificate" placeholder="Certificate" onChange={handleChange} />
          <input type="text" name="internship" placeholder="Internship" onChange={handleChange} />
          <textarea name="aboutYourAim" placeholder="About Your Aim" onChange={handleChange}></textarea>
          <input type="file" onChange={handleFileChange} required />
          <button type="submit" className="btn" style={{background: '#3b82f6', color: 'white'}}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddMember;