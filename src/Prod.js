import React from 'react';
export default function Prod({ prod }) {
    console.log("Item", prod);
    console.log("keys", Object.keys(prod));
  
    const renderElementWithSymbol = (element) => {
      let selectedClass = prod[element].isBlur ? "normal" : "blur";
      return (
        <p key={element} className={selectedClass}>
          {selectedClass === "normal" && (
            <span className="symbol">&#10003;</span>
          )}
          {selectedClass === "blur" && (
            <span className="symbol">&#10007;</span>
          )}
          {prod[element].value}
        </p>
      );
    };
  
    const renderSeparator = (element, index) => {
      return (
        <React.Fragment key={element}>
          {index > 0 && <span className="separator" />}
          {index === 0 ? <h6>{prod[element].value}</h6> : null}
          {index === 1 ? <h2>{prod[element].value}</h2> : null}
          {index >= 2 && renderElementWithSymbol(element)}
        </React.Fragment>
      );
    };
  
    return (
      <div className="Prod">
        <div className="card">
          {Object.keys(prod).map((element, index) => {
            return renderSeparator(element, index);
          })}
          <button type="button" className="btn btn-primary">
            Button
          </button>
        </div>
      </div>
    );
  }