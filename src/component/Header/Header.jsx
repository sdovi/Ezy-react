import React from 'react'
import './Header.css'
import img1 from './img/Mask Group.png'
import photocard from './img/cards/1.png'
import photocard2 from './img/cards/2.png'
import photocard3 from './img/cards/3.png'
import photocard4 from './img/cards/4.png'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import { Link } from 'react-router-dom'

const items = [
    {
        label:<Link to='/product'><a href="">Узбекистанский</a></Link>,
        key: '0',
    },
    {
        label: <Link to='/product'><a href="">Марс</a></Link>,
        key: '1',
    },
];
export const Header = () => {
    return (
        <div className='head'>
            <div className="Header">
                <div className="bg-header">
                    <img src={img1} alt="" />
                </div>

                <div className="container content-headers">
                    <div className="DETAIL">
                        <div className="content-detail pt-1">
                            <h2 >Подобрать детали</h2>
                            <p>найдите недостающие детали именно на ваше транспортное стредство</p>

                            <div className="input-categort category-list">
                                <a href="">
                                    <Dropdown
                                        menu={{
                                            items,
                                        }}
                                        trigger={['click']}
                                    >
                                        <a className='items-btun ' onClick={(e) => e.preventDefault()}>
                                            <div className='goros'>Детали <span className="icon"><DownOutlined /></span></div>
                                        </a>
                                    </Dropdown>
                                </a>
                                <a href="">
                                    <Dropdown
                                        menu={{
                                            items,
                                        }}
                                        trigger={['click']}
                                    >
                                        <a className='items-btun  ' onClick={(e) => e.preventDefault()}>
                                            <div className='goros'>Гайки<span className="icon"><DownOutlined /></span></div>
                                        </a>
                                    </Dropdown>
                                </a>
                                <a href="">
                                    <Dropdown
                                        menu={{
                                            items,
                                        }}
                                        trigger={['click']}
                                    >
                                        <a className='items-btun' onClick={(e) => e.preventDefault()}>
                                            <div className='goros'>Цепи <span className="icon"><DownOutlined /></span></div>
                                        </a>
                                    </Dropdown>
                                </a>
                                <a href="">
                                    <Dropdown
                                        menu={{
                                            items,
                                        }}
                                        trigger={['click']}
                                    >
                                        <a className='items-btun   ' onClick={(e) => e.preventDefault()}>
                                            <div className='goros'>Марс <span className="icon"><DownOutlined /></span></div>
                                        </a>
                                    </Dropdown>
                                </a>
                            </div>
                            <div className="button-header-serch">
                                <button className='searchname'>НАЙТИ ДЕТАЛИ</button>

                            </div>
                        </div>

                    </div>
                </div>

                <div className="container2">
                    <div className="cards-header row pt-5">
                        <div className="col-lg-3 col-md-6 col-sm-12 pt-2">
                            <div className="cards-head ">
                                <img src={photocard} alt="" />
                                <p>Выбирайте по цене, скорости
                                    доставки или расположению</p>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 pt-2">
                            <div className="cards-head ">
                                <img src={photocard2} alt="" />
                                <p>589 837
                                    запчастей
                                    и масел в каталоге</p>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 pt-2">
                            <div className="cards-head ">
                                <img src={photocard3} alt="" />
                                <p>Средний рейтинг
                                    продавцов 4.83 из 5 </p>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 pt-2">
                            <div className="cards-head ">
                                <img src={photocard4} alt="" />
                                <p>Подать объявление</p>

                            </div>
                        </div>

                    </div>
                </div>

            </div >

        </div >
    )
}
