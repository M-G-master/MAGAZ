import React, { useState } from 'react';
import './header.scss';
import { TiShoppingCart } from 'react-icons/ti';
import Regicter from '../Regicter';
import Cart from '../Cart';

const showOrders = (props) => {
  return <div className="nothingCart">{<Cart {...props} onDelete={props.onDelete} />}</div>;
};

const showNothing = () => {
  return <div className="nothing">{'Кошик порожній'}</div>;
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);
  let [adressOpen, setAdressOpen] = useState(false);
  let [deliveryOpen, setDeliveryOpen] = useState(false);
  let [registrationOpen, setRegistrationOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">
          <h2>Будівельний мінімаркет "АКВАТЕРМ"</h2> м.Гадяч вул.Лохвицька 28 тел.0977255662
        </span>

        <div className="nav">
          <ul>
            <li
              onClick={() => setAdressOpen((adressOpen = !adressOpen))}
              className={`liButton ${adressOpen && 'active'}`}>
              Як нас знайти
            </li>
            <li
              onClick={() => setDeliveryOpen((deliveryOpen = !deliveryOpen))}
              className={`liButton ${deliveryOpen && 'active'}`}>
              Доставка
            </li>
            <li
              onClick={() => setRegistrationOpen((registrationOpen = !registrationOpen))}
              className={`liButton ${registrationOpen && 'active'}`}>
              Особистий кабінет
            </li>
            <TiShoppingCart
              onClick={() => setCartOpen((cartOpen = !cartOpen))}
              className={`buttonCategories ${cartOpen && 'active'}`}
            />
            {registrationOpen && <Regicter />}
          </ul>
        </div>
      </div>
      {cartOpen && (
        <div className="modalWindow">
          {props.orders.length > 0 ? showOrders(props) : showNothing()}
        </div>
      )}
      <div className="presentation"></div>
    </header>
  );
}
