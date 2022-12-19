import { Component } from 'react';
import ItemModel from '../ItemModel';
import styles from './Items.module.scss';

export class Items extends Component {
  render() {
    return (
      <main className={styles.item}>
        {this.props.items.map((el) => (
          <ItemModel key={el.id} item={el} onAdd={this.props.onAdd} />
        ))}
      </main>
    );
  }
}

export default Items;
