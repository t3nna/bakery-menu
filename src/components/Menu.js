import React from "react";

import '../styles/menu.scss'
import FoodTypeSection from "./FoodTypeSection";

export default function Menu({grid, data}) {
    console.log(data)
    return (
        <div className={'menu'}>
            {
                data.map(category => (
                    <FoodTypeSection category={category} key={category.category} grid={grid}/>
                ))
            }
            {/*<section className="menu-category">*/}
            {/*    <h2 className="menu-category__title">*/}
            {/*        Pasta*/}
            {/*    </h2>*/}

            {/*    <div*/}
            {/*        className={grid ? 'menu-category__container ' : 'menu-category__container menu-category__container_alt'}>*/}
            {/*        /!*<div className={'menu-category__container menu-category__container-'} >*!/*/}


            {/*        <div className="menu-category__element">*/}
            {/*            <div className="element__title">*/}
            {/*                <h4>Salad</h4>*/}
            {/*                <h3>46$</h3>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="menu-category__element">*/}
            {/*            <div className="element__title">*/}
            {/*                <h4>Salad</h4>*/}
            {/*                <h3>46$</h3>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="menu-category__element">*/}
            {/*            <div className="element__title">*/}
            {/*                <h4>Salad</h4>*/}
            {/*                <h3>46$</h3>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="menu-category__element">*/}
            {/*            <div className="element__title">*/}
            {/*                <h4>Salad</h4>*/}
            {/*                <h3>46$</h3>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="menu-category__element">*/}
            {/*            <div className="element__title">*/}
            {/*                <h4>Salad</h4>*/}
            {/*                <h3>46$</h3>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*</section>*/}
        </div>
    )
}