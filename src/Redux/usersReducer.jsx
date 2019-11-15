const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      photoUrl: require("../assets/friend0.jpg"),
      followed: false,
      fullName: "Bob Marley",
      status: "Singer",
      location: {
        city: "Minneapolis",
        country: "USA"
        }
    },
    {
      id: 2,
      photoUrl: require("../assets/friend1.jpg"),
      followed: true,
      fullName: "Ricky Martin",
      status: "Singer",
      location: {
        city: "Calcutta",
        country: "India"
      }
    },
    {
      id: 3,
      followed: false,
      photoUrl: require("../assets/friend2.jpg"),
      fullName: "Vladimir Putin",
      status: "President",
      location: {
        city: "Moscow",
        country: "Russia"
      }
    }
  ]
};

const usersReducer = (state = initialState, action ) => {
  switch (action.type) {
    case FOLLOW:
       return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
          return {...user, followed: true }
          }
          return user
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false}
          }
          return user;
        })
      };
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] }
    }
    default:
      return state;
  }
};

export const followAC = (userId) => ({type: FOLLOW, userId });
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId });
export const setUsersAC =(users) => ({type: SET_USERS, users});

export default usersReducer;
