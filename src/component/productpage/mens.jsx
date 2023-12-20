import React from 'react'
import Navbar from '../Navbar/Navbar'
import NavSec from '../Navbar/NavSec'
import NavFooter from '../Navbar/NavFooter'
const Mens = () => {
  return (
    <div>
        <Navbar/>
        <NavSec/>
        <div className="allProducts container-fluid p-3">
      {/* <!-- heading --> */}
    <div className=" fs-2 fw-bolder  text-capitalize d-flex justify-content-center p-3 bg-warning rounded-3">Dresses</div>
    {/* <!--  container --> */}
    <div className="container-fluid ">  
         <div className="row justify-content-center row">
            <div className=" hover-card col-6 col-md-4 col-lg-2  ">
                <div
                id="${item.id}"
                className="card my-1 mb-3 d-flex flex-column justify-content-center border-bottom-0 border"
              >
                <img
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSLaRyYuJD0Is8Vb816vg1viHj5TFP1Knhk61H5ugErO0cZ1fKfmtvnjcC93EmU"
                  className=" "
                  height="200"
                  width="fit-content"
                />
                <div
                  className="makingHeadingCenterAlign card-body bg-secondary rounded-bottom-3"
                >
                  <h5 className="text-bg-dark rounded">
                    Floral Print Dress
                </h5>
                  <span className="text-bold">$8</span>
                  <p className="makingThingsFlex text-light ">This comfortable and stylish t-shirt </p>
                  <button
                    className="btn btn-warning d-flex justify-content-center align-align-items-center text-dark"
                  >
                    <span className="material-symbols-rounded">shopping_cart</span>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className=" hover-card col-6 col-md-4 col-lg-2 ">
                <div
                id="${item.id}"
                className="card my-1 mb-3 d-flex flex-column justify-content-center border-bottom-0 border"
              >
                <img
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQC-HGcBSNFKQ-uaZlS_OIoTtKkxENbArwH480eArIOAPzBfpO3lXt-h2S7SI6t"
                  className=" "
                  height="200"
                  width="fit-content"
                />
                <div
                  className="makingHeadingCenterAlign card-body bg-secondary rounded-bottom-3"
                >
                  <h5 className="text-bg-dark rounded">Bodycon Dress</h5>
                  <span className="text-bold">$5</span>
                  <p className="makingThingsFlex text-light card-text">It's made from 100% cotton </p>
                  <button
                    className="btn btn-warning d-flex justify-content-center align-align-items-center text-dark"
                  >
                    <span className="material-symbols-rounded">shopping_cart</span>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className=" hover-card col-6 col-md-4 col-lg-2 ">
                <div
                id="${item.id}"
                className="card my-1 mb-3 d-flex flex-column justify-content-center border-bottom-0 border"
              >
                <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4lGLjvMCiRaGJmM4oSckQaaBcQnzdlBJIZDqem_6H9-1d-Djuj5FnuaNUWrZn"
                 className=" "
                  height="200"
                  width="fit-content"
                />
                <div
                  className="makingHeadingCenterAlign card-body bg-secondary rounded-bottom-3"
                >
                  <h5 className="text-bg-dark rounded">Skater Dress</h5>
                  <span className="text-bold">$98</span>
                  <p className="makingThingsFlex text-light card-text">This classNameic denim jacket</p>
                  <button
                    className="btn btn-warning d-flex justify-content-center align-align-items-center text-dark"
                  >
                    <span className="material-symbols-rounded">shopping_cart</span>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className=" hover-card col-6 col-md-4 col-lg-2 ">
                <div
                id="${item.id}"
                className="card my-1 mb-3 d-flex flex-column justify-content-center border-bottom-0 border"
              >
                <img
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSLaRyYuJD0Is8Vb816vg1viHj5TFP1Knhk61H5ugErO0cZ1fKfmtvnjcC93EmU"
                  className=" "
                  height="200"
                  width="fit-content"
                />
                <div
                  className="makingHeadingCenterAlign card-body bg-secondary rounded-bottom-3"
                >
                  <h5 className="text-bg-dark w-100  rounded">
                    Maxi Dress
                </h5>
                  <span className="text-bold">$56</span>
                  <p className="makingThingsFlex text-light card-text">classNameic Men's Oxford Shirt</p>
                  <button
                    className="btn btn-warning d-flex justify-content-center align-align-items-center text-dark"
                  >
                    <span className="material-symbols-rounded">shopping_cart</span>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className=" hover-card col-6 col-md-4 col-lg-2 ">
                <div
                id="${item.id}"
                className="card my-1 mb-3 d-flex flex-column justify-content-center border-bottom-0 border"
              >
                <img
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS75wFKbmCNHICLnvIQK92lTcpG9swR4Mi46JXIgcwc8m5rBY5OAucCnJo1tz3f"
                  className=" "
                  height="200"
                  width="fit-content"
                />
                <div
                  className="makingHeadingCenterAlign card-body bg-secondary rounded-bottom-3"
                >
                  <h5 className="text-bg-dark rounded">Jumpsuit</h5>
                  <span className="text-bold">$5</span>
                  <p className="makingThingsFlex text-light card-text">These versatile chinos are perfec</p>
                  <button
                    className="btn btn-warning d-flex justify-content-center align-align-items-center text-dark"
                  >
                    <span className="material-symbols-rounded">shopping_cart</span>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className=" hover-card col-6 col-md-4 col-lg-2 ">
                <div
                id="${item.id}"
                className="card my-1 mb-3 d-flex flex-column justify-content-center border-bottom-0 border"
              >
                <img
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSvYrhX6ad_Em-007APGvmWVTt2UL_TW5Zc558fDesZkhN6Kn5uVD-JxrbGxnH3"
                  className=" "
                  height="200"
                  width="fit-content"
                />
                <div
                  className="makingHeadingCenterAlign card-body bg-secondary rounded-bottom-3"
                >
                  <h5 className="text-bg-dark rounded">Sundress</h5>
                  <span className="text-bold">$76</span>
                  <p className="makingThingsFlex text-light card-text">This soft and cozy sweatshir</p>
                  <button
                    className="btn btn-warning d-flex justify-content-center align-align-items-center text-dark"
                  >
                    <span className="material-symbols-rounded">shopping_cart</span>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            </div>
  </div>      
    </div>
      {/* <!--------the Pants page---------> */}
      <div className="allProducts container-fluid p-3">
        {/* <!-- heading --> */}
      <div className=" fs-2 fw-bolder  text-capitalize d-flex justify-content-center p-3 bg-warning rounded-3">Pants</div>
      {/* <!--  container --> */}
      <div className="container-fluid ">  
           <div className="row justify-content-center row">
              <div className=" hover-card col-6 col-md-4 col-lg-2  ">
                  <div
                  id="${item.id}"
                  className="card my-1 mb-3 d-flex flex-column justify-content-center border-bottom-0 border"
                >
                  <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1bZ9fyp4Ehb-tOC6BGQGEEkRj4xFahimJs9rqclCUAhSl09zkMbI5tI9jbI07"
                    className=" "
                    height="200"
                    width="fit-content"
                  />
                  <div
                    className="makingHeadingCenterAlign card-body bg-secondary rounded-bottom-3"
                  >
                    <h5 className="text-bg-dark rounded">
                      Skinny Jeans
                  </h5>
                    <span className="text-bold">$8</span>
                    <p className="makingThingsFlex text-light ">This comfortable and stylish t-shirt </p>
                    <button
                      className="btn btn-warning d-flex justify-content-center align-align-items-center text-dark"
                    >
                      <span className="material-symbols-rounded">shopping_cart</span>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className=" hover-card col-6 col-md-4 col-lg-2 ">
                  <div
                  id="${item.id}"
                  className="card my-1 mb-3 d-flex flex-column justify-content-center border-bottom-0 border"
                >
                  <img
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQRj5oSyEd_gJz3st1kCdQ680mr5If8ZNO3ZixGZ26bp2kovNTX6vWvKUgEGB8d"
                    className=" "
                    height="200"
                    width="fit-content"
                  />
                  <div
                    className="makingHeadingCenterAlign card-body bg-secondary rounded-bottom-3"
                  >
                    <h5 className="text-bg-dark rounded">Straight Jeans
                  </h5>
                    <span className="text-bold">$5</span>
                    <p className="makingThingsFlex text-light card-text">It's made from 100% cotton </p>
                    <button
                      className="btn btn-warning d-flex justify-content-center align-align-items-center text-dark"
                    >
                      <span className="material-symbols-rounded">shopping_cart</span>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className=" hover-card col-6 col-md-4 col-lg-2 ">
                  <div
                  id="${item.id}"
                  className="card my-1 mb-3 d-flex flex-column justify-content-center border-bottom-0 border"
                >
                  <img
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSGEVi7a5sxxE61RPq41vDlo1Dt_scatoAmbmHTCQMsUbNNC7b5nqxPII_6E2SG"
                   className=" "
                    height="200"
                    width="fit-content"
                  />
                  <div
                    className="makingHeadingCenterAlign card-body bg-secondary rounded-bottom-3"
                  >
                    <h5 className="text-bg-dark rounded">Mom Jeans</h5>
                    <span className="text-bold">$98</span>
                    <p className="makingThingsFlex text-light card-text">This classNameic denim jacket</p>
                    <button
                      className="btn btn-warning d-flex justify-content-center align-align-items-center text-dark"
                    >
                      <span className="material-symbols-rounded">shopping_cart</span>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className=" hover-card col-6 col-md-4 col-lg-2 ">
                  <div
                  id="${item.id}"
                  className="card my-1 mb-3 d-flex flex-column justify-content-center border-bottom-0 border"
                >
                  <img
                  src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTGmEWJ6FxZHjcgvtamaBIGo_WzCYSnbDr9uGRyL_18XpBnfr4uYo62JfxU8rUD"
                    className=" "
                    height="200"
                    width="fit-content"
                  />
                  <div
                    className="makingHeadingCenterAlign card-body bg-secondary rounded-bottom-3"
                  >
                    <h5 className="text-bg-dark w-100  rounded">
                      Culottes
                  </h5>
                    <span className="text-bold">$56</span>
                    <p className="makingThingsFlex text-light card-text">classNameic Men's Oxford Shirt</p>
                    <button
                      className="btn btn-warning d-flex justify-content-center align-align-items-center text-dark"
                    >
                      <span className="material-symbols-rounded">shopping_cart</span>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className=" hover-card col-6 col-md-4 col-lg-2 ">
                  <div
                  id="${item.id}"
                  className="card my-1 mb-3 d-flex flex-column justify-content-center border-bottom-0 border"
                >
                  <img
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQJusBCGJvV-VPgn0GvpiTJTBO5kGFGQcwfjAzh7AHZCTO6N1ZsQVQLZaWOSw4H"
                    className=" "
                    height="200"
                    width="fit-content"
                  />
                  <div
                    className="makingHeadingCenterAlign card-body bg-secondary rounded-bottom-3"
                  >
                    <h5 className="text-bg-dark rounded">Legging</h5>
                    <span className="text-bold">$5</span>
                    <p className="makingThingsFlex text-light card-text">These versatile chinos are perfec</p>
                    <button
                      className="btn btn-warning d-flex justify-content-center align-align-items-center text-dark"
                    >
                      <span className="material-symbols-rounded">shopping_cart</span>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className=" hover-card col-6 col-md-4 col-lg-2 ">
                  <div
                  id="${item.id}"
                  className="card my-1 mb-3 d-flex flex-column justify-content-center border-bottom-0 border"
                >
                  <img
                  src=""
                    className=" "
                    height="200"
                    width="fit-content"
                  />
                  <div
                    className="makingHeadingCenterAlign card-body bg-secondary rounded-bottom-3"
                  >
                    <h5 className="text-bg-dark rounded"></h5>
                    <span className="text-bold">$76</span>
                    <p className="makingThingsFlex text-light card-text">This soft and cozy sweatshir</p>
                    <button
                      className="btn btn-warning d-flex justify-content-center align-align-items-center text-dark"
                    >
                      <span className="material-symbols-rounded">shopping_cart</span>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              </div>
    </div>      
      </div>
          {/* <!--------skirts---------> */}
    <div className="allProducts container-fluid p-3">
      {/* <!-- heading --> */}
    <div className=" fs-2 fw-bolder  text-capitalize d-flex justify-content-center p-3 bg-warning rounded-3">Skirts</div>
    {/* <!--  container --> */}
    <div className="container-fluid ">  
         <div className="row justify-content-center row">
            <div className=" hover-card col-6 col-md-4 col-lg-2  ">
                <div
                id="${item.id}"
                className="card my-1 mb-3 d-flex flex-column justify-content-center border-bottom-0 border"
              >
                <img
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQvPvZBQirpzwBCcVHo0oSyg8ko-htSv1Y0yh4bOAsIQYkFOKGMRqtwmPQwuW5N"
                  className=" "
                  height="200"
                  width="fit-content"
                />
                <div
                  className="makingHeadingCenterAlign card-body bg-secondary rounded-bottom-3"
                >
                  <h5 className="text-bg-dark rounded">
                    Pleated Skirt
                </h5>
                  <span className="text-bold">$8</span>
                  <p className="makingThingsFlex text-light ">This comfortable and stylish t-shirt </p>
                  <button
                    className="btn btn-warning d-flex justify-content-center align-align-items-center text-dark"
                  >
                    <span className="material-symbols-rounded">shopping_cart</span>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className=" hover-card col-6 col-md-4 col-lg-2 ">
                <div
                id="${item.id}"
                className="card my-1 mb-3 d-flex flex-column justify-content-center border-bottom-0 border"
              >
                <img
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRntHeVYdWAhvmr99lcRPr-araFd6H61b8TadpVrEvqIH6jlKLw6O10oPKcBBUT"
                  className=" "
                  height="200"
                  width="fit-content"
                />
                <div
                  className="makingHeadingCenterAlign card-body bg-secondary rounded-bottom-3"
                >
                  <h5 className="text-bg-dark rounded">Pleated skir</h5>
                  <span className="text-bold">$5</span>
                  <p className="makingThingsFlex text-light card-text">It's made from 100% cotton </p>
                  <button
                    className="btn btn-warning d-flex justify-content-center align-align-items-center text-dark"
                  >
                    <span className="material-symbols-rounded">shopping_cart</span>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className=" hover-card col-6 col-md-4 col-lg-2 ">
                <div
                id="${item.id}"
                className="card my-1 mb-3 d-flex flex-column justify-content-center border-bottom-0 border"
              >
                <img
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSStf-mYn0L6f69u1E3vdUaM0dhtSKamQei1I19ktpYAmCynwGwtWlD75CVFfSM"
                 className=" "
                  height="200"
                  width="fit-content"
                />
                <div
                  className="makingHeadingCenterAlign card-body bg-secondary rounded-bottom-3"
                >
                  <h5 className="text-bg-dark rounded">Bodycon Skirt</h5>
                  <span className="text-bold">$98</span>
                  <p className="makingThingsFlex text-light card-text">This classNameic denim jacket</p>
                  <button
                    className="btn btn-warning d-flex justify-content-center align-align-items-center text-dark"
                  >
                    <span className="material-symbols-rounded">shopping_cart</span>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className=" hover-card col-6 col-md-4 col-lg-2 ">
                <div
                id="${item.id}"
                className="card my-1 mb-3 d-flex flex-column justify-content-center border-bottom-0 border"
              >
                <img
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRZpBtEcRQCfVNHtg47iB528TlTBW5JbpVjetc4ige7-tj46Ay5HgCTBj68HySj"
                  className=" "
                  height="200"
                  width="fit-content"
                />
                <div
                  className="makingHeadingCenterAlign card-body bg-secondary rounded-bottom-3"
                >
                  <h5 className="text-bg-dark w-100  rounded">
                    Denim Skirt
                </h5>
                  <span className="text-bold">$56</span>
                  <p className="makingThingsFlex text-light card-text">classNameic Men's Oxford Shirt</p>
                  <button
                    className="btn btn-warning d-flex justify-content-center align-align-items-center text-dark"
                  >
                    <span className="material-symbols-rounded">shopping_cart</span>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className=" hover-card col-6 col-md-4 col-lg-2 ">
                <div
                id="${item.id}"
                className="card my-1 mb-3 d-flex flex-column justify-content-center border-bottom-0 border"
              >
                <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXaIWPhk4M-DUTmbA7jTNA4RlrNYf6s1M82_TBZgWmx3DyAau-xbG3ARV5s8tE"
                  className=" "
                  height="200"
                  width="fit-content"
                />
                <div
                  className="makingHeadingCenterAlign card-body bg-secondary rounded-bottom-3"
                >
                  <h5 className="text-bg-dark rounded"> Mini Skirt</h5>
                  <span className="text-bold">$5</span>
                  <p className="makingThingsFlex text-light card-text">These versatile chinos are perfec</p>
                  <button
                    className="btn btn-warning d-flex justify-content-center align-align-items-center text-dark"
                  >
                    <span className="material-symbols-rounded">shopping_cart</span>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className=" hover-card col-6 col-md-4 col-lg-2 ">
                <div
                id="${item.id}"
                className="card my-1 mb-3 d-flex flex-column justify-content-center border-bottom-0 border"
              >
                <img
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRe_QOR0d8EUJxrFzEFpCuUudJCCPNZ8qCZjOAyo0fl3dt3zrtGWbUQPwEqpVI4"
                  className=" "
                  height="200"
                  width="fit-content"
                />
                <div
                  className="makingHeadingCenterAlign card-body bg-secondary rounded-bottom-3"
                >
                  <h5 className="text-bg-dark rounded">Maxi Skirt
                </h5>
                  <span className="text-bold">$76</span>
                  <p className="makingThingsFlex text-light card-text">This soft and cozy sweatshir</p>
                  <button
                    className="btn btn-warning d-flex justify-content-center align-align-items-center text-dark"
                  >
                    <span className="material-symbols-rounded">shopping_cart</span>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            </div>
  </div>      
    </div>
          {/* <!----------Here footer will be generated dynamically--> */}
          <NavFooter/>
    </div>
  )
}

export default Mens
