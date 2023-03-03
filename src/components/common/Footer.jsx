import React from "react";
import { social } from "../data/dummydata";

export const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item) => (
          <>
            <i data-aos="zoom-in-left">{item.icon}</i>
          </>
        ))}
        <p data-aos="zoom-in-right">All Rights Reserved 2023</p>
      </footer>
    </>
  );
};
