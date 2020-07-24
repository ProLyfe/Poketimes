import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postAction';

class Post extends React.Component {
    // state = {
    //     post: null
    // }
    // componentDidMount(){
    //     let id = this.props.match.params.post_id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //         .then(res => {
    //             this.setState({
    //                 post: res.data
    //             });
    //         });
    // };
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/')
        // ou this.props.history.goBack()
    }
    retour = () => {
        this.props.history.goBack()
    }
    render(){
        console.log(this.props)
        console.log(this.props)
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
            </div>
        ) : (
            <div className="center">Loading post...</div>
        )
        return(
            <div className="center">
                {post}
                <button onClick={this.retour}>Retour</button><br/>
                <button className="btn grey" onClick={this.handleClick}>Supprimer</button>
            </div>
        );
    };
};

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);