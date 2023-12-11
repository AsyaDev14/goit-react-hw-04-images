import React from "react";

export const Button = ({handleClick}) => {
  return (
    <button type="button" className="Button" onClick={handleClick}>Load more</button>
  )
}
