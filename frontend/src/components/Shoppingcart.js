import React, { Component } from "react";

class Shoppingcart extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid subtitle">
          <div className="container">
            <h1 className="text-center text-white"> Your Shopping Cart </h1>
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
                    <th colspan="3"> Product </th>
                    <th colspan="3"> Qty </th>
                    <th> Price </th>
                    <th> Total </th>
                  </tr>
                </thead>
                <tbody id="shoppingcart_table"></tbody>
                <tfoot id="shoppingcart_tfoot">
                  <tr>
                    <td colspan="8 totla"></td>
                  </tr>
                  <tr>
                    <td colspan="5">
                      <textarea
                        className="form-control note"
                        id="notes"
                        placeholder="Any Request..."
                      ></textarea>
                    </td>
                    <td colspan="3">
                      {/* @role('Customer') */}
                      <button className="btn btn-secondary btn-block mainfullbtncolor checkoutbtn buy_now">
                        Check Out
                      </button>
                      {/* @else */}

                      <a
                        href="{{route('loginpage')}}"
                        className="btn btn-secondary btn-block mainfullbtncolor checkoutbtn buy_now"
                      >
                        Login To Check Out
                      </a>
                      {/* 
                @endrole */}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <div className="row mt-5 noneshoppingcart_div text-center">
            <div className="col-12">
              <h5 className="text-center cart_view"> </h5>
            </div>

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

export default Shoppingcart;
