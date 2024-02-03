export default function post(props) {
    const Title = props.Title;
    const PostBody = props.postBody;

    return (
        <div className='post'>
            <div className="post-title">
                <h2> Post {Title}</h2>
            </div>
            <hr />
            <div className="post-body">
                <p>Post {Title} Body is {PostBody}</p>
            </div>        </div>
    )
}
