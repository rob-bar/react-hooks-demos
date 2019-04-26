import React from 'react';
import { Link } from "react-router-dom";
const Nav = props => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="demo1">Demo1</Link>
        </li>
        <li>
          <Link to="demo2">Demo2</Link>
        </li>
        <li>
          <Link to="demo3">Demo3</Link>
        </li>
        <li>
          <Link to="demo4">Demo4</Link>
        </li>
        <li>
          <Link to="demo5">Demo5</Link>
        </li>
        <li>
          <Link to="demo6">Demo6</Link>
        </li>
        <li>
          <Link to="demo7">Demo7</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
