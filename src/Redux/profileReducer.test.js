import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";

it("length of posts should be incremented", () => {
  // test data
  let state = {
    posts: [
      {
        id: 1,
        message: "How is progress in Front-End self-education?",
        likesCount: 14
      },
      {
        id: 2,
        message: "It's moving under my skin...",
        likesCount: 11
      },
      {
        id: 3,
        message: "Doesn't it scares you?",
        likesCount: 122
      },
      {
        id: 4,
        message: "Not really it's a tradeoff",
        likesCount: 3
      }
    ]
  };
  // 2. action
  let action = addPostActionCreator("New Project");
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(5);
});

it("message of new post should be what is expected", () => {
  // test data
  let state = {
    posts: [
      {
        id: 1,
        message: "How is progress in Front-End self-education?",
        likesCount: 14
      },
      {
        id: 2,
        message: "It's moving under my skin...",
        likesCount: 11
      },
      {
        id: 3,
        message: "Doesn't it scares you?",
        likesCount: 122
      },
      {
        id: 4,
        message: "Not really it's a tradeoff",
        likesCount: 3
      }
    ]
  };
  // 2. action
  let action = addPostActionCreator("New Project");
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts[4].message).toBe("New Project");
});

it("after deleting post the length of messages should be decremented for 1 unit", () => {
  // 1. test data
  let state = {
    posts: [
      {
        id: 1,
        message: "How is progress in Front-End self-education?",
        likesCount: 14
      },
      {
        id: 2,
        message: "It's moving under my skin...",
        likesCount: 11
      },
      {
        id: 3,
        message: "Doesn't it scares you?",
        likesCount: 122
      },
      {
        id: 4,
        message: "Not really it's a tradeoff",
        likesCount: 3
      }
    ]
  };
  // 2. actions
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts.length).toBe(3);
});

it("after deleting post the length of messages should not be decremented if ID passed on was incorrect", () => {
  // 1. test data
  let state = {
    posts: [
      {
        id: 1,
        message: "How is progress in Front-End self-education?",
        likesCount: 14
      },
      {
        id: 2,
        message: "It's moving under my skin...",
        likesCount: 11
      },
      {
        id: 3,
        message: "Doesn't it scares you?",
        likesCount: 122
      },
      {
        id: 4,
        message: "Not really it's a tradeoff",
        likesCount: 3
      }
    ]
  };
  // 2. actions
  let action = deletePost(20);
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts.length).toBe(4);
});