import React, { useState } from 'react';
import Header from '../../Home/Header/Header';
import AdminNavbar from '../AdminNavbar/AdminNavbar';

const AddNews = () => {
    const [newsInfo, setNewsInfo] = useState({})
    const [file, setFile] = useState(null)
    const handleBlur = e => {
        const newNewsInfo = { ...newsInfo, uploadDate: new Date().toLocaleDateString() }
        newNewsInfo[e.target.name] = e.target.value;
        setNewsInfo(newNewsInfo)
    }
    const handleChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file)
        formData.append('newsTitle', newsInfo.title)
        formData.append('newsAuthor', newsInfo.author)
        formData.append('newsCategory', newsInfo.category)
        formData.append('newsDetails', newsInfo.details)
        formData.append('uploadDate', newsInfo.uploadDate)

        fetch('https://fathomless-everglades-75760.herokuapp.com/addNews', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('News Added Successfully')
                }
            })
            .catch(error => {
                console.error(error)
            })
    };
    return (
        <section>
            <Header></Header>
            <AdminNavbar></AdminNavbar>
            <div className="add-news-form  text-center">
                <form className='p-3' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title">Title</label> <br />
                        <input onBlur={handleBlur} type='text' placeholder="News Title *" name='title' required />
                    </div>

                    <div className="my-3">
                        <label htmlFor="author">News Author</label> <br />
                        <input onBlur={handleBlur} type='text' placeholder="News Author *" name='author'  required />
                    </div>

                    <div className="my-3">
                        <label htmlFor="category">News Category</label> <br />
                        <input onBlur={handleBlur} type='text' placeholder="News Category *" name='category'  required />
                    </div>

                    <div className="my-3">
                        <label htmlFor="details" >News Details</label> <br />
                        <input onBlur={handleBlur} type='text' placeholder="News Details *" name='details'  required />
                    </div>

                    <div className="form-group my-3">
                        <input onChange={handleChange} type='file' className='' id='file' required />
                    </div>

                    <div className="form-group">
                        <button className="btn" type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddNews;