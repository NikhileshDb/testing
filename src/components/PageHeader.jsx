import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
function PageHeader({ type, title, setSearchedText }) {
    return (
        <div className="w-full bg-white pt-10 pl-6 pr-[1.5rem]">
            <div className="flex flex-row items-center justify-between ">
                <div className="text-2xl font-bold">
                    {title}
                </div>
                <div className="flex gap-1 items-center justify-center border px-2 rounded mr-[4rem]">
                    <AiOutlineSearch className="h-6 w-6 text-[#363636]" />
                    <input onChange={(e) => {
                        setSearchedText(e.target.value)
                    }} className="border-none p-1 focus:outline-none" placeholder="Search" type="text" />
                </div>
            </div>
            {/* Bread crumbs */}
            <div className="flex flex-row items-center justify-between mt-4">
                <div className="flex flex-row">
                    <div className="pr-1">main</div>
                    <div className="pr-1">/</div>
                    <div className="pr-1">{type}</div>
                    <div className="pr-1">/</div>
                    <div className="pr-1">{title}</div>
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <select placeholder="Filter" className="px-2 py-1 border rounded focus:outline-none bg-white w-[12rem]" type="text" >
                        <option hidden value>Filter</option>
                        <option>Example 2</option>
                    </select>
                    <select placeholder="Choose action" className="px-2 py-1 border rounded focus:outline-none bg-white w-[12rem]" type="text" >
                        <option hidden value>Choose action</option>
                        <option>Example 2</option>
                    </select>
                    <div className="bg-black rounded cursor-pointer px-2 py-1 text-white">
                        Apply
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageHeader