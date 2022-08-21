import React, { Component } from "react";

class Itembybrand extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid subtitle">
          <div className="container">
            {/* <h1 className="text-center text-white"> Brand Name : {{$brand->name}} </h1> */}
          </div>
        </div>

        <div className="container mt-5">
          <div className="row mt-5">
            <div className="col">
              <div className="bbb_viewed_title_container">
                <h3 className="bbb_viewed_title"> Brand Category Name </h3>
                <div className="bbb_viewed_nav_container">
                  <div className="bbb_viewed_nav bbb_viewed_prev">
                    <i className="icofont-rounded-left"></i>
                  </div>
                  <div className="bbb_viewed_nav bbb_viewed_next">
                    <i className="icofont-rounded-right"></i>
                  </div>
                </div>
              </div>
              <div className="bbb_viewed_slider_container">
                <div className="owl-carousel owl-theme bbb_viewed_slider">
                  {/* @foreach($brand->items as $brand_item) */}
                  <div className="owl-item">
                    <div className="bbb_viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                      <div className="pad15">
                        <img
                          src="{{ asset($brand_item->photo)}}"
                          className="img-fluid"
                        />
                        <a
                          href="{{route('itemdetailpage',$brand_item->id)}}"
                          style={{ textDecoration: "none", color: "gray" }}
                        >
                          {/* <p className="text-truncate">{{$brand_item->name}}</p> */}
                          <p className="item-price">
                            {/* <strike>{{$brand_item->discount}} Ks </strike>  */}
                            {/* <span className="d-block">{{$brand_item->price}} Ks</span> */}
                          </p>
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
                          data-id="{{$brand_item->id}}"
                          data-name="{{$brand_item->name}}"
                          data-photo="{{$brand_item->photo}}"
                          data-price="{{$brand_item->price}}"
                          data-discount="{{$brand_item->discount}}"
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
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col">
              <div className="bbb_viewed_title_container">
                <h3 className="bbb_viewed_title"> Brand Category </h3>
                <div className="bbb_viewed_nav_container">
                  <div className="bbb_viewed_nav bbb_viewed_prev">
                    <i className="icofont-rounded-left"></i>
                  </div>
                  <div className="bbb_viewed_nav bbb_viewed_next">
                    <i className="icofont-rounded-right"></i>
                  </div>
                </div>
              </div>
              <div className="bbb_viewed_slider_container">
                <div className="owl-carousel owl-theme bbb_viewed_slider">
                  <div className="owl-item">
                    <div className="bbb_viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                      <div className="pad15">
                        <img
                          src="{{ asset('frontend/image/item/saisai_one.jpg')}}"
                          className="img-fluid"
                        />
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

                        <a
                          href="#"
                          className="addtocartBtn text-decoration-none"
                        >
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="owl-item">
                    <div className="bbb_viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                      <div className="pad15">
                        <img
                          src="{{ asset('frontend/image/item/saisai_three.jpg')}}"
                          className="img-fluid"
                        />
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

                        <a
                          href="#"
                          className="addtocartBtn text-decoration-none"
                        >
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="owl-item">
                    <div className="bbb_viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                      <div className="pad15">
                        <img
                          src="{{ asset('frontend/image/item/saisai_four.jpg')}}"
                          className="img-fluid"
                        />
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

                        <a
                          href="#"
                          className="addtocartBtn text-decoration-none"
                        >
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="owl-item">
                    <div className="bbb_viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                      <div className="pad15">
                        <img
                          src="{{ asset('frontend/image/item/giordano_one.jpg')}}"
                          className="img-fluid"
                        />
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

                        <a
                          href="#"
                          className="addtocartBtn text-decoration-none"
                        >
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="owl-item">
                    <div className="bbb_viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                      <div className="pad15">
                        <img
                          src="{{ asset('frontend/image/item/giordano_two.jpg')}}"
                          className="img-fluid"
                        />
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

                        <a
                          href="#"
                          className="addtocartBtn text-decoration-none"
                        >
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="owl-item">
                    <div className="bbb_viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                      <div className="pad15">
                        <img
                          src="{{ asset('frontend/image/item/giordano_three.jpg')}}"
                          className="img-fluid"
                        />
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

                        <a
                          href="#"
                          className="addtocartBtn text-decoration-none"
                        >
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="owl-item">
                    <div className="bbb_viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                      <div className="pad15">
                        <img
                          src="{{ asset('frontend/image/item/giordano_four.jpg')}}"
                          className="img-fluid"
                        />
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

                        <a
                          href="#"
                          className="addtocartBtn text-decoration-none"
                        >
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="owl-item">
                    <div className="bbb_viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                      <div className="pad15">
                        <img
                          src="{{ asset('frontend/image/item/apple_four.jpeg')}}"
                          className="img-fluid"
                        />
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

                        <a
                          href="#"
                          className="addtocartBtn text-decoration-none"
                        >
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="owl-item">
                    <div className="bbb_viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                      <div className="pad15">
                        <img
                          src="{{ asset('frontend/image/item/apple_four.jpeg')}}"
                          className="img-fluid"
                        />
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

                        <a
                          href="#"
                          className="addtocartBtn text-decoration-none"
                        >
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="owl-item">
                    <div className="bbb_viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                      <div className="pad15">
                        <img
                          src="{{ asset('frontend/image/item/apple_one.jpg')}}"
                          className="img-fluid"
                        />
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

                        <a
                          href="#"
                          className="addtocartBtn text-decoration-none"
                        >
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="owl-item">
                    <div className="bbb_viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                      <div className="pad15">
                        <img
                          src="{{ asset('frontend/image/item/apple_three.jpg')}}"
                          className="img-fluid"
                        />
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

                        <a
                          href="#"
                          className="addtocartBtn text-decoration-none"
                        >
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="owl-item">
                    <div className="bbb_viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                      <div className="pad15">
                        <img
                          src="{{ asset('frontend/image/item/apple_two.png')}}"
                          className="img-fluid"
                        />
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

                        <a
                          href="#"
                          className="addtocartBtn text-decoration-none"
                        >
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
