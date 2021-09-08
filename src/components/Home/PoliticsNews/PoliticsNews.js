import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const PoliticsNews = () => {
    const [politicsNews, setPoliticsNews] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/getPoliticsNews')
            .then(res => res.json())
            .then(data => setPoliticsNews(data))
    }, [])

    const history = useHistory()
    const detailsNews = (_id) => {
        history.push(`/details-news/${_id}`)
    }
    return (
        <section className='py-6'>
            <h1 className='bg-red-600 text-center text-white py-4 font-3xl'>Top Of The Month</h1>
            <div className="grid grid-cols-3 gap-4 m-7">
                {
                    politicsNews.map(item => <div key={item._id}>
                        <img src={`data:image/png;base64, ${item.image.img}`} alt="news-img" />
                        <p>{item.newsCategory}</p>
                        <p className='tracking-normal font-medium'>{item.title}</p>
                        <div className="details-area flex flex-row justify-between py-3">
                            <p>By: {item.newsAuthor} </p>
                            <button className='btn' onClick={() => detailsNews(item._id)} >Details</button>
                            <p>{item.newsUploadDate}</p>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default PoliticsNews;