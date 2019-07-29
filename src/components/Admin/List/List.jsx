import React from 'react';
import {connect} from 'react-redux';

const List = props => {
  return (
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Brand</th>
        <th>Price</th>
        <th>Image</th>
      </tr>
      </thead>
      <tbody>
      {props.products.map(product =>
        <tr>
          <td>{product.name}</td>
          <td>{product.brand}</td>
          <td>{product.price}</td>
          <td><img style={{width: 30, height: 30}} src={product.image} alt={product.name}/></td>
        </tr>
      )}
      </tbody>

    </table>
  );
};

const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(mapStateToProps)(List);