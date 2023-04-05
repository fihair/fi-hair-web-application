import { current } from '@reduxjs/toolkit'
import React, { useEffect, useRef, useState } from 'react'

export default function Analysis() {
    const imagesUrl = process.env.PUBLIC_URL + `/SDTG/`
    const ref = useRef()
    const [isOpen, setisOpen] = useState(false)
    const [res,setRes] = useState({
        gender:null,
        age:null,
        zx:null,
        zy:null,
        xy:null,
        xx:null

    })

    useEffect(() => {
     console.log(res)
    }, [res])
    

    const test = ()=>{
        setRes({gender:"1",age:"22",xx:"test"})
    }

    const deneme = (gender)=>{
        setRes({gender:1})
        // 1 => Man
        // 2 => Women
        if(gender===1){
            let key = 1
            switch (key=1) {
                case 1:
                    //age

                    let age = ref.current.querySelector("#age")
                    age.classList.remove('hidden')
                    console.log(age)
                    
                    break;
            
                default:
                    break;
            }
        }
    }
     

    const ages = [
        {
            id:1,
            age:"18-25"

        },
        {
            id:2,
            age:"26-35"

        },
        {
            id:3,
            age:"36-45"

        },
        {
            id:4,
            age:"46-65"

        },
        {
            id:5,
            age:"65+"
        }
        
    ]

    const modalActive = () => {
        if (isOpen) {
            return (
                <div  className='fixed left-0 top-0 w-full h-screen backdrop-blur-sm flex items-center justify-center'>

                    <div onClick={() => {deneme(1) }} className='absolute cursor-pointer text-2xl font-bold right-8 top-8'>X</div>

                    <div>
                        <div ref={ref} className='flex flex-col gap-y-4'>
                            <ul id='age' className='hidden flex flex-col px-4 py-6 rounded-md bg-gray-200 gap-y-2  items-center justify-center h-auto max-w-4xl w-[200px]'>
                                <strong>Yaş</strong>
                                {
                                    ages.map(age=>{
                                      return  <li key={age.id} onClick={()=>{setRes({age:age.age})}} className='hover:bg-brand-color w-full h-auto flex items-center justify-center cursor-pointer transition-all rounded-md active:scale-95'>{age.age}</li>
                                    })
                                }
                                
                            </ul>
                            <div id='zx' className='hidden flex items-center justify-center flex-col bg-gray-200 rounded-md px-4 py-6 gap-y-2'>
                                <strong>Ailenizde saçı dökülen var mı ?</strong>
                                <div className='flex items-center justify-center gap-x-6 '>
                                    <button className='bg-white h-auto w-24 rounded-sm hover:bg-brand-color transition-all active:scale-95'>Evet</button>
                                    <button className='bg-white h-auto w-24 rounded-sm hover:bg-brand-color transition-all active:scale-95'>Hayır</button>
                                </div>
                            </div>
                            <ul id='zy' className='flex hidden flex-col rounded-sm items-center justify-center px-4 py-6 bg-gray-200 gap-y-2'>
                                <strong>Kaç Yıldır Saçınız Dökülüyor ? </strong>
                                <li className='hover:bg-brand-color w-full h-auto flex items-center justify-center cursor-pointer transition-all rounded-md active:scale-95'>1</li>
                                <li  className='hover:bg-brand-color w-full h-auto flex items-center justify-center cursor-pointer transition-all rounded-md active:scale-95'>2</li>                                
                                <li  className='hover:bg-brand-color w-full h-auto flex items-center justify-center cursor-pointer transition-all rounded-md active:scale-95'>3</li>
                                <li  className='hover:bg-brand-color w-full h-auto flex items-center justify-center cursor-pointer transition-all rounded-md active:scale-95'>4</li>
                                <li  className='hover:bg-brand-color w-full h-auto flex items-center justify-center cursor-pointer transition-all rounded-md active:scale-95'>5</li>
                                <li  className='hover:bg-brand-color w-full h-auto flex items-center justify-center cursor-pointer transition-all rounded-md active:scale-95'>6</li>
                                <li  className='hover:bg-brand-color w-full h-auto flex items-center justify-center cursor-pointer transition-all rounded-md active:scale-95'>7</li>
                                <li  className='hover:bg-brand-color w-full h-auto flex items-center justify-center cursor-pointer transition-all rounded-md active:scale-95'>8</li>
                                <li  className='hover:bg-brand-color w-full h-auto flex items-center justify-center cursor-pointer transition-all rounded-md active:scale-95'>9</li>
                                <li  className='hover:bg-brand-color w-full h-auto flex items-center justify-center cursor-pointer transition-all rounded-md active:scale-95'>10+</li>
                            </ul>
                            <ul id='xy' className=' hidden flex-col rounded-md  items-center justify-center  px-4 py-6 bg-gray-200 gap-y-4'>
                                <strong>Saçınızın Dökülme Tipini Seçin</strong>
                                <div className='grid grid-cols-2 grid-flow-row gap-4'>
                                    <img src={imagesUrl+"erkekderece1.png"} className='border-[1px] h-auto w-48 hover:border-white cursor-pointer active:scale-95 ' alt="" />                                   
                                    <img src={imagesUrl+"erkekderece2.png"} className='border-[1px] h-auto w-48 hover:border-white cursor-pointer active:scale-95 ' alt="" />
                                    <img src={imagesUrl+"erkekderece3.png"} className='border-[1px] h-auto w-48 hover:border-white cursor-pointer active:scale-95 ' alt="" />
                                    <img src={imagesUrl+"erkekderece4.png"} className='border-[1px] h-auto w-48 hover:border-white cursor-pointer active:scale-95 ' alt="" />

                                </div>
                            </ul>
                            <ul id='xx' className=' hidden flex flex-col rounded-md   items-center justify-center  px-4 py-6 bg-gray-200 gap-y-4'>
                                <strong>Saçınızın Dökülme Tipini Seçin</strong>
                                <div className='grid grid-cols-2 grid-flow-row gap-4'>
                                    <img src={imagesUrl+"kadinderece1.png"} className='border-[1px] h-auto w-48 hover:border-white cursor-pointer active:scale-95 ' alt="" />                                   
                                    <img src={imagesUrl+"kadinderece2.png"} className='border-[1px] h-auto w-48 hover:border-white cursor-pointer active:scale-95 ' alt="" />
                                    <img src={imagesUrl+"kadinderece3.png"} className='border-[1px] h-auto w-48 hover:border-white cursor-pointer active:scale-95 ' alt="" />
                                    <img src={imagesUrl+"kadinderece4.png"} className='border-[1px] h-auto w-48 hover:border-white cursor-pointer active:scale-95 ' alt="" />

                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    }


    return (
        <div className='w-full h-screen bg-gray-100 flex flex-col pt-1 pl-8 justify-start gap-y-10 '>
            <h1 className='font-bold text-2xl'>Saç Analiz Formu : </h1>
            <div className='flex flex-col gap-y-2 '>
                <div className=' flex flex-col gap-y-2 p-2 w-20' >
                    <p className='font-semibold '>Cinsiyet</p>
                    <div className='border-t-[1px] border-brand-color w-full'></div>
                </div>
                <div className='flex items-center pt-4 transition-all justify-center gap-x-24'>
                    <div onClick={() => { setisOpen(true) }} className='flex flex-col items-center justify-center'>
                        <img className='h-auto w-96 bg-white rounded-xl transition-all cursor-pointer hover:border active:scale-95 ' src={`${imagesUrl}erkekderece1.png`} alt="" />
                        <p className=' text-xs md:text-base font-medium md:-translate-y-10 -translate-y-5'>Erkek</p>
                    </div>
                    <div onClick={() => { setisOpen(true) }} className='flex flex-col items-center justify-center' >
                        <img className='h-auto w-96 bg-white rounded-xl cursor-pointer hover:border active:scale-95 ' src={`${imagesUrl}kadinderece1.png`} alt="" />
                        <p className=' text-xs md:text-base font-medium md:-translate-y-10 -translate-y-5'>Kadın</p>

                    </div>
                </div>
            </div>
            {isOpen && modalActive()}

        </div>
    )
}
