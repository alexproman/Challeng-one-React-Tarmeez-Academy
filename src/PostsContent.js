import Post from "./post"
export default function PostsContent() {
    let i = 0;
    return (
        <>
            <div className="PostsContent">
                <Post postBody={`lorem ${i++}`} Title={i} />
                <Post postBody={`lorem ${i++}`} Title={i} />
                <Post postBody={`lorem ${i++}`} Title={i} />
                <Post postBody={`lorem ${i++}`} Title={i} />
                <Post postBody={`lorem ${i++}`} Title={i} />
                <Post postBody={`lorem ${i++}`} Title={i} />
                <Post postBody={`lorem ${i++}`} Title={i} />
                <Post postBody={`lorem ${i++}`} Title={i} />
                <Post postBody={`lorem ${i++}`} Title={i} />
                <Post postBody={`lorem ${i++}`} Title={i} />
                <Post postBody={`lorem ${i++}`} Title={i} />
                <Post postBody={`lorem ${i++}`} Title={i} />
                <Post postBody={`lorem ${i++}`} Title={i} />

            </div>
        </>
    )
}
