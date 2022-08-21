import React, { Component, useEffect } from "react";
import ac from "../frontend/image/banner/ac.jpg";
import giordano from "../frontend/image/banner/giordano.jpg";
import garnier from "../frontend/image/banner/garnier.jpg";
import axiosInstance from "../api_service/axiosInstance";

function Home() {
  const [items, setItems] = React.useState([]);
  const [meta, setMeta] = React.useState({ links: [] });

  useEffect(() => {
    fetchUrl("/api/items");
  }, []);

  const fetchUrl = (url) => {
    axiosInstance.get(url).then((resp) => {
      const response = resp.data;
      setItems(response.data);
      setMeta({
        currentPage: response.current_page,
        links: response.links.filter(
          (link) =>
            !(link.label.includes("Next") || link.label.includes("Previous"))
        ),
        total: response.total,
        prevPageUrl: response.prev_page_url,
        nextPageUrl: response.next_page_url,
      });
    });
  };

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
            <img src={giordano} className="d-block w-100 bannerImg" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={garnier} className="d-block w-100 bannerImg" alt="..." />
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <h1> Items </h1>
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
              {items.map((item) => {
                return (
                  <div className="item" key={item.id}>
                    <div className="pad15">
                      <img
                        src={`http://localhost:8000${item.photo}`}
                        className="img-fluid"
                      />
                      <p className="text-truncate">
                        ID[{item.id}] {item.name}
                      </p>
                      <p className="item-price">
                        <span className="d-block">{item.price} Ks</span>
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
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="whitespace d-xl-block d-lg-block d-md-none d-sm-none d-none align-center">
        <div>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a
                  className="page-link"
                  onClick={() => fetchUrl(meta.prevPageUrl)}
                  aria-label="Previous"
                >
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              {meta.links.map((link) => {
                return (
                  <li
                    className={`page-item ${link.active ? "active" : ""}`}
                    key={link.label}
                  >
                    <a className="page-link" onClick={() => fetchUrl(link.url)}>
                      {link.label}
                    </a>
                  </li>
                );
              })}
              <li className="page-item">
                <a
                  className="page-link"
                  onClick={() => fetchUrl(meta.nextPageUrl)}
                  aria-label="Next"
                >
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Home;
