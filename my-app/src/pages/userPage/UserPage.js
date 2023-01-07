import React from 'react';
import {useSelector , useDispatch} from "react-redux";
import {adduserAction, setValue} from "../../redux/action/actions";
import User from "../../Component/user/User";

function UserPage(props) {
    const dispatch = useDispatch()
    const {value , users} = useSelector(state => state.usersReducer)

    const changeInput = (event) => {
        dispatch(setValue(event.target.value))
    }


    const addUser = () => {
        dispatch(adduserAction(value))
    }






    return (
        <div>
            <input type="number" placeholder="number" onChange={changeInput} value={value}/>
            <button onClick={addUser}>add</button>
            <button>clear</button>

            {users.map((user,index) => <User key={index} userName={user}/>)}
        </div>
    );
}

export default UserPage;