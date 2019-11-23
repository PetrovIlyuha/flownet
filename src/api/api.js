import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "07bffeb5-174c-4589-9c34-a085d81d8aec"
  }
});

export const usersAPI = {
  getUsers(currentPage = 3, pageSize = 20) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`
    ).then(response => response.data);
  },
  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => response.data);
  },
  followUser(userId) {
    return instance.post(`follow/${userId}`,
      {}
    ).then(response => response.data);
  },
  getProfile(userId) {
    console.log("obsolete method was used, please instead use profileAPI");
    return profileAPI.getProfile(userId);
  }
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
      .then(response => response.data).catch(err => console.log(err));
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status){
    return instance.put(`profile/status`, {status: status})
;  }
};

export const authAPI = {
  authorizeMe() {
    return instance.get(`auth/me`);
  }
};
