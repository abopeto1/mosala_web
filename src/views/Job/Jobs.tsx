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
import React, {useState} from 'react'
import {Button, Grid, InputAdornment, Paper, TextField} from "@material-ui/core";
import ImageCard from "../../components/Card/ImageCard";
import image from 'assets/images/adele.jpg'
import makeStyles from "@material-ui/core/styles/makeStyles";
import jobsStyle from "../../assets/jss/views/jobsStyle";
import {Search} from "@material-ui/icons";
import AppTabs from "../../components/Tabs/Tabs";
import jobsOptions from "../../variables/jobsOptions";
import {TabsContent} from "../../components/Tabs/TabsContent";
import {HorizList} from "../../components/List/HorizList";
// import {JobCard} from "../../components/Card/JobCard";
import Entities from "react-redux/Entity/Read/Entities"
import JobList from "../../components/List/JobList";

const useStyles = makeStyles(jobsStyle)

const Jobs = () => {
    const [value, setValue] = useState<string>("category")
    const classes = useStyles()

    return (
        <Grid container spacing={4}>
            {/* Left Side*/}
            <Grid item sm={3}>
                <ImageCard
                    headTitle={"Talents Solutions"}
                    subTitle={"Looking for a talent"}
                    image={image}
                    action={
                        <Button
                            variant={"outlined"}
                            classes={{
                                root: classes.root
                            }}
                        >
                            POST A JOB
                        </Button>
                    }
                />
            </Grid>
            <Grid item sm={6}>
                <Paper classes={{root: classes.content}} variant={"outlined"}>
                    <form>
                        <TextField
                            variant={"outlined"} placeholder={"Search Mosala"} size={"small"} fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position={"start"}><Search /></InputAdornment>
                                )
                            }}
                        />
                    </form>
                    <AppTabs
                        options={jobsOptions}
                        setValue={setValue} value={value} width={"fullWidth"}
                    />
                    <TabsContent value={value} index={jobsOptions[0].name.toLowerCase()}>
                        <HorizList />
                        <Entities entityName={"job"} params={{}}>
                            {
                                (rest: any) => {
                                    return (
                                        <JobList
                                            jobs={rest.entities || []}
                                            read={rest.read}
                                            listStatus={rest.status}
                                        />
                                    )
                                }
                            }
                        </Entities>
                    </TabsContent>
                </Paper>
            </Grid>
            <Grid item sm={3}>
                <div className={classes.headTitle}>Because you viewed</div>
                <div className={classes.subTitle}>Visual designer at Google</div>
                <Grid container spacing={2}>
                    {/*<Grid item xs={12}>*/}
                    {/*    <JobCard />*/}
                    {/*</Grid>*/}
                    {/*<Grid item xs={12}>*/}
                    {/*    <JobCard />*/}
                    {/*</Grid>*/}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Jobs