import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.scss'


import React from 'react'

export default function SliderTest(props) {

    const { imgList } = props;
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        //最多要比總圖片少一個
        slidesToShow: 4,
        slidesToScroll: 1
    }
    return (
        
        <div>
            <h2>SilderTest</h2>
            <div>
                <Slider {...settings} className="fcolor">
                    {imgList.map(i => (
                        <div className="txt" key={i.seed}>
                            <img src={i.seed} alt="" />
                        </div>

                    ))}
                </Slider>
            </div>
        </div>
    )
}
