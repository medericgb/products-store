import React from "react";

function Product(props) {
  return (
    <div>
      <p>
        {props.name}: ${props.price}
      </p>
      <button onClick={props.deleted}>Delete</button>
    </div>
  );
}

export default Product;
