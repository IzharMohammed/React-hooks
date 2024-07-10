import React from "react";
import {  useUserContext } from "./Context"

export function Sidebar() {

  const user =  useUserContext();

    return (
        <div>
            <div>{user.name}</div>
            <div>Subscription Status:-  {user.isSubscribed}</div>
        </div>
    )
}

export function Profile() {

    const user = useUserContext();

    return <div>{user.name}</div>
}