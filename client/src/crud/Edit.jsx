import React, { useState, useEffect } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const Edit = () => {
  const navigate = useNavigate();

  const [inpval, setINP] = useState({
    name: "",
    email: "",
    mobile: "",
    year: "",
    result: "",
    desc: "",
  });

  const setData = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const { id } = useParams("");
  console.log(id);

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
      setINP(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const updateuser = async (e) => {
    e.preventDefault();

    const { name, email, mobile, year, result, desc } = inpval;

    const res2 = await fetch(`http://localhost:8080/updateuser/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        mobile,
        year,
        result,
        desc,
      }),
    });

    const data2 = await res2.json();
    console.log(data2);

    if (res2.status === 404 || !data2) {
      alert("fill the data ");
    } else {
      alert("data added");
      navigate("/");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="mt-4">
          <NavLink to="/">
            <button className="btn btn-success">
              <HomeIcon />
            </button>
          </NavLink>
        </div>
        <form>
          <div className="row">
            <div className="mt-4 mb-3 col-lg-6 col-md-6 col-12">
              <div>
                <label for="exampleInputEmail1" className="form-label">
                  Name
                </label>
              </div>
              <select
                // type="text"
                value={inpval.name}
                onChange={setData}
                name="name"
                aria-describedby="nameHelp"
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
              >
                <option selected className="text-blue">
                  กรุณาเลือกตัวชี้วัด
                </option>
                <option>ดัชนีสันติภาพโลก</option>
                <option>ดัชนีความสุขโลก</option>
                <option>ดัชนีสิทธิมนุษยชนและหลักนิติธรรม</option>
                <option>ดัชนีสถาบัน</option>
                <option>ดัชนีเสถียรภาพทางการเมือง</option>
                <option>
                  ดัชนีการมีสิทธิ์มีเสียงของประชาชนและภาระรับผิดชอบ
                </option>
                <option>ดัชนีความปลอดภัยจากภัยคุกคาม</option>
                <option>ดัชนีความสงบสุขภาคใต้</option>
                <option>
                  ประสิทธิภาพของหน่วยงานด้านการข่าวและประชาคมข่าวกรอง
                </option>
                <option>ดัชนีความแข็งแกร่งทางกำลังทหาร</option>
                <option>ดัชนีรัฐเปราะบาง</option>
                <option>
                  สถานการณ์บรรลุเป้าหมายของการพัฒนาที่ยั่งยืน (SDGs) เป้าหมายที่
                  17
                </option>
                <option>
                  ระดับประสิทธิภาพการดำเนินงานของหน่วยงานด้านการจัดการความมั่นคง
                </option>
              </select>
            </div>
            <div className="mt-4 mb-3 col-lg-6 col-md-6 col-12">
              <label for="exampleInputPassword1" className="form-label">
                Email
              </label>
              <input
                type="text"
                value={inpval.email}
                onChange={setData}
                name="email"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label for="exampleInputPassword1" className="form-label">
                Mobile
              </label>
              <input
                type="number"
                value={inpval.mobile}
                onChange={setData}
                name="mobile"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label for="exampleInputPassword1" className="form-label">
                Year
              </label>
              <input
                type="number"
                value={inpval.year}
                onChange={setData}
                name="year"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label for="exampleInputPassword1" className="form-label">
                Result
              </label>
              <input
                type="float"
                value={inpval.result}
                onChange={setData}
                name="result"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-2">
              <label for="exampleInputPassword1" className="form-label">
                Description
              </label>
            </div>
          </div>
          <textarea
            type="text"
            value={inpval.desc}
            onChange={setData}
            name="desc"
            className="form-control mt-2"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button
            type="submit"
            onClick={updateuser}
            className="btn btn-primary mt-3 bg-green-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
