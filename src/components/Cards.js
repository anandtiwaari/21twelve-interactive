import React from "react";
import { Link } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";
import { PuffLoader } from "react-spinners";

export const Cards = (props) => {
  const commonAvatar =
    "https://img.freepik.com/free-vector/head-man_1308-33466.jpg?w=740&t=st=1681322014~exp=1681322614~hmac=ba52232cee98e0772c841c7c0a3843f4b5669abe32360529c51255a937ac82d3";

  return (
    <div className="container-fluid card-wrapper-user">
      <div className="heading_user d-flex justify-content-center align-items-center">
        <button type="button" className="btn btn-dark">
          Users List
        </button>
      </div>
      {props.userloader ? (
        <div className="text-center d-flex justify-content-center loaderElem">
          <PuffLoader color="#36d7b7" size={200} />
        </div>
      ) : (
        <div className="row">
          {props.userdata
            ?.filter((item) => {
              return props.searchterm.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(props.searchterm);
            })
            .map((data, key) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-12">
                  <Link className="user-link-wrap" to={`/albums/${data.id}`}>
                    <div
                      className="card mb-3"
                      style={{ width: "18rem", margin: "auto" }}
                    >
                      <img src={commonAvatar} alt="" />

                      <div className="card-body">
                        <div className="user-email d-flex justify-content-center align-items-center mb-2">
                          <button type="button" className="btn btn-dark">
                            Name {data.name}
                          </button>
                        </div>
                        <div className="user-name d-flex justify-content-center align-items-center">
                          <button type="button" className="btn btn-dark">
                            Email: {data.email}
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};
