/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Created at 2021-06-16
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React, {useEffect} from "react";
import {Grid} from "@material-ui/core";
import {JobCard} from "../Card/JobCard";

interface IJobListProps {
    jobs: Array<any>
    read: (o?: Object) => void
    listStatus?: {
        error: any
        isFetching: boolean
    }
}

const JobList = (props: IJobListProps) => {
    const {jobs, read, listStatus} = props

    useEffect(() => read(), [read])

    return (
        <Grid container spacing={2}>
            {
                !listStatus || listStatus.isFetching ? (
                    <div>Loading...</div>
                ) : (
                    jobs.map((job, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            <JobCard job={job}/>
                        </Grid>
                    ))
                )
            }
        </Grid>
    )
}

export default JobList