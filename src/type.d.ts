/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Date 2021-06-24
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Components Props
interface IInputProps{
    type: 'password'|'text'
}
// Entity Props

interface IEntityProps {
    entityName: string,
    id: string | number
    options?: any
}
// Job Types
interface IJob {
    id: number
    url: string
    title: string
    description: string
    date_posted: string
    company: {
        profile_picture: string
        name: string
    }
}

type JobState = {
    jobs: IJob[]
}

type JobAction = {
    type: string
    job: IJob
}

type JobDispatchType = (args: JobAction) => JobAction