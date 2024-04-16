import React, { useContext } from "react";
import { BookContext } from "./Slide";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Slide from "./Slide";
import { ReactDOM } from "react";


function TrendBooks(props) {
  // Use useContext hook to access context

  const { BookInfo, setBookInfo } = useContext(BookContext);


  const handleClick = () => {
    // setBookInfo((prevValue) => [
    //   props.item.id,
    //   props.item.bookName,
    //   props.item.bookImg,
    //   props.item.count,
    //   props.item.id_subbook,
    // ]);
    Categorie: "Computer Science";
    Categorie: "Computer Science";
    setBookInfo((preValue) => [
      {
        id: props.item.id,
        bookName: props.item.bookName,
        bookImg: props.item.bookImg,
        count: props.item.count,
        id_subbook: props.item.id_subbook,
        Categorie: props.item.Categorie,
        description: props.item.description,
      },
    ]);

    console.log("you clicked me");
  };
  useEffect(() => {
    // console.log("Updated BookInfo:", BookInfo);
  }, [BookInfo]);
  return (
    <div>
      <div className="px-3 mb-1">
        <Link to="/BooksInfo">
          <button onClick={handleClick}>
            <img
              src={props.item.bookImg}
              alt="book-images"
              className="sm:w-34 sm:h-48 size-30"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TrendBooks;
