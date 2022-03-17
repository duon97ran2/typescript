import React from "react";

type ShowInfoProps = {
  name: String,
  age: Number
};
const ShowInfo = ({ name }: ShowInfoProps) => {
  return (
    <div>
      hi {name}
    </div>
  )
};
export default ShowInfo;