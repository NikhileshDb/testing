import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import { Link } from 'react-router-dom'


function SideBarItem({ title, menuItem }) {
    return (
        <div className="py-[1.8rem] pl-[1.8rem]">
            <div className="flex flex-row items-center gap-2">
                <AiFillCaretDown />
                <p className="font-bold">{title}</p>
            </div>

            {menuItem.map(menu => (
                <Link key={menu.name} to={menu.path}>
                    <p className="px-[1.5rem] cursor-pointer py-1">{menu.name}</p>
                </Link>
            ))}
        </div>
    )
}

export default SideBarItem