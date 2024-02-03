export default function post(props) {
    const Title = props.Title;
    return (
        <div className='post'>
            <div className="post-title">
                <h2> Post {Title}</h2>
            </div>
            <hr />
            <div className="post-body">
                <p>Post {Title} Body is **Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ateriam voluptate rerum cupiditate atque nobis ipsam.</p>
            </div>      
        </div>
    )
}
