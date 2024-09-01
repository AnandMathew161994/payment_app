import React from "react"

export const Inputbox = React.memo(({label,placeholder,onChange})=>{

    return <div className=" text-l font-medium text-left py-3 px-2 "> 
       <div>{label}
       </div>
       <input  onChange= {onChange} placeholder={placeholder} className="w-full px-2 py-1 border rounded border-slate-200 text-left" />
    </div>
})