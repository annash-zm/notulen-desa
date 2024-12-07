import React from 'react'

const Nav = () => {
    return (
        <header style={{ zIndex: 9999 }} className='sticky top-0 bg-white shadow-sm px-10 py-5'>
            <nav className='flex items-center justify-between'>
                <div>
                    <h1 className='font-semibold text-lg max-lg:text-xs'>Notulen Desa - Kab. Banyuwangi</h1>
                </div>
                <div className='flex max-lg:hidden items-center gap-5 max-lg:text-xs'>
                    <span>Maps</span>
                    <span>Layer</span>
                </div>
            </nav>

        </header>
    )
}

export default Nav
