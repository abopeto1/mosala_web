/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import feedStyle from "../../assets/jss/components/feedStyle";
import AppCard from "../../components/Card/AppCard";
import PeopleToConnectListItem from "../../components/People/PeopleToConnectListItem";
import {IconButton, List} from "@material-ui/core";
import ImageCard from "../../components/Card/ImageCard";
import image from "../../assets/images/adele.jpg"
import {Link} from "@reach/router";
import {EditOutlined} from "@material-ui/icons";
import {JobCard} from "../../components/Card/JobCard";
import SkillListItem from "../../components/ListItem/SkillListItem";
import RecommendationCard from "../../components/Card/RecommendationCard/RecommendationCard";
import {CompanyCardEntity} from "../../components/Card/CompanyCardEntity/CompanyCardEntity";

const useStyles = makeStyles(feedStyle)

const ProfileHome = () => {
    const classes = useStyles()

    return (
        <Grid container spacing={4}>
            <Grid item sm={3} className={classes.column}>
                <ImageCard
                    image={image}
                    headTitle={<Link to={"/profile"}>Adele Adkins</Link>}
                    subTitle={"Interaction Designer @Google"}
                    action={
                        <div>
                            <Grid container justify={"space-between"} className={classes.stats}>
                                <Grid item>Connection</Grid>
                                <Grid item className={"number"}>564</Grid>
                            </Grid>
                            <Grid container justify={"space-between"} className={classes.stats}>
                                <Grid item>Profile Views</Grid>
                                <Grid item className={"number"}>81</Grid>
                            </Grid>
                        </div>
                    }
                />
            </Grid>
            <Grid item sm={6} className={classes.column}>
                <Grid container direction={"column"} wrap={"nowrap"}>
                    {/*About you*/}
                    <Grid item>
                        <AppCard
                            title={"About You"}
                            action={
                                <IconButton>
                                    <EditOutlined />
                                </IconButton>
                            }
                        >
                            <div>Meliisa Kuo is a UX designer from the Bay Area, currently working at Google.
                            She is passionate about branding design and interactive desgin, with a focus on strong conceptualization
                            startegy, and a rich user experience. She is intersted in the intersection of design and technology, and
                                how it can be use</div>
                        </AppCard>
                    </Grid>
                    {/* Experience */}
                    <Grid item>
                        <AppCard title={"Experience"}>
                            <Grid container direction={"column"} spacing={2}>
                                <Grid item>
                                    <JobCard />
                                </Grid>
                                <Grid item>
                                    <JobCard />
                                </Grid>
                                <Grid item>
                                    <JobCard />
                                </Grid>
                            </Grid>
                        </AppCard>
                    </Grid>
                    {/* Education*/}
                    <Grid item>
                        <AppCard title={"Education"}>
                            <Grid container direction={"column"} spacing={2}>
                                <Grid item>
                                    <JobCard />
                                </Grid>
                                <Grid item>
                                    <JobCard />
                                </Grid>
                            </Grid>
                        </AppCard>
                    </Grid>
                    {/* Skills*/}
                    <Grid item>
                        <AppCard title={"Skills"}>
                            {
                                [0,1,2].map((a) => (
                                    <SkillListItem key={a}/>
                                ))
                            }
                        </AppCard>
                    </Grid>
                    {/* Recommendations */}
                    <Grid item>
                        <AppCard title={"Recommendations"}>
                            <RecommendationCard />
                            <RecommendationCard />
                        </AppCard>
                    </Grid>

                    <Grid item>
                        <AppCard title={"Following"}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={4}>
                                    <CompanyCardEntity />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <CompanyCardEntity />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <CompanyCardEntity />
                                </Grid>
                            </Grid>
                        </AppCard>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sm={3} className={classes.column}>
                <AppCard title={"Who viewed your profile"}>
                    <List dense>
                        {
                            [0,1,2,3].map(a => (
                                <PeopleToConnectListItem key={a} />
                            ))
                        }
                    </List>
                </AppCard>
            </Grid>
        </Grid>
    )
}

export default ProfileHome