import React from 'react'
import IconButton from '../IconButton'
import { AiOutlineUser } from 'react-icons/ai'
function HeaderMain() {
    return (
        <div className="flex px-6 flex-row items-center justify-end h-[6rem] bg-gradient-to-r from-cyan-500  via-blue-500 to-purple-500">
            {/* admin button */}
            <IconButton icon={<AiOutlineUser />} title="Admin" bgColor="white" />
        </div>
    )
}

export default HeaderMain