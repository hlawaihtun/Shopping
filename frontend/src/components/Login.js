import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid subtitle">
          <div className="container">
            <h1 className="text-center text-white"> Login </h1>
          </div>
        </div>

        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-5">
              <form action="{{ route('login') }}" method="POST">
                {/* @csrf */}
                <div className="form-group">
                  <label className="small mb-1" for="inputEmailAddress">
                    Email
                  </label>
                  <input
                    className="form-control py-4 @error('email') is-invalid @enderror"
                    name="email"
                    // value="{{ old('email') }}"
                    id="inputEmailAddress"
                    type="email"
                    placeholder="Enter email address"
                  />
                  {/* @error('email') */}
                  <span className="invalid-feedback" role="alert">
                    {/* <strong>{{ $message }}</strong> */}
                  </span>
                  {/* @enderror */}
                </div>
                <div className="form-group">
                  <label className="small mb-1" for="inputPassword">
                    Password
                  </label>
                  <input
                    className="form-control py-4 @error('password') is-invalid @enderror"
                    // value="{{ old('password') }}"
                    id="inputPassword"
                    type="password"
                    placeholder="Enter password"
                    name="password"
                  />
                  {/* @error('password') */}
                  <span className="invalid-feedback" role="alert">
                    {/* <strong>{{ $message }}</strong> */}
                  </span>
                  {/* @enderror */}
                </div>
                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="rememberPasswordCheck"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      // for="rememberPasswordCheck"
                    >
                      Remember password
                    </label>
                  </div>

                  <a className="small" href="#">
                    Forgot Password?
                  </a>
                </div>
                <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                  <button
                    type="submit"
                    className="btn btn-secondary mainfullbtncolor btn-block"
                  >
                    Login
                  </button>
                </div>
              </form>

              <div className=" mt-3 text-center ">
                <Link to={"../Register"}>Need an account? Sign Up!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
