import React from 'react'
import { CgWorkAlt } from "react-icons/cg";
import { MdAddShoppingCart } from "react-icons/md";
import { CiMedicalCross } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosLaptop } from "react-icons/io";


const TagBtn = (props) => {

    return (
        <div className='tagBtnDiv my-1 col'>
            <button className='btn shadow bg-gradient rounded-pill' onClick={() => setCount((count) => count + 1)}>
                {
                    props.icono === 'CgWorkAlt ' ?
                        <CgWorkAlt />
                        :
                        props.icono === 'MdAddShoppingCart' ?
                            <MdAddShoppingCart />
                            :
                            props.icono === 'CiMedicalCross' ?
                                <CiMedicalCross />
                                :
                                props.icono === 'IoHomeOutline' ?
                                    <IoHomeOutline />
                                    :
                                    <IoIosLaptop />
                }
                <small>{props.titulo}</small>

            </button>

        </div>
    )
}

export default TagBtn