import React from "react";

import SingleDishNav from "./SingleDishNav";
import '../styles/single-dish.scss'
import {useParams} from "react-router-dom";
import data from "../data";

export default function SingleDish(){
    const params = useParams()
    console.log(params.id)
    const ids = data.map(item =>{
        return item.items.map(item => item.dishes.map(item=>item.id))
    })

    function flatten (arr){
        let res = []
        for (let i=0; i<arr.length; i++){
            if (Array.isArray(arr[i])){
                const flat = flatten(arr[i])
                for (let j=0; j<flat.length; j++){
                    res.push(flat[j])
                }
            }
            else {
                res.push(arr[i])
            }

        }

        return res
    }

    const res = flatten(ids)

    const dish = res.filter(item => item === params.id)


    const dishData = flatten(data.map(item =>{
        return item.items.map(item => item.dishes.filter(item=>item.id === params.id))
    }))

    const flatDishData= dishData[0]
    console.log(flatDishData)





    if (!dish[0]){
        return (
            <h2 style={{color: 'white'}}>
                Page not found
            </h2>
        )
    }

    return(
        <div className={'single-dish'}
        style={{
            backgroundImage: `linear-gradient(
                          rgb(0, 0, 0), 10%,
                          rgba(0, 0, 0, 0.9) 11%,
                          rgba(0, 0, 0, 0.8) 15%,
                          rgba(0, 0, 0, 0.2) 30%,
                          rgba(0, 0, 0, 0.2) 70%,
                          rgba(0, 0, 0, 0.9) 90%,
                          rgb(0, 0, 0) 100%),

          url("${flatDishData.img}")`
        }}
        >
            <SingleDishNav/>

            <div className="single-dish__info">
                <h3>{
                    flatDishData.name
                }</h3>
                <p>
                    {
                        flatDishData.longDesc
                    }
                </p>
                <h4>
                    {
                        flatDishData.price
                    } zł
                </h4>
            </div>


        </div>
    )
}