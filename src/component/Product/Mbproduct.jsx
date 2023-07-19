import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { Context } from '../../context';
import './gory.css';
import hot from './img/hot.png';
import korzina from './img/korzina.png';
import { Input } from 'antd';

const { Search } = Input;

export const Mbproduct = () => {
  const { array, setArray, setValueInput, FilterdDrink } = useContext(Context);
  const { addItem, removeItem } = useCart();
  const [change, setChange] = useState('');

  const hadnlerClick = (el) => {
    addItem(el);
  };

  return (
    <div>
      <div className="container">
        <div className="setting-cards">
          <h1 className="kolodki pb-3">Колодки тормозные дисковые</h1>
          <div className="classhot">
            <img src={hot} alt="" className="hots" />
            <h2 className="skidka pt-3">Горящие предложения недели</h2>
          </div>
        </div>
        <Search
          placeholder="Поиск"
          enterButton="Search"
          size="large"
          onChange={(e) => setValueInput(e.target.value)}
        />
      </div>
      <div className="container common-product">
        <section id="shop" className=" cards-category">
          <div className="row SHOP-product">
            {FilterdDrink.length > 0 ? (
              FilterdDrink.map((el) => (
                <div className="col-lg-3 col-md-6 col-sm-12 p-0" key={el.id}>
                  <div className="cards-item1 product-info">
                    <Link to={`/${el.id}`}>
                      <img className="photo-cards" src={el.photo} alt="" />
                    </Link>
                    <div className="card-info">
                      <h2 className="title-cards pt-3">{el.title}</h2>
                      <p className="car-title pt-3">{el.description}</p>
                      <div className="kozrina-sect">
                        <p className="price-card">{el.price} ₸.</p>
                        <img
                          src={korzina}
                          alt=""
                          className="img-korzina"
                          onClick={() => hadnlerClick(el)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className='product-none'>Продукт не найден.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};
