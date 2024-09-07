export const Appbar = ({firstname = '',lastname='' ,balance= 0})=>{
    return <div>
           <div className=" flex justify-between px-3 items-center  border-b-2 border rounded border-gray-500 shadow-md ">
                <div className="   text-xl  font-bold">
                Welcome {firstname}
                </div>
                <div className="font-bold">
                    Your Balance: ${balance}
                </div>
                <div className="flex p-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 text-md text-white bg-indigo-500 rounded-full ">
                        {getFirstLetter(firstname) } {getFirstLetter(lastname)}
                    </div>  
                    <div className="flex items-center text-md p-2">
                    Signout
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                    </div>

                </div>
               
           </div>
    </div>
}


const  getFirstLetter = (a) => {
    return a.charAt(0).toUpperCase();
  }