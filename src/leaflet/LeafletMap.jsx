


import { AiOutlineClockCircle } from 'react-icons/ai'
import { ImLocation } from 'react-icons/im'

import { useEffect, useState } from 'react'

import data from '../data/data.json'
import { CgNotes } from 'react-icons/cg'
import Select from 'react-select'
import MapComp from './MapComp'
import Nav from './Nav'
//import Swal from 'sweetalert2'


const LeafletMap = () => {
    const [regulasi, setRegulasi] = useState('id3510100')
    const [village, setVillage] = useState(data?.find(e => e.id === regulasi)?.data?.content[1].id_village)
    const [category, setCategory] = useState(0)

    const [select, setSelect] = useState("req")

    const options = [
        { value: 0, label: 'Regulasi Kebijakan' },
        { value: 1, label: 'Inovasi Kelembagaan Pengelolaan' },
        { value: 2, label: 'Tata Kelola Keuangan' },
        { value: 3, label: 'Kesiapan Infrastruktur dan Teknologi' },
        { value: 4, label: 'Dinamika Partisipasi Masyarakat/Perilaku Masyarakat' },
    ]

    const [nameCat, setNameCat] = useState(options[category].label)
    //console.log(regulasi)

    const [content, setContent] = useState([])
    //const [clickMap, setClickMap] = useState()

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        //if idDistrict exist

        //const vill = data?.find(e => e.id === regulasi)?.data?.content?.filter(e => e.id_village === village)?.length
        //const dist = data?.filter(e => e.id === regulasi)?.length
        
        data?.find(e => e.id === regulasi)?.data?.content.length > 0 &&
            setContent(data?.find(e => e.id === regulasi)?.data?.content)
        setTimeout(()=>{
            setLoading(false)
        }, 300)
    })


    return (
        <section className='flex flex-col'>
            <div className='bg-indigo-50 '>
                <div className='px-10 max-lg:px-5 mt-5'>
                    <div className='bg-indigo-100 flex flex-col rounded-lg border-[1px] border-indigo-500 p-3'>
                        <div className='flex items-center gap-1 '>
                            <CgNotes
                                size={18}
                                className='text-indigo-500'
                            />
                            <span className='font-bold text-lg text-indigo-500 max-lg:text-sm'>Petunjuk</span>
                        </div>
                        <span className='font-normal text-slate-700 max-lg:text-xs max-lg:mt-2'>Klik pada map untuk melihat data setiap desa di kecamatan yang dipilih</span>
                    </div>
                </div>
                <div className='grid grid-cols-2 max-lg:flex max-lg:flex-col'>
                    <MapComp layer={data} setLoading={setLoading} setRegulasi={setRegulasi} setVillage={setVillage} />
                    {!loading ?
                        <div className='bg-white rounded-lg my-5 mx-10 max-lg:mx-5 border-[1px] border-black pb-5 max-lg:text-xs'>
                            <div className='flex flex-col px-5 pt-5 mb-3'>
                                <h1 className='font-semibold text-xl max-lg:text-base max-lg:leading-tight max-lg:mb-2'>Kec. {data?.filter(e => e.id === regulasi)[0]?.district} - {data?.filter(e => e.id === regulasi)[0]?.data?.content?.filter(e => e.id_village === village)[0]?.name_village}</h1>
                                <span className='text-sm max-lg:text-xs'>Diskusi Kelompok Terarah “Studi Awal Perilaku Pengelolaan Sampah Tingkat Desa”</span>
                                <div className='flex items-center gap-2 max-lg:flex-col max-lg:items-start max-lg:gap-0'>
                                    <div className='flex items-center gap-1 mt-3 text-gray-700'>
                                        <AiOutlineClockCircle
                                            size={16}
                                            className=''
                                        />
                                        <span className='text-xs'>
                                            {
                                                data.filter(e => e.id === regulasi).length > 0 ?
                                                    data.filter(e => e.id === regulasi).map((i, idx) => (
                                                        <div
                                                            key={idx}
                                                        >
                                                            {i.data.waktu}
                                                        </div>
                                                    )) : "Data tidak ada"}
                                        </span>
                                    </div>
                                    <div className='text-base mt-2 max-lg:hidden'>
                                        |
                                    </div>
                                    <div className='flex items-center mt-2 text-gray-700'>
                                        <ImLocation
                                            size={18}
                                            color='red'
                                            className=''
                                        />
                                        <span className='text-xs'>
                                            {
                                                data.filter(e => e.id === regulasi).length > 0 ?
                                                    data.filter(e => e.id === regulasi).map((i, idx) => (
                                                        <div
                                                            key={idx}
                                                        >
                                                            {i.data.alamat}
                                                        </div>
                                                    )) : "Data Tidak Ada"}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className='mx-5 mb-5 flex flex-col'>
                                <span className='mb-1 text-sm max-lg:text-xs'>
                                    Pilih Kategori
                                </span>
                                <Select
                                    className="basic-single w-1/2 max-lg:w-full text-sm"
                                    classNamePrefix="select"
                                    name="color"
                                    isSearchable={false}
                                    options={options}
                                    value={options[category]}
                                    onChange={(e) => {
                                        setCategory(e.value)
                                        setNameCat(e.label)
                                    }}
                                />
                            </div>

                            <div className='flex flex-col px-5'>
                                <div className='flex items-center gap-2 mb-2'>
                                    <button
                                        className={`${select === "req" ? "bg-indigo-500 text-white" : "bg-gray-300"} px-2 py-1 rounded-md text-sm`}
                                        onClick={() => {
                                            setSelect("req")
                                        }}
                                    >
                                        Pertanyaan
                                    </button>
                                    <button
                                        className={`${select === "answer" ? "bg-indigo-500 text-white" : "bg-gray-300"} px-2 py-1 rounded-md text-sm`}
                                        onClick={() => {
                                            setSelect("answer")
                                        }}
                                    >
                                        Jawaban
                                    </button>
                                </div>
                                <h1 className='font-semibold mb-1'>{nameCat}</h1>
                                {select === "req" ?
                                    <ul className='list-decimal mx-7 text-sm space-y-1'>
                                        {
                                            content.filter(e => e.type === "req").map((item, idx) => (
                                                <div
                                                    key={idx}
                                                >
                                                    {item.data[category].map((i, t) => (
                                                        <li key={t} className='px-1'>
                                                            {i}
                                                        </li>
                                                    ))}
                                                </div>
                                            ))
                                        }
                                    </ul> :
                                    <ul className='list-decimal mx-7 text-sm space-y-1'>
                                        {

                                            content.filter(e => e.id_village === village).length > 0 ?
                                                content.filter(e => e.id_village === village).map((item, idx) => (
                                                    <div
                                                        key={idx}
                                                    >
                                                        {item.data[category].map((i, t) => (
                                                            <li key={t} className='px-1'>
                                                                {i}
                                                            </li>
                                                        ))}
                                                    </div>
                                                )) : <span className='-mx-3'>Data Tidak ada</span>
                                        }
                                    </ul>
                                }
                            </div>
                        </div> :
                        <div className='bg-white rounded-lg my-5 mx-10 max-lg:mx-5 border-[1px] border-black pb-5 max-lg:text-xs h-[600px] flex items-center justify-center'>
                            <div className=''>
                                Loading ...
                            </div>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default LeafletMap
