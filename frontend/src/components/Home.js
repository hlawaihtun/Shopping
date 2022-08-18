import React, { Component } from "react";
import ac from "../frontend/image/banner/ac.jpg";
import giordano from "../frontend/image/banner/giordano.jpg";
import garnier from "../frontend/image/banner/garnier.jpg";
import category_one from "../frontend/image/category/category_one.png";
import category_two from "../frontend/image/category/category_two.png";
import category_three from "../frontend/image/category/category_three.png";
import category_four from "../frontend/image/category/category_four.png";
import category_five from "../frontend/image/category/category_five.png";
import category_six from "../frontend/image/category/category_six.png";
import category_seven from "../frontend/image/category/category_seven.png";
import category_eight from "../frontend/image/category/category_eight.jpg";
import saisai_one from "../frontend/image/item/saisai_one.jpg";
import saisai_two from "../frontend/image/item/saisai_two.jpg";
import saisai_three from "../frontend/image/item/saisai_three.jpg";
import saisai_four from "../frontend/image/item/saisai_four.jpg";
import giordano_one from "../frontend/image/item/giordano_one.jpg";
import giordano_two from "../frontend/image/item/giordano_two.jpg";
import giordano_three from "../frontend/image/item/giordano_three.jpg";
import giordano_four from "../frontend/image/item/giordano_four.jpg";
import apple_one from "../frontend/image/item/apple_one.jpg";
import apple_two from "../frontend/image/item/apple_two.png";
import apple_three from "../frontend/image/item/apple_three.jpg";
import apple_four from "../frontend/image/item/apple_four.jpeg";

