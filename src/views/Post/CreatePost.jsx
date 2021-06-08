/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Created at 2021-06-08
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React, {useState} from 'react'
import Paper from "@material-ui/core/Paper";
import {createTabsMenu} from "../../variables/createPostTabs";
import AppTabs from "components/Tabs/Tabs";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {postStyle} from "../../assets/jss/views/postStyle";
import {Divider, Typography} from "@material-ui/core";
import TabsContent from "../../components/Tabs/TabsContent";

const useStyles = makeStyles(postStyle)

const CreatePost = () => {
    const classes = useStyles()

    const [value, setValue] = useState(createTabsMenu[0].name.toLowerCase())

    return (
        <Paper className={classes.root}>
            <AppTabs
                value={value} setValue={(newValue) => setValue(newValue)} options={createTabsMenu}
                width={"fullWidth"}
            />
            <Divider className={classes.divider} />
            <TabsContent  value={value} index={createTabsMenu[0].name.toLowerCase()}>
                <Typography className={"main-placeholder"}>Write your thoughts...</Typography>
            </TabsContent>
            <TabsContent  value={value} index={createTabsMenu[1].name.toLowerCase()}>
                <Typography className={"main-placeholder"}>Select a Photo to Upload</Typography>
            </TabsContent>
            <TabsContent  value={value} index={createTabsMenu[2].name.toLowerCase()}>
                <Typography className={"main-placeholder"}>Write an Article</Typography>
            </TabsContent>

        </Paper>
    )
}

export default CreatePost