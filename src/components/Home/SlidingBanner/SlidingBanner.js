import React from 'react';
import coronaImg from '../../../Imgs/corona1.jpg';
import fakeSlideData from './SlideFakeData';
import SlideCard from './SlideCard';

const SlidingBanner = () => {
    const fakeNews = [
        {
            newsId: 1,
            category: "Corona",
            author: 'John Deo',
            date: new Date().toLocaleDateString(),
            heading: 'India’s COVID-battered Kerala state now on alert for Nipah virus',
            img: coronaImg
        },
        {
            newsId: 1,
            category: "Corona",
            author: 'John Deo',
            date: new Date().toLocaleDateString(),
            heading: 'India’s COVID-battered Kerala state now on alert for Nipah virus',
            img: coronaImg
        },
        {
            newsId: 1,
            category: "Corona",
            author: 'John Deo',
            date: new Date().toLocaleDateString(),
            heading: 'India’s COVID-battered Kerala state now on alert for Nipah virus',
            img: coronaImg
        },
        {
            newsId: 1,
            category: "Corona",
            author: 'John Deo',
            date: new Date().toLocaleDateString(),
            heading: 'India’s COVID-battered Kerala state now on alert for Nipah virus',
            img: coronaImg
        }
    ]

    return (
        <section className='container mx-auto p-6 sliding-header'>
            <div className="flex">
                <div className="flex-1 px-6">
                    <SlideCard fakeSlideData={fakeSlideData} />
                </div>
                <div className="flex-1 px-6">
                    <div className="grid grid-cols-2 gap-4">
                        {
                            fakeNews.map(item => <div key={item.newsId}>
                                <img src={item.img} alt="news-img" />
                                <p className='tracking-normal font-medium'>{item.heading}</p>
                                <div className="details-area flex flex-row justify-between py-3">
                                    <p>{item.author}</p>
                                    <button className='btn'>Details</button>
                                    <p>{item.date}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SlidingBanner;