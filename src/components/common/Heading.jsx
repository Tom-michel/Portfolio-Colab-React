import React from "react";

export const Heading = ({ title }) => {
  return (
    <>
      <h2 className="heading" data-aos="fade-in-zoom">
        {title}
      </h2>
    </>
  );
};
