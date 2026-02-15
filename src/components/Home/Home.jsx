import React from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { Link } from "react-router-dom";
import AnimatedContent from "../../AnimatedContent/AnimatedContent";
export default function Home() {
    const [text] = useTypewriter({
        words: ["Daily", "Smart", "Tomorrow", "Always"],
        loop: 0,
        typeSpeed: 200,
        deleteSpeed: 80,
        delaySpeed: 1000
    })
    return (
        <>
            <div className="h-screen  flex justify-center items-center">
                <AnimatedContent
                    distance={100}
                    direction="vertical"
                    reverse={false}
                    duration={2}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.1}
                    delay={0}
                >
                    <div className="bg-white/5 backdrop-blur-md w-full h-auto md:w-[750px] md:h-[400px] md:pt-[70px] rounded-2xl flex flex-col p-[70px] gap-5 border border-white/20 shadow-lg">

                    <div className=" text-2xl font-semibold tracking-wide">
                        <span className="text-gray-400">Save Money </span>
                        <span className="text-gray-200">{text}</span>
                        <span className="text-gray-400">
                            <Cursor cursorStyle="|" />
                        </span>
                    </div>
                    <div className=" space-y-4">
                        <h2 className="text-3xl font-bold text-white">
                            Spend Less, Save More
                        </h2>
                        <p className="text-gray-400  max-w-[600px] text-[20px]">
                            MyExpManager makes it easy to track your income and expenses, giving you a
                            clear picture of your finances so you can spend smarter and save better.
                        </p>
                    </div>
                    <div>
                        <Link to="/account">
                            <button className="px-6 py-3 rounded-[25px] border-[1px] border-[#b4b4b461] bg-gray-700 text-gray-100 font-semibold hover:bg-gray-600 hover:text-white transition-colors duration-300 shadow-md">
                                Let&apos;s Start
                            </button>
                        </Link>

                    </div>
                </div>
                </AnimatedContent>
                
            </div>

        </>
    );
}