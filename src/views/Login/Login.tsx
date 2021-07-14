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
import React, {useContext} from "react";
import {Container, Divider, Grid, Typography} from "@material-ui/core";
import image from 'assets/images/recrutment.png'
import {Input} from "../../components/Inputs/Input";
import {Button} from "../../components/Button/Button";
import CreateToken from 'react-redux/Entity/Create'
import {useFormik} from "formik";
import * as Yup from 'yup'
import {UserContext} from "../../layouts/App";

interface ILoginPage extends ILogin {
    create: (data: any, options?: any) => void
    createdEntity: any,
}

interface ILogin {
    getUser: (o?: any) => void
}

const LoginPage = (rest: ILoginPage) => {
    const {setCurrentUser} = useContext(UserContext)

    const formik = useFormik({
        onSubmit: (values, {setSubmitting}) => {
            rest.create(values, {
                onSuccess: (d: {access: string, refresh: string, user: any}) => {
                    localStorage.setItem('access_token', d.access)
                    localStorage.setItem('refresh_token', d.refresh)
                    localStorage.setItem('current_user',JSON.stringify(d.user))

                    setCurrentUser(d.user)
                    setSubmitting(false)
                },
                onFail: (e: any) => {
                    console.log(e)
                    setSubmitting(false)
                }

            })
        },
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email adress').required('Required'),
            password: Yup.string().required('Required')
        }),
    })

    return (
        <Container  style={{minWidth: '100vw', minHeight: '100vh'}} >
            <Grid container style={{minHeight: '100vh'}} justify={'center'} alignContent={'center'} alignItems={'center'}>
                <Grid item sm={6}>
                    <img alt={'recruitment'} src={image} style={{objectFit: 'cover',
                        width: '100%',
                        height: 'auto'}} />
                </Grid>
                <Grid item sm={4}>
                    <Grid container direction={"column"} alignContent={"center"} justify={"center"}>
                        <Grid item>
                            <Typography style={{marginBottom: 20, paddingLeft: 8}} variant={"h4"}>Rejoignez Mosala pour élargir votre réseau professionnel.</Typography>
                        </Grid>
                        <Grid item>
                            <form onSubmit={formik.handleSubmit}>
                                <Input
                                    error={!!(formik.errors.email && formik.touched.email)}
                                    helperText={(formik.errors.email && formik.touched.email) ? formik.errors.email : null}
                                    id={'email'} placeholder={'Email | Username'} variant={'outlined'} fullWidth
                                    {...formik.getFieldProps('email')}
                                />
                                <Input
                                    error={!!(formik.errors.password && formik.touched.password)}
                                    helperText={(formik.errors.password && formik.touched.password) ? formik.errors.password : null}
                                    placeholder={'Password'} variant={'outlined'} type={'password'} autoCapitalize={'current-password'}
                                    fullWidth id={'password'}
                                    {...formik.getFieldProps('password')}
                                />
                                <div style={{padding: '0 16px'}}>
                                    <Button
                                        variant={'contained'} color={"primary"} fullWidth
                                        type={"submit"} disabled={formik.isSubmitting}
                                    >
                                        Login
                                    </Button>
                                </div>
                            </form>
                        </Grid>
                        <Grid item  style={{padding: '16px', width: '100%'}}>
                            <Divider variant={"fullWidth"} />
                            <div style={{padding: '16px 0'}}>
                                <Button
                                    variant={'contained'} color={"secondary"} fullWidth
                                    disabled={formik.isSubmitting}
                                >
                                    Create an account
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

const Login = () => {
    return (
        <CreateToken entityName={'login'}>
            {
                (rest: any) => (
                    <LoginPage {...rest} />
                )
            }
        </CreateToken>
    )
}

export default Login