class Home extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={ac} className="d-block w-100 bannerImg" alt="..." />
            </div>
            <div className="carousel-item">
              <img
                src={giordano}
                className="d-block w-100 bannerImg"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={garnier}
                className="d-block w-100 bannerImg"
                alt="..."
              />
            </div>
          </div>
        </div>

        <div className="container mt-5 px-5">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12 ">
              <div className="card categoryCard border-0 shadow-sm p-3 mb-5 rounded text-center">
                <img src={category_one} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text font-weight-bold text-truncate">
                    {" "}
                    Smart Home{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12 ">
              <div className="card categoryCard border-0 shadow-sm p-3 mb-5 rounded text-center">
                <img src={category_two} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text font-weight-bold text-truncate">
                    {" "}
                    Grocery{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12 ">
              <div className="card categoryCard border-0 shadow-sm p-3 mb-5 rounded text-center">
                <img src={category_three} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text font-weight-bold text-truncate">
                    {" "}
                    Cosmetic{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12 ">
              <div className="card categoryCard border-0 shadow-sm p-3 mb-5 rounded text-center">
                <img src={category_four} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text font-weight-bold text-truncate">
                    {" "}
                    Stationery{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12 ">
              <div className="card categoryCard border-0 shadow-sm p-3 mb-5 rounded text-center">
                <img src={category_five} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text font-weight-bold text-truncate">
                    {" "}
                    Electronic Devices{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12 ">
              <div className="card categoryCard border-0 shadow-sm p-3 mb-5 rounded text-center">
                <img src={category_six} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text font-weight-bold text-truncate">
                    {" "}
                    Furniture{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12 ">
              <div className="card categoryCard border-0 shadow-sm p-3 mb-5 rounded text-center">
                <img src={category_seven} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text font-weight-bold text-truncate">
                    {" "}
                    Kitchen Apperience{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12 ">
              <div className="card categoryCard border-0 shadow-sm p-3 mb-5 rounded text-center">
                <img src={category_eight} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text font-weight-bold text-truncate">
                    {" "}
                    Health Care{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="whitespace d-xl-block d-lg-block d-md-none d-sm-none d-none"></div>

          <div className="row mt-5">
            <h1> All Item </h1>
          </div>

          <div className="row">
            <div className="col-12">
              <div
                className="MultiCarousel"
                data-items="1,3,5,6"
                data-slide="1"
                id="MultiCarousel"
                data-interval="1000"
              >
                @foreach($items as $item)
                <div className="MultiCarousel-inner">
                  <div className="item">
                    <div className="pad15">
                      <img
                        src="{{ asset($item->photo)}}"
                        className="img-fluid"
                      />
                      <a
                        href="{{route('itemdetailpage',$item->id)}}"
                        style={{ textDecoration: "none", color: "gray" }}
                      >
                        {/* <p className="text-truncate">{{$item->name}}</p>
                            <p className="item-price">
                              @if($item->discount > 0)
                              <strike>{{$item->discount}} Ks </strike> 
                              @endif
                              <span className="d-block">{{$item->price}} Ks</span>
                            </p> */}
                      </a>

                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star-half"></i>
                          </li>
                        </ul>
                      </div>

                      {/* @if(Auth()->user())
                @php $role_name = Auth::user()->getRoleNames();
                
                @endphp
                @if($role_name[0] == 'Admin') */}
                      <a
                        href="javascript:void(0)"
                        className="btn btn-secondary btn-block mainfullbtncolor checkoutbtn buy_now"
                      >
                        You are not Customer
                      </a>
                      {/* @else */}
                      <a
                        href="javascript:void(0)"
                        className="addtocartBtn text-decoration-none btn_add_to_cart"
                        data-id="{{$item->id}}"
                        data-name="{{$item->name}}"
                        data-photo="{{$item->photo}}"
                        data-price="{{$item->price}}"
                        data-discount="{{$item->discount}}"
                        data-user_id="{{Auth::id()}}"
                      >
                        Add to Cart
                      </a>
                      {/* @endif
                @else */}

                      <a
                        href="{{route('loginpage')}}"
                        className="btn btn-secondary btn-block mainfullbtncolor checkoutbtn buy_now"
                      >
                        Login To Check Out
                      </a>
                      {/* @endif */}
                    </div>
                  </div>
                </div>
                {/* @endforeach */}
                {/* <button className="btn btnMain leftLst"><</button>
                <button className="btn btnMain rightLst">></button> */}
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <h1> Flash Sale </h1>
          </div>

          <div className="row">
            <div className="col-12">
              <div
                className="MultiCarousel"
                data-items="1,3,5,6"
                data-slide="1"
                id="MultiCarousel"
                data-interval="1000"
              >
                <div className="MultiCarousel-inner">
                  <div className="item">
                    <div className="pad15">
                      <img src={saisai_one} className="img-fluid" />
                      <p className="text-truncate">Multi Item Carousel</p>
                      <p className="item-price">
                        <strike>250,000 Ks </strike>
                        <span className="d-block">230,000 Ks</span>
                      </p>

                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star-half"></i>
                          </li>
                        </ul>
                      </div>

                      <a href="#" className="addtocartBtn text-decoration-none">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <img src={saisai_two} className="img-fluid" />
                      <p className="text-truncate">Multi Item Carousel</p>
                      <p className="item-price">
                        <span className="d-block">230,000 Ks </span>
                      </p>

                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star-half"></i>
                          </li>
                        </ul>
                      </div>

                      <a href="#" className="addtocartBtn text-decoration-none">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <img src={saisai_three} className="img-fluid" />
                      <p className="text-truncate">Multi Item Carousel</p>
                      <p className="item-price">
                        <strike>250,000 Ks </strike>
                        <span className="d-block">230,000 Ks </span>
                      </p>

                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star-half"></i>
                          </li>
                        </ul>
                      </div>

                      <a href="#" className="addtocartBtn text-decoration-none">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <img src={saisai_four} className="img-fluid" />
                      <p className="text-truncate">Multi Item Carousel</p>
                      <p className="item-price">
                        <strike>250,000 Ks </strike>
                        <span className="d-block">230,000 Ks </span>
                      </p>

                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star-half"></i>
                          </li>
                        </ul>
                      </div>

                      <a href="#" className="addtocartBtn text-decoration-none">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <img src={giordano_one} className="img-fluid" />
                      <p className="text-truncate">Multi Item Carousel</p>
                      <p className="item-price">
                        <strike>250,000 Ks </strike>
                        <span className="d-block">230,000 Ks </span>
                      </p>

                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star-half"></i>
                          </li>
                        </ul>
                      </div>

                      <a href="#" className="addtocartBtn text-decoration-none">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <img src={giordano_two} className="img-fluid" />
                      <p className="text-truncate">Multi Item Carousel</p>
                      <p className="item-price">
                        <span className="d-block">230,000 Ks </span>
                      </p>

                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star-half"></i>
                          </li>
                        </ul>
                      </div>

                      <a href="#" className="addtocartBtn text-decoration-none">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <img src={giordano_three} className="img-fluid" />
                      <p className="text-truncate">Multi Item Carousel</p>
                      <p className="item-price">
                        <span className="d-block">230,000 Ks </span>
                      </p>

                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star-half"></i>
                          </li>
                        </ul>
                      </div>

                      <a href="#" className="addtocartBtn text-decoration-none">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <img src={giordano_four} className="img-fluid" />
                      <p className="text-truncate">Multi Item Carousel</p>
                      <p className="item-price">
                        <strike>250,000 Ks </strike>
                        <span className="d-block">230,000 Ks </span>
                      </p>

                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star-half"></i>
                          </li>
                        </ul>
                      </div>

                      <a href="#" className="addtocartBtn text-decoration-none">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <img src={apple_four} className="img-fluid" />
                      <p className="text-truncate">Multi Item Carousel</p>
                      <p className="item-price">
                        <span className="d-block">230,000 Ks </span>
                      </p>

                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star-half"></i>
                          </li>
                        </ul>
                      </div>

                      <a href="#" className="addtocartBtn text-decoration-none">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <img src={apple_one} className="img-fluid" />
                      <p className="text-truncate">Multi Item Carousel</p>
                      <p className="item-price">
                        <strike>250,000 Ks </strike>
                        <span className="d-block">230,000 Ks</span>
                      </p>

                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star-half"></i>
                          </li>
                        </ul>
                      </div>

                      <a href="#" className="addtocartBtn text-decoration-none">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <img src={apple_three} className="img-fluid" />
                      <p className="text-truncate">Multi Item Carousel</p>
                      <p className="item-price">
                        <span className="d-block">230,000 Ks </span>
                      </p>

                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star-half"></i>
                          </li>
                        </ul>
                      </div>

                      <a href="#" className="addtocartBtn text-decoration-none">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <img src={apple_two} className="img-fluid" />
                      <p className="text-truncate">Multi Item Carousel</p>
                      <p className="item-price">
                        <strike>250,000 Ks </strike>
                        <span className="d-block">230,000 Ks </span>
                      </p>

                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star-half"></i>
                          </li>
                        </ul>
                      </div>

                      <a href="#" className="addtocartBtn text-decoration-none">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
                {/* <button className="btn btnMain leftLst"><</button>
                <button className="btn btnMain rightLst">></button> */}
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <h1> Fresh Picks </h1>
          </div>

          <div className="row">
            <div className="col-12">
              <div
                className="MultiCarousel"
                data-items="1,3,5,6"
                data-slide="1"
                id="MultiCarousel"
                data-interval="1000"
              >
                <div className="MultiCarousel-inner">
                  <div className="item">
                    <div className="pad15">
                      <img src={saisai_one} className="img-fluid" />
                      <p className="text-truncate">Multi Item Carousel</p>
                      <p className="item-price">
                        <strike>250,000 Ks </strike>
                        <span className="d-block">230,000 Ks</span>
                      </p>

                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star-half"></i>
                          </li>
                        </ul>
                      </div>

                      <a href="#" className="addtocartBtn text-decoration-none">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <img src={saisai_two} className="img-fluid" />
                      <p className="text-truncate">Multi Item Carousel</p>
                      <p className="item-price">
                        <span className="d-block">230,000 Ks </span>
                      </p>

                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star-half"></i>
                          </li>
                        </ul>
                      </div>

                      <a href="#" className="addtocartBtn text-decoration-none">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <img src={saisai_three} className="img-fluid" />
                      <p className="text-truncate">Multi Item Carousel</p>
                      <p className="item-price">
                        <strike>250,000 Ks </strike>
                        <span className="d-block">230,000 Ks </span>
                      </p>

                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star-half"></i>
                          </li>
                        </ul>
                      </div>

                      <a href="#" className="addtocartBtn text-decoration-none">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <img src={saisai_four} className="img-fluid" />
                      <p className="text-truncate">Multi Item Carousel</p>
                      <p className="item-price">
                        <strike>250,000 Ks </strike>
                        <span className="d-block">230,000 Ks </span>
                      </p>

                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star-half"></i>
                          </li>
                        </ul>
                      </div>

                      <a href="#" className="addtocartBtn text-decoration-none">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <img src={giordano_one} className="img-fluid" />
                      <p className="text-truncate">Multi Item Carousel</p>
                      <p className="item-price">
                        <strike>250,000 Ks </strike>
                        <span className="d-block">230,000 Ks </span>
                      </p>

                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star-half"></i>
                          </li>
                        </ul>
                      </div>

                      <a href="#" className="addtocartBtn text-decoration-none">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <img src={giordano_two} className="img-fluid" />
                      <p className="text-truncate">Multi Item Carousel</p>
                      <p className="item-price">
                        <span className="d-block">230,000 Ks </span>
                      </p>

                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star-half"></i>
                          </li>
                        </ul>
                      </div>

                      <a href="#" className="addtocartBtn text-decoration-none">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <img src={giordano_three} className="img-fluid" />
                      <p className="text-truncate">Multi Item Carousel</p>
                      <p className="item-price">
                        <span className="d-block">230,000 Ks </span>
                      </p>

                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star-half"></i>
                          </li>
                        </ul>
                      </div>

                      <a href="#" className="addtocartBtn text-decoration-none">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <img src={giordano_four} className="img-fluid" />
                      <p className="text-truncate">Multi Item Carousel</p>
                      <p className="item-price">
                        <strike>250,000 Ks </strike>
                        <span className="d-block">230,000 Ks </span>
                      </p>

                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star-half"></i>
                          </li>
                        </ul>
                      </div>

                      <a href="#" className="addtocartBtn text-decoration-none">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <img src={apple_four} className="img-fluid" />
                      <p className="text-truncate">Multi Item Carousel</p>
                      <p className="item-price">
                        <span className="d-block">230,000 Ks </span>
                      </p>

                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star-half"></i>
                          </li>
                        </ul>
                      </div>

                      <a href="#" className="addtocartBtn text-decoration-none">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <img src={apple_one} className="img-fluid" />
                      <p className="text-truncate">Multi Item Carousel</p>
                      <p className="item-price">
                        <strike>250,000 Ks </strike>
                        <span className="d-block">230,000 Ks</span>
                      </p>

                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star-half"></i>
                          </li>
                        </ul>
                      </div>

                      <a href="#" className="addtocartBtn text-decoration-none">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <img src={apple_three} className="img-fluid" />
                      <p className="text-truncate">Multi Item Carousel</p>
                      <p className="item-price">
                        <span className="d-block">230,000 Ks </span>
                      </p>

                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star-half"></i>
                          </li>
                        </ul>
                      </div>

                      <a href="#" className="addtocartBtn text-decoration-none">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <img src={apple_two} className="img-fluid" />
                      <p className="text-truncate">Multi Item Carousel</p>
                      <p className="item-price">
                        <strike>250,000 Ks </strike>
                        <span className="d-block">230,000 Ks </span>
                      </p>

                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="bx bxs-star-half"></i>
                          </li>
                        </ul>
                      </div>

                      <a href="#" className="addtocartBtn text-decoration-none">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
                {/* <button className="btn btnMain leftLst"><</button>
                <button className="btn btnMain rightLst">></button> */}
              </div>
            </div>
          </div>

          <div className="whitespace d-xl-block d-lg-block d-md-none d-sm-none d-none"></div>

          <div className="row mt-5">
            <h1> Top Brand Stores </h1>
          </div>

          <section className="customer-logos slider mt-5">
            {/* @foreach($brands as $brand) */}
            <div className="slide">
              <a href="{{route('itemsbybrandpage',$brand->id)}}">
                <img
                  src="{{ asset($brand->photo)}}"
                  style={{ height: 120 }}
                  width="120px"
                />
              </a>
            </div>
            {/* @endforeach */}
          </section>

          <div className="whitespace d-xl-block d-lg-block d-md-none d-sm-none d-none"></div>
        </div>
      </div>
    );
  }
}

export default Home;
