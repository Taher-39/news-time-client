import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const PoliticsNews = () => {
    const [politicsNews, setPoliticsNews] = useState([])
    useEffect(() => {
        fetch('https://fathomless-everglades-75760.herokuapp.com/getNewsDetails')
            .then(res => res.json())
            .then(data => setPoliticsNews(data))
    }, [])

    const newPoliticsNews = politicsNews.filter(item => item.newsCategory === "Politics")
 
    const history = useHistory()
    const detailsNews = (_id) => {
        history.push(`/details-news/${_id}`)
    }
    return (
        <section className='py-6'>
            <h1 className='bg-red-600 text-center text-white py-4 font-3xl'>Top Of The World Politics</h1>
            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8 m-7">
                {
                    newPoliticsNews.map(item => <div key={item._id}>
                        <img src={`data:image/png;base64, ${item.image.img}`} alt="news-img" />
                        <p>{item.newsCategory}</p>
                        <p className='tracking-normal font-medium'>{item.title}</p>
                        <div className="details-area flex flex-row justify-between py-3">
                            <p>{item.newsAuthor} </p>
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