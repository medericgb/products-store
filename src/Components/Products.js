import React from "react";
import { connect } from "react-redux";

import Product from "./Product";

function Products(props) {
  const fruits = props.fruits.map(fruit => {
    return (
      <Product
        key={fruit.key}
        name={fruit.name}
        price={fruit.price}
        deleted={() => props.deleted(fruit.key)}
      />
    );
  });

  return (
    <div>
      <h2>Products</h2>
      <div>{fruits}</div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    fruits: state.fruits,
    totalPrice: state.totalPrice
  };
};

const dispatchAtions = dispatch => {
  return {
    deleted: key => dispatch({ type: "DELETE", key: key })
  };
};

export default connect(
  mapStateToProps,
  dispatchAtions
)(Products);
