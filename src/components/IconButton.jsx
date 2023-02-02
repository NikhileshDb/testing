import React from 'react'

function IconButton({ icon, title, bgColor, onClick }) {
    return (
        <div onClick={onClick} style={{ backgroundColor: bgColor }} className={`py-2 px-6 flex flex-row gap-2 rounded-sm cursor-pointer items-center justify-center]`}>
            <div className={`rounded-full p-1 bg-[#e7e7e7]`}>
                {/* <AiOutlineUser /> */}
                {icon}
            </div>
            <p className={bgColor === "white" ? "text-black" : "text-white"}>{title}</p>
        </div >
    )
}

export default IconButton