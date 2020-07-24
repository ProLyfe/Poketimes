const initState =  {
    posts : [
        {id: '1', title: 'La fin du monde', body: 'La fin du mond etel que nous la conaiisaons'},
        {id: '2', title: 'Apprendre React', body: 'React c la vie codez tous sur ce framework'},
        {id: '3', title: 'NodeJS et ses points forts', body: 'Node js permet de coder en js côté back-end, cela remplace php'}
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPost = state.posts.filter(post => {
           return post.id !== action.id
        });
        return {
            ...state,
            posts: newPost
        }
    }
    return state;
};

export default rootReducer;