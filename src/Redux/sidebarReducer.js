let initialState = {
  friends: [
    {
      friendId: 0,
      name: "Andy Sterkowitz"
    },
    {
      friendId: 1,
      name: "Ashley Bee"
    },
    {
      friendId: 2,
      name: "Florence Marriott"
    }
  ]
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;