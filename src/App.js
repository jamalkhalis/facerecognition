import './App.css';
import Navigation from "./components/Navigation/Navigation";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { Component } from "react";
import ParticlesOption from "./ParticlesOption.js";

const initialState = {
      input: "",
      imageUrl: "",
      box: {},
      route: "signin",
      isSignIn: false,
      user: {
        id: "",
        name: "",
        email: "",
        password: "",
        entries: 0,
        joined: ""
      }
    }

class App extends Component {

  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({ user: data })
  }

  calculateFaceLocation = (res) => {
      const clarifaiFace = res.outputs[0].data.regions[0].region_info.bounding_box;
      const image = document.getElementById('imageInput');
      const width = Number(image.width);
      const height = Number(image.height);
      const box = {
          leftCol: clarifaiFace.left_col * width,
          topRow: clarifaiFace.top_row * height,
          rightCol: width - (clarifaiFace.right_col * width),
          bottomRow: height - (clarifaiFace.bottom_row * height)
      };
      this.setState({box: box});
  }

  async customInit(engine: Engine): Promise<void> {
    // this adds the bundle to tsParticles
    await loadFull(engine);
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {

    this.setState({ imageUrl: this.state.input });
    // For testing we use this local host
    // http://localhost:3001

    fetch("https://fast-reaches-67667.herokuapp.com/imageUrl", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: this.state.input })
    })
    .then(response => response.json())
    .then(result => { 


        fetch("https://fast-reaches-67667.herokuapp.com/image", {
          method: "put",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: this.state.user.id })
        })
        .then(response => response.json())
        .then(count => {
          Object.assign( this.state.user, { entries: count } );
          this.setState({ isSignIn: true })

        })

        this.calculateFaceLocation(result)

    })
    .catch(error => console.log('error', error));


  }

  onRouteChange = (route) => {

      if (route === "home") {
        this.setState({ isSignIn: true });
      } 
      else {
        this.setState(initialState);
      } 

      this.setState({ route: route })

  }

  render() {
    return (
      <div className="App">

        <Particles
              id="tsparticles"
              init={this.customInit}
              options={ParticlesOption}
        />

        <Navigation onRouteChange={ this.onRouteChange } isSignIn={ this.state.isSignIn }/>

        <Logo />

        {

          this.state.route === "home"

          ?   <div>
                <Rank user = { this.state.user } /> 
                <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} /> 
                <FaceRecognition box={ this.state.box } showImage={ this.state.imageUrl } />
              </div>

          :   (
                this.state.route === "signin"
                ? <Signin loadUser = { this.loadUser } onRouteChange={ this.onRouteChange }/>
                : <Register loadUser = { this.loadUser } onRouteChange={ this.onRouteChange } />
              )
          
        }
      
      </div>
    );
  }
}

export default App;