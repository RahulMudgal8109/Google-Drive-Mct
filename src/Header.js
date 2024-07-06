import React from 'react'
import "./css/header.css"
import SearchIcon from '@mui/icons-material/Search';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import PersonIcon from '@mui/icons-material/Person';
import { Avatar } from '@mui/material';

const Header = ({photoUrl}) => {
    return (
        <div className='header'>
            <div className='header_logo'>
                <img src="https://tse3.mm.bing.net/th?id=OIP.Eia9B7x_GcJDFcBf7umNIwAAAA&pid=Api&P=0&h=220"/>
                <span>Drive</span>
            </div>
            <div className='header_search'>
                <SearchIcon/>
                <input type="text" placeholder='search in drive'/>
                <FormatAlignCenterIcon/>

            </div>
            <div className='header_icons'>
                <span>
                    <HelpCenterIcon/>
                    <SettingsIcon/>
                </span>
                <span>
                    <AppsIcon/>
                    <Avatar  src={photoUrl} />

                </span>
            </div>
        </div>
    )
}

export default Header