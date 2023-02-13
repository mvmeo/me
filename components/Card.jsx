import React from "react";

const Card = (props) => {
  return (
    <a href={props.link} className={`${props.color} hover:opacity-90 p-8 md:h-[200px] h-[150px] relative`}>
      <div >
        <h1 className="absolute font-bold text-white text-[30px] bottom-0 mb-4">
          {props.titulo}
        </h1>
      </div>
    </a>
  );
};

export default Card;
