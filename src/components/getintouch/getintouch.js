import "./getintouch.css"
function Intouch() {
    return (
        <div id="getintouch">
            <div id="touch" style={{ marginLeft: "-70px" }}>
                <h2>Get in touch</h2>
                <div class="line" style={{ marginleft: "50px", margintop: "-30px", marginBottom: "30px", marginLeft: "30px" }}></div>
                <form>
                    <input type="text" placeholder="Name"></input> <br></br> <br></br>
                    <input type="email" placeholder="email"></input>
                    <br></br> <br></br>
                    <input type="text" placeholder="phone number"></input>
                    <br></br> <br></br>
                    <textarea placeholder="Message"></textarea>
                    <br></br> <br></br>
                    <button >Send Now</button>
                </form>
            </div>

            <div id="client">
                <h2 style={{ marginBottom: "50px" }}>What Says Clients</h2>
               
                <br></br>
                <div class="box">
                    <div id="client1">
                   
                        <img src={require("../images/clint.jpg")} style={{ width: "120px", heigth: "100px", backgroundColor: "#e9e9e9", marginLeft: "50px" }} />
                    </div>
                    <b>Dave</b>
                    <img src={require("../images/icon.png")} style={{ width: "25px", heigth: "25px", marginLeft: "48px",marginTop:"15px" }} />
                    <div style={{color:"#757575",marginTop:"50px"}}>
                        <p>It is a long established fact that a reader will </p>
                        <p>be distracted by the readable content of a page </p>
                        <p>when looking at its layout. The point of using Lorem </p>
                        <p>IpsumIt is a long established fact that a reader will be</p>
                        <p>distracted by the readable content.</p>
                    </div>
                </div>
            </div>
        </div>


    );
}
export default Intouch;