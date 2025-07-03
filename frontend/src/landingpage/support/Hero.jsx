import React from "react";

function Hero() {
  return (
    <section className="container-fluid " id="supportHero">
      <div className="p-5 mt-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a style={{textDecoration:"underline"}} href="">Track Tickets</a>
      </div>
      <div className="row p-5">
        <div className="col-6 ">
          <h1 className="fs-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" style={{backgroundColor:"white"}}/>
          <br />
          <a style={{paddingRight:"20px",textDecoration:"underline"}} href="">Track account opening</a>
          <a style={{paddingRight:"20px",textDecoration:"underline"}} href="">Track segment activation</a>
          <a style={{paddingRight:"20px",textDecoration:"underline"}} href="">Intraday margins</a>
          <a style={{paddingRight:"20px",textDecoration:"underline"}} href="">Kite user manual</a>
        </div>
        <div className="col-6">
          <h1 className="fs-4">Featured</h1>
          <ol>
            <li>
              <a style={{textDecoration:"underline",margin:"10px"}} href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a style={{textDecoration:"underline",margin:"10px"}} href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;