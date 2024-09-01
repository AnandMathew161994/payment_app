
import React from "react"

export const Headerbox = React.memo(
    ({label})=>{

        return <div className=" text-3xl font-bold"> 
            {label}
        </div>
    }
)