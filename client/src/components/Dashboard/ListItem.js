import React from "react";
import {
  MDBListGroupItem,
  MDBListGroup,
  MDBBtn,
  MDBIcon,
  MDBModalHeader,
  MDBModalBody,
  MDBModal,
  MDBModalFooter,
} from "mdbreact";
import moment from "moment-timezone";
import { Link } from "react-router-dom";
import { useState } from "react";

const ListItem = ({ item }) => {
  const [modal, setmodal] = useState(false);

  const toggle = () => {
    setmodal(!modal);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <MDBListGroup className="list" style={{ width: "80%" }}>
        <MDBListGroupItem
          className="d-flex justify-content-between align-items-center mt-10 listitems "
          style={{ marginTop: "10px" }}
        >
          <strong>
            <MDBIcon icon="dot-circle" style={{ marginRight: "10px" }} />
            {item.real_name}
          </strong>
          <div>
            <MDBBtn size="sm" color="blue" onClick={toggle} rounded>
              Details
            </MDBBtn>
            <MDBModal isOpen={modal} toggle={toggle}>
              <MDBModalHeader toggle={toggle}>Member Details</MDBModalHeader>

              <MDBModalBody>
                {item.activity_periods.map((time) => (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginBottom: "10px",
                      borderBottom: "0.8px solid grey",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 500,
                      }}
                    >
                      {moment(time.start_time, "MMM DD YYYY hh:mm A")
                        .tz(item.tz)
                        .format("MMM DD YYYY")}{" "}
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <div>
                        <h6>Activity Periods</h6>
                      </div>
                      <div>
                        {moment(time.start_time, "MMM DD YYYY hh:mm A")
                          .tz(item.tz)
                          .format("hh:mmA")}{" "}
                        :{" "}
                        {moment(time.end_time, "MMM DD YYYY hh:mm A")
                          .tz(item.tz)
                          .format("hh:mmA")}
                      </div>
                    </div>
                  </div>
                ))}
              </MDBModalBody>
              <MDBModalFooter>
                <Link
                  to={{
                    pathname: `/calendar/${item.id}`,
                    state: {
                      item: item,
                    },
                  }}
                >
                  {" "}
                  <MDBIcon icon="calendar-alt" style={{ marginRight: "10px" }} />
                  Calendar
                </Link>
              </MDBModalFooter>
            </MDBModal>
          </div>
        </MDBListGroupItem>
      </MDBListGroup>
    </div>
  );
};
export default ListItem;
