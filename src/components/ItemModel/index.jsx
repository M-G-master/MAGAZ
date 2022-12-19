import React, { Component } from 'react';
import Characteristics from '../Characteristics';
import ProductDescription from '../ProductDescription';
import styles from './ItemModel.module.scss';

export class ItemModel extends Component {
  render() {
    return (
      <div className={styles.itemModelStyles}>
        <img className={styles.imgItemModel} src={this.props.item.img} alt={'images'} />
        <h2>{this.props.item.title}</h2>
        <ProductDescription />
        <Characteristics />
        <h3>
          <p>Группа:</p>
          {this.props.item.category}
        </h3>
        <h1>{this.props.item.price}грн.</h1>
        <div className={styles.toCart} onClick={() => this.props.onAdd(this.props.item)}>
          +
        </div>
      </div>
    );
  }
}

export default ItemModel;
