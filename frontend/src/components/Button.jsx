

export const Buttoncomp = ({label,onClick})=>{

    return <div className=" border-blue bg-blue-500 flex justify-center font-bold py-3"> 
        <button type="button" onClick ={onClick}> {label } </button>
    </div>
}