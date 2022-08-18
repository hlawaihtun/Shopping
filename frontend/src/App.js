import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo_big from "./frontend/logo/logo_big.jpg";
import logo_med from "./frontend/logo/logo_med.jpg";
import logo from "./frontend/logo/logo.jpg";
import download from "./frontend/image/download.png";

import apple1 from "./frontend/favicon/apple-icon-57x57.png";
import apple2 from "./frontend/favicon/apple-icon-60x60.png";
import apple3 from "./frontend/favicon/apple-icon-72x72.png";
import apple4 from "./frontend/favicon/apple-icon-76x76.png";
import apple5 from "./frontend/favicon/apple-icon-114x114.png";
import apple6 from "./frontend/favicon/apple-icon-120x120.png";
import apple7 from "./frontend/favicon/apple-icon-144x144.png";
import apple8 from "./frontend/favicon/apple-icon-120x120.png";
import adroid_icon from "./frontend/favicon/android-icon-192x192.png";
import favicon1 from "./frontend/favicon/favicon-32x32.png";
import favicon2 from "./frontend/favicon/favicon-96x96.png";
import favicon3 from "./frontend/favicon/favicon-16x16.png";
import icofont from "./frontend/icon/icofont/icofont.min.css";
import boxicons from "./frontend/icon/boxicons-master/css/boxicons.min.css";
import font from "./frontend/css/font.css";
import style from "./frontend/css/style.css";
import media_query from "./frontend/css/media_query.css";
import bootstrap from "./frontend/css/bootstrap.min.css";
import owl_carousel from "./frontend/css/owl.carousel.css";
import owl_theme from "./frontend/css/owl.theme.default.css";

import logo_med_trans from "./frontend/logo/logo_med_trans.png";
import logo_wh_transparent from "./frontend/logo/logo_wh_transparent.png";

