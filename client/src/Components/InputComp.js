import React from "react";

function InputComp() {
  return (
    <div>
      <form>
        <div>
          <label for="service">SERVICE: </label>
          <input type="text" id="service" name="service" />
        </div>
        <div>
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default InputComp;
