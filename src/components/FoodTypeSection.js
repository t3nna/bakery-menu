import React from "react";
import CategoryMenuItem from "./CategoryMenuItem";

export default function FoodTypeSection({category, grid}) {
    return (
        <section className="menu-category" >
            <h3 className="menu-category__title" id={category.category.toLowerCase()}>
                {category.category}
            </h3>

            <div
                className={grid ? 'menu-category__container ' : 'menu-category__container menu-category__container_alt'}>
                {
                    category.dishes.map((dish) => (
                        <CategoryMenuItem dish={dish} key={dish.id}/>
                    ))
                }
            </div>

        </section>
    )
}