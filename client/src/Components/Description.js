import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Description() {
  const params = useParams();

  const [data, setData] = useState(undefined);
  useEffect(() => {
    fetch(`http://localhost:4444/item/${params.id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      {" "}
      <h2>{data === undefined ? "" : data.thumbnail}</h2>
      <div>{data === undefined ? "" : `Service: ${data.service}`}</div>
      <div>{data === undefined ? "" : `Description: ${data.description}`}</div>
      <div>{data === undefined ? "" : `Price: ${data.price} KM`}</div>
    </>
  );
}

export default Description;
