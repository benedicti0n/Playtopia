import React from "react"
// import { Instagram, Facebook } from "lucide-react"
import '../Styles/Footer.css'

const Footer = () => {
    return (
        <footer className="h-[50%] w-screen relative" style={{backgroundImage: 'url(/footer.jpg)'}} >
            <div className=" w-full px-6 py-10 " style={{backdropFilter: 'blur(30px)'}}>
                <div className="lg:flex w-full">
                    <div className="w-full  lg:w-2/5">
                        <div className="px-6 flex justify-evenly items-center">
                            <a href="#">
                                <img className="w-auto h-[120px]" src="/iem_logo_white.png" alt="iem logo" />
                            </a>
                            <a href="#">
                                <img className="w-auto h-[120px]" src="/Playtopia-Logo-PNG-2.svg" alt="playtopia logo" />
                            </a>
                        </div>
                    </div>
                    <div className="mt-6 lg:mt-0 lg:flex-1 ">
                        <div className="textArea grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
                            <div>
                                <h3 className="text-gray-700 uppercase dark:text-white ">Faculty Coordinator</h3>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Teacher 1</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Teacher 2</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Teacher 3</a>
                            </div>
                            <div>
                                <h3 className="text-gray-700 uppercase dark:text-white">Student Coordinator</h3>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Student 1</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Student 2</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Student 3</a>
                            </div>
                            <div>
                                <h3 className="text-gray-700 uppercase dark:text-white">Products</h3>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Instagram</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Facebook</a>
                            </div>
                            <div>
                                <h3 className="text-gray-700 uppercase dark:text-white">Location</h3>
                                <a href="#">
                                    <img className="w-auto h-[120px] rounded-md" src="/Map.png" alt="iem logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-px my-4 bg-gray-200 border-none dark:bg-gray-700" />
                <div>
                    <p className="text-center text-gray-500 dark:text-gray-400">© Playtopia 2024 - All rights reserved</p>
                </div>
            </div>
        </footer>

    )
}


export default Footer