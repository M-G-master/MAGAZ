import React from 'react';
import Order from '../Order';
import './cart.scss';
import { Modal } from './Modal';

export default function Cart(props) {
  let [open, setOpen] = React.useState(false);
  let summa = 0;
  props.orders.forEach((el) => (summa += Number.parseFloat(el.price)));
  return (
    <div>
      <div className="App-modal">
        <li onClick={() => setOpen((open = !open))} className={`btnPlay ${open && 'active'}`}>
          <h4>Перейти у кошик</h4>
        </li>
        <Modal open={open} setOpen={setOpen}>
          <div className="windowShopCart">
            {props.orders.map((el) => (
              <Order onDelete={props.onDelete} key={el.id} item={el} />
            ))}
            <div className="summaBox">
              <p className="summa">Сума: {new Intl.NumberFormat().format(summa)} грн.</p>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
