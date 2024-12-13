import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { RxDashboard } from 'react-icons/rx'
import { SiDatabricks } from 'react-icons/si'
import { NavLink, Outlet } from 'react-router'

const Nav = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <header style={{ zIndex: 9999, backgroundColor:"#F8F8FF" }} className='sticky top-0 shadow-sm px-10 max-lg:px-2 py-2'>
                <nav className='flex items-center justify-between relative'>
                    <div className='flex items-center gap-1'>
                        <img
                            src="https://dlh.banyuwangikab.go.id/images/bwh.webp"
                            className='w-[110px] max-lg:w-[80px]'
                        />
                        <div className='flex flex-col'>
                            <h1 className='font-semibold text-lg max-lg:text-sm'>Studi Pengenalan Awal</h1>
                            <span className='text-sm text-slate-700 max-lg:text-xs'>Kabupaten Banyuwangi</span>
                        </div>
                    </div>
                    <div className='hidden max-lg:flex'>
                        <button
                            onClick={() => {
                                setOpen(!open)
                            }}
                        >
                            <FaBars />
                        </button>
                    </div>
                    <div className={`${open ? "" : "hidden"} absolute z-50 top-10 right-0 bg-white rounded-lg p-5 shadow-lg`}>
                        <div className='flex flex-col gap-3 text-base'>
                            <NavLink
                                to={'/'}
                                reloadDocument
                                className={({ isActive, isPending }) =>
                                    isActive ? "text-blue-600" : ''
                                }
                            >
                                <div className='flex items-center gap-1'>
                                    <RxDashboard 
                                        className='mt-0.5'
                                    /> Dashboard
                                </div>
                            </NavLink>
                            <NavLink
                                to={'/input-data'}
                                reloadDocument
                                className={({ isActive, isPending }) =>
                                    isActive ? "text-blue-600" : ''
                                }
                            >
                                <div className=' flex gap-x-1 items-center'>
                                    <div>
                                        <SiDatabricks
                                            size={18}
                                        />
                                    </div>
                                    <div>
                                        <span>Input Data</span>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className='flex max-lg:hidden items-center gap-5 max-lg:text-xs'>
                        <NavLink
                            className={({ isActive, isPending }) =>
                                isActive ? "border-b-[2px] border-indigo-500 px-2 pt-1 pb-2 text-indigo-800 text-base" : " rounded-lg px-2 pt-1 pb-2 text-gray-800 text-base"
                            }
                            to={'/'}
                            reloadDocument
                        >
                            <span>Dashboard</span>
                        </NavLink>
                        <NavLink
                            className={({ isActive, isPending }) =>
                                isActive ? "border-b-[2px] border-indigo-500 px-2 pt-1 pb-2 text-indigo-800 text-base" : " rounded-lg px-2 pt-1 pb-2 text-gray-800 text-base"
                            }
                            to={'/input-data'}
                            reloadDocument
                        >
                            <span>Input Data</span>
                        </NavLink>
                    </div>
                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default Nav
