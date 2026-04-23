import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="dark-bg">
      <h1>TEAM 1 (Aryan_Vratika_Riya)</h1>
      <p>Welcome to the TEAM 1 Management</p>
      <div className="btn-container">
        <h3>Manage Team</h3>
        <Link to="/add" className="btn">Add Member</Link>
        <Link to="/view" className="btn">View Members</Link>
      </div>
    </div>
  );
}

export default Home;