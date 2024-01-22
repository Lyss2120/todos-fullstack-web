import React from 'react'
import TagBtn from './TagBtn'
// import { BsPersonCircle } from "react-icons/bs";

const TagList = () => {
    return (
        <div className="tag-list row justify-content-around mx-2 mb-5 ">
            <TagBtn icono={'CgWorkAlt'} titulo={'Work'}/>  
            <TagBtn icono={'MdAddShoppingCart'} titulo={'Errands'} />  
            <TagBtn icono={'CiMedicalCross'} titulo={'Health'} />  
            <TagBtn icono={'IoHomeOutline'} titulo={'HomeTasks'} />  
            <TagBtn icono={'IoIosLaptop'} titulo={'Study'} />  
        </div>
    )
}

export default TagList