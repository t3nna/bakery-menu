import React from "react";

export default function AltFoodTypeSection({category}){
    return(
        <div className="alt-menu-category">
            <h3 className="alt-menu-category__title" id={category.category.toLowerCase()}>
                {
                    category.category
                }
            </h3>
            <div className="alt-menu-category__container">

                {
                    category.dishes.map(element =>(
                        <div className="alt-menu-category__element">
                            <div className="element__details">
                                <h4>
                                    {
                                        element.name
                                    }
                                </h4>
                                <p>
                                    {
                                        element.longDesc
                                    }
                                </p>
                            </div>
                            <div className="element__price">
                                <h3>
                                    {
                                        element.price
                                    } zł
                                </h3>
                            </div>
                        </div>
                    ))
                }

                {/*<div className="alt-menu-category__element">*/}
                {/*    <div className="element__details">*/}
                {/*        <h4>Pasta with mushrooms</h4>*/}
                {/*        <p>24 months Prosciutto from Langhirano, Bufala Ricotta with Pistachio Pesto &amp; Foccacia</p>*/}
                {/*    </div>*/}
                {/*    <div className="element__price">*/}
                {/*        <h3>74$</h3>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="alt-menu-category__element">*/}
                {/*    <div className="element__details">*/}
                {/*        <h4>Pasta with mushrooms</h4>*/}
                {/*        <p>24 months Prosciutto from Langhirano, Bufala Ricotta with Pistachio Pesto &amp; Foccacia</p>*/}
                {/*    </div>*/}
                {/*    <div className="element__price">*/}
                {/*        <h3>74$</h3>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>

    )
}