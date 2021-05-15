import React, { Component } from "react";
import "./Product.css";
import Wrapper from "../../hoc/Wrapper";
import AuthContext from '../../context/auth-context'

class Product extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }
  componentDidMount() {
    this.inputRef.current.focus()
  }
  static contextType = AuthContext
  render() {
    return (
      <React.Fragment>
        {this.context.auth ? <p>Logged In!</p> : <p>Please Login!</p>}
        <p onClick={this.props.click}>
          <b>product title:</b> {this.props.title}
        </p>
        <p>
          <b>product price:</b> {this.props.price}
        </p>
        <input
          ref={this.inputRef}
          placeholder="title here"
          onChange={this.props.change}
          value={this.props.title}
        />
      </React.Fragment>
    );
  }
}
export default Wrapper(Product, 'product-item');