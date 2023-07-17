import "./header.css"
function Navbar() {
    return (
        <div id="nav">
              <img src={require("../images/logo.png")} style={{width: "80px", heigth: "90px"}}  />
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">What we do</a>
            <a href="">Portfolio</a>
            <a href="">Contact us </a>
            <a href="">login</a>
            <img src={require("../images/search2.png")} style={{width: "30px", heigth: "30px",marginLeft:"25px",paddingTop:"30px"}}  />
        </div>
    );
}
export default Navbar;