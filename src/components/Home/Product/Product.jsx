import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Card} from 'react-bootstrap';
import './Product.css';
import {lessOneProductAction, plusOneProductAction} from "../../../store/products/actions";

const Product = (props) => {
  const {plusOneProductComponent, product, lessOneProductComponent} = props;
  const [counter, setCounter] = useState(props.product.count);

  const handlerOnClickPlus = id => {
    setCounter(counter + 1);
    plusOneProductComponent(id);
  };

  const handlerOnClickLess = id => {
    setCounter(counter - 1);
    lessOneProductComponent(id);
  };

  return <Card className='my-marketplace__product'>
    <div className='text-center'>
      <img src={product.image} alt={product.name}/>

    </div>
    <div className='d-flex justify-content-between p-2'>
      <div>
        <p>Nombre: <strong>{product.name}</strong></p>
        <p>Marca: <strong>{product.brand}</strong></p>
      </div>
      <div className='text-right'>
        <p>Precio: <strong>{product.price}</strong></p>
        <p>Total: <strong>{product.price * counter}</strong></p>
      </div>
    </div>
    <div className='d-flex justify-content-between p-2'>
      <button disabled={counter < 1} onClick={() => handlerOnClickLess(product.id)}
              className='btn btn-block btn-danger'>-
      </button>
      <div style={{width: 100, textAlign: 'center'}}>{counter}</div>
      <button onClick={() => handlerOnClickPlus(product.id)} className='btn btn-block btn-success'>+</button>
    </div>
  </Card>
};

const mapDispatchToProps = dispatch => ({
  plusOneProductComponent: payload => dispatch(plusOneProductAction(payload)),
  lessOneProductComponent: payload => dispatch(lessOneProductAction(payload))
});

export default connect(null, mapDispatchToProps)(Product);