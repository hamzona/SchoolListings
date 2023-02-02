import React, { useState } from "react";
import Axios from "axios";
function InputComp() {
  const [form, setForm] = useState({});
  function hendleSubmit(e) {
    Axios.post("http://localhost:4444/infos", form)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
    e.preventDefault();
  }

  function hendleChange(e) {
    let copyForm = form;
    console.log(form);
    copyForm[e.target.id] = e.target.value;
    setForm(copyForm);
  }

  return (
    <div>
      <form className="form" onSubmit={(e) => hendleSubmit(e)}>
        <div>
          <label htmlFor="thumbnail">THUMBNAIL: </label>
          <input
            value={form.thumbnail}
            onChange={(e) => {
              hendleChange(e);
            }}
            type="text"
            id="thumbnail"
            name="thumbnail"
          />
        </div>
        <div>
          <label htmlFor="service">SERVICE: </label>
          <select
            value={form.service}
            onChange={(e) => {
              hendleChange(e);
            }}
            id="service"
            name="service"
          >
            <option value="instructions">INSTRUCTIONS</option>
            <option value="homework">HOMEWORK</option>
            <option value="other">OTHER...</option>
          </select>
        </div>
        <div>
          <label htmlFor="description">DESCRIPTION: </label>
          <input
            value={form.description}
            onChange={(e) => {
              hendleChange(e);
            }}
            type="text"
            id="description"
            name="descripton"
          />
        </div>
        <div>
          <label htmlFor="price">PRICE: </label>
          <input
            value={form.price}
            onChange={(e) => {
              hendleChange(e);
            }}
            type="number"
            id="price"
            name="price"
          />
        </div>

        <div>
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default InputComp;
