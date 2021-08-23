import axios from 'axios';



const instance =axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0',
    headers:{
        "API-KEY": "f3197b70-8d70-43b0-b46c-8b2f3efc4a0d"
    }
})
export const usersAPI= {
    getUsers(sizePage: number, currentPage: number) {
        return instance.get(`/users?count=${sizePage}&page=${currentPage}`)
            .then(response => {
                return response.data
            })
    },
    unfollowUsers(id: string) {
        return instance.delete(`/follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    followUsers(id: string) {
        return instance.post(`/follow/${id}`, {},)
            .then(response => {
                return response.data
            })
    }
}

export const profileAPI= {
    getProfile(userId:string) {
        return instance.get(`/profile/${userId}`)
            .then(response => {
                return response.data
            })
    }
}