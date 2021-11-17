import React, { useEffect } from "react";
import Footer from "../components/Footers/Footer";
import IndexHeader from "../components/Headers/IndexHeader";
import { useDispatch, useSelector } from "react-redux";

const HomeLayout = ({ children }) => {

  const dispatch = useDispatch()
  const settings = useSelector(state => state.settings);

  useEffect(() => {
    console.log(settings)
  })

  return (
    <div className=" ">
      <IndexHeader  />
      {children}
      <Footer />
      {/* <FooterBar/> */}
    </div>
  );
};

export default HomeLayout;