import Home from "./components/Home.js";
import Login from "./components/Login.js";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <link rel="icon" sizes="57x57" href={apple1} />
          <link rel="apple-touch-icon" sizes="60x60" href={apple1} />
          <link rel="apple-touch-icon" sizes="72x72" href={apple2} />
          <link rel="apple-touch-icon" sizes="76x76" href={apple3} />
          <link rel="apple-touch-icon" sizes="114x114" href={apple4} />
          <link rel="apple-touch-icon" sizes="120x120" href={apple5} />
          <link rel="apple-touch-icon" sizes="144x144" href={apple6} />
          <link rel="apple-touch-icon" sizes="152x152" href={apple7} />
          <link rel="apple-touch-icon" sizes="180x180" href={apple8} />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href={adroid_icon}
          />
          <link rel="icon" type="image/png" sizes="32x32" href={favicon1} />
          <link rel="icon" type="image/png" sizes="96x96" href={favicon2} />
          <link rel="icon" type="image/png" sizes="16x16" href={favicon3} />

          <link rel="stylesheet" type="text/css" href={icofont} />

          <link rel="stylesheet" type="text/css" href={boxicons} />

          <link rel="stylesheet" type="text/css" href={font} />
          <link rel="stylesheet" type="text/css" href={style} />
          <link rel="stylesheet" type="text/css" href={media_query} />

          <link rel="stylesheet" type="text/css" href={bootstrap} />

          <link rel="stylesheet" type="text/css" href={owl_carousel} />
          <link rel="stylesheet" type="text/css" href={owl_theme}></link>

          <div className="container-fluid">
            <div className="row shadow-sm p-3 bg-white rounded d-flex align-items-center">
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 order-1">
                <span className="d-xl-none d-lg-none d-md-inline d-sm-inline d-inline  p-1 navslidemenu">
                  <i className="icofont-navigation-menu"></i>
                </span>
                <img
                  src={logo_big}
                  className="img-fluid d-xl-inline d-lg-inline d-md-none d-sm-none d-none"
                />

                <img
                  src={logo_med}
                  className="img-fluid d-xl-none d-lg-none d-md-inline d-sm-none d-none"
                  style={{ width: 100 }}
                />

                <img
                  src={logo}
                  className="img-fluid d-xl-none d-lg-none d-md-none d-sm-inline d-inline pl-2"
                  style={{ width: 30 }}
                />
              </div>

              <div className="col-xl-6 col-lg-6 col-md-4 col-sm-2 col-2 order-xl-2 order-lg-2 order-md-3 order-sm-3 order-3">
                <div className="row">
                  <div className="col-lg-8 col-2 ">
                    <div className="has-search d-xl-block d-lg-block d-none ">
                      <div className="input-group">
                        <input
                          className="form-control pl-4 border-right-0 border"
                          type="search"
                          placeholder="Search"
                          id=""
                        />
                        <span className="input-group-append searchBtn">
                          <div className="input-group-text bg-transparent">
                            <i className="icofont-search"></i>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-10">
                    {/* @guest */}
                    <span className="float-right d-xl-block d-lg-block d-md-block d-none">
                      <a
                        href="Login"
                        className="text-decoration-none loginLink"
                      >
                        {" "}
                        Login{" "}
                      </a>{" "}
                      |{" "}
                      <a href="" className="text-decoration-none loginLink">
                        {" "}
                        Sign-up{" "}
                      </a>
                    </span>
                    {/* @else */}
                    <a
                      id="navbarDropdown"
                      className="loginLink text-decoration-none dropdown-toggle"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      v-pre="true"
                    >
                      {/* {{ Auth::user()->name }} */}
                    </a>
                    <div className="dropdown-menu">
                      <a href="" className="dropdown-item">
                        Profile
                      </a>

                      <a
                        href="{{route('order_detail')}}"
                        className="dropdown-item"
                      >
                        Order History
                      </a>

                      {/* <a
                    className="dropdown-item btn_logout"
                    href="{{ route('logout') }}"
                    onClick="event.preventDefault();
                    document.getElementById('logout-form').submit();"
                  >
                    {{ __('Logout') }}
                  </a> */}

                      <form
                        id="logout-form"
                        action="{{ route('logout') }}"
                        method="POST"
                        className="d-none"
                      >
                        @csrf
                      </form>
                    </div>
                    {/* @endguest */}
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 order-xl-3 order-lg-3 order-md-4 order-sm-4 order-4 text-right">
                <div className="d-xl-none d-lg-none d-md-none d-sm-inline d-inline searchiconBtn mr-2">
                  <i className="icofont-search"></i>
                </div>

                <a
                  href="{{route('shoppingcartpage')}}"
                  className="text-decoration-none d-xl-inline d-lg-inline d-md-inline d-sm-none d-none shoppingcartLink"
                >
                  <i className="icofont-shopping-cart"></i>
                  <span className="badge badge-pill badge-light badge-notify cartNotistyle cartNoti">
                    {" "}
                    0{" "}
                  </span>
                  <span className="price"> </span>
                </a>

                <a href="">
                  <img
                    src={download.png}
                    className="img-fluid d-xl-inline d-lg-inline d-md-none d-sm-none d-none"
                    style={{ width: 150 }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container subNav d-xl-block d-lg-block d-none my-3">
          <div className="row align-items-center">
            <div className="col-3 align-items-center">
              <p className="d-inline pr-3"> Shop By </p>

              <div className="dropdown d-inline-block">
                <a
                  className="nav-link text-decoration-none text-dark font-weight-bold d-block"
                  href="javascript:void(0)"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="mr-2"> Category </span>
                  <i className="icofont-rounded-down pt-2"></i>
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  @foreach($categories as $category)
                  <li className="dropdown-submenu">
                    <a className="dropdown-item" href="javascript:void(0)">
                      {/* {{$category->name}} */}
                      <i className="icofont-rounded-right float-right"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <h6 className="dropdown-header">
                        {/* {{$category->name}} */}
                      </h6>
                      {/* @foreach($category->subcategories as $category_subcategory) */}
                      {/* <li><a className="dropdown-item" href="{{route('filteritemspage',$category_subcategory->id)}}">{{$category_subcategory->name}}</a></li> */}

                      {/* @endforeach */}
                    </ul>
                  </li>
                  <div className="dropdown-divider"></div>
                  {/* @endforeach */}
                </ul>
              </div>
            </div>

            <div className="col-3">
              <a
                href="{{route('promotionspage')}}"
                className="text-decoration-none text-dark font-weight-bold"
              >
                {" "}
                Promotions{" "}
              </a>
            </div>
            <div className="col-3">
              <div className="hov-dropdown d-inline-block">
                <a
                  className="text-decoration-none text-dark font-weight-bold"
                  href="#"
                  id="navbarDropdown2"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="mr-2"> Merchants </span>
                  <i className="icofont-rounded-down pt-2"></i>
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown2"
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="hov-dropdown d-inline-block">
                <a
                  className="text-decoration-none text-dark font-weight-bold"
                  href="#"
                  id="navbarDropdown2"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="mr-2"> Services </span>
                  <i className="icofont-rounded-down pt-2"></i>
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown2"
                >
                  <a className="dropdown-item" href="#">
                    Help Center
                  </a>
                  <div className="dropdown-divider"></div>

                  <a className="dropdown-item" href="#">
                    Order
                  </a>
                  <div className="dropdown-divider"></div>

                  <a className="dropdown-item" href="#">
                    Shipping & Delivery
                  </a>
                  <div className="dropdown-divider"></div>

                  <a className="dropdown-item" href="#">
                    Payment
                  </a>
                  <div className="dropdown-divider"></div>

                  <a className="dropdown-item" href="#">
                    Returns & Refunds
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="mySidebar" className="sidebar">
          <div className="row">
            <div className="col-10">
              <img
                src={logo_med_trans}
                className="img-fluid"
                style={{ width: 100 }}
              />
            </div>
            <div className="col-2">
              <a
                href="javascript:void(0)"
                className="closebtn text-decoration-none"
              >
                <i className="icofont-close-line"></i>
              </a>
            </div>
          </div>

          <div className="mt-3">
            <p className="text-muted ml-4"> Shop By </p>
            <a
              data-toggle="collapse"
              href="#category"
              role="button"
              aria-expanded="false"
              aria-controls="category"
            >
              Category
              <i className="icofont-rounded-down float-right mr-3"></i>
            </a>

            <div
              className="collapse sidebardropdown_container_category mt-3"
              id="category"
            >
              <a href="" className="py-2">
                {" "}
                Category One{" "}
              </a>
              <a href="" className="py-2">
                {" "}
                Category Two{" "}
              </a>
              <a href="" className="py-2">
                {" "}
                Category Three{" "}
              </a>
              <a href="" className="py-2">
                {" "}
                Category Four{" "}
              </a>
              <a href="" className="py-2">
                {" "}
                Category Five{" "}
              </a>
            </div>

            <a href="#"> Poromotion </a>

            <a
              data-toggle="collapse"
              href="#brand"
              role="button"
              aria-expanded="false"
              aria-controls="brand"
            >
              Merchants
              <i className="icofont-rounded-down float-right mr-3"></i>
            </a>

            <div
              className="collapse sidebardropdown_container_category mt-3"
              id="brand"
            >
              <a href="" className="py-2">
                {" "}
                Brand One{" "}
              </a>
              <a href="" className="py-2">
                {" "}
                Brand Two{" "}
              </a>
              <a href="" className="py-2">
                {" "}
                Brand Three{" "}
              </a>
              <a href="" className="py-2">
                {" "}
                Brand Four{" "}
              </a>
              <a href="" className="py-2">
                {" "}
                Brand Five{" "}
              </a>
            </div>

            <a
              data-toggle="collapse"
              href="#service"
              role="button"
              aria-expanded="false"
              aria-controls="service"
            >
              Service
              <i className="icofont-rounded-down float-right mr-3"></i>
            </a>

            <div
              className="collapse sidebardropdown_container_category mt-3"
              id="service"
            >
              <a href="" className="py-2">
                {" "}
                Help Center{" "}
              </a>
              <a href="" className="py-2">
                {" "}
                Order{" "}
              </a>
              <a href="" className="py-2">
                {" "}
                Shipping & Delivery{" "}
              </a>
              <a href="" className="py-2">
                {" "}
                Payment{" "}
              </a>
              <a href="" className="py-2">
                {" "}
                Returns & Refunds{" "}
              </a>
            </div>

            <a href="{{route('loginpage')}}"> Login | Signup</a>

            <a href="#">
              {" "}
              Cart [ <span className="cartNoti"> 1 </span> ]{" "}
            </a>

            <img
              src={download}
              className="img-fluid ml-2 text-center"
              style={{ width: 150 }}
            />

            <p className="text-white ml-3">
              {" "}
              Copyright &copy;{" "}
              <img
                src={logo_wh_transparent}
                style={{ width: 20, height: 20 }}
              />{" "}
              2019{" "}
            </p>
          </div>
        </div>
        {/* <Routes>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes> */}
        <Home></Home>
        <div className="container-fluid bg-light p-5 align-content-center align-items-center mt-5">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="row">
                <div className="col-md-4">
                  <i className="icofont-fast-delivery serviceIcon maincolor"></i>
                </div>

                <div className="col-md-8">
                  <h6>Door to Door Delivery</h6>
                  <p className="text-muted" style={{ fontSize: 12 }}>
                    On-time Delivery
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="row">
                <div className="col-md-4">
                  <i className="icofont-headphone-alt-2 serviceIcon maincolor"></i>
                </div>

                <div className="col-md-8">
                  <h6> Customer Service </h6>
                  <p className="text-muted" style={{ fontSize: 12 }}>
                    {" "}
                    09-779-999-915 ၊ <br /> 09-779-999-913{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="row">
                <div className="col-md-4">
                  <i className="bx bx-undo serviceIcon maincolor"></i>
                </div>

                <div className="col-md-8">
                  <h6> 100% satisfaction </h6>
                  <p className="text-muted" style={{ fontSize: 12 }}>
                    {" "}
                    3 days return{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="row">
                <div className="col-md-4">
                  <i className="icofont-credit-card serviceIcon maincolor"></i>
                </div>

                <div className="col-md-8">
                  <h6> Cash on Delivery </h6>
                  <p className="text-muted" style={{ fontSize: 12 }}>
                    {" "}
                    Door to Door Service{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="whitespace d-xl-block d-lg-block d-md-none d-sm-none d-none"></div>

        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <h1> News Letter </h1>
              <p>
                Subscribe to our newsletter and get 10% off your first purchase
              </p>
            </div>

            <div className="offset-2 col-8 offset-2 mt-5">
              <form>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg px-5 py-3"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    style={{
                      borderTopLeftRadius: "15rem",
                      borderBottomLeftRadius: "15rem",
                    }}
                  />

                  <div className="input-group-append">
                    <button
                      className="btn btn-secondary subscribeBtn"
                      type="button"
                      id="button-addon2"
                    >
                      {" "}
                      Subscribe{" "}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="whitespace d-xl-block d-lg-block d-md-none d-sm-none d-none"></div>

        <footer className="py-3 mt-5">
          <div className="container">
            <div className="text-center pb-3">
              <a
                href="#myPage"
                title="To Top"
                className="text-white to_top text-decoration-none"
              >
                <i className="icofont-rounded-up" style={{ fontSize: 20 }}></i>
              </a>
            </div>
            <p className="m-0 text-center text-white">
              Copyright &copy;{" "}
              <img
                src={logo_wh_transparent}
                style={{ width: 30, height: 30 }}
              />{" "}
              2019
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
