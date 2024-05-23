import React from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {


    const navigate=useNavigate();
    const sub =(e)=>{
        console.log("ddddd")
        navigate("/")
    }
    return <div>
        <h1 className=""text-2xl text-blue-500></h1>
        {/* <form className="bg-200"  onSubmit={sub} action="">
            <input type="submit"  placeholder="hello"/>
        </form> */}
        <button onClick={ navigate("/")}> bbb</button>
    </div>;
};

export default Users;
