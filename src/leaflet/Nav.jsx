import React from 'react'

const Nav = () => {
    return (
        <header style={{ zIndex: 9999 }} className='sticky top-0 bg-white shadow-sm px-10 max-lg:px-5 py-5'>
            <nav className='flex items-center justify-between'>
                <div>
                    <h1 className='font-semibold text-lg max-lg:text-xs'>Notulen Desa - Kab. Banyuwangi</h1>
                </div>
                <div className='flex max-lg:hidden items-center gap-5 max-lg:text-xs'>
                    <button className='border-b-[2px] border-indigo-500 px-2 pt-1 pb-2 text-indigo-800 text-base'>
                        <span>Dashboard</span>
                    </button>
                    <button className=' rounded-lg px-2 pt-1 pb-2 text-gray-800 text-base'>
                        <span>Input Data</span>
                    </button>
                </div>
            </nav>

        </header>
    )
}

export default Nav
