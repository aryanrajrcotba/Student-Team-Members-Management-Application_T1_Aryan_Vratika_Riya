import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ViewMembers() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/api/members')
      .then(res => setMembers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <h2 style={{color: '#4908ef'}}>MEET OUR AMAZING TEAM</h2>
      <div className="grid">
        {members.map(member => (
          <div className="card" key={member._id}>
            <img src={`http://localhost:5001/${member.image}`} alt={member.name} />
            <h3>{member.name}</h3>
            <p>Roll Number: {member.roll}</p>
            <Link to={`/member/${member._id}`} className="btn" style={{background: '#3b82f6', color: 'white', display: 'inline-block'}}>VIEW DETAILS</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewMembers;