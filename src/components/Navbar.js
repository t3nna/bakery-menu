import React from "react";

import nav from "../data";
import headImg from '../images/img.png'
import {Link} from "react-router-dom";

import '../styles/navbar.scss'
import {CollectionIcon, MenuIcon, ViewGridIcon} from "@heroicons/react/outline";
import TypeNavigation from "./TypeNavigation";

export default function Navbar({ setGrid, setAltMenu, altMenu, setType, data}) {
    return (
        <nav className={'nav'}>
            <div className="head-img-wrapper">
                <div className="burgers">
                    <div className="icon" onClick={() =>setAltMenu(!altMenu)}>
                        <MenuIcon/>
                    </div>
                    <div className="icon" onClick={() => {
                        setGrid(true)
                        setAltMenu(false)
                    }}>
                        <ViewGridIcon/>
                    </div>
                    <div className="icon" onClick={()=> {
                        setGrid(false)
                        setAltMenu(false)
                    }}>
                        <CollectionIcon/>
                    </div>

                </div>
                <div className="restaurant-title">
                    <h3>Batumi</h3>
                </div>
                <div className="food-sections">
                    {
                        nav.map(type =>(
                            <TypeNavigation type={type} key={type.type} setType={setType}/>
                        ))
                    }

                {/*    <Link to={'/food'}>*/}
                {/*        <h2>Fyyd</h2>*/}
                {/*    </Link>*/}
                {/*    <div className="menu-spacer"/>*/}
                {/*    <Link to={'/drinks'}>*/}
                {/*        <h2>Drinks</h2>*/}

                {/*    </Link>*/}
                {/*    <div className="menu-spacer"/>*/}
                {/*    <Link to={'deserts'}>*/}
                {/*        <h2>Deserts</h2>*/}
                {/*    </Link>*/}
                </div>

            </div>
            <div className="inner-navigation">
                {
                    data.map(section =>(
                        <a href={`/#${section.category.toLowerCase()}`} key={section.category}>
                            <h4>
                                {
                                    section.category
                                }
                            </h4>

                        </a>
                    ))
                }

            </div>
        </nav>
    )
}