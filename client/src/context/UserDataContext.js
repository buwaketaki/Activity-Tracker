import React from "react";
import axios from "axios";
import { useState, useContext, useEffect, createContext } from "react";
import { useHistory } from "react-router-dom";
export const UserDataContext = createContext();

const UserDataContextProvider = (props) => {
  const [Loading, setLoading] = useState(false);
  const [members, setmembers] = useState([]);
  const [MemberName, setMemberName] = useState("");
  const [error, seterror] = useState(false);
  const [event, setevent] = useState([]);

  const getUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/user");

      setmembers(res.data.members);

      setLoading(false);
    } catch (err) {}
  };
  const getUsersById = async (itemId) => {
    seterror(false);
    setLoading(true);
    try {
      const member = await axios.get(`/api/user/${itemId}`);
      console.log(member);
      if (member.status == 200) {
        setMemberName(member.data[0].real_name);
        console.log(MemberName);
        let list = member.data[0].activity_periods;
        console.log(list);
        if (list.length != 0) {
          const l = [];
          list.map((slot) => {
            const timeslot = {
              title: member.data[0].real_name,
              start: new Date(slot.start_time),
              end: new Date(slot.end_time),
            };
  
            l.push(timeslot);
            setevent(l);
            console.log(event);
            setLoading(false);
          });
        }
      } else {
        seterror(true);
        setLoading(false);
        console.log("Error set")
      }
  
    } catch (error) {
      console.log(error);
      seterror(true);
      setLoading(false);
      console.log("Error set")

    }

  };
  // }

  return (
    <div>
      <UserDataContext.Provider
        value={{
          Loading,
          getUsers,
          members,
          MemberName,
          getUsersById,
          event,
          error,
        }}
      >
        {props.children}
      </UserDataContext.Provider>
    </div>
  );
};
export default UserDataContextProvider;
