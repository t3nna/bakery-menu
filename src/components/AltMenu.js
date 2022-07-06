import React from "react";
import FoodTypeSection from "./FoodTypeSection";
import AltFoodTypeSection from "./AltFoodTypeSection";

export default function AltMenu({data}){
    return(
        <div className={'alt-menu'}>

            {
                data.map(category => (
                    <AltFoodTypeSection category={category} key={category.category}/>
                ))
            }

        </div>
    )
}