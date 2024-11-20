import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Don't forgot to clear this 😁😁");

  const changeToUPCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const changeToLOCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const clearText = () => {
    let newText = "";
    setText(newText);
  };
  const alTernateCase = () => {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) {
        newText += text[i].toUpperCase();
      } else {
        newText += text[i].toLowerCase();
      }
    }
    setText(newText);
  };
  const reverseAlTernateCase = () => {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) {
        newText += text[i].toLowerCase();
      } else {
        newText += text[i].toUpperCase();
      }
    }
    setText(newText);
  };

  return (
    <>
      <div className="container">
        <div className="mb-2">
          <h1>{props.heading}</h1>
          <label htmlFor="my-textbox" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            onChange={(index) => setText(index.target.value)}
            id="my-textbox"
            rows="8"
          ></textarea>
          <button disabled={text.length === 0} className="btn btn-primary my-3" onClick={changeToUPCase}>
            Change to UpperCase
          </button>
          <button disabled={text.length === 0}
            className="btn btn-primary mx-2 my-2"
            onClick={changeToLOCase}
          >
            Change to LowerCase
          </button>
          <button disabled={text.length === 0} className="btn btn-primary mx-2 my-3" onClick={alTernateCase}>
            Change to Alternate Case
          </button>
          <button disabled={text.length === 0}
            className="btn btn-primary mx-2 my-2"
            onClick={reverseAlTernateCase}
          >
            Reverse of Alternate Case
          </button>
          <button  className="btn btn-primary mx-2 my-2" onClick={clearText}>
            Clear Text
          </button>
          {/* <button className="btn btn-secondary mx-2 my-3" onclick={changeTheme}>Dark Mode</button> */}
        </div>
      </div>
      <div className="container my-2">
        <h1>Summarized your Text</h1>
        <p>
          {text.split(" ").filter((element) => element.length !== 0).length}{" "}
          words and {text.length} characters
        </p>
        <p>{0.008 * text.split(/\s+/).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
