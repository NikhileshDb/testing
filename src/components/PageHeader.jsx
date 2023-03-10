import React, { useState } from 'react'
import { AiOutlineSearch, AiFillCaretDown } from 'react-icons/ai'
import Breadcrumb from './Breadcrumb';
import CheckOutSideClick from './CheckOutsideClick'
import FilterModal from './FilterModal'



function PageHeader({ title, setSearchedText, showSearch = false, showFilters = false }) {
    const [openFilter, setOpenFilter] = useState(false);

    const handleOpenFilter = () => {
        setOpenFilter(false)
    }
    return (
        <div className="w-full bg-white pt-10 pl-6 pr-[1.5rem]">
            <div className="flex flex-row items-center justify-between ">
                <div className="text-2xl font-bold">
                    {title}
                </div>
                {showSearch ? <div className="flex gap-1 items-center justify-center border px-2 rounded mr-[4rem]">
                    <AiOutlineSearch className="h-6 w-6 text-[#363636]" />
                    <input onChange={(e) => {
                        setSearchedText(e.target.value)
                    }} className="border-none p-1 focus:outline-none" placeholder="Search" type="text" />
                </div> : ""
                }

            </div>

            <div className="flex flex-row items-center justify-between mt-4">

                <Breadcrumb />
                {
                    showFilters ? <div className='flex flex-row items-center gap-2 relative'>
                        <div onClick={() => setOpenFilter(!openFilter)} placeholder="Filter" className="flex flex-row items-center justify-between cursor-pointer px-2 py-1 border rounded  bg-white w-[12rem]" type="text" >
                            <div>Filter</div>
                            <AiFillCaretDown />
                        </div>
                        <div placeholder="Filter" className="flex flex-row items-center justify-between cursor-pointer px-2 py-1 border rounded  bg-white w-[12rem]" type="text" >
                            <div>Choose action</div>
                            <AiFillCaretDown />
                        </div>
                        <div className="bg-black rounded cursor-pointer px-2 py-1 text-white">
                            Apply
                        </div>
                        <div className="absolute top-0 left-0 z-10">
                            <CheckOutSideClick onClickOutside={handleOpenFilter} >
                                <FilterModal open={openFilter} setOpen={handleOpenFilter} />
                            </CheckOutSideClick>
                        </div>
                    </div> : ""
                }


            </div>
        </div>
    )
}

export default PageHeader