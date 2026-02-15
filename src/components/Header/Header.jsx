import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CustomizedSwitches from "../CustomizedSwitches/CustomizedSwitches";
import Hamburger from 'hamburger-react'
import { motion, AnimatePresence } from "motion/react"
import ShinyText from "../ShinyText/ShinyText";


export default function Header() {
    const [isOpen, setOpen] = useState(false)

    function handleButton(e) {
        e.preventDefault();
        setOpen(!isOpen);
    }
    const mobileCSS = ({ isActive }) => `
    p-[10px] text-[19px] backdrop-blur-md font-ab font-medium
    ${isActive ? "text-gray-400" : "text-amber-50"}
    `
    return (
        <>

            <header className="sticky top-0 z-50 m-3.5 bg-slate-800/40 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg">
                <nav className="px-4 lg:px-6 py-2.5 flex flex-row justify-between">
                    <div className=" order-1 flex justify-center items-center h-max w-max bg-darkslategrey">
                        <ShinyText
                            text="MyExpManager"
                            className="text-3xl flex  sm:text-4xl md:text-6xl lg:text-3xl font-bold text-center"
                            speed={2}
                            delay={0}
                            color="#b5b5b5"
                            shineColor="#ffffff"
                            spread={120}
                            direction="left"
                            yoyo={false}
                            pauseOnHover={false}
                            disabled={false}
                        />
                    </div>
                    <div className="order-2 md:flex md:justify-center hidden">
                        <ul className="flex flex-row ">
                            <li className="font-roboto text-[20px] text-asure">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `inline-block py-2 pl-3 pr-4 duration-200 rounded-l-full
                                    ${isActive
                                            ? "text-asure bg-white/20 backdrop-blur-md shadow-xl border border-white/20"
                                            : "text-grey-700 hover:bg-white/10 hover:backdrop-blur-sm"
                                        }`
                                    }
                                >
                                    Home
                                </NavLink>

                            </li>
                            <li className="font-roboto text-[20px] text-asure">
                                <NavLink to="/history"
                                    className={({ isActive }) => ` block py-2 pl-3 pr-4 
                                    ${isActive
                                            ? "text-asure bg-white/20 backdrop-blur-md shadow-xl border border-white/20"
                                            : "text-grey-700 hover:bg-white/10 hover:backdrop-blur-sm"
                                        } duration-200 border-b border-gray-100 hover:bg-white/10 lg:border-0 hover:shadow-xl/20 hover:text-asure backdrop-blur-sm`}>
                                    History
                                </NavLink>

                            </li>
                            <li className="font-roboto text-[20px] text-asure">
                                <NavLink to="/balance"
                                    className={({ isActive }) => `block py-2 pr-4 pl-3 
                                    ${isActive
                                            ? "text-asure bg-white/20 backdrop-blur-md shadow-xl border border-white/20"
                                            : "text-grey-700 hover:bg-white/10 hover:backdrop-blur-sm"
                                        } duration-200 border-b border-gray-100 hover:bg-white/10 lg:border-0 hover:text-asure rounded-r-full hover:shadow-xl/20 backdrop-blur-sm`}>
                                    Balance
                                </NavLink>

                            </li>

                        </ul>
                    </div>

                    <div className="md:hidden order-4 h-[8px]"><button onClick={handleButton}><Hamburger toggled={isOpen} toggle={setOpen} /></button></div>
                    <div className="hidden md:block order-3" >
                        <CustomizedSwitches />
                    </div>
                </nav>
            </header>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ x: "100%" }}   // start offscreen to the right
                        animate={{ x: "50%" }}        // slide into view
                        exit={{ x: "100%" }}      // slide back out to the right
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="flex flex-col  pl-[1px] drop-shadow-xl/50 bg-white/20 "

                    >
                        <NavLink to="/" onClick={() => { setOpen(!isOpen) }} className={({ isActive }) =>
                            mobileCSS({ isActive }) + " border-b-[1px] border-[#282828]"}>Home</NavLink>
                        <NavLink to="/history" onClick={() => { setOpen(!isOpen) }} className={({ isActive }) =>
                            mobileCSS({ isActive }) + " border-b-[1px] border-[#282828]"}>History</NavLink>
                        <NavLink to="/balance" onClick={() => { setOpen(!isOpen) }} className={mobileCSS}> Balance</NavLink>
                    </motion.div>
                )}
            </AnimatePresence>


        </>
    );
}

