import React from "react";
import logo from "./images/vandelay.png";
import artVandelay from "./images/art-vandelay.jpg";
import SubmitCsv from "./components/SubmitCsv";

const App = () => (
  <div style={styles.container}>
    <div style={styles.nav}>
      <img src={logo} style={styles.logo} alt="vandelay-logo" />
      <h1>Contact List Report</h1>
    </div>
    <br />
    <SubmitCsv />
    <br />
    <br />
    <div style={styles.footer}>
      <img src={artVandelay} style={styles.art} alt="art-vandelay" />
      <span style={styles.quote}>"It’s not a lie if you believe it."</span>
    </div>
  </div>
);

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    margin: "0 3rem",
  },
  logo: {
    width: "150px",
    marginRight: "50px",
  },
  nav: {
    display: "flex",
    alignItems: "center",
  },
  footer: {
    display: "flex",
    alignItems: "center",
  },
  art: {
    width: "200px",
    marginRight: "50px",
    border: "2px solid #232325",
    borderRadius: "5px",
  },
  quote: {
    fontSize: "25px",
  }
};

export default App;
