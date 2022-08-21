import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid subtitle">
          <div className="container">
            <h1 className="text-center text-white"> Create Account </h1>
          </div>
        </div>

        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-8">
              <form
                action="{{ route('register') }}"
                method="POST"
                enctype="multipart/form-data"
              >
                {/* @csrf */}
                <div className="form-row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="small mb-1" for="inputName">
                        {" "}
                        Name
                      </label>
                      <input
                        className="form-control py-4 @error('name') is-invalid @enderror"
                        name="name"
                        // value="{{ old('name') }}"
                        id="inputName"
                        type="text"
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="small mb-1" for="inputEmailAddress">
                      Email
                    </label>
                    <input
                      className="form-control py-4 @error('email') is-invalid @enderror"
                      name="email"
                      // value="{{ old('email') }}"
                      id="inputEmailAddress"
                      type="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter email address"
                    />
                    {/* @error('name') */}
                    <span className="invalid-feedback" role="alert">
                      {/* <strong>{{ $message }}</strong> */}
                    </span>
                    {/* @enderror */}
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="small mb-1" for="inputPassword">
                        Password
                      </label>
                      <input
                        className="form-control py-4 @error('password') is-invalid @enderror"
                        name="password"
                        id="inputPassword"
                        type="password"
                        placeholder="Enter password"
                      />
                      <font id="error" color="red"></font>

                      {/* @error('password') */}
                      <span className="invalid-feedback" role="alert">
                        {/* <strong>{{ $message }}</strong> */}
                      </span>
                      {/* @enderror */}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="small mb-1" for="inputConfirmPassword">
                        Confirm Password
                      </label>
                      <input
                        className="form-control py-4"
                        id="inputConfirmPassword"
                        type="password"
                        placeholder="Confirm password"
                        name="password_confirmation"
                      />
                      <font id="cerror" color="red"></font>
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="small mb-1" for="inputPhone">
                        {" "}
                        Phone
                      </label>
                      <input
                        className="form-control py-4 @error('phone') is-invalid @enderror"
                        name="phone"
                        // value="{{ old('phone') }}"
                        id="inputPhone"
                        type="text"
                        placeholder="Enter Phone"
                      />
                      {/* @error('phone') */}
                      <span className="invalid-feedback" role="alert">
                        {/* <strong>{{ $message }}</strong> */}
                      </span>
                      {/* @enderror */}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="small mb-1" for="inputEmailAddress">
                      Address
                    </label>
                    <textarea
                      className="form-control @error('address') is-invalid @enderror"
                      name="address"
                      // value="{{ old('address') }}"
                      id="inputEmailAddress"
                    ></textarea>
                    {/* @error('address') */}
                    <span className="invalid-feedback" role="alert">
                      {/* <strong>{{ $message }}</strong> */}
                    </span>
                    {/* @enderror */}
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="small mb-1" for="inputPhone">
                        {" "}
                        Photo{" "}
                      </label>
                      <input
                        className="form-control-file py-4 @error('photo') is-invalid @enderror input_photo"
                        name="photo"
                        // value="{{ old('photo') }}"
                        id="inputPhone"
                        type="file"
                        placeholder="Enter Phone"
                      />

                      {/* @error('photo') */}
                      <span className="invalid-feedback" role="alert">
                        {/* <strong>{{ $message }}</strong> */}
                      </span>
                      {/* @enderror */}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <img
                        src=""
                        className="img-fluid show_photo d-inline-block"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                  <button
                    type="submit"
                    className="btn btn-secondary mainfullbtncolor btn-block"
                  >
                    {" "}
                    Create Account{" "}
                  </button>
                </div>
              </form>

              <div className=" mt-3 text-center ">
                <Link to={"../Login"}>Have an account? Go to login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
