import React from 'react';

function Projects() {
  return (
    <div className="project-container">
      <h1 style={{ color: 'palegreen', marginBottom: 20 }}>Projects</h1>
      <div className="project-inner-container row" style={{ marginLeft: '50px' }}>

        <div className="card" style={{ margin: '20px', width: '27rem' }}>
          <div className="card-body">
            <h5 className="text-success card-title">Student Management System</h5>
            <h6 className="card-subtitle mb-2 text-muted">MEAN Stack</h6>
            
          </div>
        </div>

        <div className="card" style={{ margin: '20px', width: '27rem' }}>
          <div className="card-body">
            <h5 className="text-success card-title">Homely Hub</h5>
            <h6 className="card-subtitle mb-2 text-muted">MERN Stack</h6>
            <p className='card-text'>This project aims to provide a dynamic application for booking hotels.</p>
            <a href="#" className="card-text">Click here for source code</a>
          </div>
        </div>

        <div className="card" style={{ margin: '20px', width: '27rem' }}>
          <div className="card-body">
            <h5 className="text-success card-title">Employee BurnOut Prediction</h5>
            <h6 className="card-subtitle mb-2 text-muted">Machine Learning</h6>
            <p className='card-text'>This project aims to predict burn rate of a employee.</p>
            <a href="https://github.com/ShaikSajid3/APSSDC-AIML-EmployeeBurnoutPrediction" className="card-text">
              Click here for source code</a>
          </div>
        </div>

        <div className="card" style={{ margin: '20px', width: '27rem' }}>
          <div className="card-body">
            <h5 className="text-success card-title">Banking Fraud Detection</h5>
            <h6 className="card-subtitle mb-2 text-muted">Machine Learning</h6>
            <p className='card-text'>This project aims to detect credit card fraud in banking.</p>
            <a href="https://github.com/ShaikSajid3/Prasunethon-Project-BankingFraudDetection" className="card-text">
              Click here for source code</a>
          </div>
        </div>

        <div className="card" style={{ margin: '20px', width: '27rem' }}>
          <div className="card-body">
            <h5 className="text-success card-title">Tic Tac Toe Game</h5>
            <h6 className="card-subtitle mb-2 text-muted">Python</h6>
            <p className='card-text'>This project aims to develop a tic tac toe game for a single player.</p>
            <a href="https://github.com/ShaikSajid3/Code-In-Place-Project" className="card-text">
              Click here for source code</a>
          </div>
        </div>

        <div className="card" style={{ margin: '20px', width: '27rem' }}>
          <div className="card-body">
            <h5 className="text-success card-title">To-Do List</h5>
            <h6 className="card-subtitle mb-2 text-muted">Web Development</h6>
            <p className='card-text'>This project aims to provide a simple to-do list that can be helpful for users in scheduling their routine tasks.</p>
            <a href="https://github.com/ShaikSajid3/To-do.git" className="card-text">Click here for source code</a>
          </div>
        </div>

        <div className="card" style={{ margin: '20px', width: '27rem' }}>
          <div className="card-body">
            <h5 className="text-success card-title">Landing Page</h5>
            <h6 className="card-subtitle mb-2 text-muted">Web Development</h6>
            <p className='card-text'>This project aims to provide a landing page of juice bar web application.</p>
            <a href="https://github.com/ShaikSajid3/OCTANET_MAY/tree/master/LandingPage" className="card-text">
              Click here for source code</a>
          </div>
        </div>

        <div className="card" style={{ margin: '20px', width: '27rem' }}>
          <div className="card-body">
            <h5 className="text-success card-title">CountDown Timer</h5>
            <h6 className="card-subtitle mb-2 text-muted">Web Development</h6>
            <p className='card-text'>This project aims to provide a timer that works similar to a stopwatch.</p>
            <a href="https://github.com/ShaikSajid3/CodersBridge/tree/main/CountDownTimer" className="card-text">
              Click here for source code</a>
          </div>
        </div>

        <div className="card" style={{ margin: '20px', width: '27rem' }}>
          <div className="card-body">
            <h5 className="text-success card-title">Registration Form</h5>
            <h6 className="card-subtitle mb-2 text-muted">Web Development</h6>
            <p className='card-text'>This project aims to develop a dynamic registration form with user validations.</p>
            <a href="https://github.com/ShaikSajid3/CodersBridge/tree/main/RegistrationForm" className="card-text">
              Click here for source code</a>
          </div>
        </div>

        <div className="card" style={{ margin: '20px', width: '27rem' }}>
          <div className="card-body">
            <h5 className="text-success card-title">Calculator</h5>
            <h6 className="card-subtitle mb-2 text-muted">Web Development</h6>
            <p className='card-text'>This project aims to develop a calculator web app that performs basic arithmetic operations.</p>
            <a href="https://github.com/ShaikSajid3/CodersBridge/tree/main/Calculator" className="card-text">
              Click here for source code</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;