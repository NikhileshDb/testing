import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
function IconButton() {
    return (
        <div className="py-2 px-6 flex flex-row gap-2 rounded-sm cursor-pointer items-center justify-center bg-white">
            <div className="rounded-full p-1 bg-[#dfdfdf]">
                <AiOutlineUser />
            </div>
            <p>Admin</p>
        </div>
    )
}

export default IconButton