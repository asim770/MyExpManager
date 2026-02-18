import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Balance() {
    return (
        <>
            <div className="h-screen flex w-screen">
                <div className="sideBar flex flex-col h-screen text-blue-50 bg-amber-300 ">
                    <ul className="w-full">
                        <li className="w-full">
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    `block w-full p-[10px] text-center py-2 pl-3 pr-4 duration-200 
                                    ${isActive
                                        ? "text-asure bg-white/20 backdrop-blur-md shadow-xl border border-white/20"
                                        : "text-grey-700 hover:bg-white/10 hover:backdrop-blur-sm"
                                    }`
                                }
                            >
                                Dasboard
                            </NavLink>
                        </li>
                        <li className="w-full">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `block w-full py-2 pl-3 text-center pr-4 duration-200 
                                                                        ${isActive
                                        ? "text-asure bg-white/20 backdrop-blur-md shadow-xl border border-white/20"
                                        : "text-grey-700 hover:bg-white/10 hover:backdrop-blur-sm"
                                    }`
                                }
                            >
                                Balance Card
                            </NavLink>
                        </li>
                        <li className="w-full">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `block w-full py-2 pl-3 pr-4 text-center duration-200 
                                                            ${isActive
                                        ? "text-asure bg-white/20 backdrop-blur-md shadow-xl border border-white/20"
                                        : "text-grey-700 hover:bg-white/10 hover:backdrop-blur-sm"
                                    }`
                                }
                            >
                                Expense
                            </NavLink>
                        </li>
                        <li className="w-full">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `block w-full py-2 pl-3 text-center pr-4 duration-200 
                                                            ${isActive
                                        ? "text-asure bg-white/20 backdrop-blur-md shadow-xl border border-white/20"
                                        : "text-grey-700 hover:bg-white/10 hover:backdrop-blur-sm"
                                    }`
                                }
                            >
                                Lend
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `block w-full py-2 pl-3 text-center pr-4 duration-200 
                                                            ${isActive
                                        ? "text-asure bg-white/20 backdrop-blur-md shadow-xl border border-white/20"
                                        : "text-grey-700 hover:bg-white/10 hover:backdrop-blur-sm"
                                    }`
                                }
                            >
                                Borrow
                            </NavLink>
                        </li>
                    </ul>

                </div>
                <div>

                </div>
            </div>
        </>
    );
}