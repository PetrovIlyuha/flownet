import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "07bffeb5-174c-4589-9c34-a085d81d8aec"
  }
});

export const usersAPI = {
  getUsers({ currentPage = 1, pageSize = 10 }) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`
    ).then(response => response.data);
  }
};

export const authAPI = {
  authorizeMe() {
    return instance.get(`auth/me`, {
      withCredentials: true
    }).then(response => response.data);
  }
};

export const unfollowAPI = {
  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => response.data);
  }
};

export const followAPI = {
  followUser(userId) {
    return instance.post(`follow/${userId}`,
      {}
    ).then(response => response.data);
  }
};
