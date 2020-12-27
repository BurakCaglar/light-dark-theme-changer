import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardData from "./data/card-data";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { lightTheme, darkTheme } from "./theme/theme";

export default function App() {
  const [themeData, setTheme] = React.useState(lightTheme);

  function changeTheme() {
    setTheme(themeData.theme === "light" ? darkTheme : lightTheme);
  }

  const cardList = CardData.map(item => (
    <div className={`col-sm-4 mb-2 mt-3`}>
      <Card item={item} themeData={themeData} />
    </div>
  ));

  return (
    <div className={`${themeData.bgColor} ${themeData.textColor}`}>
      <Navbar themeData={themeData} changeTheme={changeTheme} />
      <div className="container">
        <div className="row">{cardList}</div>
      </div>
    </div>
  );
}
