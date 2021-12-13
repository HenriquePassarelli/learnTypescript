import React from "react";

interface IUser {
  id: string;
  email: string;
  role?: "manager" | "director " | "employee";
}

const User = () => {
  const redirect = (user: IUser) => {
    if (user.role) {
      //redirect(user.role)
    }
    //redirect to user field
  };
};
