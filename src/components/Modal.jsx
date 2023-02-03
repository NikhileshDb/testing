import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
function Modal({ children, shouldShow, onClose }) {
    return shouldShow ? (
        <div onClick={onClose} className="fixed bg-[#000000c2] z-10 top-0 right-0 bottom-0 left-0 flex justify-center items-center">
            <div onClick={e => e.stopPropagation()} className="w-[50%] rounded h-[30rem] bg-white p-10 relative z-10 overflow-hidden">
                <AiOutlineClose onClick={onClose} className="absolute right-5 top-5 h-[1.2rem] w-[1.2rem] cursor-pointer hover:text-blue-400" />
                <div className="w-full">
                    {children}
                </div>
            </div>
        </div>
    ) : null;
}

export default Modal