import React from 'react'
import Link from 'next/link'


type Props = {}

function Sidebar({}: Props) {
  return (
    <div>
        <div className="fixed left-0 top-0 w-64 h-full bg-gray-700 p-4 z-50 sidebar-menu transition-transform">
            <Link href="#" className="flex items-center pb-4 border-b border-b-gray-800">
                <h2 className="font-bold text-2xl text-nest-orange">NEST <span className="text-white px-2 rounded-md">RENOV</span></h2>
            </Link>
            <ul className="mt-4">
                <span className="text-gray-400 font-bold">ADMIN</span>
                <li className="mb-1 group">
                    <Link href="/" className="flex font-semibold items-center py-2 px-4 text-white hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                        <i className="ri-home-2-line mr-3 text-lg"></i>
                        <span className="text-sm">Dashboard</span>
                    </Link>
                </li>
                <li className="mb-1 group">
                    <Link href="/calendar" className="flex font-semibold items-center py-2 px-4 text-white hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
                        <i className='bx bx-user mr-3 text-lg'></i>                
                        <span className="text-sm">Calendrier</span>
                        <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
                    </Link>
                    <ul className="pl-7 mt-2 hidden group-[.selected]:block">
                        <li className="mb-4">
                            <Link href="" className="text-white text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">All</Link>
                        </li> 
                        <li className="mb-4">
                            <Link href="" className="text-white text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Roles</Link>
                        </li> 
                    </ul>
                </li>
                <li className="mb-1 group">
                    <Link href="" className="flex font-semibold items-center py-2 px-4 text-white hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                        <i className='bx bx-list-ul mr-3 text-lg'></i>                
                        <span className="text-sm">Activities</span>
                    </Link>
                </li>
                <span className="text-gray-400 font-bold">MS ENERGIES</span>
                <li className="mb-1 group">
                    <Link href="/ms-renoves/planning" className="flex font-semibold items-center py-2 px-4 text-white hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                        <i className='bx bx-archive mr-3 text-lg'></i>                
                        <span className="text-sm">Planning</span>
                    </Link>
                </li>
                <li className="mb-1 group">
                    <Link href="/ms-energie/planning" className="flex font-semibold items-center py-2 px-4 text-white hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
                        <i className='bx bxl-blogger mr-3 text-lg'></i>                 
                        <span className="text-sm">Interventions</span>
                        <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
                    </Link>
                    <ul className="pl-7 mt-2 hidden group-[.selected]:block">
                        <li className="mb-4">
                            <Link href="" className="text-white text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">All</Link>
                        </li> 
                        <li className="mb-4">
                            <Link href="" className="text-white text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Categories</Link>
                        </li> 
                    </ul>
                </li>
                <span className="text-gray-400 font-bold">PERSONAL</span>
                <li className="mb-1 group">
                    <Link href="" className="flex font-semibold items-center py-2 px-4 text-white hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                        <i className='bx bx-bell mr-3 text-lg' ></i>                
                        <span className="text-sm">Notifications</span>
                        <span className=" md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-600 bg-red-200 rounded-full">5</span>
                    </Link>
                </li>
                <li className="mb-1 group">
                    <Link href="" className="flex font-semibold items-center py-2 px-4 text-white hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                        <i className='bx bx-envelope mr-3 text-lg' ></i>                
                        <span className="text-sm">Messages</span>
                        <span className=" md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-600 bg-green-200 rounded-full">2 New</span>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay"></div>

    </div>
  )
}

export default Sidebar