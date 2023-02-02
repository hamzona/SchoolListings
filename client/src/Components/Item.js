import React from "react";
import { Link } from "react-router-dom";

function Item({ item }) {
  return (
    <Link to={`/item/${item._id}`}>
      {" "}
      <div className="item">
        <h1>{item.thumbnail}</h1>
        <div>{item.price}</div>
      </div>
    </Link>
  );
}

export default Item;
