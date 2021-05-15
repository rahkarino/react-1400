import React, { useEffect, useRef, useContext } from "react";
import AuthContext from '../../context/auth-context'

const Main = (props) => {
  const btnRef = useRef(null)
  const authContext = useContext(AuthContext)
  useEffect(() => {
    console.log('useEffect Main.js')
    btnRef.current.click()
  }, [])
  const btn = {
    backgroundColor: "#7b1fa2",
    color: "#ffffff",
    borderRadius: "10px",
    border: "none",
    padding: "10px 30px",
    margin: "20px 0",
    fontSize: "16px",
    cursor: "pointer",
  };
  return (
    <React.Fragment>
      <h3>Book Store!</h3>
      <button onClick={props.click} style={btn} ref={btnRef}>
        Show/Hide Products
      </button>
      {<button onClick={authContext.login}>Login</button>}
      {props.products}
    </React.Fragment>
  );
};

export default Main;
