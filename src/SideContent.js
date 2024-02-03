import Button from "./Button";
import './index.css';

export default function SideContent() {
    let i = 1;
    return (
        <>
            <div className="aside">
                <Button id={i++}/>
                <Button id={i++}/>
                <Button id={i++}/>
                <Button id={i++}/>
                <Button id={i++}/>
                <Button id={i++}/>
                <Button id={i++}/>
                <Button id={i++}/>
                <Button id={i++}/>
                <Button id={i++}/>
                <Button id={i++}/>
                <Button id={i++}/>
                
            </div>
        </>
    )
}
