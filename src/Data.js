import React, { useEffect, useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import InfoIcon from '@mui/icons-material/Info';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./css/data.css";
import { db } from './firebase';
const Data = () => {
    const[files,setFiles]=useState([]);
    useEffect(()=>{
        db.collection("myfiles").onSnapshot(snapshot=>{
            setFiles(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            })
                ))
        })
    })
    return (
        <div className='data'>
            <div className='data_header'>
                <div className='data_headerLeft'>
                    <p>My Drive</p>
                    <KeyboardArrowDownIcon />
                </div>
                <div className='data_headerRight'>
                    <FormatListBulletedIcon />
                    <InfoIcon />
                </div>

            </div>
            <div className='data_content'>
                <div className='data_grid'>
                    {
                        files.map((file)=>{
                            return <div className='data_file'>
                            <InsertDriveFileIcon />
                            <p>{file.data.filename}</p>
                        </div>
                        })
                    }
                    
                   

                </div>
                <div className='data_list'>
                    <div className="detailsRow">
                        <p><b>Name <ArrowDropDownIcon/></b></p>
                        <p><b>Owner</b></p>
                        <p><b>Last Modified</b></p>
                        <p><b>File Size</b></p>
                    </div>
                    {
                        files.map((file)=>{
                            return <div className="detailsRow">
                            <p>
                                <a href={file.data.fileURL} target="_blank"><InsertDriveFileIcon/>{file.data.filename}</a> </p>
                            <p>Me</p>
                            <p>{new Date(file.data.timestamp?.seconds*1000).toUTCString()}</p>
                            <p>1GB</p>
                        </div>
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Data