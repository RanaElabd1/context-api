// BookList.js

import React, { useContext } from "react";
import { BookContext } from "./BookContext";

const BookList = () => {
  const [currentBook, setCurrentBook] = useContext(BookContext);

  return (
    <div>
      <h2>قائمة الكتب</h2>
      <ul>
        <li>كتاب 1</li>
        <li>كتاب 2</li>
        <li>كتاب 3</li>
      </ul>
      <p>الكتاب الحالي: {currentBook}</p>
      <button onClick={() => setCurrentBook("كتاب 1")}>تحديد الكتاب 1</button>
      <button onClick={() => setCurrentBook("كتاب 2")}>تحديد الكتاب 2</button>
      <button onClick={() => setCurrentBook("كتاب 3")}>تحديد الكتاب 3</button>
    </div>
  );
};

export default BookList;
