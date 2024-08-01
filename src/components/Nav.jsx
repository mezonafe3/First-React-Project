import { useState } from "react"
import { NavLink ,Link} from "react-router-dom"


export function NavBar(){

    let [visible,setVisibilty]=useState(false)

    function toggle(){
        if(visible==false){
            setVisibilty(true)
        }else if(visible==true){
            setVisibilty(false)
        }
    }


    return(
        <>
        <nav className="">
        <div className="nav bg-[#2c3e50] z-10 fixed top-0 left-0 right-0 flex items-center justify-between p-8 flex-wrap lg:justify-around">
            <div className="logo">
                <h1 className="text-2xl text-white font-bold font-custom"><Link to={"/"} >React Start</Link></h1>
            </div>
            <div className="list  hidden lg:block">
                <NavLink className="ml-10 text-white font-bold font-custom " to={"Protofolio"} >PORTFOLIO</NavLink>
                <NavLink  className="ml-10 text-white font-bold font-custom transition delay-150 hover:text-[#1abc9c]" to={"ABOUT"}>ABOUT</NavLink>
                <NavLink className="ml-10 text-white font-bold font-custom transition delay-150 hover:text-[#1abc9c]" to={"Contact"}>CONTACT</NavLink>
               
            </div>


            <div className="br-btn block cursor-pointer lg:hidden " onClick={toggle}>
                <i className="fa-solid fa-bars fa-2x text-white  "></i>
            </div>
            
            <div className={`drop-list w-full py-5 relative  animate-flip-down  lg:hidden  ${visible ? 'hidden  '  : null} `} id="drop-list" >
                <ul  className="list-none relative">
                    <li className="w-full  bg-[#2c3e50]  py-5"><a className=" text-white font-bold font-custom bg-[#1abc9c] py-4 pr-[80%] pl-2 rounded-md" href="">PORTFOLIO</a></li>
                    <li className="w-full  bg-[#2c3e50]  py-5"> <a className=" text-white font-bold font-custom transition delay-150 hover:text-[#1abc9c]" href="">ABOUT</a></li>
                    <li className="w-full  bg-[#2c3e50]  py-5"><a className=" text-white font-bold font-custom transition delay-150 hover:text-[#1abc9c]" href="">CONTACT</a></li>
                </ul>
            </div>
        </div>
       
        </nav>
        </>
    )
}