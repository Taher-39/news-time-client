import React, { useEffect, useState } from 'react';
import SlideCard from './SlideCard';
import { useHistory } from 'react-router';

const SlidingBanner = () => {
    const [headerNews, setHeaderNews] = useState([])
    useEffect(() => {
        fetch('https://fathomless-everglades-75760.herokuapp.com/getNewsDetails')
            .then(res => res.json())
            .then(data => setHeaderNews(data))
    }, [])

    const slidingNews = headerNews.filter(item => item.newsCategory === "Slide");
    const coronaNews = headerNews.filter(item => item.newsCategory === "Corona");

    const history = useHistory()
    const detailsNews = (_id) => {
        history.push(`/details-news/${_id}`)
    }

    return (
        <section className='container mx-auto p-6 sliding-header'>
            <div className="flex">
                <div className="flex-1 px-6">
                    <SlideCard slidingNews={slidingNews} />
                </div>
                <div className="flex-1 px-6">
                    <div className="grid grid-cols-2 gap-4">
                        { /* // const { title, newsUploadDate, newsAuthor, newsCategory, newsDetails, image } = slidingNews; */
                            coronaNews.map(item => <div key={item.newsId}>
                                <img src={`data:image/png;base64, ${item.image.img}`} alt="news-img" />
                                <p className='tracking-normal font-medium'>{item.title}</p>
                                <div className="details-area flex flex-row justify-between py-3">
                                    <p>{item.newsAuthor}</p>
                                    <button className='btn' onClick={() => detailsNews(item._id)}>Details</button>
                                    <p>{item.newsUploadDate}</p>
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