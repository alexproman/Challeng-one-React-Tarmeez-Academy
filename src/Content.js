import PostsContent from "./PostsContent";
import SideContent from "./SideContent";
import './Content.css'
export default function Content() {
    return (
        <div className="content">
            <PostsContent />
            <SideContent/>

        </div>
    )
}