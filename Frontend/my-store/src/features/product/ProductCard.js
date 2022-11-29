import React from "react";
import { Card } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
 
  return (
    <Card className="my-2 p-2 rounded">
      <div>
        <Card.Img
          variant="top"
          src={`https://matan1902.onrender.com/${product.image}`}
          style={{ width: "50%", maxWidth: "1000px", height: "50%" }}
        />
      </div>

      <Card.Body>
        <div>
          <Card.Title as="div">
            <strong>{product.desc} </strong>
          </Card.Title>
        </div>
        

        <Card.Text as="h3"> ₪ {product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
