import React from "react";
import { Link } from "react-router-dom";

const styles = {
  nav: {
    backgroundColor: "#EEE",
    height: 50,
    display: "flex",
    alignItems: "center"
  },
  link: {
    color: 'gray',
    margin:5
  }
};
const Nav = () => {
  return (
    <div style={styles.nav}>
      <Link to="/" style={styles.link}>首页</Link>
      <Link to="/signin" style={styles.link}> signin</Link>
    </div>
  );
};
export default Nav;
