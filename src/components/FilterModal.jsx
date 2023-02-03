import React from 'react'

function FilterModal({ open }) {
    return (
        <div className={`${open ? "" : "hidden"} py-1  bg-white rounded-lg flex flex-col w-[16rem] shadow-2xl`}>
            <div className="px-2 py-1">Filter</div>
            <div className="border border-b-0 px-2 py-1 border-t-[#cacaca]">City</div>
            <div className="border px-2 py-1 border-t-[#cacaca] border-b-0">
                <div className="flex flex-row items-center gap-2">
                    <input className="px-2" type="checkbox" value="Seoul" name="Seoul" />
                    Seoul
                </div>
                <div className="flex flex-row items-center gap-2">
                    <input className="px-2" type="checkbox" value="Seoul" name="Seoul" />
                    Agartala
                </div>
                <div className="flex flex-row items-center gap-2">
                    <input className="px-2" type="checkbox" value="Seoul" name="Seoul" />
                    Krishna Nagar
                </div>
            </div>
            <div className="border px-2 py-1 border-b-0 border-t-[#cacaca]">
                Filter
            </div>
            <div className="border px-2 py-1 border-t-[#cacaca] border-b-0">
                <div className="flex flex-row items-center gap-2">
                    <input className="px-2" type="checkbox" value="Seoul" name="Seoul" />
                    Filter 1
                </div>
                <div className="flex flex-row items-center gap-2">
                    <input className="px-2" type="checkbox" value="Seoul" name="Seoul" />
                    Filter 2
                </div>
            </div>
            <div className="flex flex-row gap-2 justify-end items-center px-2 py-1 border border-t-[#cacaca] border-b-0">
                <div className="px-2 py-1 border rounded-lg">Cancel</div>
                <div className="px-2 py-1 border bg-blue-700 rounded-lg text-white cursor-pointer">Apply</div>
            </div>
        </div>
    )
}

export default FilterModal