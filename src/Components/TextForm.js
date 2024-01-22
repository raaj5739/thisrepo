import { useState } from "react";
import React from "react";

export default function TextForm(props) {
  const handleonchange = (event) => {
    console.log("onchange" + text);
    settext(event.target.value);
  };
  const handleonclick1 = () => {
    console.log("onclicked");
    let newtext = text.toUpperCase();
    settext(newtext);
    // props.showAlert("converted to Uppercase","success");
  };
  const handleonclick2 = () => {
    console.log("onclicked2");
    let newtext = text.toLowerCase();
    settext(newtext);
    // props.showAlert("converted to Lowercase", "success");

  };
  const handleclearclick2 = () => {
    console.log("clearclicked");
    let newtext = "";
    settext(newtext);
  };

  const handleinverseclick2=()=> {
    console.log("inverse click is triggered");
    let newtext = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newtext += text[i];
    }
    settext(newtext);
    // props.showAlert("converted to Inversecase", "success");
    

  };

  const [text, settext] = useState(
    "you can write here to converet to upper and lowercase"
  );
  

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div
          className="mb-4"
      
        >
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange}
            style={{
              backgroundColor: props.mode === `dark` ? `grey` : `white`,
            }}
            id="mytext"
            rows="9"
          ></textarea>
        </div>
        <button className="btn1" onClick={handleonclick1}>
          {" "}
          touppercase
        </button>
        <button className="btn2" onClick={handleonclick2}>
          {" "}
          tolowercase
        </button>
        <button className="btninverse" onClick={handleinverseclick2}>
          {" "}
          inverse it
        </button>
        <button className="btnclear" onClick={handleclearclick2}>
          {" "}
          clear it
        </button>
      </div>
      {/* <div className="container my-2"> */}
      <h2>your text summery</h2>
      <p>
        {" "}
        {text.split(" ").length} words and {text.length} letters
      </p>
      <p> {0.008 * text.split(" ").length} minut read</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"Enter something to previeww the text"}</p>

      {/* </div>   */}
    </>
  );
}
