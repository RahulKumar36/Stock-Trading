export default function RightSection({ imgURL, productName, productDescription, learnMore }) {
    return (
        <>
            <div className=" row container mt-5">

                <div className="col-5 p-5 mt-5 " >
                    <h2>{productName}</h2>
                    <p>{productDescription}</p>
                    <div>
                        <a className="p-2 " href={learnMore} >Learn More <i class="fa fa-long-arrow-right" areahidden="true"></i></a>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-6 p-5" >
                    <img src={imgURL} alt="" />
                </div>
            </div>
        </>
    )
}