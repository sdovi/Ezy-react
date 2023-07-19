
import React from 'react'
import axios from 'axios';
import { useState } from 'react';

export const Patch = () => {
    
    const [id, setId] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
    const [photo, setPhoto] = useState("");
    const [photo2, setPhoto2] = useState("");
    const [photo3, setPhoto3] = useState("");
    const [photo4, setPhoto4] = useState("");
    const [photo5, setPhoto5] = useState("");
  
    const handlePutClick = () => {
      axios.patch(`http://127.0.0.1:8000/api/info/${id}/`, {
        title: title,
        price: price,
        description: description,
        photo: photo,
        photo2: photo2,
        photo3: photo3,
        photo4: photo4,
        photo5: photo5,
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
      window.location.reload();
    };
  
    return (
        <div>
          
                <div className="inputsadmins">

                    <div className="adminsinput">
                        <input type="text" placeholder='ID' value={id} onChange={e => setId(e.target.value)} />
                        <input type="text" placeholder='price' value={price} onChange={e => setPrice(e.target.value)} />
                        <input type="text" placeholder='description' value={description} onChange={e => setDescription(e.target.value)} />
                    </div>

                    <div className="adminsinput">
                        <input type="text" placeholder='title' value={title} onChange={e => setTitle(e.target.value)} />
                        <input type="text" placeholder='photo' value={photo} onChange={e => setPhoto(e.target.value)} />
                        <input type="text" placeholder='photo2' value={photo2} onChange={e => setPhoto2(e.target.value)} />
                    </div>

                    <div className="adminsinput">
                        <input type="text" placeholder='photo3' value={photo3} onChange={e => setPhoto3(e.target.value)} />
                        <input type="text" placeholder='photo4' value={photo4} onChange={e => setPhoto4(e.target.value)} />
                        <input type="text" placeholder='photo5' value={photo5} onChange={e => setPhoto5(e.target.value)} />
                    </div>

                    <div className="adminsinput">
                        <button onClick={handlePutClick}>put</button>
                    </div>
                </div>




        </div>
    )
}
