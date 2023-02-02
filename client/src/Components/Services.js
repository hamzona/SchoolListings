import React, { useEffect, useState } from "react";
import Item from "./Item";
function Services() {
  const [data, setData] = useState(undefined);
  useEffect(() => {
    fetch("http://localhost:4444/infos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div>
      {data === undefined
        ? "Loading..."
        : data.map((item, index) => {
            return <Item key={index} item={item} />;
          })}
    </div>
  );
}

export default Services;
