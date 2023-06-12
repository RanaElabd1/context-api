// BookContext.js

import React, { createContext, useState } from "react";

export const BookContext = createContext();

export const BookProvider = (props) => {
  const [currentBook, setCurrentBook] = useState(null);

  return (
    <BookContext.Provider value={[currentBook, setCurrentBook]}>
      {props.children}
    </BookContext.Provider>
  );
};
