import React from "react";

function Pricing() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6 p-5">
                       <h2>Unbeatable pricing</h2>
                       <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                       <div>
                        <a href="">See Pricing <i class="fa fa-long-arrow-right" areahidden="true"></i></a>
                       </div>
                    </div>
                    
                    <div className="col-6 p-5">
                        <div className="row text-center">
                            <div className="col border p-2">
                                <h3 className="mb-3">₹0</h3>
                                <p>Free equity delivery and direct mutual funds</p>
                            </div>
                            <div className="col border p-2">
                                <h3 className="mb-3">₹0</h3>
                                <p>Intraday and F&O</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Pricing