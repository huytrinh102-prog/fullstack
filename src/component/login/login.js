import "./login.scss";
const Login = () => {
  return (
    <div className="login-container row mt-3 ">
      <div className="login-right d-none d-sm-block col-sm-7 mt-5">
        <div className="login-right-content d-none d-sm-block mt-5">
          <div className="brand text-center mt-5">YU-H8129</div>
          <div className="brand-content text-center">
            wellcome to my wedsite
          </div>
        </div>
      </div>
      <div className="login-left col-12 col-sm-5 mt-sm-5 ">
        <div className="login-left-wrap mt-sm-5 px-sm-5">
          <div className="brand text-center d-sm-none">YU-H8129</div>
          <div className="login-left-content row p-4 gy-3 mt-3">
            <input
              type="text"
              placeholder="Email or Phone number"
              class="form-control"
            ></input>{" "}
            <input
              type="password"
              placeholder="Password"
              class="form-control"
            ></input>
            <button class="btn btn-primary">Login</button>
            <span className="text-center">forgot your password?</span> <hr></hr>
            <div className="text-center">
              <button className="btn btn-success">Create new account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
