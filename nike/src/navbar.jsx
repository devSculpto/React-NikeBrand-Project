import "./navbar.css";
let Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="./images/brand_logo.png" alt="brand_logo" />
        </div>

        <div className="options">
          <ul>
            <li>MENU</li>
            <li>LOCATION</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </div>

        <div className="login_btn">
          <button id="btn">Login</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
