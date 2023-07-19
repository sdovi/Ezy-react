import React from 'react'
import { useContext } from 'react'
import { Context } from '../../context'
import axios from 'axios'
import { useEffect, useState, useRef } from 'react'


export const GET = () => {

    const { array } = useContext(Context)


    const deleteElement = (el) => {
        axios.delete(`http://127.0.0.1:8000/api/info/${el}/`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
            window.location.reload();
    }

    return (
        <div>
            <main class="l-main">
                <div class="content-wrapper content-wrapper--with-bg">
                    <h1 class="page-title">View content</h1>
                    <div class="page-content">Content:</div>



                </div>
                <div className="cards-admins">
                    <div className="container">

                        {array.map(el => (
                            <div class="card" key={el.id}>
                                <h2 class="title">{el.title}</h2>
                                <p class="id" >ID: {el.id}</p>
                                <p class="description">{el.description}</p>
                                <div className="photoadmins">
                                    <img class="photo" src={el.photo} alt={el.photo} />
                                    <img class="photo" src={el.photo2} alt={el.photo2} />
                                    <img class="photo" src={el.photo3} alt={el.photo3} />
                                    <img class="photo" src={el.photo4} alt={el.photo4} />
                                    <img class="photo" src={el.photo5} alt={el.photo5} />
                                </div>
                                <p class="category">Категория: {el.category}</p>
                                
                                <button className='delete' onClick={() => deleteElement(el.id)}>Delete</button>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}
