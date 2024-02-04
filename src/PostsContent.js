import Post from "./post"
export default function PostsContent() {
    const firstPost = `**the first post content.`
    const scndPost = `**second post content.`
    const thrdPost = `**third post content`
    const fourthPost = `**fourth post content`
    let i =1
    return (
        <>
            <div className="PostsContent">
                <Post id={i++} content={firstPost} />
                <Post id={i++} content={scndPost} />
                <Post id={i++} content={thrdPost} />
                <Post id={i++} content={fourthPost} />
            </div>
        </>
    )
}
