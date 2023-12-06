import React, { useState } from "react";
import "./signin.css";

import { useSelector, useDispatch } from "react-redux";
import {
  fetchUserStarr,
  fetchUserSuccess,
  fetchUserFailure,
} from "../redux/userSlice";

export default function Signin() {
  const [formData, setFormData] = useState({
    userName: "Mathew",
    email: "methew@gmail.com",
    password: "mat123",
  });
  const currentUser = useSelector((state) => state.user);

  const inputHolder = (e) => {
    // e.preventDefault();
    // setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8000/auth/signup", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="main">
      <form action="" onSubmit={submitHandler}>
        <input
          onChange={inputHolder}
          type="text"
          placeholder="name"
          id="userName"
          value="Methew"
        />
        <input
          onChange={inputHolder}
          type="email"
          placeholder="email"
          id="email"
          value="mat@gmail.com"
        />
        <input
          onChange={inputHolder}
          type="password"
          placeholder="password"
          id="password"
          value="pasword1234"
        />
        <button type="submit">SEND</button>
      </form>
    </div>
  );
}
