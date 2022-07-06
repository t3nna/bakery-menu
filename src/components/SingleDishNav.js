import React from "react";
import {ChevronLeftIcon, ShareIcon} from "@heroicons/react/outline";
import {Link} from "react-router-dom";

export default function SingleDishNav() {
    return (
        <nav className={'single-dish-nav'}>

            <Link to={'/'} className="icon">
                <ChevronLeftIcon/>
            </Link>
            <div className="icon">
                <ShareIcon/>
            </div>
        </nav>
    )
}