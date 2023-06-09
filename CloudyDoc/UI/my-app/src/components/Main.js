import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import logo from "../img/logo.png";
import NewCode from "../img/newCode.svg";
import LoadCode from "../img/codeLoad.svg";
import ProfileIcon from "../img/ProfileIcon.png";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';

// 새 코드 카드 이미지 수정, css 수정 + 코드 작성 페이지 

function Main() {
    const [recentCodes, setRecentCodes] = useState([
        { id: 1, title: "새로운 코드 1", updatedAt: new Date() },
        { id: 2, title: "새로운 코드 2", updatedAt: new Date() },
        { id: 3, title: "새로운 코드 3", updatedAt: new Date() },
        { id: 4, title: "새로운 코드 4", updatedAt: new Date() },
        { id: 5, title: "새로운 코드 5", updatedAt: new Date() },
        { id: 6, title: "새로운 코드 6", updatedAt: new Date() },
    ]);

    return (
        <div>
            <header className="app-header">
                <div className="logo-container">
                    <img src={logo} alt="logo" className="smalllogo" />
                </div>
                <div className="user-profile">
                    <img src={ProfileIcon} className="profileIcon" />
                </div>
            </header>
            <div className="app-content">
                <div className="app-sidebar">
                    <Link to="/new-load" className="sidebar-item">
                        <Card className="card1" variant="outlined" sx={{ maxWidth: 500 }}>
                            <CardMedia sx={{ height: 520 }} className="cardimg" image={LoadCode} title="newcode" />
                            <CardActions>
                                <Button size="Big">코드 불러오기</Button>
                            </CardActions>
                        </Card>
                    </Link>


                    <Link to="/NewCode" className="sidebar-item">
                        <Card className="card2" variant="outlined" sx={{ maxWidth: 500 }}>
                            <CardMedia sx={{ height: 520 }} image={NewCode} title="newcode" />
                            <CardActions>
                                <Button size="Big">새 코드</Button>
                            </CardActions>
                        </Card>
                    </Link>
                </div>
            </div>
            <div className="recent-codes">
                <h1 className="recentcode">최근 코드</h1>
                <List  sx={{ width: '100%', maxWidth: 1500, bgcolor: 'background.paper' }}>
            
                        {recentCodes.map((code) => (
                           
                            <li key={code.id}>
                                <ListItem>
                                <ListItemIcon>
                                    <FolderIcon />
                                </ListItemIcon>
                                <ListItemButton href={`/code/${code.id}`}>
                                <ListItemText primary={code.title} />
                                
                                <span className="code-updated-at">
                                    {code.updatedAt.toLocaleDateString()}
                                </span>
                                </ListItemButton>
                                </ListItem>
                            </li>
                        ))}
                    
                </List>
            </div>
        </div>
    );
}

export default Main;
