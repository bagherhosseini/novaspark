import React from 'react';
import BearCarousel, {
    TBearSlideItemDataList,
    BearSlideImage,
    BearSlideCard,
} from "bear-react-carousel";
import "bear-react-carousel/dist/index.css";
import productImg from './file.png';

import './socials.scss';

const data = [
    { id: 1, url: "https://mockupfree.net/wp-content/uploads/2023/12/06-10-scaled.jpg" },
    { id: 2, url: "https://mockupfree.net/wp-content/uploads/2023/12/07-10-scaled.jpg" },
    { id: 3, url: "https://mockupfree.net/wp-content/uploads/2023/09/04-4-scaled.jpg" },
    { id: 4, url: "https://mockupfree.net/wp-content/uploads/2023/04/04-8-scaled.jpg" },
];

export default function Socials() {
    const bearSlideItemData = data.map((img, index) => {
        return <BearSlideCard key={index}>
            <img className='sliderImg' src={img.url} alt="product" />
        </BearSlideCard>
    });

    return (
        <div className='benefit-socials'>
            <div className='benefit'>
                <div className='textContent'>
                    <h2>Our Bottles - Your Logo</h2>
                    <p>This is the space to introduce the Product section and showcase the types of products available.</p>
                    <a href='./shop'>View All Products</a>
                </div>
                <img src={productImg} alt="" />
            </div>
            <div className='socials'>
                <div className='instagram'>
                    <h2>Follow us on instagram</h2>
                    <a href="">Take A Look</a>
                </div>

                <div className='imgSlider'>
                    <BearCarousel
                        data={bearSlideItemData}
                        spaceBetween={10}
                        slidesPerView={4}
                        height="560px"
                        isEnableNavButton
                        isEnableLoop
                        isLazy
                    />
                </div>
            </div>
        </div>
    )
}
