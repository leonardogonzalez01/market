import React from 'react';
import {connect} from 'react-redux';
import {Container} from 'react-bootstrap';
import Header from "../components/commons/Header/Header";
import Product from "../components/Home/Product/Product";
import Total from "../components/Home/Total/Total";


const Home = ({products}) => {
  return (
    <div>
      <Header/>
      <Container>
        <div className='d-flex'>
          {products.map(product => <Product key={product.id} product={product}/>)}
        </div>
        <Total/>
      </Container>
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(mapStateToProps)(Home);