import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

const API_ENDPOINT = "http://localhost:3001";

// let data = "";

// async function getUser() {
//   try {
//     const response = await axios.get(`${API_ENDPOINT}/check`);
//     data = response.data.check;
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios
      .get(`${API_ENDPOINT}/check`)
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.data.check}
      </div>
    );
  }
}

export default App;
