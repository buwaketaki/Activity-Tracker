import React, { useContext, useEffect, useState } from "react";
import { MDBBtn, MDBIcon } from "mdbreact";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useHistory } from "react-router-dom";
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

  // if (props.location.state === undefined) {
  //   return (
  //     <div
  //       style={{
  //         textAlign: "center",
  //         fontSize: "24px",
  //         fontWeight: 700,
  //       }}
  //     >
  //       <div>You need to choose a User to get the details</div>
  //     </div>
  //   );
  // }

  return (
    <div>
      {error == true ? (
        <h1>Member not found</h1>
      ) : Loading == true || event.length == 0 ? (
        <ReactLoading
        type="bars"
        color="blue"
        height={300}
        width={300}
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
