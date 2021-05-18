import React from "react";
import ProductList from "./components/ProductList/ProductList";
import Main from "./components/Main/Main";
import Wrapper from './hoc/Wrapper'
import AuthContext from './context/auth-context'
import Users from './hooks/Users'
class App extends React.Component {
  constructor(props) {
    super(props)
    console.log('(1) App.js constructor')
  }
  state = {
    products: [
      {
        id: 1,
        title: "book 1",
        price: "69",
      },
      {
        id: 2,
        title: "book 2",
        price: "79",
      },
      {
        id: 3,
        title: "book 3",
        price: "89",
      },
    ],
    showProducts: false,
    auth: false
  };
  componentDidMount() {
    console.log('(3) App.js componentDidMount')
  }
  shouldComponentUpdate() {
    console.log('(4) App.js shouldComponentUpdate')
    return true
  }
  getSnapshotBeforeUpdate() {
    console.log('(5) App.js getSnapshotBeforeUpdate')
    return false
  }
  componentDidUpdate() {
    console.log('(6) App.js componentDidUpdate')
  }
  changeTitleHandler = (event, id) => {
    const products = [...this.state.products];
    const productIndex = products.findIndex((item) => item.id === id);
    const product = { ...products[productIndex] };
    product.title = event.target.value;
    products[productIndex] = product;
    this.setState({ products });
  };
  changeProductsVisibility = () => {
    const show = this.state.showProducts;
    this.setState({
      showProducts: !show,
    });
  };
  removeProductHandler = (index) => {
    const products = [...this.state.products];
    products.splice(index, 1);
    this.setState({
      products,
    });
  };
  loginHandler = () => {
    this.setState({auth: true})
  }
  render() {
    console.log('(2) App.js render')
    let products = null;
    if (this.state.showProducts) {
      products = (
        <div className="products">
          <ProductList
            products={this.state.products}
            remove={this.removeProductHandler}
            change={this.changeTitleHandler}
          />
        </div>
      );
    }
    return (
      <React.Fragment>
       <AuthContext.Provider value={ { auth: this.state.auth, login: this.loginHandler } }>
          <Main click={this.changeProductsVisibility} />
          {products}
          <br/>
          <b>users fetched by react hook and axios</b>
          <Users />
       </AuthContext.Provider>
      </React.Fragment>
    );
  }
}

export default Wrapper(App, 'container');
