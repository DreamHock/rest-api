import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { delete_livre } from "../services/actions/livreActions";

const ListLivres = () => {
  const { livres } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(delete_livre(id));
  };
  return (
    <div className="flex gap-2">
      {livres.map((livre) => {
        return (
          <div key={livre.id} className="border-2 rounded-lg p-4">
            <div className="flex justify-end text-red-500">
              <button onClick={() => handleDelete(livre.id)}>X</button>
            </div>
            <div>{livre.titre}</div>
            <div>{livre.categorie}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ListLivres;
