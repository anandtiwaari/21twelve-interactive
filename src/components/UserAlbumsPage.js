import React from "react";
import { useLocation } from "react-router-dom";
import reportWebVitals from "./../reportWebVitals";
import { PuffLoader } from "react-spinners";

export const UserAlbumsPage = (props) => {
  const locate = useLocation();
  let locatenew = locate.pathname.slice(12, 15);
  console.log(locatenew, "shoe");
  let filteredAlbum = props.userphotos?.filter((d, k) => {
    return d.albumId == locatenew;
  });
  console.log(filteredAlbum);
  return (
    <div className="container-fluid card-wrapper-user">
      <div className="heading_user d-flex justify-content-center align-items-center">
        <button type="button" className="btn btn-dark">
          Albums Detail View
        </button>
      </div>
      <div className="row mt-3">
        {filteredAlbum
          ?.filter((item) => {
            return props.searchterm.toLowerCase() === ""
              ? item
              : item.title.toLowerCase().includes(props.searchterm);
          })
          .map((d, k) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-12">
                <div
                  className="card mb-2"
                  style={{ width: "18rem", margin: "auto" }}
                >
                  <img
                    src={
                      d.thumbnailUrl ? (
                        d.thumbnailUrl
                      ) : (
                        <PuffLoader color="#36d7b7" />
                      )
                    }
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <div className="card bg-dark text-white photos_title">
                      <h5 className="card-title">{d.title}</h5>
                    </div>

                    <a href={d.url} className="btn btn-secondary url">
                      View Full image
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
