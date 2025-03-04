import React from "react";
import "./index.css";
import { useState } from "react";

export default function Toast() {
  const [toastList, setToastlist] = useState([]);

  const handleClick = (type) => {
    const autoId = new Date().getTime();
    setToastlist([...toastList, { type, id: autoId }]);

    setTimeout(() => {
      handleDelete(autoId);
    }, 5000);
  };

  // splice not working as aspected why?
  const handleDelete = (id) => {
    setToastlist((prevList) => {
      const filtered = prevList.filter((toast) => toast.id != id);
      return filtered;
    });
  };

  return (
    <div className="toast">
      <div className="button-container">
        <div className="button">
          <button onClick={() => handleClick("success")}>success</button>
        </div>
        <div className="button">
          <button onClick={() => handleClick("info")}>info</button>
        </div>
        <div className="button">
          <button onClick={() => handleClick("warning")}>warning</button>
        </div>
        <div className="button">
          <button onClick={() => handleClick("error")}>error</button>
        </div>
      </div>

      {/* toast  */}
      <div className="toast-container">
        {toastList.map(({ type, id }) => {
          return (
            <div className={`toast-item ${type}`} key={id}>
              {type}
              <span onClick={() => handleDelete(id)}>X</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
