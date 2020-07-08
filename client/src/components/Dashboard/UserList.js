import React from "react";
import { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../../context/UserDataContext";
import ReactLoading from "react-loading";
import { MDBIcon } from "mdbreact";
import ListItem from "./ListItem";
const UserList = () => {
  const { Loading, getUsers, members } = useContext(UserDataContext);
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h2 className="listTitle">
        <MDBIcon icon="user-alt" style={{ marginRight: "10px" }} />
        Users
      </h2>

      {members.length == 0 || Loading == true ? (
        <ReactLoading type="spin" color="blue" style={{margin:"20px auto", height:"80px", width:"80px"}}  />
      ) : (
        members.map((item) => <ListItem item={item} />)
      )}
    </div>
  );
};
export default UserList;
