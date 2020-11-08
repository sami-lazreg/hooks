import React from 'react'

export default function Filter(props) {
    return (
        <div>
        <div>
            <input type="text" onChange={props.getFilterName}></input>
            <span>search by name</span>
        </div>
        <div>
        <input type="text" onChange={(e)=>{
            props.getFilterStar(e)
            props.getFilterStar2(e)

        }} ></input>
        <span>search by rate star</span>
    </div>
    
    </div>
    )
}
