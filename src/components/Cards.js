import React from "react";

function Card(props) {
    return(
        <div class="card" style={{width: "18rem"}}>
        <img class="card-img-top" src={props.imgsrc} alt={props.alt} />
        <div class="card-body">
        <h1>{props.name}</h1>
          <p class="card-text">{props.price}</p>
        </div>
      </div>
    );
}

export default Card;