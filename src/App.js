import React from 'react';
import styles from './App.module.scss';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Header from './components/Header';
import Items from './components/Items';
import productsList from './components/ProductsList';
import Downloads from './components/Download';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: productsList(),
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCaterory = this.chooseCaterory.bind(this);
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCaterory={this.chooseCaterory} />
        <Items items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
        <Downloads />
      </div>
    );
  }

  chooseCaterory(category) {
    if (category === 'Всі') {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}
export default App;
