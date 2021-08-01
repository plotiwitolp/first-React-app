import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

// 1 test data
let state = {
    posts: [
        {
            id: 3,
            msg: "Test message 3 Test message 3 Test message 3 Test message 3 Test message 3",
            likesCount: 7
        },
        {
            id: 2,
            msg: "Test message 2 Test message 2 Test message 2 Test message 2 Test message 2 Test message 2 Test message 2 Test message 2 Test message 2",
            likesCount: 15
        },
        {
            id: 1,
            msg: "Test message 1 Test message 1 Test message 1 Test message 1 Test message 1 Test message 1 Test message 1 Test message 1 Test message 1",
            likesCount: 20
        },
    ]
}

test('length of posts should be incremented', () => {
    // 2 action
    let action = addPostActionCreator("newPostText")
    let newState = profileReducer(state, action)
    // 3 expectation
    expect(newState.posts.length).toBe(4)
});

test('message of new post should be correct', () => {
    // 2 action
    let action = addPostActionCreator("newPostText")
    let newState = profileReducer(state, action)
    // 3 expectation
    expect(newState.posts[3].msg).toBe("newPostText")
});

test('after deleting length of messages should be decrement', () => {
    // 2 action
    let action = deletePost(1)
    let newState = profileReducer(state, action)
    // 3 expectation
    expect(newState.posts.length).toBe(2)
});

test(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // 2 action
    let action = deletePost(1000)
    let newState = profileReducer(state, action)
    // 3 expectation
    expect(newState.posts.length).toBe(3)
});

