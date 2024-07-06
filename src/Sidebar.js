import React, { useState } from 'react'
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import PermDeviceInformationIcon from '@mui/icons-material/PermDeviceInformation';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import ComputerIcon from '@mui/icons-material/Computer';
import AddIcon from '@mui/icons-material/Add';
import ScheduleIcon from '@mui/icons-material/Schedule';
import "./css/sidebar.css"
import Modal from '@mui/material/Modal';
import firebase from 'firebase';
import { db, storage } from './firebase';




const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const [uploading,setUploading]=useState(false);
    const[file,setFile]=useState(null);
    const handleClose = () => {
        setOpen(false);
    }
    const handleOpen=()=>{
        setOpen(true);
    }
    const handleChange=(e)=>{
        
        if(e.target.files[0]){
            console.log(e.target.files[0]);
            setFile(e.target.files[0]);
        }
    }
    const handleUpload=(event)=>{
        event.preventDefault();
        setUploading(true);
        storage.ref(`files/${file.name}`).put(file).then(snapshot=>
        {
            storage.ref("files").child(file.name).getDownloadURL().then(url=>{
                db.collection("myfiles").add({
                    timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                    filename:file.name,
                    fileURL:url,
                    size:snapshot._delegate.bytesTransferred
                })
                setUploading(false);
                setFile(null);
                setOpen(false);
            })
        }
        );
    }
    return (
        <>
         <Modal open={open} onClose={handleClose}>
                    <div className='modal_pop'>
                        <form>
                            <div className='modalHeading'>
                                <h3>Select file you want to upload</h3>
                            </div>
                            <div className='modalBody'>
                                {
                                    uploading?(<p className='uploading'>Uploading</p>):(
                                        <>
                                        <input type="file" onChange={handleChange}/>
                                        <input type="submit" className='post_submit' onClick={handleUpload}/>
                                        </>
                                    )
                                }
                               
                            </div>
                        </form>
                    </div>
                </Modal>

            <div className='sidebar'>
               
                <div className='sidebar-button' onClick={handleOpen}>
                    <button>
                        <AddIcon />
                        <span>New</span>
                    </button>
                </div>
                <div className='sidebar_options'>
                    <div className='sidebar_option sidebar_option-active'>
                        <MobileScreenShareIcon />
                        <span>My Drive</span>
                    </div>
                    <div className='sidebar_option'>
                        <ComputerIcon />
                        <span>Computers</span>
                    </div>
                    <div className='sidebar_option'>
                        <PeopleAltIcon />
                        <span>Shared With Me</span>
                    </div>
                    <div className='sidebar_option'>
                        <ScheduleIcon />
                        <span>Recent</span>
                    </div>
                    <div className='sidebar_option'>
                        <StarOutlineIcon />
                        <span>Starred</span>
                    </div>
                    <div className='sidebar_option'>
                        <DeleteOutlineIcon />
                        <span>Trash</span>
                    </div>
                    <hr />
                    <div className='sidebar_option'>
                        <CloudQueueIcon />
                        <span>Storage</span>
                    </div>
                    <div className='progress-bar'>
                        <progress size="tiny" value="50" max="100" />
                        <span>6.45 GB of 15 GB used</span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Sidebar