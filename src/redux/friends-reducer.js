let initialState =[
        {name: "Alex", ava: "https://i.pinimg.com/originals/2f/b5/c5/2fb5c548dcff728484aae036fc45e5d6.jpg"},
    {
        name: "Nick",
        ava: "https://www.ejin.ru/wp-content/uploads/2017/12/zoo-portraits-animals-dressed-like-humans-03.jpg"
    },
    {
        name: "Jack",
        ava: "https://yt3.ggpht.com/a/AGF-l7938tGYn0CYQfogO8LFSM-rIQ0_9qygzvM_ng=s900-c-k-c0xffffffff-no-rj-mo"
    }
]

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {


        default:
            return state;
    }
}

export default friendsReducer;