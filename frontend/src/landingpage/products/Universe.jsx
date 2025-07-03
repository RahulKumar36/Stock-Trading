export default function Universe(){
    return(
        <>
           <div className="container  ">
            <div className="row mt-4 text-center text-muted">
            <h2 className="mt-5 mb-4">The Zerodha Universe</h2>
            <p>Extend your trading and investment experience even further with our partner platforms</p>
            
                <div className="col-4 p-3 mt-5" >
                    <img src="media/smallcaseLogo.png" alt="" />
                    <p className="small-text text-muted">Thematic investment platform</p>
                </div>
                <div className="col-4 p-3 mt-5" >
                    <img src="media\streakLogo.png" alt="" style={{width:"46%"}} />
                    <p className="small-text text-muted">Thematic investment platform</p>
                </div>
                <div className="col-4 p-3 mt-5" >
                    <img src="media/sensibullLogo.svg" alt="" style={{width:"65%"}}/>
                    <p className="small-text text-muted p-2">Thematic investment platform</p>
                </div>
                <div className="col-4 p-3 mt-5" >
                    <img src="media/zerodhaFundhouse.png" alt="" style={{width:"60%"}} />
                    <p className="small-text text-muted">Thematic investment platform</p>
                </div>
                <div className="col-4 p-3 mt-5" >
                    <img src="media/goldenpiLogo.png" alt="" style={{width:"60%"}}/>
                    <p className="small-text text-muted">Thematic investment platform</p>
                </div>
                <div className="col-4 p-3 mt-5" >
                    <img src="media/dittoLogo.png" alt="" style={{width:"45%"}}/>
                    <p className="small-text text-muted p-1">Thematic investment platform</p>
                </div>
                <button className="p-2 mt-5 btn btn-primary fs-5" style={{width:"20%",margin:"0 auto"}}>Signup now</button>
            </div>
            </div>
        </>
    )
}