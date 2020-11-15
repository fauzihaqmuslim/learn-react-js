import React, { useState } from "react";
import "../component/Style.css";

function ListProduct() {
  const objectMakanan = [
    {
      food: "ketoprak",
      price: 13000,
    },
    {
      food: "soto",
      price: 10000,
    },
    {
      food: "nasi goreng",
      price: 13000,
    },
  ];
  const [makanan, setMakanan] = useState(objectMakanan);
  return (
    <div className="card">
      {makanan.map((item) => (
        <h1>
          {item.food} {item.price}
        </h1>
      ))}
    </div>
  );
}
export default ListProduct;
