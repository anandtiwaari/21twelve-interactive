import React, { useEffect, useState } from "react";
import { Cards } from "./components/Cards";
import axios from "axios";

import { Route, Routes } from "react-router-dom";
import { UserAlbums } from "./components/UserAlbums";
import { UserAlbumsPage } from "./components/UserAlbumsPage";
import "./App.css";
import { Navbar } from "./components/Navbar";
export const App = () => {
  const [searchterm, Setsearchterm] = useState("");
  const [userdata, Setuserdata] = useState();
  const [useralbum, Setuseralbum] = useState();
  const [userphotos, Setuserphotos] = useState();
  const [userloader, setuserLoader] = useState(true);

  // const dispatch = useDispatch();
  // const select = useSelector((state) => state.UserSlice);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((data) => {
      Setuserdata(data.data);
      setuserLoader(false);
      // dispatch(UserData(data.data));
      // console.log(data.data);
    });
  }, []);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/albums/`).then((data) => {
      Setuseralbum(data.data);
      // dispatch(UserData(data.data));
      // console.log(data.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos`).then((data) => {
      Setuserphotos(data.data);
      // dispatch(UserData(data.data));
      // console.log(data.data);
    });
  }, []);
  // https://jsonplaceholder.typicode.com/photos
  return (
    <div>
      <Navbar Setsearchterm={Setsearchterm} searchterm={searchterm} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Cards
              Setsearchterm={Setsearchterm}
              searchterm={searchterm}
              userdata={userdata}
              userloader={userloader}
            />
          }
        />
        <Route
          exact
          path="/albums/:id"
          element={
            <UserAlbums
              Setsearchterm={Setsearchterm}
              searchterm={searchterm}
              useralbum={useralbum}
            />
          }
        />
        <Route
          exact
          path="/albumspage/:id"
          element={
            <UserAlbumsPage
              Setsearchterm={Setsearchterm}
              searchterm={searchterm}
              userphotos={userphotos}
            />
          }
        />
      </Routes>
      {/* <Cards userdata={userdata} />
      hello */}
    </div>
  );
};
