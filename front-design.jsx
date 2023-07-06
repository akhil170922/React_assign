import React, { Component } from "react";
import "./design-basic.css";
import { Link, Outlet } from "react-router-dom";
class DesignBasic extends Component {
  render() {
    return (
      <>
        <div className="grid grid-cols-3">
          <div className="brand  bg-black h-screen w-80">
            <h1 className="text-white text-center flex h-screen justify-center items-center text-[72px] font-Montserrat">
              Board.
            </h1>
          </div>
          <div className="signin col-span-2 bg-[#F5F5F5]">
            <h1 className="login text-[36px] font-bold flex pt-12 mt-12 ml-12 pl-12">
              Sign in
            </h1>
            <p className="para text-[16px] ml-12 pl-12">
              Sign in to your account
            </p>
            <br />
            <div className="thirdparty flex pl-12 ml-12">
              <div className="flex-intial w-64 bg-[#FFF] rounded-full py-4">
                <img src="./google-icon.jpg" alt="" />
                <span className="center pl-10">
                  <a href="./">Sign in with google</a>
                </span>
              </div>
              <div className="flex-intial w-64 bg-white rounded-full py-4">
                <span className="center pl-10">
                  <a href="./">Sign in with Apple ID</a>
                </span>
              </div>
            </div>
            <br />
            <div className="flex justify-center items-center">
              <div className="card rounded-none  w-80">
                <h2>Email address</h2>
                <input type="email" className="bg-[#ebebeb] rounded" />
                <br />
                <h2>Password</h2>
                <input type="password" className="bg-[#ebebeb] rounded" />
                <br />
                <br />
                <a href="./" className="text-[#0000f7]">
                  Forgot Password?
                </a>
                <br />
                <br />
                <button class="rounded-full bg-black text-[#fff] px-5 py-2">
                  <Link className="" to="/Dashboard">Sign in</Link>
                </button>
                <h2>
                  Don't have account?&nbsp;{" "}
                  <a href="./">
                    <span className="text-[#0000f7]">Register Here</span>
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <Outlet/>
      </>
    );
  }
}

export default DesignBasic;
