import React from 'react';
import style from "./App.module.css";
import {PostList} from "./post_list/PostList";
import {UserList} from "./user_list/UserList";

function App() {
    return (
            <div className={style.app}>
                <PostList/>
                <UserList/>
            </div>
    );
}

export default App;
