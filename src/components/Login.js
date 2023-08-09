import { useForm } from "react-hook-form";
import axios from "axios";
import React, { useState } from "react";
import Button from "./Button";

const baseURL = "https://fakestoreapi.com/auth/login";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [loginResult, setLoginResult] = useState(null);

  const handleOnSubmit = (value) => {
    console.log(value);
    const postData = {
      username: value.userName,
      password: value.password,
    };

    axios
      .post(baseURL, postData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("This is error block");
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center px-16 py-16">
      <div className="border border-#DDD w-1/3 px-8 py-8">
        <div className="flex px-8 pb-8 text-[#001427] text-3xl text-center">
          Welcome back. Login to your account
        </div>

        <form className="flex flex-col p-8 ">
          <div className="flex-row w-full">
            Username
            <div className="pb-4">
              <input
                {...register("userName", {
                  required: true,
                  minLength: 5,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/i,
                })}
                placeholder="Enter username"
                style={{
                  backgroundColor: "#F7F8FA",
                  borderRadius: "4px",
                  padding: "10px",
                  width: "100%",
                  border: " 1px solid #DDD",
                }}
              />

              {errors.userName?.type === "required" && (
                <p role="alert">Username is required</p>
              )}
              {errors.userName?.type === "minLength" && (
                <p role="alert">Minimum 5 characters required</p>
              )}
              {errors.userName?.type === "maxLength" && (
                <p role="alert">You have exceeded the max length</p>
              )}
              {errors.userName?.type === "pattern" && (
                <p role="alert">Invalid username</p>
              )}
            </div>
            Password
            <div className="pb-4">
              <input
                {...register("password", {
                  required: true,
                  minLength: 5,
                  maxLength: 20,
                })}
                placeholder="Enter password"
                style={{
                  backgroundColor: "#F7F8FA",
                  borderRadius: "4px",
                  padding: "10px",
                  width: "100%",
                  border: " 1px solid #DDD",
                }}
              />
              {errors.password?.type === "required" && (
                <p role="alert">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p role="alert">Minimum 5 characters required</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p role="alert">You have exceeded the max length</p>
              )}
            </div>
            <button onClick={handleSubmit(handleOnSubmit)} type="submit">
              <Button color="dark" text="Login" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
