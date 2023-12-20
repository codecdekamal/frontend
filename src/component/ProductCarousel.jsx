import React from 'react';
import SliderCard from './productpage/SliderCard';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
const ProductCarousel = ({ products }) => {
    const navigate = useNavigate();
    const onClickHandler = (id) => {
        console.log(id);
        if (id) {
          navigate(`/productdetailpage/${id}`);
        }
      };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

  return (
    <Slider {...settings}>
        {products.map((item) => (
          <div key={item._id} className="col-md-4">
            <SliderCard onClick={onClickHandler} id={item._id} product={item} />
          </div>
        ))}
    </Slider>
  );
};

export default ProductCarousel;
