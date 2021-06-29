import styles from './App.css';
import logo from './res/logo/logo.png';
import VideoPlayer from 'react-player';
import ReactPlayer from 'react-player';
import React from 'react';
import member from './res/images/dummy.png';

class App extends React.Component {
  


  render(){
    return (
      <body>
        <div className="section1" id="section1">
          <div className="logo_section1" id="logo_section1">
            <img className="logo_section1_img" id="logo_section1_img" src={logo} alt={logo}/>
          </div>
          <div className="navbar">
            <button className="btn">Home</button>
            <button className="btn">Our Project</button>
            <button className="btn">Mock Up</button>
            <button className="btn">Members</button>
          </div>
        </div>
        <div className="section2" id="section2">
          <div className="video_section2" id="video_section2">
            <ReactPlayer
              className="react-player"
              url="https://youtu.be/BGhqlJnFIXU"
              controls={true}
              config={{
                youtube: {
                  playerVars: { showinfo: 1 }
                }
              }}
            />
          </div>
        </div>
        {/* <div className="section3" id="section3">

        </div> */}

        <div className="section4" id="section4">
          <div className="top_section4">
            <div className="card member" id="1"><img className="image member" src={member} alt="member"/></div>
            <div className="card text"><h2>Meet Our Team</h2></div>
            <div className="card member" id="2"><img className="image member" src={member} alt="member"/></div>
          </div>
          <div className="bottom_section4">
            <div className="card member" id="3"><img className="image member" src={member} alt="member"/></div>
            <div className="card member" id="4"><img className="image member" src={member} alt="member"/></div>
            <div className="card member" id="5"><img className="image member" src={member} alt="member"/></div>
          </div>
          
        </div>
        
      </body>
      
    );
  }
}

export default App;
