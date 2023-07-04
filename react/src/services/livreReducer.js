import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  livres: [
    { id: 9, titre: "REACT REDUX", categorie: "FRONT END" },
    { id: 10, titre: "LARAVEL", categorie: "Back-end" },
  ],
};

const livreReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LIVRE":
      return { ...state, livres: [...state.livres, action.payload.livre] };

    case "DELETE_LIVRE":
      return {
        ...state,
        livres: state.livres.filter((livre) => {
          return livre.id != action.payload.id;
        }),
      };

    case "UPDATE_LIVRE":
      const modifiedLivres = state.livres.find(
        (livre) => livre.id == action.payload.id
      );
      modifiedLivres.titre = action.payload.titre;
      modifiedLivres.categorie = action.payload.categorie;

      return state;
    default:
      return state;
  }
};

export default livreReducer;
