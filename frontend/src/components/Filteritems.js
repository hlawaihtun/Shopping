import React, { Component } from "react";

class Filteritems extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid subtitle">
          <div className="container">
            {/* <h1 className="text-center text-white"> Subcategory name : {{$item_subcategories->name}} </h1> */}
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
                <a
                  href="{{route('homepage')}}"
                  className="text-decoration-none secondarycolor"
                >
                  {" "}
                  Category{" "}
                </a>
              </li>
              <li className="breadcrumb-item">
                {/* <a href="{{route('homepage')}}" className="text-decoration-none secondarycolor category_name"> {{$item_subcategories->category->name}} </a> */}
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {/* {{$item_subcategories->name}} */}
              </li>
            </ol>
          </nav>

          <div className="row mt-5">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              {/* <div className="accordion" id="accordionExample">  */}

              <ul className="list-group">
                {/* <div className="card">  */}
                {/* @foreach($categories as $key=>$category) */}

                {/* {{-- category{{$key}} ka bar twat so yin category ko click lote lite yin click lite tat category ko active phit say chin lo at twat ko loop htal mar so tot className name tway ka tu nay mar ma thu aung array room number nat catch htar tar--}} */}

                <li
                  className="list-group-item category{{$key}} category_select  @if($category->id == $item_subcategories->category_id)
              {{'active'}} @endif"
                  data-array="{{$categories}}"
                  data-key="{{$key}}"
                  data-id="{{$category->id}}"
                  data-target="#collapse{{$key}}"
                  data-auth="{{Auth::check()? Auth::user()->getRoleNames()[0]:'unknown'}}"
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  <a
                    href="javascript:void(0)"
                    className="text-decoration-none secondarycolor"
                  >
                    {/* {{$category->name}} */}
                  </a>
                </li>

                {/* {{-- <div id="collapse{{$key}}" className="collapse collapse_show{{$key}}"  data-parent="#accordionExample"> */}
                <div className="card-body">
                  <ul className="list-group">
                    {/* @foreach($category->subcategories as $subcategory) */}
                    <li className="list-group-item ">
                      <a
                        href="javascript:void(0)"
                        className="text-decoration-none secondarycolor"
                      >
                        {/* {{$subcategory->name}} */}
                      </a>
                    </li>
                    {/* @endforeach */}
                  </ul>
                </div>
                {/* </div> --}} */}
                {/* @endforeach
        <!-- </div> --> */}
              </ul>

              {/* <!-- </div> --> */}
            </div>

            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
              <div className="row show_item_by_category">
                {/* <!-- subcategory ka nay item ko rs chate htar tar ko loop pat pay mal because item ka a myar kyi par lar lo but ctrl ka nay subcategory find so p ta khaung bal pote lite tal but item ko htute lo loop pat pay pho lo tar--> */}
                {/* @foreach($item_subcategories->items as $item) */}
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card pad15 mb-3">
                    <img
                      src="{{ asset($item->photo)}}"
                      className="card-img-top"
                      alt="..."
                    />

                    <div className="card-body text-center">
                      <a
                        href="{{route('itemdetailpage',$item->id)}}"
                        style={{ textDecoration: "none", color: "gray" }}
                      >
                        {/* <h5 className="card-title text-truncate">{{$item->name}}</h5> */}

                        <p className="item-price">
                          {/* <strike>{{$item->discount}} Ks </strike>  */}
                          {/* <span className="d-block">{{$item->price}} Ks</span> */}
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
              </div>

              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                  <li className="page-item disabled">
                    <a
                      className="page-link"
                      href="#"
                      tabindex="-1"
                      aria-disabled="true"
                    >
                      <i className="icofont-rounded-left"></i>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="icofont-rounded-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Filteritems;
