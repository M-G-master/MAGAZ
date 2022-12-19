import React, { Component } from 'react';
import styles from './Order.module.scss';
import { FaTrash } from 'react-icons/fa';

export class Order extends Component {
  render() {
    return (
      <div className={styles.item}>
        <img src={this.props.item.img} alt={'images'} />
        <h1>{this.props.item.title}</h1>
        <p className="pOrder">{this.props.item.price}грн.</p>
        <FaTrash
          className={styles.iconDelete}
          onClick={() => this.props.onDelete(this.props.item.id)}
        />
      </div>
    );
  }
}

export default Order;
