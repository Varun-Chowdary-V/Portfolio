import React from 'react';
import "./Education.css";
function Education() {
  return (
    <div>
      <h1 style={{color:'palegreen'}}>Education</h1>
      <div className='education-container'>
      <div className="offset-md-1 card" style={{ margin: '20px', width: '28rem' }}>
        <div className="card-body">
          <h5 className="card-title">Bachelor of Technology <span className="right-span bg-success badge">CGPA 9.05</span></h5>
          <h6 className="card-subtitle mb-2 text-muted">Computer Science and Engineering</h6>
          <p className="card-text">Pursuing</p>
        </div>
      </div>

      <div className="card" style={{ margin: '20px', width: '28rem' }}>
        <div className="card-body">
          <h5 className="card-title">Intermediate <span className="right-span bg-success badge">Marks 979</span></h5>
          <h6 className="card-subtitle mb-2 text-muted">MPC</h6>
          <p className="card-text">2019-2021</p>
        </div>
      </div>

      <div className="card" style={{ margin: '20px', width: '28rem' }}>
        <div className="card-body">
            <h5 className="card-title">SSC <span className="right-span bg-success badge">CGPA 9.8</span></h5>
            <h6 className="card-subtitle mb-2 text-muted">&nbsp;</h6>
          <p className="card-text">2018-2019</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Education;