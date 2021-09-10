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
            <div className="md:flex">
                <div className="flex-1 px-6">
                    <SlideCard slidingNews={slidingNews} />
                </div>
                <div className="flex-1 px-6 pt-3">
                    {/* <h1 className="mb-4 text-center uppercase  tracking-wide text-xl font-semibold">Top Corona News</h1> */}
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                        { 
                            coronaNews.map(item => <div key={item.newsId}>
                                <img src={`data:image/png;base64, ${item?.image?.img}`} alt="news-img" />
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