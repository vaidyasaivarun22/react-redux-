import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { remove } from '../store/cartSlice';

const CartComponent: FC = () => {
  const userSelectionCart = useSelector((state) => state['cart']);
  const dispatcher = useDispatch();

  const removeItem = (productId) => {
    // Dispach a remove action and update the state
    dispatcher(remove(productId));
  };

  const cards = userSelectionCart.map((product: any) => (
    <div className="col-md-3 g-3">
      <Card key={product.id} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: '100px', height: '130px', margin: '15px' }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title.substring(0, 25) + '...'}</Card.Title>
          <Card.Text>{product.description.substring(0, 50) + '...'}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: 'inherit' }}>
          <div className="text-center d-flex justify-content-around">
            <Button variant="secondary">$ {product.price} x 1</Button>
            <Button variant="danger" onClick={() => removeItem(product.id)}>
              Remove
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1 className="mt-2">Selected Items</h1>
      <div className="row">{cards}</div>
    </>
  );
};

export default CartComponent;
