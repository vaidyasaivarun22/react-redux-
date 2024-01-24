import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

const Products = () => {
  const [products, getProducts] = useState<any>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // api
    fetch('https://fakestoreapi.com/products/')
      .then((data) => data.json())
      .then((result) => getProducts(result));
  }, []);

  const addToCart = (product: any) => {
    // Dispatch an action that updates the state
    dispatch(add(product));
  };

  const cards = products.map((product: any) => (
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
            <Button variant="secondary">$ {product.price}</Button>
            <Button variant="primary" onClick={() => addToCart(product)}>
              Add to Cart
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1 className="mt-2">Product Dashboard</h1>
      <div className="row">{cards}</div>
    </>
  );
};

export default Products;
