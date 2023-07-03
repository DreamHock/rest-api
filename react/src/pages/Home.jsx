import { useState } from "react";
import Products from "../components/Products";
import axios from "axios";

const Home = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [path, setPath] = useState("");

  const [refresh, setRefresh] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/products", { name, price, path })
      .then((res) => {
        alert(res.data.message);
        setRefresh(!refresh);
      })
      .catch((e) => {
        alert("somethng wen wrong");
      });
  };

  
  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        action=""
        className="p-4 border-2 border-slate-800 m-4 rounded-lg flex flex-col gap-4"
      >
        name:
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        price:
        <input
          type="text"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        path:
        <input
          type="text"
          value={path}
          onChange={(e) => {
            setPath(e.target.value);
          }}
        />
        <button type="submit">Add Product</button>
      </form>
      <Products setRefresh={setRefresh} refresh={refresh} />
    </div>
  );
};

export default Home;
