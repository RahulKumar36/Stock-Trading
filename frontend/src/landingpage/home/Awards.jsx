import React from "react";

function Awards() {
    return (
        <>
        <div className="container mt-5">
          <div className="row ">
          <div className="col-6 p-5">
            <img src="/media/largestBroker.svg" alt="largest broker" />
          </div>
          <div className="col-6 p-5 mt-5">
            <h2 className="mt-5">Largest stock broker in India</h2>
            <p className="mt-4">2+millon clients contribute to over 20% of all retail order volumes in india daily by trading and investing in:</p>
            <div className="row mt-4">
               <div className="col-6">
                  <ul>
                    <li className="mb-2">Futures and Options</li>
                    <li className="mb-2"> Commodity derivatives</li>
                    <li className="mb-2"> Currency derivatives</li>
                  </ul>
               </div>
               <div className="col-6">
                  <ul>
                    <li className="mb-2">Stocks and IPOs</li>
                    <li className="mb-2">Direct mutual funds </li>
                    <li className="mb-2">Bond and Govt. securities</li>
                  </ul>
               </div>
            </div>

          </div>
          </div>
        </div>
            <div>
              <img style={{width:"50%",margin:"0 25%"}} src="media\pressLogos.png" alt="" />
            </div>
        </>
    )
}

export default Awards