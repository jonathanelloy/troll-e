import './App.css';
import logo from './res/logo/logo.png';
import ReactPlayer from 'react-player';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import {useState} from 'react';
import Model from './Pink';
import { OrbitControls } from "@react-three/drei";
import  Modal  from 'react-modal';
import { AmbientLight } from 'three';
import hanif from './res/images/hanif.png';
import ivan from './res/images/ivan.png';
import aad from './res/images/aad.png';
import syarif from './res/images/syarif.jpg';
import elloy from './res/images/elloy.png';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      ivan: false,
      hanif: false,
      elloy: false,
      aad: false,
      syarif: false
    };
  }

  closeModal = () => {
    this.setState({
      ivan: false,
      hanif: false,
      elloy: false,
      aad: false,
      syarif: false});
  }

  openModal = (props) => {
    switch(props) {
      case 'ivan':
        this.setState({
          ivan: true,
          hanif: false,
          elloy: false,
          aad: false,
          syarif: false});
        break;
      case 'aad':
        this.setState({
          ivan: false,
          hanif: false,
          elloy: false,
          aad: true,
          syarif: false});
        break;
      case 'syarif':
        this.setState({
          ivan: false,
          hanif: false,
          elloy: false,
          aad: false,
          syarif: true});
        break;
      case 'hanif':
        this.setState({
          ivan: false,
          hanif: true,
          elloy: false,
          aad: false,
          syarif: false});
        break;
      case 'elloy':
        this.setState({
          ivan: false,
          hanif: false,
          elloy: true,
          aad: false,
          syarif: false});
        break;
    }
  }

  render(){
    return (
      <body>

        {/* Modal Declaration Starts */}
        <Modal className="Modal" isOpen={this.state.ivan} onRequestClose={()=> this.closeModal()} closeTimeoutMS={500}>
          <div className="modal">
            <h1>Halo, Salam Kenal!</h1>
            <img style={{ width:"20%", }} src={ivan}/>
            <h2>Nama : Ivan Widjanarko</h2>
            <h2>NPM : 1 8 0 6 1 4 8 7 0 6</h2>
            <h2>Peran : Direktur</h2>
          </div>
        </Modal>

        <Modal className="Modal" isOpen={this.state.aad} onRequestClose={()=> this.closeModal()} closeTimeoutMS={500}>
          <div className="modal">
            <h1>Halo, Salam Kenal!</h1>
            <img style={{ width:"20%", }} src={aad}/>
            <h2>Nama : M. As'ad Muyassir</h2>
            <h2>NPM : 1 8 0 x x x x x x x</h2>
            <h2>Peran : Wakil Dekanat</h2>
          </div>
        </Modal>

        <Modal className="Modal" isOpen={this.state.hanif} onRequestClose={()=> this.closeModal()} closeTimeoutMS={500}>
          <div className="modal">
            <h1>Halo, Salam Kenal!</h1>
            <img style={{ width:"20%", }} src={hanif}/>
            <h2>Nama : Haidar Hanif</h2>
            <h2>NPM : 1 8 0 x x x x x x x</h2>
            <h2>Peran : Rektor</h2>
          </div>
        </Modal>

        <Modal className="Modal" isOpen={this.state.syarif} onRequestClose={()=> this.closeModal()} closeTimeoutMS={500}>
          <div className="modal">
            <h1>Halo, Salam Kenal!</h1>
            <img style={{ width:"20%", }} src={syarif}/>
            <h2>Nama : Syarif Hidayat</h2>
            <h2>NPM : 1 8 0 x x x x x x x</h2>
            <h2>Peran : Profesor</h2>
          </div>
        </Modal>

        <Modal className="Modal" isOpen={this.state.elloy} onRequestClose={()=> this.closeModal()} closeTimeoutMS={500}>
          <div className="modal">
            <h1>Halo, Salam Kenal!</h1>
            <img style={{ width:"20%", }} src={elloy}/>
            <h2>Nama : Jonathan Elloy</h2>
            <h2>NPM : 1 8 0 6 1 4 8 7 1 2</h2>
            <h2>Peran : Janitor</h2>
          </div>
        </Modal>

        {/* Modal Declaration Ends */}



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
              url="https://www.youtube.com/watch?v=cNF3pLM2OXE"
              controls={true}
              config={{
                youtube: {
                  playerVars: { showinfo: 1 }
                }
              }}
            />
          </div>
        </div>
        
        <div className="section3" id="section3">
          <h1>Our Troll-E Mock Up</h1>
          <div class="canvasContainer">
            <Canvas className="modelCanvas" camera={{ position: [12, 10, -10], fov: 15}} >
              <pointLight position={[0, 10, 0]}/>
              <pointLight position={[10, 0, 0]}/>
              <pointLight position={[0, 0, 10]}/>
                <Suspense fallback={null}>
                  <Model className="model" />
                </Suspense>
              <OrbitControls/>
            </Canvas>
          </div>
          <p>
            <img className="mouseIcon" src="https://img.icons8.com/material/30/000000/mouse-left-click.png"/> Hold to Rotate  
              <span/>    
            <img className="mouseIcon" src="https://img.icons8.com/material/30/000000/mouse-right-click.png"/> Hold to Drag
              <span/> 
            <img className="mouseIcon" src="https://img.icons8.com/material/30/000000/mouse-scrolling.png"/> Zoom In/Zoom Out
          </p>
        </div>

        <div className="section4" id="section4">
          <div className="top_section4">
            <div className="card member" id="1"><img className="image member" src={ivan} alt="member" onClick={() => this.openModal('ivan')}/></div>
            <div className="card text"><h2 style={{fontSize:"270%", textAlign:"left"}}>Meet Our Team</h2></div>
            <div className="card member" id="2"><img className="image member" src={aad} alt="member" onClick={() => this.openModal('aad')}/></div>
          </div>
          <div className="bottom_section4">
            <div className="card member" id="3"><img className="image member" src={hanif} alt="member" onClick={() => this.openModal('hanif')}/></div>
            <div className="card member" id="4"><img className="image member" src={syarif} alt="member" onClick={() => this.openModal('syarif')}/></div>
            <div className="card member" id="5"><img className="image member" src={elloy} alt="member" onClick={() => this.openModal('elloy')}/></div>
          </div>
          
        </div>
        
      </body>
      
    );
  }
}

export default App;
