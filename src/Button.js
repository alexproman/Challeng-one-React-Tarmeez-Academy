import './index.css';
import './button.css'
export default function Button(props)
{
    const id = props.id;
    return (
        <button className='btn'>Show Post {id} </button>
    )
}
