import "./footer.css"
function Footer() {
    return (
        <><div id="foot" style={{ marginTop: "30px" }}>
            <div style={{ display: "flex", justifyContent: "space-around", paddingTop: "30px" }}>
                <img src={require("../images/logo_footer.png")} style={{ width: "180px", heigth: "100px", marginLeft: "10px", marginTop: "10px" }} />
                <input type="text" placeholder="ENTER YOUR EMAIL" style={{ marginTop: "20px" }}></input>
                <div class="sub">
                    <button style={{ color: "white", backgroundColor: "black", padding: "20px", marginTop: "20px" }}>SUBSCRIBE NOW</button>
                </div>
            </div>
        </div>
            <div id="endparent">
                <div class="endd">
                    <h3 style={{ marginLeft: "20px" }}>USEFUL LINK</h3>
                    <p>Home</p>
                    <p>About</p>
                    <p>what we do</p>
                    <p>Portfolio</p>
                    <p>Contact US</p>
                </div>
                <div class="endd">
                    <h3 style={{ marginLeft: "20px" }}>NEWS</h3>
                    <p>It is a long established </p>
                    <p>fact that a reader will </p>
                    <p>  be distracted by the</p>
                    <p>readable content of a</p>
                    <p>page when</p>
                </div>
                <div class="endd">
                    <h3 style={{ marginLeft: "20px" }}>COMPANY</h3>
                    <p>It is a long established </p>
                    <p>fact that a reader will </p>
                    <p>  be distracted by the</p>
                    <p>readable content of a</p>
                    <p>page when</p>
                </div>
                <div class="endd">
                    <h3 style={{ marginLeft: "20px" }}>CONTACT US</h3>
                    <p>
                        Location</p>
                    <p>Call +01 1234567890</p>
                    <p> mail@domain.com</p>
                </div>
            </div></>
    );
}
export default Footer;