import React from "react";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

function Header() {
  function handleClick() {
    document.querySelector(".sideBar").classList.add("open");
    console.log(userInfo);
  }

  function closeClick() {
    document.querySelector(".sideBar").classList.remove("open");
  }

  const userSignin = useSelector(state=>state.userSignin);
  const {userInfo} = userSignin
  return (
    <div>

      <div className="App">
        <div>
          <button onClick={handleClick} className="Brand">
            {" "}
            &#9776;
          </button>
        </div>
        <div className="Heading">
          <Link to="/">Amazona</Link>
        </div>
        <div className="headerLinks">
          <a className="Link" href="cart.html">
            {" "}
            Cart{" "}
          </a>
          {userInfo ? <Link to ="/profile">{userInfo.data.name}</Link>

             :
          <Link to ="/signin" className="Link" >
           SignUp
          </Link>
        }
        </div>
      </div>
      <div>
        <aside className="sideBar">
          <h2> Shopping Categories </h2>
          <button className="close" onClick={closeClick}>
            x
          </button>
          <ul>
            <li>
              <a href="index.html">Pants </a>
            </li>
            <li>
              <a href="index.html"> Shirts </a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default Header;
