import React from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useState } from 'react/cjs/react.development';

const SlideCard = ({ fakeSlideData }) => {
    const [current, setCurrent] = useState(0)
    const length = fakeSlideData.length;
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    if(!Array.isArray(fakeSlideData) || fakeSlideData.length <= 0){
        return null;
    }
    return (
        <div className="slider">
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {
                fakeSlideData.map((newsItem, index) => <div key={newsItem.slideId} 
                className={index === current ? "slide active" : "slide"}>
                    {
                        index === current && <div className="slide-details">
                            <img src={newsItem.img} alt="Slide-Img" className='slide-img' />
                            <p>{newsItem.category}</p>
                            <h1 className='tracking-medium font-medium'>{newsItem.heading}</h1>

                            <div className="flex flex-row justify-between py-3">
                                <p>{newsItem.author}</p>
                                <button className='btn'>Details</button>
                                <p>{newsItem.date}</p>
                            </div>
                        </div>
                    }
                </div>)
            }
        </div>
    );
};

export default SlideCard;