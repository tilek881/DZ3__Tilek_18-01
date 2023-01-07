import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeTitleAction , withParamsAction} from "../../redux/action/actions";


function MainPage(props) {
        const dispatch = useDispatch()
    const title = useSelector(state => state.titleReducer.title)


    const changeTitle = () => {
        dispatch(changeTitleAction())

    }

    const changeTitleWithParams = () => {
            dispatch(withParamsAction("hello geekTech"))
    }
    return (
        <div>
            <h1>{title}</h1>
            <button onClick={changeTitle}>change</button>
            <button onClick={changeTitleWithParams}>change with params</button>
        </div>
    );
}

export default MainPage;