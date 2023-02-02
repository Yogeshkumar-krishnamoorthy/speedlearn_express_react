import React from "react";

export default function Anchor({ href = "/", className, linkText }) {
  const [hover, setHover] = React.useState(false);

  const styles = {
    btns: {
      position: "absolute",
      right: "-90px",
      bottom: "0",
      width: "120px",
      height: "120px",
      background: "#c61dff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      textDecoration: "none",
      color: "#fff",
      lineHeight: "1.2em",
      letterSpacing: "0.1em",
      fontSize: "0.9em",
      transition: "1s",
      textAlign: "center",
      boxShadow:
        "inset 10px 10px 10px rgba(190, 1, 254, 0.05), 15px 25px 10px rgba(190, 1, 254, 0.1), 15px 20px 20px rgba(190, 1, 254, 0.1), inset -10px -10px 15px rgba(255, 255, 255, 0.5)",
      borderRadius: hover ? "50%" : "31% 69% 64% 36% / 52% 58% 42% 48%",
      wordBreak: "break-word",
    },
    btnsBefore: {
      content: "",
      position: "absolute",
      top: "15px",
      left: "30px",
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      background: "#fff",
      opacity: "0.45",
    },
    signUp: {
      bottom: "150px",
      right: "-90px",
      width: "80px",
      height: "80px",
      borderRadius: hover ? "50%" : "44% 56% 47% 53% / 64% 58% 42% 36%",
      background: "#01b4ff",
      boxShadow:
        "inset 10px 10px 10x rgba(1, 180, 255, 0.05), 15px 25px 10px rgba(1, 180, 255, 0.1), 15px 20px 20px rgba(1, 180, 255, 0.1), inset -10px -10px 15px rgba(255, 255, 255, 0.5)",
    },
    signUpBefore: {
      left: "20px",
      width: "15px",
      height: "15px",
    },
  };
  if (linkText === "Sign Up") {
    return (
      <a
        href={href}
        className={className}
        style={{ ...styles.btns, ...styles.signUp }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div style={{ ...styles.btnsBefore, ...styles.signUpBefore }} />
        {linkText}
      </a>
    );
  } else {
    return (
      <a
        href={href}
        className={className}
        style={styles.btns}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div style={styles.btnsBefore} />
        {linkText}
      </a>
    );
  }
}
