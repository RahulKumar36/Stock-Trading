export default function Brokerage() {
    return (
        <>
            <div className="container">
                <div className="row mt-5 p-5 border-top">
                    <div className="col-8">
                        <a href=""><h4 >Brokerage calculator</h4></a>
                        <ul>
                            <li className="p-2">Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
                            GST per order. </li>
                            <li className="p-2">Digital contract notes will be sent via e-mail.
                            Physical copies of contract notes,if required, shall be charged
                            ₹20 per contract note. Courier charges apply. </li>
                            <li className="p-2">For nRI account
                            (non-PIS), 0.5% or ₹100 per executed order for equity (whichever
                            is lower). </li>
                            <li className="p-2">For NRI account (PIS), 0.5% or ₹200 per executed order
                            for equity (whichever islower). </li>
                            <li className="p-2">If the account is in debit balance, any order placed will be charged ₹40 per executed order
                            instead of 20 per executed order. </li>


                        </ul>
                    </div>
                    <div className="col-4">
                        <a href=""><h4>List of charges</h4></a>
                    </div>
                </div>

            </div>
        </>
    )
}