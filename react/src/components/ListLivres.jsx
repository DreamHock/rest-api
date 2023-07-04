import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delete_livre, update_livre } from "../services/actions/livreActions";

const ListLivres = () => {
  const [inModification, setInModification] = useState(null);
  const [titre, setTitre] = useState();
  const [categorie, setCategorie] = useState();

  const { livres } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(delete_livre(id));
  };
  const handleUpdate = (id) => {
    dispatch(update_livre(id, { titre, categorie }));
    setInModification(null);
  };
  return (
    <div className="flex gap-2">
      {livres.map((livre) => {
        return inModification !== livre.id ? (
          <div key={livre.id} className="border-2 rounded-lg p-4">
            <div className="flex justify-between gap-4">
              <button
                className=" text-green-500"
                onClick={() => {
                  setInModification(livre.id);
                  setCategorie(livre.categorie);
                  setTitre(livre.titre);
                }}
              >
                Update
              </button>
              <button
                className=" text-red-500"
                onClick={() => handleDelete(livre.id)}
              >
                X
              </button>
            </div>
            <div>{livre.titre}</div>
            <div>{livre.categorie}</div>
          </div>
        ) : (
          <div key={livre.id} className="border-2 rounded-lg p-4">
            <div>
              <input
                type="text"
                value={titre}
                onChange={(e) => setTitre(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                value={categorie}
                onChange={(e) => setCategorie(e.target.value)}
              />
            </div>
            <button
              className="border-1 p-2"
              onClick={() => {
                handleUpdate(livre.id);
              }}
            >
              Save changes
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ListLivres;
