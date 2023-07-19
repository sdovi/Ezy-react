
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { Context } from '../../context'
import './gory.css'
import hot from './img/hot.png'
import korzina from './img/korzina.png'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import {Mbproduct} from './Mbproduct'


const items = [
    {
        label: <a href="">Узбекистан</a>,
        key: '0',
    },
    {
        label: <a href="">Марс</a>,
        key: '1',
    },
];

export const Products = () => {
    const { array, setArray } = useContext(Context);
    const { addItem, removeItem } = useCart();
    const [change, setChange] = useState('')
    const hadnlerClick = (el) => {
        addItem(el)
    }

    return (
        <div>
            <div className='container common-product lgvers'>
                <section id="shop" className=" cards-category">

                    <aside id="shop-menu" className="Categorys">
                        {/* <div className="menu-img">
                        <img src={menu1} alt="" />
                        <img src={menu2} alt="" />
                    </div> */}
                        <ul className="category-list">
                            <Dropdown
                                menu={{
                                    items,
                                }}
                                trigger={['click']}
                            >
                                <a className='items-btun mt-3 mb-4' onClick={(e) => e.preventDefault()}>
                                    <div className='goros'>Алмата <span className="icon"><DownOutlined /></span></div>
                                </a>
                            </Dropdown>

                            <div class="form-check">
                                <div className="classckeckbox">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                    <p>Доставка из других регионов</p>
                                </div>

                            </div>
                            <h4 className='pricecategory pt-2'>Цена</h4>
                            <p className='pricecategory pt-3'>Производитель</p>
                            <div class="form-check">
                                <div className="classckeckbox">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                    <p>FEBI</p>
                                </div>

                            </div>
                            <div class="form-check">
                                <div className="classckeckbox">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                    <p>NGK</p>
                                </div>

                            </div>
                            <div class="form-check">
                                <div className="classckeckbox">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                    <p>NISSAN</p>
                                </div>

                            </div>
                            <div class="form-check">
                                <div className="classckeckbox">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                    <p>RENAULT</p>
                                </div>

                            </div>
                            <div class="form-check">
                                <div className="classckeckbox">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                    <p>VAG</p>
                                </div>

                            </div>
                            <p className='pricecategory pt-2'>Состояние</p>
                            <div class="form-check">
                                <div className="classckeckbox">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                    <p>Все</p>
                                </div>

                            </div>
                            <div class="form-check">
                                <div className="classckeckbox">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                    <p>Новые</p>
                                </div>

                            </div>
                            <div class="form-check">
                                <div className="classckeckbox">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                    <p>Б/у</p>
                                </div>

                            </div>
                            <p className='pricecategory pt-2'>Сортировать</p>
                            <div class="form-check">
                                <div className="classckeckbox">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                    <p>по дате объявления</p>
                                </div>

                            </div>
                            <div class="form-check">
                                <div className="classckeckbox">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                    <p>по цене</p>
                                </div>

                            </div>
                            <div class="form-check">
                                <div className="classckeckbox">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                    <p>по рейтингу</p>
                                </div>


                            </div>
                            <br />

                            <div class="form-check">
                                <div className="classckeckbox">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                    <p>Только с фото</p>
                                </div>

                            </div>
                            <div class="form-check">
                                <div className="classckeckbox">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                    <p>Доставка в бокс</p>
                                </div>

                            </div>
                            <br />


                            <div class="form-check">
                                <div className="classckeckbox">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                    <p>В наличии</p>
                                </div>

                            </div>

                            <div class="form-check">
                                <div className="classckeckbox">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                    <p>На заказ</p>
                                </div>

                            </div>


                        </ul>

                    </aside>

                    <div className="row SHOP-product">
                        <div className="setting-cards">
                            <h1 className='kolodki pb-3'>Колодки тормозные дисковые</h1>
                            <div className="classhot">
                                <img src={hot} alt="" className='hots' />
                                <h2 className='skidka pt-3'>Горящие предложения недели</h2>
                            </div>

                        </div>
                        {
                            array.map((el) => (

                                <div className="col-lg-3 col-md-6 col-sm-12 p-0" key={el.id}>
                                    <div className="cards-item1 product-info">
                                        <Link to={`/${el.id}`}> <img className="photo-cards" src={el.photo} alt='' /></Link>
                                        <div className="card-info">
                                            <h2 className="title-cards pt-3">{el.title}</h2>
                                            <p className='car-title pt-3'>{el.description}</p>
                                            <div className="kozrina-sect">


                                                <p className='price-card'>{el.price} ₸.</p>
                                                <img src={korzina} alt="" className='img-korzina' onClick={() => hadnlerClick(el)} />

                                            </div>
                                        </div>
                                    </div>
                                </div>


                            ))
                        }


                    </div>
                </section>

            </div>

            <div className='mob-version'>
                    <Mbproduct/>
            </div>
        </div>

    )
}
