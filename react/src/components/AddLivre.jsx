import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_livre } from "../services/actions/livreActions";

const AddLivre = () => {
  const [titre, setTitre] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  const livres = useSelector((state) => state.livres);

  useEffect(() => {
    console.log(livres);
  }, [livres]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      add_livre({ id: livres[livres.length - 1].id + 1, titre, categorie: category })
    );
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <div>
          titre:
          <input
            type="text"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
          />
        </div>
        <div>
          category:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <button type="submit">Add livre</button>
      </form>
    </div>
  );
};

export default AddLivre;
