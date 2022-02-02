import React, {useCallback, useState} from "react";
import style from "./UserList.module.css";
import {Table} from "./table/Table";
import {Form} from "./form/Form";
import {UserType} from "../types/types";

export const UserList = React.memo(() => {
    const [users, setUsers] = useState<UserType[]>([]);

    const setUserData = useCallback((userData: UserType) => {
        setUsers([...users, userData]);
    }, [users]);

    const deleteUser = useCallback((userId: number) => {
        setUsers(users.filter(({id}) => userId !== id));
    }, [users]);

    return (
        <div className={style.userList}>
            <Form setUserData={setUserData}/>
            <Table users={users} deleteUser={deleteUser}/>
        </div>
    );
});