import React, { useEffect, useState } from "react";
import { parseUser } from "./utils/DataStructures";
import { useForm } from "react-hook-form";
import "./Account.css";
function Account({ tokenObj }) {
  const [profile, setProfile] = useState({});
  const [value, setValue] = React.useState("Controlled");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    const formData = new FormData();
    formData.append("email", tokenObj.email);
    fetch("/user", {
      method: "PUT",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProfile(parseUser(data));
        console.log(profile);
        console.log(profile.first_name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <div className="inner">
        <h1>Edit Account</h1>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <label>First Name</label>
          <input
            {...register("firstName", { required: true, maxLength: 20 })}
          />
          <label>Last Name</label>
          <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
          <label>Username</label>
          <input {...register("age")} />
          <input type="submit" />
        </form>{" "}
      </div>
      <div></div>
    </div>
  );
}
export default Account;
