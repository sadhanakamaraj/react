import "./abtcomp.css"
function Comp() {
    return (
        <><div id="company">
            <img src={require("../images/about_bg.jpg")} style={{ width: "1120px", heigth: "10px", marginTop: "60px" }} /> </div>
          
            <div id="comp1">
                <h1 style={{ color: "white", textAlign: "center" }}>About Company</h1>            
            <p style={{textAlign:"center"}}>There are many variations of passages of Lorem Ipsum available, but the majority have</p></div></>
        
    );
}
export default Comp;