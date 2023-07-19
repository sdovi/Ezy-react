import React from 'react'
import { useState } from 'react';
import axios from 'axios';

export const Views = () => {
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState('');
    const [photo2, setPhoto2] = useState('');
    const [photo3, setPhoto3] = useState('');
    const [photo4, setPhoto4] = useState('');
    const [photo5, setPhoto5] = useState('');

    const postApi = () => {
        axios
            .post('http://127.0.0.1:8000/api/info/', {
                category: category,
                title: title,
                price: price,
                description: description,
                photo: photo,
                photo2: photo2,
                photo3: photo3,
                photo4: photo4,
                photo5: photo5,
            })
            .then(res => {
                console.log(res);
                window.location.reload(); // Reload the page after successful post
            })
            .catch(err => console.log(err));


    };

    return (
        <div>

            <div class="content-wrapper content-wrapper--with-bg">
                <h1 class="page-title">Add content</h1>
                <div class="page-content">Content:</div>

                <div className="admins_panels">
                    <div className='inputs-admin5'>
                        <input type="text" placeholder='Category' value={category} onChange={e => setCategory(e.target.value)} />
                        <input type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
                        <input type="text" placeholder='Price' value={price} onChange={e => setPrice(e.target.value)} />
                        <input type="text" placeholder='Description' value={description} onChange={e => setDescription(e.target.value)} />
                        <input type="text" placeholder='Photo' value={photo} onChange={e => setPhoto(e.target.value)} />
                        <input type="text" placeholder='Photo2' value={photo2} onChange={e => setPhoto2(e.target.value)} />
                        <input type="text" placeholder='Photo3' value={photo3} onChange={e => setPhoto3(e.target.value)} />
                        <input type="text" placeholder='Photo4' value={photo4} onChange={e => setPhoto4(e.target.value)} />
                        <input type="text" placeholder='Photo5' value={photo5} onChange={e => setPhoto5(e.target.value)} />
                    </div>

                    <div className="btnadmin">
                        <button type='submit' onClick={postApi}>Add</button>
                    </div>
                </div>



            </div>

        </div>
    )
}
