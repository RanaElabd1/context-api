// App.js

import React from "react";
import BookList from "./BookList";
import { BookProvider } from "./BookContext";

const App = () => {
  return (
    <div>
      <BookProvider>
        <BookList />
      </BookProvider>
    </div>
  );
};

export default App;
