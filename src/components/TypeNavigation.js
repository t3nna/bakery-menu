import React from "react";

export default function TypeNavigation({type, setType}) {
    return (
        <>
            <h2 onClick={() => setType(type.type)} className={'type-navigation'}>
                {type.type}
            </h2>
            <div className="menu-spacer"/>
        </>
    )
}