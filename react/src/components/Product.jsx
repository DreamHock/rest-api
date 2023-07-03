import axios from "axios";
import React, { useState } from "react";

const Product = ({ product, setRefresh, refresh }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [path, setPath] = useState(product.path);
  const [inModification, setInModification] = useState(false);

  const handleUpdate = (id) => {
    axios
      .patch(`http://localhost:8000/api/products/${id}`, { name, path, price })
      .then((res) => {
        alert(res.data.message);
        setInModification(false);
        setRefresh(!refresh);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/products/${id}`).then((res) => {
      alert(res.data.message);
      setRefresh(!refresh);
    });
  };
  return inModification === false ? (
    <div className="w-[200px]">
      <div className=" flex justify-between px-2">
        <button
          onClick={() => {
            setInModification(true);
          }}
          type="button"
          className=" text-2xl text-green-500"
        >
          Update
        </button>
        <button
          onClick={() => {
            handleDelete(product.id);
          }}
          type="button"
          className=" text-4xl text-red-500"
        >
          x
        </button>
      </div>
      <img className="rounded-t-lg" src={product.path} />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {product.price}
        </p>
      </div>
    </div>
  ) : (
    <div className="w-[200px] flex flex-col gap-4 py-4 px-2 ">
      <div>
        path:
        <input
          className=" border-2 rounded p-2 w-full"
          type="text"
          value={path}
          onChange={(e) => {
            setPath(e.target.value);
          }}
        />
      </div>
      <div>
        name:
        <input
          className=" border-2 rounded p-2 w-full"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div>
        price:
        <input
          className=" border-2 rounded p-2 w-full"
          type="text"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
      </div>
      <button
        onClick={() => {
          handleUpdate(product.id);
        }}
      >
        Save changes
      </button>
    </div>
  );
};

export default Product;
