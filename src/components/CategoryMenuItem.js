import React from "react";
import {Link} from "react-router-dom";

export default function CategoryMenuItem({dish}){
    return(
        <Link to={`/${dish.id}`}   className="menu-category__element"
              style={{
                  backgroundImage: `
                             linear-gradient(rgba(0, 0, 0, 0), 80%, rgb(0, 0, 0)),
          url(${dish.img})
                             `
              }}>
            <div className="element__title">
                <h4>{dish.name}</h4>
                <h3>{dish.price}</h3>
            </div>
        </Link>
    )
}