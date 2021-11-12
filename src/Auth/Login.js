import React from "react";
import "./style.css";
const Login = () => {
  return (
    <div className="container">
      <div className="myCard">
        <div className="row">
          <div className="col-md-6">
            <div className="myLeftCtn">
              <form className="myForm text-center">
                <header>Customer Login</header>

                <div className="form-group">
                  <i className="fas fa-envelope"></i>
                  <input
                    className="myInput"
                    placeholder="Email"
                    type="text"
                    id="email"
                  />
                </div>

                <div className="form-group">
                  <i className="fas fa-lock"></i>
                  <input
                    className="myInput"
                    type="password"
                    id="password"
                    placeholder="Password"
                  />
                </div>

                <div className="form-group">
                  {/* <input id="check_1" name="check_1" type="checkbox">
                    I read and agree to Terms & Conditions
                  </input> */}
                  <div>
                    <p>
                      <a href="/">Conditions of Use</a>
                      and <a href="/">Privacy Notice.</a>
                    </p>
                  </div>
                  <div>
                    <p>
                      Don't have an account?
                      <a href="/register"> Sign up</a>
                    </p>
                  </div>
                </div>

                <input type="submit" className="butt" value="Submit" />
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="myRightCtn">
              <div className="box">
                {/* <img
                  src="https://blog.avilar.com/wp-content/uploads/2020/05/SkillsAssessment.jpg"
                  alt=""
                /> */}
                <header>ASSESSMENT</header>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>

                <input type="button" className="butt_out" value="Learn More" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
