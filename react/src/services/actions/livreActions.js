export const add_livre = (livre) => {
  return {
    type: "ADD_LIVRE",
    payload: { livre },
  };
};

export const delete_livre = (id) => {
  return {
    type: "DELETE_LIVRE",
    payload: { id },
  };
};

export const update_livre = (id, newLivre) => {
  return {
    type: "UPDATE_LIVRE",
    payload: { id, newLivre },
  };
};
