import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Button} from 'react-bootstrap';
import Input from "../Input/Input";
import {addProductAction} from "../../../store/products/actions";

const emptyProduct = {
  name: '',
  brand: '',
  price: 0,
  image: ''
};

const Form = props => {
  const [product, setProduct] = useState(emptyProduct);

  const handlerOnChange = ({target}) => {
    setProduct({
      ...product,
      [target.id]: target.value
    })
  };

  const handlerOnClick = () => {
    props.addProductComponent(product);
    setProduct(emptyProduct);
  };

  return (
    <Row className='pt-3'>
      <Col>
        <Input value={product.name} onChange={handlerOnChange} name={'name'} text={'Name Product'} type='text'/>
        <Input value={product.brand} onChange={handlerOnChange} name={'brand'} text={'Brand Product'} type='text'/>
        <Input value={product.price} onChange={handlerOnChange} name={'price'} text={'Price Product'} type='number'/>
        <Input value={product.image} onChange={handlerOnChange} name={'image'} text={'Image Product'} type='text'/>
        <Button onClick={handlerOnClick} block variant='success'>Add</Button>
      </Col>
    </Row>
  );
};

const mapDispatchToProps = dispatch => ({
  addProductComponent: product => dispatch(addProductAction(product))
});

export default connect(null, mapDispatchToProps)(Form);