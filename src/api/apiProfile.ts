import {instance} from './apiUsers';


export const profileAPI= {
    getProfile(userId:string) {
        return instance.get(`/profile/${userId}`)
            .then(response => {
                return response.data
            })
    }
}

