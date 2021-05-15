import React, {Component} from 'react'
import Product from '../Product/Product'

class ProductList extends Component {
  constructor(props) {
    super(props)
    console.log('(2) ProductList constructor')
  }
  componentDidMount() {
    console.log('(3) ProductList componentDidMount')
  }
  shouldComponentUpdate() {
    console.log('(4) ProductList shouldComponentUpdate')
    return true
  }
  getSnapshotBeforeUpdate() {
    console.log('(5) ProductList getSnapshotBeforeUpdate')
    return false
  }
  componentDidUpdate() {
    console.log('(6) ProductList componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('(7) ProductList componentWillUnmount')
  }
  render() {
    return this.props.products.map((item, index) => {
      console.log('(1) ProductList render')
        return(  
         <Product
             key={item.id}
             title={item.title}
             price={item.price}
             change={(e) => this.props.change(e, item.id)}
             click={this.props.click.bind(this, index)}
         />
        )
    })
  }
}

export default ProductList