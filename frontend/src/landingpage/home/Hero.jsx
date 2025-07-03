import React from "react";

function Hero() {
    return (
        <>
        <div className="p-5">
            <div className="row text-center">
              <img src="media/homeHero.png" alt="Hero Img" className="mb-5" />
              <h2 className="">Invest in everything</h2>
              <p>Online platform to invest in stocks, derivatives, mutual funds and more. </p>
              <button className="p-2 btn btn-primary fs-5" style={{width:"20%",margin:"0 auto"}}>Signup now</button>
            </div>
        </div>
        </>
    )
}

export default Hero