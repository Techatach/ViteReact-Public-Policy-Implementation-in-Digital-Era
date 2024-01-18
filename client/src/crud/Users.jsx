import React, { useState, useEffect } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { NavLink } from "react-router-dom";

const Users = () => {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const getdata = async () => {
    const res = await fetch("http://localhost:8080/getdata", {
      method: "GET",
      headers: {
        "Content-Type": "application / json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      console.log("error");
    } else {
      setUserdata(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const deleteuser = async (id) => {
    const res2 = await fetch(`http://localhost:8080/deleteuser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const deletedata = await res2.json();
    console.log(deleteuser);

    if (res2.status === 404 || !deletedata) {
      console.log("error");
    } else {
      console.log("User deleted");
      getdata();
    }
  };

  return (
    <div className="mt-5">
      <div className="container">
        <div className="d-flex justify-content-start add_btn mt-2">
          <NavLink to="/register" className="btn btn-primary mb-3">
            + Add data
          </NavLink>
        </div>
        <table className="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile</th>
              <th scope="col">Year</th>
              <th scope="col">Result</th>
              <th scope="col">Desc</th>
              <th className="text-center" scope="col">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {getuserdata.map((element, id) => {
              return (
                <tr>
                  <th scope="row">{id + 1}</th>
                  <td>{element.name}</td>
                  <td>{element.email}</td>
                  <td>{element.mobile}</td>
                  <td>{element.year}</td>
                  <td>{element.result}</td>
                  <td>{element.desc}</td>
                  <td className="d-flex justify-content-between">
                    <NavLink to={`/view/${element._id}`}>
                      <button className="btn btn-success">
                        <RemoveRedEyeIcon />
                      </button>
                    </NavLink>
                    <NavLink to={`/edit/${element._id}`}>
                      <button className="btn btn-primary">
                        <CreateIcon />
                      </button>
                    </NavLink>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        window.confirm(
                          "คุณแน่ใจใช่ไหมว่าจะลบข้อมูลนี้ออกจากระบบ (Are you sure you want to delete your data?)"
                        ) && deleteuser(element._id);
                      }}
                    >
                      <DeleteOutlineIcon />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
