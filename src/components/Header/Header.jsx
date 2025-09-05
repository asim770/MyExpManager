import React from "react";
import { Link,NavLink } from "react-router-dom";
import CustomizedSwitches from "../CustomizedSwitches/CustomizedSwitches";

export default function Header(){
    return(
        <>
        
        <header className="shadow sticky z-50 top-0 m-3.5 bg-[#708090]">
            <nav className="bg-[#696969] border-gray-200 rounded-tl-full rounded-br-full px-4 lg:px-6 py-2.5 h-max shadow-xl/30 flex flex-row md:flex md:flex-row justify-between">
                    <div className=" order-1 h-max w-max bg-darkslategrey">
                        <h1 className="font-ab md:text-[32px] text-[25px] text-rgrey text-shadow-lg/30">MyExpManager</h1>
                    </div>
                    <div className="order-2 md:flex md:justify-center hidden">
                        <ul className="flex flex-row ">
                            <li className="font-roboto text-[20px] text-asure">
                                <NavLink to="/"
                                className={({isActive})=>`inline-block py-2 pl-3 pr-4 ${isActive ?"text-asure bg-[#808080] text-shadow-lg/30 shadow-xl/20" :"text-grey-700" } duration-200 border-b border-gray-100 hover:bg-[#808080] backdrop-blur-sm lg:border-0 hover:text-asure rounded-l-full hover:shadow-xl/20`} >
                                    Home
                                </NavLink>
                                
                            </li>
                            <li className="font-roboto text-[20px] text-asure">
                                <NavLink to="/history" 
                                className={({isActive})=> ` block py-2 pl-3 pr-4 ${isActive ?"text-asure bg-[#808080] shadow-xl/20 text-shadow-lg/30" :"text-grey-700"} duration-200 border-b border-gray-100 hover:bg-[#808080] lg:border-0 hover:shadow-xl/20 hover:text-asure backdrop-blur-sm`}>
                                    History
                                </NavLink>
                                
                            </li>
                            <li className="font-roboto text-[20px] text-asure">
                                <NavLink to="/balance"
                                className={({isActive})=>`block py-2 pr-4 pl-3 ${isActive ?"text-asure bg-[#808080] shadow-xl/20 text-shadow-lg/30" :"text-grey-700"} duration-200 border-b border-gray-100 hover:bg-[#808080] lg:border-0 hover:text-asure rounded-r-full hover:shadow-xl/20 backdrop-blur-sm`}>
                                    Balance
                                </NavLink>
                                
                            </li>
                            
                        </ul>
                    </div>
                    <div className="md:hidden order-4">hello</div>
                    <div className="hidden md:block order-3" >
                        <CustomizedSwitches />
                    </div>
            </nav>
        </header>
        </>
    );
}