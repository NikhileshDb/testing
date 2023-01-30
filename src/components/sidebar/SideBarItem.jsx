import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai'



function SideBarItem({ title, menuItem }) {
    return (
        <div className="py-[1.8rem] pl-[1.8rem]">
            <div className="flex flex-row items-center gap-2">
                <AiFillCaretDown />
                <p className="font-bold">{title}</p>
            </div>

            {menuItem.map(item => (
                <p key={item.name} className="px-[1.5rem] py-1">{item.name}</p>
            ))}
        </div>
    )
}

export default SideBarItem