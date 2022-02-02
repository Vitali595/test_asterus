import React, {FormEvent} from "react";
import style from "./Form.module.css";
import {UserType} from "../../types/types";
import {randomNumber} from "../../helpers/helpers";

type FormPropsType = {
    setUserData: (userData: UserType) => void
};

export const Form = React.memo(({setUserData}: FormPropsType) => {
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const {
            name, age, gender
        }: { [k: string]: FormDataEntryValue } = Object.fromEntries(new FormData(e.currentTarget).entries());

        if ([name, age, gender].every(el => el.toString().trim() !== '')) {
            setUserData({
                id: randomNumber(),
                name: name.toString(),
                age: +age,
                gender: gender.toString(),
            });
            //@ts-ignore
            document.form.reset();
        }
    };

    return (
        <form id="form" name="form" onSubmit={onSubmit} className={style.form}>
            <div className={style.row}>
                <input
                    id="name"
                    name="name"
                    pattern="[a-zA-ZА-Яа-яЁё]+"
                    className={style.input}
                    placeholder="Введите имя:"
                />
                <input
                    id="age"
                    name="age"
                    type="number"
                    pattern="[0-9]"
                    min={1}
                    className={style.input}
                    placeholder="Введите возраст:"
                />
            </div>
            <div className={style.row}>
                <input
                    id="gender"
                    name="gender"
                    type="text"
                    pattern="[МЖ]"
                    className={style.input}
                    placeholder="Введите пол: М/Ж"
                />
                <button className={style.button} type="submit">Добавить</button>
            </div>
        </form>
    );
});