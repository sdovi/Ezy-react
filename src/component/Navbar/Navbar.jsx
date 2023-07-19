import React, { useState, useEffect, useRef } from 'react';
import nav from './img/nav-logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Context } from '../../context'
import { useContext } from 'react'
import { useCart } from 'react-use-cart'


const ModalComponent = ({ showModal, onCloseModal }) => {
  const { FilterdDrink } = useContext(Context);

  const handleModalClick = () => {
    onCloseModal();
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="container">
      <div className={`modal ${showModal ? 'show' : ''}`} onClick={handleModalClick}>
        <div className="row cardsseracg">
          {FilterdDrink.map((el) => (
            <div className="modal-content mt-3" onClick={handleContentClick} key={el.id}>
              <a href=""><i class="fa-solid fa-xmark fa-2xl krestik" onClick={handleModalClick}></i></a>
              <div className="search-cards-nav">
                <div className="blcok-ing">
                  <img className="ing-steawd" src={el.photo} alt="" />
                </div>
                <div className="text-searchs">
                  <h5 className="search-texts ">{el.title}</h5>
                  <p className="text-p-search">Цена: {el.price}</p>
                </div>
              </div>
              <Link to={`/${el.id}`}>
              <button className="wiev-podropno">Посмотреть подробно</button>
              </Link>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};




export const Navbar = () => {
  const { isRegistered, setIsRegistered, setValueInput } = useContext(Context)
  const [searchValue, setSearchValue] = useState('');
  const [open, setOpen] = useState(false);
  const { totalUniqueItems } = useCart();
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    setValueInput(e.target.value);
    if (e.target.value !== '') {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  const handleCloseModal = () => {
    setSearchValue('');
    setShowModal(false);
  };

  let menuRef = useRef();
  useEffect(() => {
    var handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);


  const handleDelete = () => {
    localStorage.removeItem("access");
    // setIsRegistered(false)
    window.location.reload(true)
  };





  return (
    <div>
      <div className="App">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <div className="navbar-logos">
              <Link to='/'>  <img src={nav} alt="" /></Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse pl-auto" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0 mx-auto">
                <li className="nav-item">
                  <Link to='/about'><a className="nav-link active" aria-current="page" href="#">
                    О нас
                  </a></Link>
                </li>
                <li className="nav-item">
                  <Link to='/help'><a className="nav-link" href="#">
                    Помощь
                  </a></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/product">
                    Покупателю
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#footers">
                    Контакты
                  </a>
                </li>

                <div className="group">
                  <input
                    type="text"
                    required
                    value={searchValue}
                    onChange={handleChange}
                    className="search-input"
                    placeholder={searchValue ? '' : 'Введите номер детали, название или VIN'}
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>

                  <ModalComponent showModal={showModal} onCloseModal={handleCloseModal} />
                </div>
              </ul>

              <div ref={menuRef}>
                <Link to='/korzina'>
                  <i className="fa-sharp fa-solid fa-cart-shopping fa-xl i-serch korzina">
                    {totalUniqueItems > 0 && <sup className='sups'>{totalUniqueItems}</sup>}
                  </i>
                </Link>

                <i onClick={() => setOpen(!open)} className='fa-sharp fa-regular fa-circle-user fa-xl korzina'></i>

                <div className={`dropdownusers ${open ? 'active' : 'inactive'}`}>
                  {isRegistered ? (
                    <div type='submit'>
                      <h3 className='text-dropdonw' onClick={handleDelete}>Выйти с аккаунта</h3>
                      <Link to="/adminlogin"><h3 className='text-dropdonw' >Админка</h3></Link>
                    </div>
                  ) : (
                    <Link to='/login'><h3 className='text-dropdonw'>Войти</h3></Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* <div className="Head-category">
          <p className='col'>Каталог</p>
          <p className='col'>ТО <br /> / Фильтра</p>
          <p className='col'>Тормозная <br /> Система</p>
          <p className='col'>Двигатель <br />/ Выхлоп</p>
          <p className='col'>Подвеска <br />/ рулевое</p>
          <p className='col'>Коробка <br /> передач</p>
          <p className='col'>Охложденфие <br />/ Отопление</p>
          <p className='col'>Электрика <br />/ освещение</p>
          <p className='col'>Кузов <br />/ элементы</p>
        </div> */}
      </div>
    </div>
  );
};
