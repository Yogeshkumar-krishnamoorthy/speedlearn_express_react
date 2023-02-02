import React from "react";

export default function InputBox({
  className,
  type = "text",
  placeholder = "empty",
  value = "empty",
}) {
  const [hover, setHover] = React.useState(false);

  const styles = {
    inputBox: {
      position: "relative",
      width: "180px",
      boxShadow:
        "inset 2px 5px 10px rgba(0, 0, 0, 0.1), inset -2px -5px 10px rgba(255, 255, 255, 1), 15px 15px 10px rgba(0, 0, 0, 0.05), 15px 10px 15px rgba(0, 0, 0, 0.025)",
      borderRadius: "25px",
    },
    inputBoxSubmit: {
      position: "relative",
      width: hover ? "150px" : "100px",
      background: "#ff0f5b",
      boxShadow:
        "inset 2px 5px 10px rgb(0 0 0 / 10%), 10px 10px 10px rgb(0 0 0 / 25%), 10px 5px 10px rgb(0 0 0 / 25%)",
      borderRadius: "25px",
      transition: "0.5s",
    },
    inputBoxBefore: {
      content: "",
      position: "absolute",
      top: "4px",
      left: "10%",
      width: "80%",
      height: "4px",
      background: "rgba(255, 255, 255, 0.7)",
      boxShadow: "1px 1px 3px 1px rgb(255 255 255 / 80%)",
      borderRadius: "5px",
    },
    input: {
      border: "none",
      outline: "none",
      background: "transparent",
      width: "100%",
      fontSize: "1em",
      padding: "10px 15px",
    },
    inputSubmit: {
      border: "none",
      outline: "none",
      background: "transparent",
      width: "100%",
      padding: "10px 15px",
      color: "#fff",
      fontSize: "0.75em",
      cursor: "pointer",
      letterSpacing: "0.1em",
      fontWeight: "600",
      transition: "1s",
    },
  };
  if (placeholder !== "empty") {
    return (
      <>
        <div className="inputbox" style={styles.inputBox}>
          <div style={styles.inputBoxBefore} />
          <input
            className={className}
            type={type}
            placeholder={placeholder}
            style={styles.input}
          />
        </div>
      </>
    );
  } else if (value !== "empty") {
    return (
      <>
        <div className="inputbox" style={styles.inputBoxSubmit}>
          <div style={styles.inputBoxBefore} />
          <input
            className={className}
            type={type}
            value={value}
            style={styles.inputSubmit}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          />
        </div>
      </>
    );
  }
}
