import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";

const Products = ({ refresh, handleDelete, setRefresh }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/products").then((res) => {
      setProducts(res.data);
    });
  }, [refresh]);

  return (
    <div className="flex gap-4 flex-wrap">
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <Product setRefresh={setRefresh} refresh={refresh} product={product} handleDelete={handleDelete} />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
