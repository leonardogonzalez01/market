import React from 'react';
import {connect} from 'react-redux';

const Total = ({products}) => {

  const totalProducts = products.reduce((product, counter) => counter.count + product.count);
  return (
    <div>
      <p><strong>Total Products:</strong> {totalProducts} </p>
      total precio
      boton pagar
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(mapStateToProps)(Total);