import OpenAccount from "../OpenAccount"

function SignUp() {
      const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation and signup logic here
    // If successful:
    navigate("https://stock-trading-dashboard-k9k7.onrender.com");
  };
    return (
        <>
            <div className="container mt-5 p-5">
                <div className="p-5">
                    <div className="row text-center">
                        <h2 className="">Open Account</h2>
                        <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                        
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 offset-3">
                        <form onSubmit={handleSubmit} class="needs-validation" novalidate>

                            <div class="mb-3">
                                <label for="username" class="form-lable">Enter username</label>
                                <input name="username" type="text"
                                    class="form-control" required />
                                <div class="valid-feedback">looks good!</div>
                            </div>

                            <div class="mb-3">
                                <label for="email" class="form-lable">Enter email</label>
                                <input name="email" type="text"
                                    class="form-control" required />
                            </div>

                            <div class="mb-3">
                                <label for="password" class="form-lable">Enter password</label>
                                <input name="password" type="password"
                                    class="form-control" required />
                            </div>
                            <a href="https://stock-trading-dashboard-k9k7.onrender.com"><button className="p-2 btn btn-primary fs-5" style={{ width: "20%", margin: "0 auto" }}>Sign up</button></a>
                            
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignUp