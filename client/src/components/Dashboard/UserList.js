import React from 'react'
import { useContext, useEffect, useState } from "react";
import {UserDataContext} from '../../context/UserDataContext';
import ReactLoading from "react-loading";
import {
    MDBContainer,
    MDBIcon,
    MDBListGroupItem,
    MDBListGroup,
    MDBBadge,
    MDBCol,
    MDBRow,
    MDBBtn,
  } from "mdbreact";
  import ListItem from "./ListItem"
 const UserList = () => {
    
    const {Loading, getUsers, members} = useContext(UserDataContext)
        useEffect(() => {
            getUsers();
            
        }, [])
      
    return (
        <div  >
             <h2 className="listTitle"><MDBIcon icon="user-alt" style={{marginRight:"10px"}} />Users</h2>
            
           {members.length==0 || Loading==true ?  <ReactLoading
               type="bars"
               color="blue"
               height={300}
               width={300}
              />:
           members.map((item)=>(
          <ListItem item={item} />
                       ))}
        </div>
    )
}
export default UserList;