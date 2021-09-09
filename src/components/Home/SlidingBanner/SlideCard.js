import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useHistory } from 'react-router';

const SlideCard = ({ slidingNews }) => {
    const [current, setCurrent] = useState(0)
    const length = slidingNews.length;

    const history = useHistory()
    const detailsNews = (_id) => {
        history.push(`/details-news/${_id}`)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    if(!Array.isArray(slidingNews) || slidingNews.length <= 0){
        return null;
    }
    
    return (
        <div className="slider">
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {
                slidingNews.map((item, index) => <div key={item._id} 
                className={index === current ? "slide active" : "slide"}>
                    {
                        index === current && <div className="slide-details">
                            <img src={`data:image/png;base64, ${item.image.img}`} alt="Slide-Img" className='slide-img' />
                            <h1 className='tracking-medium font-medium'>{item.title}</h1>

                            <div className="flex flex-row justify-between py-3">
                                <p>{item.newsAuthor}</p>
                                <button className='btn' onClick={() => detailsNews(item._id)}>Details</button>
                                <p>{item.newsUploadDate}</p>
                            </div>
                        </div>
                    }
                </div>)
            }
        </div>
    );
};

export default SlideCard;