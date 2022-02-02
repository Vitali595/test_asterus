import React from "react";
import style from "./Table.module.css";
import {UserType} from "../../types/types";

type TablePropsType = {
    users: UserType[]
    deleteUser: (userId: number) => void
};

export const Table = React.memo(({users, deleteUser}: TablePropsType) => {
    return (
        <table className={style.table}>
            <thead>
            <tr>
                <th className={style.th}>Имя</th>
                <th className={style.th}>Возраст</th>
                <th className={style.th}>Пол</th>
                <th className={style.th}>Удалить</th>
            </tr>
            </thead>
            <tbody>
            {
                users.map(({id, name, age, gender}) => {
                    return <tr key={id}>
                        <td className={style.td}>{name}</td>
                        <td className={style.td}>{age}</td>
                        <td className={style.td}>{gender}</td>
                        <td className={`${style.td} ${style.button}`} onClick={() => deleteUser(id)}>X</td>
                    </tr>
                })
            }
            </tbody>
        </table>
    );
});