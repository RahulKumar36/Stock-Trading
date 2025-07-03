export default function LeftSection({ imgURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <>
            <div className=" row container mt-5">
                <div className="col-6 p-5 " >
                    <img  src={imgURL} alt="" />
                </div>
                 <div className="col-1"></div>
                <div className="col-5 p-5 mt-5 " >
                    <h2>{productName}</h2>
                    <p>{productDescription}</p>
                    <div>
                        <a className="p-2 " href={tryDemo} >Try Demo <i class="fa fa-long-arrow-right" areahidden="true"></i></a> 
                        <a className="p-2 " href={learnMore}>Learn More <i class="fa fa-long-arrow-right" areahidden="true"></i></a>
                    </div>
                    <div className="mt-3">
                        <a className="p-2 " href={googlePlay}><img src="media/googlePlayBadge.svg" alt="" /></a>
                        <a className="p-2 " href={appStore}><img src="media/appstoreBadge.svg" alt="" /></a>
                    </div>

                </div>
            </div>
        </>
    )
}