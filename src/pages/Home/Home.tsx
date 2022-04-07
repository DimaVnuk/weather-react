import React from "react";
import Header from "@/components/Header/Header";
import style from "./Home.module.scss";
type Props = {};

const Home = (props: Props) => {
  return (
    <div className={style.home}>
      <Header />
    </div>
  );
};

export default Home;
