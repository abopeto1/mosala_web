import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './layouts/App';
import reportWebVitals from './reportWebVitals';
import {Router} from "@reach/router";
import 'assets/css/mosala-web.css'
import '@fontsource/roboto';
import 'react-perfect-scrollbar/dist/css/styles.min.css'
import Home from "./views/Home/Home";
import {Profile} from "./views/Profile/Profile";
import {Provider} from "react-redux";
import getStore from './redux'
import Job from "./views/Job/Job";
import axios from "axios";
import Entity from './react-redux/Entity/Read/Entity'

axios.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('access_token')

        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }
        return config
    },
    (error) => {
        console.log(error)
        return Promise.reject(error)
    }
)

// refresh token
axios.interceptors.response.use(undefined, error => {
    const originalRequest = error.config
    let refreshToken = localStorage.getItem('refresh_token')
        if (refreshToken && error.response.status === 401 && !originalRequest._retries){
            originalRequest._retries = true
            return axios.post(`${process.env.REACT_APP_API_URL}token/refresh/`, {refresh: refreshToken}).then(
                res => {
                    if (res.status === 200) {
                        localStorage.setItem('access_token', res.data.access)
                        console.log('access refresh')
                        return axios(originalRequest)
                    } else {
                        localStorage.clear()
                        window.location.reload()
                    }
                }
            )
        }
        return Promise.reject(error)
    }
)

const store = getStore({}, {debug: false})

ReactDOM.render(
    <Provider store={store}>
        <Entity id={'me'} entityName={'user'}>
            {
                (rest: any) => (
                    <Router>
                        <App path={"/"} getUser={rest.read}>
                            <Home path={"/"} />
                            <Profile path={"profile"} />
                            <Job path={'jobs/:job_id'} />
                        </App>
                    </Router>
                )
            }
        </Entity>
    </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
