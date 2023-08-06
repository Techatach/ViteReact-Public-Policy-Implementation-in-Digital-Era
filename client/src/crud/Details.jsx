import React, { useState, useEffect } from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ScoreIcon from "@mui/icons-material/Score";
import StayPrimaryPortraitIcon from "@mui/icons-material/StayPrimaryPortrait";
import HomeIcon from "@mui/icons-material/Home";
import { useParams, NavLink, useNavigate } from "react-router-dom";

const Details = () => {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const { id } = useParams("");
  console.log(id);

  const navigate = useNavigate();

  const getdata = async () => {
    const res = await fetch(`http://localhost:8080/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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
    console.log(deletedata);

    if (res2.status === 404 || !deletedata) {
      console.log("error");
    } else {
      console.log("User deleted successfully");
      navigate("/");
    }
  };

  return (
    <div className="container mt-3">
      การวางแผนและการบริหารนโยบายสาธารณะในยุคดิจิทัล
      <h1 style={{ fontWeight: 400 }}>ยุทธศาสตร์ชาติ 20 ปี</h1>
      <Card sx={{ maxWidth: 900 }}>
        <CardContent>
          <div className="d-flex justify-content-center add_btn">
            <NavLink to="/" className="d-flex justify-content-center">
              <button className="btn btn-success">
                <HomeIcon />
              </button>
            </NavLink>
            <NavLink to={`/edit/${getuserdata._id}`}>
              <button className="btn btn-primary mx-2">
                <CreateIcon />
              </button>
            </NavLink>
            <button
              className="btn btn-danger"
              onClick={() => {
                window.confirm(
                  "คุณแน่ใจใช่ไหมว่าจะลบข้อมูลนี้ออกจากระบบ (Are you sure you want to delete your data?)"
                ) && deleteuser(getuserdata._id);
              }}
            >
              <DeleteOutlineIcon />
            </button>
          </div>
          <div className="row">
            <div className="left_view col-lg-6 col-md-6 col-12">
              <img
                className="mb-3"
                src="/image/p1.png"
                style={{ width: 50 }}
                alt="profile"
              />
              <h3>
                ยุทธศาสตร์ชาติ:
                <span className="p-2" style={{ fontWeight: 400 }}>
                  {getuserdata.name}
                </span>
              </h3>
              <h3 className="mt-3">
                <MailOutlineIcon />
                Email:
                <span className="p-2">{getuserdata.email}</span>
              </h3>
              <h3 className="mt-3">
                <StayPrimaryPortraitIcon />
                Mobile:
                <span className="p-2">{getuserdata.mobile}</span>
              </h3>
            </div>
            <div className="rigth_view col-lg-6 col-md-6 col-12">
              <h3 className="mt-3">
                <WatchLaterIcon />
                Year:
                <span className="p-2">{getuserdata.year}</span>
              </h3>
              <h3 className="mt-3">
                <ScoreIcon />
                Result:
                <span className="p-2">{getuserdata.result}</span>
              </h3>
              <h3 className="mt-3">
                Description:
                <span className="p-2">{getuserdata.desc}</span>
              </h3>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
