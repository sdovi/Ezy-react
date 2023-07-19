import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import { Navbar } from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';
import Modal from 'react-modal';
import axios from 'axios';

const Korzina = () => {
  const {
    isEmpty,
    totalUniqueItems,
    cartTotal,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('+998');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');

  const handleDecrement = (itemId, quantity) => {
    if (quantity > 1) {
      updateItemQuantity(itemId, quantity - 1);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePhoneChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.startsWith('+998')) {
      setPhone(inputValue);
    } else if (inputValue === '+') {
      setPhone('+998');
    }
  };

  const postApi = () => {
    const products = items.map((item) => {
      return `
      <b>${item.title}</b> 
      ${item.quantity} x ${item.price} = ${item.quantity * item.price} ₸`;
    }).join('\n');
    const requestData = { 
      title: fullName,
      price: phone,
      EMail: email,
      description: comments,
      shop: products,
    };
    axios
      .post('http://127.0.0.1:8000/api/accepting/', requestData)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  

  return (
    <div>
      <Navbar />
      <div className="container pt-5">
        <div className="valc">
          {isEmpty ? (
            <div>

              <p className="pustoy-korzina">Ваша корзина пустая.</p>
              <img className='smail' src="https://stho.ru/wa-data/public/shop/products/16/27/2716/images/4816/4816.970.jpg" alt="" />
            </div>
          ) : (
            items.map((item) => (
              <div>
                <div className="card-korzina mt-4" key={item.id}>
                  <img src={item.photo} alt="" className="photo-korzina" />
                  <h4 className="name-korzina">{item.title}</h4>
                  <div className="chena-sups">
                    <button
                      className="plus minust"
                      onClick={() => handleDecrement(item.id, item.quantity)}
                    >
                      <i className="fa-solid fa-minus fa-xl"></i>
                    </button>
                    <div className="sup-btn">{item.quantity}</div>
                    <button
                      className="plus plust"
                      onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                    >
                      <i className="fa-solid fa-plus fa-xl"></i>
                    </button>
                  </div>
                  <h3 className="total-money">{item.quantity * item.price} ₸.</h3>
                  <div className="remove">
                    <i
                      type="submit"
                      onClick={() => removeItem(item.id)}
                      className="fa-solid fa-trash fa-lg"
                    ></i>
                  </div>

                </div>
              </div>
            ))
          )}
        </div>

        <div className="blocktotal mt-5">
          <div className="products-totals">
            <div className="prduct-col">
              <h5>Продукты({totalUniqueItems})</h5>
            </div>
            <div className="totalsumma">
              <h5>{cartTotal} ₸</h5>
            </div>
          </div>
          <div className="products-totals pt-4">
            <div className="prduct-col">
              <h5 className="vest">Всего</h5>
            </div>
            <div className="totalsumma">
              <h5 className="vest">{cartTotal} ₸</h5>
            </div>
          </div>
          <button className="buy-vse-product" onClick={openModal}>
            Перейти к оплате
          </button>
        </div>
      </div>
      <Footer />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Модальное окно"
        className="modal12"
        overlayClassName="overlay12"
      >
        <h2 className="buy">Купить</h2>
        <form onSubmit={postApi}  >
          <input
            className="input-field"
            type="text"
            placeholder="Ф.И.О"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            className="input-field"
            type="text"
            placeholder="Телефон"
            value={phone}
            onChange={handlePhoneChange}
          />
          <input
            className="input-field"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input-field"
            type="text"
            placeholder="Комментарии к заказу"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
          <button type="submit" className="otpravit">
            Отправить
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Korzina;
