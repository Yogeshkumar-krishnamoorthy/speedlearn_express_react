// import "../components/css/common.css";
import React from "react";
import InputBox from "../components/InputBoxElement.js";
import Anchor from "../components/Anchor";

export default function Signup() {
  const [hover, setHover] = React.useState(false);

  const styles = {
    container: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    drop: {
      position: "relative",
      left: "-60px",
      width: "300px",
      height: "300px",
      boxShadow:
        "inset 20px 20px 20px rgba(0, 0, 0, 0.05), 25px 35px 20px rgba(0, 0, 0, 0.05), 25px 30px 30px rgba(0, 0, 0, 0.05), inset -20px -20px 25px rgba(255, 255, 255, 0.9)",
      transition: "1s",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: hover ? "50%" : "59% 41% 30% 70% / 30% 41% 59% 70%",
    },
    dropBefore: {
      content: "",
      position: "absolute",
      top: "40px",
      left: "75px",
      width: "25px",
      height: "25px",
      borderRadius: "50px",
      background: "#fff",
      opacity: "0.9",
    },
    dropAfter: {
      content: "",
      position: "absolute",
      top: "65px",
      left: "100px",
      width: "10px",
      height: "10px",
      borderRadius: "50px",
      background: "#fff",
      opacity: "0.9",
    },
    content: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      textAlign: "center",
      padding: "40px",
      gap: "15px",
    },
    contentH2: {
      position: "relative",
      color: "#333",
      fontSize: "1.5em",
    },
    contentForm: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <>
      <div style={styles.container}>
        <div
          style={styles.drop}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div style={styles.dropBefore} />
          <div style={styles.content}>
            <h2 style={styles.contentH2}>Login</h2>
            <form style={styles.contentForm}>
              <InputBox
                className="username"
                type="text"
                placeholder="username"
              />
              <InputBox
                className="password"
                type="password"
                placeholder="password"
              />
            </form>
          </div>
          <div className="dropBefore" style={styles.dropAfter} />
        </div>
        <InputBox className="loginSubmit" type="submit" value="Register" />
        <Anchor
          className="btns Sign Up"
          linkText="Already a user? Log in"
          href="/login"
        />
      </div>
    </>
  );
}
