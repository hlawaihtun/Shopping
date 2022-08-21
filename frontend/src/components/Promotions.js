import React, { Component } from "react";

class Promotions extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid subtitle">
          <div className="container">
            <h1 className="text-center text-white"> Promotion Item </h1>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <div className="bbb_viewed_title_container">
                <h3 className="bbb_viewed_title"> Discount </h3>
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
                  @foreach($items as $item)
                  <div className="owl-item">
                    <div className="bbb_viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                      <div className="pad15">
                        <img
                          src="{{ asset($item->photo)}}"
                          className="img-fluid"
                        />
                        <a
                          href="{{route('itemdetailpage',$item->id)}}"
                          style={{ textDecoration: "none", color: "gray" }}
                        >
                          <p className="text-truncate">
                            {/* {{$item->name}} */}
                          </p>
                          <p className="item-price">
                            {/* <strike>{{$item->discount}} Ks </strike> 
                                  <span className="d-block">{{$item->price}} Ks</span> */}
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
          </div>
        </div>
      </div>
    );
  }
}

export default Promotions;
