import React, { useState } from "react";
import { Cards } from "./Cards";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

export const UserAlbums = (props) => {
  const locate = useLocation();
  let locatenew = parseInt(locate.pathname.slice(8, 10));
  console.log(locatenew);
  let filteredAlbum = props.useralbum?.filter((d, k) => {
    return d.userId == locatenew;
  });

  return (
    <div className=" card-wrapper-user">
      <div className="heading_user d-flex justify-content-center align-items-center">
        <button type="button" className="btn btn-dark">
          Album List
        </button>
      </div>
      <div className="row">
        {filteredAlbum
          ?.filter((item) => {
            return props.searchterm.toLowerCase() === ""
              ? item
              : item.title.toLowerCase().includes(props.searchterm);
          })
          .map((d, k) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-12">
                <Link to={`/albumspage/${d.userId}`}>
                  <div className="column">
                    <div className="card">
                      <img
                        className="image-album"
                        src="https://i.redd.it/nbrlkv6vc5ta1.jpg"
                        style={{ width: "100%" }}
                      />

                      <button
                        type="button"
                        className="btn btn-secondary mt-3 album_title "
                      >
                        <h6 className="album_title">{d.title}</h6>
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};
