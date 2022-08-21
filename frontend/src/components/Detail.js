import React, { Component } from "react";

class Detail extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid subtitle">
          <div className="container">
            {/* <h1 className="text-center text-white"> Code Number : {{$itemdetail->codeno}} </h1> */}
          </div>
        </div>

        <div className="container">
          <nav aria-label="breadcrumb ">
            <ol className="breadcrumb bg-transparent">
              <li className="breadcrumb-item">
                <a
                  href="{{route('homepage')}}"
                  className="text-decoration-none secondarycolor"
                >
                  {" "}
                  Home{" "}
                </a>
              </li>
              <li className="breadcrumb-item">
                {/* <a href="{{route('homepage')}}" className="text-decoration-none secondarycolor"> {{$itemdetail->name}} </a> */}
              </li>

              <li className="breadcrumb-item active" aria-current="page">
                Item Detail
              </li>
            </ol>
          </nav>

          <div className="row mt-5">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <img src="{{ asset($itemdetail->photo)}}" className="img-fluid" />
            </div>

            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
              {/* <h4> {{$itemdetail->name}} </h4> */}

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

              <p>{/* {{$itemdetail->description}} */}</p>

              <p>
                <span className="text-uppercase "> Current Price : </span>
                {/* <span className="maincolor ml-3 font-weight-bolder"> {{$itemdetail->price}} Ks </span> */}
              </p>

              <p>
                <span className="text-uppercase "> Brand : </span>
                {/* <span className="ml-3"> <a href="" className="text-decoration-none text-muted"> {{$itemdetail->brand->name}} </a> </span> */}
              </p>

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
                data-id="{{$itemdetail->id}}"
                data-name="{{$itemdetail->name}}"
                data-photo="{{$itemdetail->photo}}"
                data-price="{{$itemdetail->price}}"
                data-discount="{{$itemdetail->discount}}"
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

          <div className="row mt-5">
            <div className="col-12">
              <h3> Related Item </h3>
              <hr />
            </div>

            {/* @foreach($relate_items as $relate_item)
      @if($relate_item->id != $itemdetail->id) */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 show_photo">
              <a
                href="{{route('itemdetailpage',$relate_item->id)}}"
                style={{ textDecoration: "none", color: "gray" }}
              >
                <img
                  src="{{ asset($relate_item->photo)}}"
                  className="img-fluid"
                  style={{ width: 300, height: 200 }}
                />
                {/* <p>Name : {{$relate_item->name}}</p> */}
              </a>
            </div>
            {/* @endif
      @endforeach */}
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
