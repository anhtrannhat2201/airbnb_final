import React, { useState } from 'react';

import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'

function Carousel() {

    const config = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    const [settings, setSettings] = useState(config);

    const products = [
        {
            imgs: '../../ImgCarousel/anh1.webp',
            title: 'Airbnb đã cho tôi cơ hội tạo công ăn việc làm cho chính bản thân bằng cách làm những điều tôi yêu thích – đó là chăm sóc khách thuê nhà mình.',
            signature: '../../ImgCarousel/clairAnh1.webp',
            text: 'Chủ nhà ở Chiang Mai'
        },
        {
            imgs: '../../ImgCarousel/anh2.webp',
            title: 'Việc cho thuê căn lều bedouin đã cho tôi cơ hội được gặp gỡ những con người đến từ khắp nơi trên thế giới.',
            signature: '../../ImgCarousel/clairAnh2.webp',
            text: 'Đón tiếp khách ở Wadi Rum'
        },
        {
            imgs: '../../ImgCarousel/anh3.webp',
            title: 'Tôi rất thích cho thuê ngôi nhà sinh thái của mình để mọi người có thể kết nối với thiên nhiên và những người thân yêu của họ.',
            signature: '../../ImgCarousel/clairAnh3.webp',
            text: 'Đón tiếp khách ở Paraty'
        },
        {
            imgs: '../../ImgCarousel/anh4.webp',
            title: 'Việc cho thuê căn hộ studio đã làm thay đổi cuộc sống của tôi và mang đến cho tôi những trải nghiệm và con người đáng nhớ.',
            signature: '../../ImgCarousel/clairAnh4.webp',
            text: 'Chủ nhà ở Milan'
        },
        {
            imgs: '../../ImgCarousel/anh5.webp',
            title: 'Cho thuê nhà cho phép tôi trở thành một doanh nhân và vạch ra con đường dẫn đến tự do tài chính.',
            signature: '../../ImgCarousel/clairAnh5.webp',
            text: 'Chủ nhà tại Atlanta'
        },
        {
            imgs: '../../ImgCarousel/anh6.webp',
            title: 'Chúng tôi có thể bảo tồn nền văn hóa của mình bằng cách tổ chức trải nghiệm làm mì Ý.',
            signature: '../../ImgCarousel/clairAnh6.webp',
            text: 'Đón tiếp khách ở Palombara Sabina'
        },
    ]
    const onChangeCenterMode = e => {
        if (e.target.checked) {
            setSettings({
                ...config,
                centerMode: true,
                centerPadding: '50px'
            });
        } else {
            setSettings(config);
        }
    }

    return (
        <div>
            <div className="max-w-2xl mx-auto mb-16 text-center">
                <h1 className="text-4xl font-bold lg:text-5xl text-dark">Bạn có thể đón tiếp
                    <br />
                    bất kỳ ai, ở bất cứ đâu</h1>
            </div>
            <div classname="carousel" style={{ transform: 'translateX(65px)', width: '90%' }}>
                <Slider {...settings}>
                    {products.map((x, i) => {
                        return <div key={i} className="img-card">
                            <img className="img object-cover" src={x.imgs} />
                            <div className="card-body">
                                <div className="card-title h-28">{x.title}</div>
                                <img className="object-cover signature" src={x.signature} />
                                <div className="card-text">{x.text}</div>
                            </div>
                        </div>
                    })}
                </Slider>
            </div >
        </div>

    );
}

export default Carousel;