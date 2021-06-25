/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Created at 2021-06-10
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React, {useEffect} from 'react'
import {Button, capitalize, Container, Grid, Paper, Typography} from "@material-ui/core";
import ImageCard from "../../components/Card/ImageCard";
import makeStyles from "@material-ui/core/styles/makeStyles";
import jobsStyle from "../../assets/jss/views/jobsStyle";
import Entity from "react-redux/Entity/Read/Entity"
import {RouteComponentProps, useParams} from "@reach/router";
import moment from "moment";
import AppCard from "../../components/Card/AppCard";
import {lorem} from "../../utils/lorem";

const useStyles = makeStyles(jobsStyle)

interface IJobPageContent {
    job?: IJob
    getJob: (options?: any) => void
    status?: { isFetching?: boolean }
}

const JobPageContent = (props: IJobPageContent) => {
    const {job, getJob, status} = props
    const classes = useStyles()

    useEffect(() => getJob(), [getJob])
    console.log(job, status)

    return (
        <div>
            {
                !job ? (
                    <Grid container>No found</Grid>
                ) : (
                    <Grid container>
                        <Grid item xs={12} className={classes.heroImage} />
                        <Grid item xs={12} style={{padding: 0}}>
                            <Paper square>
                                <Container>
                                    <Grid container style={{padding:'8px 0 16px 0'}} alignItems={"center"} justify={"space-between"}>
                                        <Grid item>
                                            <Typography variant={"h6"} className={classes.headTitle}>{job.company.name}</Typography>
                                            <Typography variant={"subtitle2"} style={{textTransform: 'capitalize'}}>Entertainment Los Gatos, CA 2,090,535 followers</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Button variant={"outlined"}>APPLY</Button>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} style={{paddingTop: 32}}>
                            <Container>
                                <Grid container spacing={4}>
                                    <Grid item sm={3}>
                                        <ImageCard
                                            headTitle={capitalize(job.title)}
                                            subTitle={`${capitalize(job.company.name)} - Los Gatos, CA, US`}
                                            image={job.company.profile_picture}
                                            action={
                                                <Grid container spacing={1} style={{padding: "8px 16px"}}>
                                                    <Grid item xs={12}>
                                                        <Grid container justify={"space-between"} spacing={4}>
                                                            <Grid item>Posted</Grid>
                                                            <Grid item>{moment(job.date_posted, 'YYYYMMDD').fromNow()}</Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Grid container justify={"space-between"} spacing={4}>
                                                            <Grid item component={'span'}>Applicant Rank</Grid>
                                                            <Grid item component={'span'}>25</Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            }
                                        />
                                    </Grid>
                                    <Grid item sm={6}>
                                        <Grid container spacing={1} direction={"column"}>
                                            <Grid item>
                                                <AppCard title={'Job Overview'}>
                                                    {lorem}
                                                </AppCard>
                                            </Grid>
                                            <Grid item>
                                                <AppCard title={'Employment Overview'}>
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={3}>WebSite</Grid><Grid item xs={9}>https://www.netflix.com</Grid>
                                                        <Grid item xs={3}>Industry</Grid><Grid item xs={9}>Internet Motion Pictures & Film</Grid>
                                                        <Grid item xs={3}>Headquarters</Grid><Grid item xs={9}>Mountain, View, CA</Grid>
                                                        <Grid item xs={3}>Employment Type</Grid><Grid item xs={9}>Full-time</Grid>
                                                        <Grid item xs={3}>Job Functions</Grid><Grid item xs={9}>Design</Grid>
                                                    </Grid>
                                                </AppCard>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item sm={3}>
                                        <div className={classes.headTitle}>Because you viewed</div>
                                        <div className={classes.subTitle}>Visual designer at Google</div>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Grid>
                    </Grid>
                )
            }
        </div>
    )
}

const JobPage: React.FC<RouteComponentProps> = () => {
    const params = useParams()

    return (
        <Entity entityName={'job'} id={params.job_id}>
            {
                (rest: any) =>  (
                    <JobPageContent job={rest.entity} getJob={rest.read} status={rest.status} />
                )
            }
        </Entity>
    )
}

export default JobPage