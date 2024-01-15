import Image from "next/image";
import React from "react";

const getAllUsers = async () => {
    let res: any = await fetch('http://localhost:3000/api/users');
    let data = await res.json();
    return data.users.data;
}
const Userscreen = async () => {
    let users = await getAllUsers();
    return (
        <div>
            <h2 className="text-xl">All Users</h2>
            {
                users.map((user: any) => {
                    return <div key={user.id}>
                        <Image width={200} height={200} src={user.avatar} alt="profile"/>
                        <h3>{user.first_name} {user.last_name}</h3>
                    </div>
                })
            }
        </div>
    )
}

export default Userscreen;