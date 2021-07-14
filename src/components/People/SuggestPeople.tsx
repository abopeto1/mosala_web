/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Created at 2021-07-11
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import SuggestPeopleCard from "./SuggestPeopleCard";
import {List} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import axios from "axios";
// import {shuffle} from 'lodash'

const SuggestPeople = () => {
    const [users, setUsers] = useState<any>([])

    // useEffect(() => {
    //     axios.get(`${process.env.REACT_APP_API_URL}users/contact_suggestions/`).then(r => {
    //         // const data = shuffle(r.data.results)
    //         setUsers(r.data.results)
    //     }).catch(e => console.log(e))
    // }, [users])

    return (
        <List dense>
            {
                users.map((user: UserState, i: number) => (
                    i < 3 && <SuggestPeopleCard key={i} user={user} />
                ))
            }
        </List>
    )
}

export default SuggestPeople