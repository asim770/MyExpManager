import React from "react";
import { Link,NavLink } from "react-router-dom";

export default function Header(){
    return(
        <>
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 h-40">
                <div className="flex justify-evenly">
                    <div className="w-2.5 order-1">
                        <h1>MyExpManager</h1>
                    </div>
                    <div className="order-2">
                        <ul>
                            <li>
                                <NavLink 
                                className={({isActive})=>`block py-2 pr-4 pl-3 ${isActive ?"text-orange-700" :"text-grey-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
                                    Home
                                </NavLink>
                                
                            </li>
                            <li>
                                <NavLink 
                                className={({isActive})=> `block py-2 pr-4 pl-3 ${isActive ?"text-orange-700" :"text-grey-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
                                    History
                                </NavLink>
                                
                            </li>
                            <li>
                                <NavLink 
                                className={({isActive})=>`block py-2 pr-4 pl-3 ${isActive ?"text-orange-700" :"text-grey-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
                                    Balance
                                </NavLink>
                                
                            </li>
                            
                        </ul>
                    </div>
                    {/* <div className="order-3">

                    </div> */}
                </div>
            </nav>
        </header>
        </>
    );
}