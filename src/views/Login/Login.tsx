/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Date 2021-06-25
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react";
import {Container, Divider, Grid, Typography} from "@material-ui/core";
import image from 'assets/images/recrutment.png'
import {Input} from "../../components/Inputs/Input";
import {Button} from "../../components/Button/Button";

interface ILogin {
    changeUserId: (val: any) => void
}

const Login = ({changeUserId}: ILogin) => {

    const handleClick = () => {
        localStorage.setItem('userId', 'abopeto1')
        changeUserId('abopeto1')
    }

    return (
        <Container  style={{minWidth: '100vw', minHeight: '100vh'}} >
            <Grid container style={{minHeight: '100vh'}} justify={'center'} alignContent={'center'} alignItems={'center'}>
                <Grid item sm={6}>
                    <img alt={'recruitment'} src={image} style={{objectFit: 'cover',
                        width: '100%',
                        height: 'auto'}} />
                </Grid>
                <Grid item sm={4}>
                    <Grid container direction={"column"} alignContent={"center"} alignItems={'center'} justify={"center"}>
                        <Grid item>
                            <Typography style={{marginBottom: 20, paddingLeft: 8}} variant={"h4"}>Rejoignez Mosala pour élargir votre réseau professionnel.</Typography>
                        </Grid>
                        <Grid item>
                            <form>
                                <Input placeholder={'Email | Username'} variant={'outlined'} fullWidth />
                                <Input
                                    placeholder={'Password'} variant={'outlined'} type={'password'} autoCapitalize={'current-password'}
                                    fullWidth
                                />
                                <div style={{padding: '0 16px'}}>
                                    <Button onClick={handleClick} variant={'contained'} color={"primary"} fullWidth>Login</Button>
                                </div>
                            </form>
                        </Grid>
                        <Grid item  style={{padding: '16px', width: '100%'}}>
                            <Divider variant={"fullWidth"} />
                            <div style={{padding: '16px 0'}}>
                                <Button onClick={handleClick} variant={'contained'} color={"secondary"} fullWidth>Create an account</Button>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login