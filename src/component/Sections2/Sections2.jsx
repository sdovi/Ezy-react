
import React from 'react'
import img1 from './img/1.png'
import './Sect2.css'
import img2 from './img/2.png'
import img3 from './img/3.png'
import { Button } from 'antd';
import photo1 from './img/svecha/svecha1.png'
import photo2 from './img/svecha/svecha2.png'
import photo3 from './img/svecha/svecha3.png'
import photo4 from './img/svecha/svecha4.png'
import image from './img/sect2/detail1.png'
import image2 from './img/sect2/sect2photo2.png'
import { Link } from 'react-router-dom'

export const Sections2 = () => {
    return (
        <div className='container pt-5'>
            <h1 className='hot pt-5'>Необходимое для каждого авто </h1>

            <div className="cards-avto" >
                <div className="row content-avto pt-5">
                    <div className="Svechi col-lg-4 col-md-6 col-sm-12">
                        <div className="card1-avto">
                            <div className="cards1-avto-text">

                                <h3>Свечи</h3>
                                <p>Свечи Зажигания, свечи накала</p>
                            </div>

                            <img src={img1} alt="" />

                        </div>
                        <div className="card1-avto mt-3" >
                            <div className="cards2-avto-text">
                                <h3>Моторные масла </h3>
                                <p>Свечи зажигания, свечи накала</p>
                                <div className="btn-cards2-avto">

                                    <Button ghost className='mt-2'>1Л</Button>
                                    <Button ghost className='mt-2'>2Л</Button>
                                    <Button ghost className='mt-2'>3Л</Button>
                                </div>

                            </div>
                            <img src={img2} alt="" />


                        </div>

                        <div className="card1-avto mt-3">
                            <div className="cards1-avto-text">

                                <h3>Кузовные запчасти</h3>
                                <p>Свечи зажигания, свечи накала</p>
                            </div>

                            <div className="img-avto-cards3">
                                <img src={img3} alt="" />
                            </div>

                        </div>
                    </div>

                    <div className="Svechi col-lg-4 col-md-6 col-sm-12">
                        <div className="card1-avto">
                            <div className="cards1-avto-text">

                                <h3>Каталог ТО</h3>
                                <p>Свечи зажигания, свечи накала</p>
                            </div>

                            <img src={photo1} alt="" />

                        </div>

                        <div className="card1-avto mt-3">
                            <div className="cards1-avto-text">

                                <h3>Каталог</h3>
                                <p>Свечи зажигания, свечи накала</p>
                            </div>

                            <div className="img-avto-cards3">
                                <img src={photo2} alt="" />
                            </div>

                        </div>


                        <div className="card1-avto mt-3">
                            <div className="cards1-avto-text">

                                <h3>Коврики</h3>
                                <p>Свечи зажигания, свечи накала</p>
                            </div>

                            <div className="img-avto-cards3">
                                <img src={photo3} alt="" />
                            </div>

                        </div>

                        <div className="card1-avto mt-3">
                            <div className="cards1-avto-text">

                                <h3>Трансмиссионные
                                    масла</h3>
                                <p>Свечи зажигания, свечи накала</p>
                            </div>

                            <div className="img-avto-cards3">
                                <img src={photo4} alt="" />
                            </div>

                        </div>
                    </div>

                    <div className="Svechi col-lg-4 col-md-6 col-sm-12">
                        <div className="card1-avto2">
                            <div className="content-avto2">
                                <h5>Поиск запчастей по VIN номеру авто</h5>
                                <input type="text" placeholder='Введите номер детали,  название или VIN' className='input-search-content mt-4' />
                                <div className="photo-search">
                                    <img src={image} alt="" className='bleskt' />
                                </div>

                            </div>


                        </div>
                        <div className="card1-avto mt-3">
                            <div className="cards2-avto-text">
                                <h3>АКБ </h3>
                                <p>Свечи зажигания, свечи накала</p>
                                <div className="btn-cards2-avto">

                                    <Button ghost className='polarnost'>
                                        <a className='' href="">Прямая  <br />
                                            полярность</a>
                                    </Button>

                                </div>

                            </div>
                            <img src={image2} alt="" />


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
