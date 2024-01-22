import React, { useState } from 'react'
import { CiInboxIn } from "react-icons/ci";
import { CiInboxOut } from "react-icons/ci";
import { BsListTask } from "react-icons/bs";
import { CgWorkAlt } from 'react-icons/cg';
import { FaListCheck } from "react-icons/fa6";
import { MdOutlineArchive, MdOutlineUnarchive } from "react-icons/md";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import MyToolTip from './MyToolTip.jsx';


const ShowTasks = () => {
    const notify = () => toast("All Tasks!");
    const [archived, setArchived] = useState(true)
    const filteredTag = null
    //const filteredTag = {'title': 'Work',
    //                       'icon': 'CgWorkAlt',
    //                       'todos': [
    //         {
    //             'todoId': 1,
    //             'todoTitle': "finish webapp project",
    //             'done': true,
    //             'archived': false,
    //             'tag': "Work"
    //         },
    //         {
    //             'todoId': 1,
    //             'todoTitle': "finish webapp project",
    //             'done': true,
    //             'archived': false,
    //             'tag': "Work"
    //         }
    //                      ]}

    return (
        <div className='d-flex justify-content-around mt-2 '>
            {filteredTag ?
                <div className='d-flex '>

                    <MyToolTip id="t-4" title={filteredTag.title} >
                        {/* Active Tasks */}
                        <CgWorkAlt className='ActiveIcon' />
                    </MyToolTip>
                </div>
                :null
            }
            <div className='d-flex'>
                <MyToolTip id="t-1" title="All Tasks">
                    {/* All Tasks */}
                    <FaListCheck />
                </MyToolTip>
            </div>
            <div className='d-flex'>
                <MyToolTip id="t-3" title="Active Tasks">
                    {/* Active Tasks */}
                    <BsListTask />
                </MyToolTip>
            </div>
            <div className='d-flex' onClick={() => setArchived(!archived)}>
                {archived ?
                    <MyToolTip id="t-2" title="Archived Tasks">
                        {/* Archived Tasks */}
                        <MdOutlineArchive />
                    </MyToolTip>
                    :
                    <MyToolTip id="t-1" title="Unarchived Tasks">
                        {/* Unarchived Tasks */}
                        <MdOutlineUnarchive />
                    </MyToolTip>
                }
            </div>

            {/* 
            <div className='d-flex justify-content-around'>
                <CiInboxIn />
                <small className='px-3'>Archived Tasks</small>
            </div>
            <div>
                <BsListTask />
                <small className='px-3'>Active Tasks</small>
            </div> 
            <div className='d-flex justify-content-around'>
                <CgWorkAlt />
                <small className='px-3'>{filteredTag.title}</small>
            </div>*/}
        </div>
    )
}

export default ShowTasks