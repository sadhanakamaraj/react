import "./banner.css"
function Banner() {
    return (
        <div id="ban">
            <h1 style={{ fontSize: "80px", fontWeight: "700", color: "white" }}>Creative</h1>
            <h1 style={{ fontSize: "80px", marginTop: "-68px", fontWeight: "700", color: "white" }}>Work Idea</h1>
            <p style={{ color: "white" }}>There are many variations of passages of Lorem Ipsum</p>
            <p style={{ color: "white", marginBottom: "80px" }}>available, but the majority have suffered alteration</p>
            <button style={{ padding: "20px 50px", marginLeft: "45px" }}>About company</button>
            <button style={{ marginLeft: "45px", padding: "20px 60px" }}>Contact us</button>
            <br></br> <br></br>
            <img src={require("../images/loader1.jpg")} style={{ width: "100px", heigth: "30px", margin: "-23px 19px 52px 91px" }} />
            <br></br> <br></br>
            <h1 style={{ color: "black", marginLeft: "460px" }}>What We Do</h1>
            <div class="line"></div>
            <br></br>
        </div>
    );
}
export default Banner;