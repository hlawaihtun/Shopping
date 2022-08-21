import React, { Component } from "react";

class Orderhistory extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid subtitle">
          <div className="container">
            <h1 className="text-center text-white"> Your Order Histories</h1>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row mt-5 shoppingcart_div">
            <div className="col-12">
              <a
                href="{{route('homepage')}}"
                className="btn mainfullbtncolor btn-secondary float-right px-3"
              >
                <i className="icofont-shopping-cart"></i>
                Continue Shopping
              </a>
            </div>
          </div>

          <div className="row mt-5 shoppingcart_div">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th> No </th>
                    <th>Date</th>
                    <th> Item Photo </th>
                    <th> Name </th>
                    <th> Brand </th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {/* @php $i=1; @endphp
            @foreach($orders as $order_history)

              @foreach($order_history->items as $order_detail)
              @php
                $subtotal = $order_detail->pivot->qty * $order_detail->price;
                $order_date = date('d-m-Y',strtotime($order_history->orderdate));
                $day = date('D',strtotime($order_history->orderdate))
              @endphp */}
                  <tr>
                    {/* <td>{{$i++}}</td>
                <td>{{$order_date}} < {{$day}} ></td>
                <td><img src="{{asset($order_detail->photo)}}" width="120px" height="100px" className="rounded circle"></td>
                <td>{{$order_detail->name}}</td>
                <td>{{$order_detail->brand->name}}</td>
                <td>{{$order_detail->price}} MMK</td>
                <td>{{$order_detail->pivot->qty}}</td>
                <td>{{$subtotal}} MMK</td> */}
                  </tr>
                  {/* @endforeach

            @endforeach */}
                </tbody>
                <tfoot>
                  <tr></tr>
                </tfoot>
              </table>
            </div>
          </div>

          <div className="row mt-5 noneshoppingcart_div text-center">
            <div className="col-12 mt-5 ">
              <a
                href="{{route('homepage')}}"
                className="btn btn-secondary mainfullbtncolor px-3"
              >
                <i className="icofont-shopping-cart"></i>
                Continue Shopping
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Orderhistory;
