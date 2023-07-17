import "./chooseus.css"
function Choose() {
    return (
        <div id="choose" style={{ backgroundColor: "black",marginBottom:"50px" }}>
            <br></br>
            <h1>Why choose us</h1>
            <div id="line1"></div>
            <div id="chose" style={{ display: "flex",justifyContent:"space-between",padding:"110px",marginTop:"-85px"}}>
                <div class="choose1">
                <img src={require("../images/chose1.png")} style={{ width: "50px", heigth: "50px",backgroundColor:"black",marginLeft:"20px"}}  />
                    <h3>Project Done</h3>
                    <h3 style={{ marginLeft: "20px" }}>1000+</h3>
                    <button style={{padding:"15px 45px",borderRadius:"2px",marginLeft:"-26px"}}>Read More</button>
                </div>
                <div class="choose1">
                <img src={require("../images/chose2.png")} style={{ width: "50px", heigth: "50px",backgroundColor:"black",marginLeft:"40px"}}  />
                    <h3>Happy Clients</h3>
                    <h3 style={{ marginLeft: "40px" }}>900+</h3>
                    <button style={{padding:"15px 45px",borderRadius:"2px",marginLeft:"-15px"}}>Read More</button>
                </div>
                <div class="choose1">
                <img src={require("../images/chose3.png")} style={{ width: "40px", heigth: "40px",backgroundColor:"black",marginLeft:"18px"}}  />
                    <h3>Awards</h3>
                    <h3 style={{ marginLeft: "10px" }}>100+</h3>
                    <button style={{padding:"15px 45px",borderRadius:"2px",marginLeft:"-50px",marginTop:"-12px"}}>Read More</button>
                    
                </div>
            </div>
            <br></br>
        </div>

    );
}
export default Choose;