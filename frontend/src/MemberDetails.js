import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function MemberDetails() {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5001/api/members/${id}`)
      .then(res => setMember(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!member) return <div className="container">Loading...</div>;

  return (
    <div className="container">
      <div className="form-container" style={{textAlign: 'center'}}>
        <img src={`http://localhost:5001/${member.image}`} alt={member.name} style={{maxWidth: '100%', borderRadius: '8px', maxHeight: '300px'}} />
        <h3>{member.name}</h3>
        <p>{member.degree} - {member.year}</p>
        <hr />
        <div style={{textAlign: 'left'}}>
          <p><strong>Roll Number:</strong> {member.roll}</p>
          <p><strong>Project:</strong> {member.project}</p>
          <p><strong>Certificate:</strong> {member.certificate}</p>
          <p><strong>Internship:</strong> {member.internship}</p>
          <p><strong>About Your Aim:</strong> {member.aboutYourAim}</p>
          <p><strong>Hobbies:</strong> {member.hobbies}</p>
        </div>
      </div>
    </div>
  );
}

export default MemberDetails;