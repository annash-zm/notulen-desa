import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import districts from '../districts.json'
import { CgNotes } from 'react-icons/cg'

const InputData = () => {

    const [options, setOptions] = useState([])

    const toOption = () => {
        var toption = []
        districts.filter(e => e.regency_id === '3510').map((item, idx) => (
            toption.push({
                value: 'id_' + item.id,
                label: item.name.toLowerCase()[0].toUpperCase() + item.name.substring(1).toLowerCase()
            })
        ))
        setOptions(toption)
    }
    useEffect(() => {
        toOption()
    },[])

    return (
        <section className='bg-indigo-50'>
            <div className='p-10 max-lg:p-5'>
                <div className='bg-white p-10 max-lg:p-5 rounded-lg'>
                    <h1 className='text-xl mb-5 font-bold'>
                        Input Data
                    </h1>
                    <div className='bg-indigo-50 p-5 flex-flex-col gap-5 border-[1px] border-indigo-500 rounded-lg'>
                        <div className='flex gap-2 items-center'>
                            <CgNotes 
                                size={20}
                                className='text-indigo-500'
                            />
                            <span className='font-semibold text-lg text-indigo-500'>Notes</span>
                        </div>
                        <span className='max-lg:text-xs'>
                            Reset Data terlebih dahulu sebelum menambahkan data yang baru 
                            <button className='bg-red-500 px-2 py-1 text-sm max-lg:text-xs max-lg:ml-1 text-white ml-2 rounded-lg'>
                                    Reset
                            </button>
                        </span>
                    </div>
                    <div className='grid grid-cols-2 max-lg:flex max-lg:flex-col max-lg:gap-2 gap-10'>
                        <div className='flex flex-col mt-5 w-1/2 max-lg:w-full'>
                            <span className='mb-2'>Kecamatan</span>
                            <Select
                                className="basic-single max-lg:w-full text-base"
                                classNamePrefix="select"
                                name="color"
                                isSearchable={true}
                                options={options}
                                defaultValue={options[0]}
                                onChange={(e) => {

                                }}
                            />
                        </div>
                        <div className='flex flex-col mt-5'>
                            <span className='mb-2'>Lokasi</span>
                            <input className='p-2 rounded-lg border-[1px] ' />
                        </div>
                    </div>


                    <div className='grid grid-cols-2 gap-10 max-lg:flex max-lg:flex-col max-lg:gap-2'>
                        <div className='flex flex-col mt-5'>
                            <span className='mb-2'>Waktu</span>
                            <input className='p-2 rounded-lg border-[1px] ' />
                        </div>
                        <div className='flex flex-col mt-5'>
                            <span className='mb-2'>Kegiatan</span>
                            <input className='p-2 rounded-lg border-[1px] ' />
                        </div>
                    </div>

                    <div className='flex flex-col mt-5 w-1/4 max-lg:w-full'>
                        <span className='mb-2'>Upload Excel</span>
                        <input type='file' className='' />
                    </div>
                    <div className=' mt-10'>
                        <button type='submit'
                            className='rounded-lg bg-blue-500 px-3 py-2 text-white'
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InputData
