import React, { useContext, useEffect, useState } from "react";
import { MDBBtn, MDBIcon } from "mdbreact";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useHistory, Link } from "react-router-dom";
import { UserDataContext } from "../context/UserDataContext";
import ReactLoading from "react-loading";
const localizer = momentLocalizer(moment);

const ActivityCalendar = (props) => {
  const {
    Loading,
    members,
    getUsersById,
    MemberName,
    event,
    error,
  } = useContext(UserDataContext);

  useEffect(() => {
    getUsersById(props.match.params.itemId);
  }, [props.match.params.Id]);

  let history = useHistory();
  const goBackButton = () => {
    history.goBack();
  };

  return (
    <div>
      {error == true ? (
        <div style={{ textAlign: "center", marginTop : "20px" }}>
          <h1>
            Member not found... <MDBIcon icon="frown" />
          </h1>
          <Link to="/">
                  <span
                    style={{
                      backgroundColor: "#1565c0",
                      color: "white",
                      fontWeight: 700,
                      width: "100px",
                      padding: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    <MDBIcon icon="home" /> Home
                  </span>
                </Link>
        </div>
      ) : Loading == true || event.length == 0 ? (
        <ReactLoading
          type="spin"
          color="blue"
          style={{ margin: "20px auto", height: "80px", width: "80px" }}
        />
      ) : (
        <div>
          <h3 className="CalendarTitle">
            <b>
              {" "}
              <MDBIcon
                icon="user-alt"
                color="blue"
                style={{ marginRight: "10px", marginLeft: "10px" }}
              />
              {MemberName}
            </b>
            <MDBBtn size="sm" color="blue" onClick={goBackButton}>
              <MDBIcon color="white" icon="arrow-left" />
            </MDBBtn>
          </h3>
          <div className="CalendarTemplate">
            <Calendar
              events={event}
              showMultiDayTimes
              localizer={localizer}
              style={{
                width: "100%",
                height: "500px",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default ActivityCalendar;
