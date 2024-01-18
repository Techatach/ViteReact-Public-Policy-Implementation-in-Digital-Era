import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section>
      <div className=" bg-green-800 rounded-lg">
        <div className="first-line:self-center top-0 w-full max-w-7xl p-2">
          <div className="flex justify-between items-center text-gray-700">
            <div className="mx-2 my-4">
              <ion-icon
                name="logo-pwa"
                className="text-5xl text-blue-600 hover:text-stone-600"
              ></ion-icon>
            </div>
            <ul className="hidden md:flex items-center text-[18px] font-semibold pr-10">
              <li className="text-white hover:text-red-600 hover:font-bold font-medium mx-4 my-1">
                <a href="#">หลักสูตรรัฐประศาสนศาสตร์</a>
              </li>
              <li className="text-white hover:text-red-600 hover:font-bold font-medium mx-4 my-1">
                <a href="/">หน้าหลัก</a>
              </li>
              <li className="text-white hover:text-red-600 hover:font-bold font-medium mx-4 my-1">
                <a href="/user">ประเมินผล</a>
              </li>

              <li className="text-white hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                <a href="/register">กรอกข้อมูล</a>
                {/* <a href="/about">เกี่ยวกับ</a> */}
              </li>
              <li className="text-slate-50 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                {/* <Link to="/view/:id">เทคโนโลยี</Link> */}
                <Link to="/testimo">เทคโนโลยี</Link>
              </li>
              <li className="text-slate-50 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                <a href="/team">บริการ</a>
              </li>
              <li className="text-slate-50 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                {/* <a href="/testimonial">Portfolio</a> */}
                <a href="/edit/:id">Portfolio</a>
              </li>
              <li className="text-slate-50 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                <a href="/contact">Contact</a>
              </li>
              <li className="text-slate-50 hover:text-white hover:bg-blue-600 mx-4 my-1 border-2 border-blue-600 px-2 rounded-2xl ">
                <a href="/login">LogIn</a>
              </li>
              <li className="text-white bg-blue-600 px-2 rounded-2xl mx-4 my-1 hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600">
                <a href="#">SignUp</a>
              </li>
            </ul>{" "}
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </section>
  );
};

export default Navbar;
