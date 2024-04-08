import {useState} from "react";


const Todo = () => {

    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('name');

    const inputHandler = (e) => {
        setNewItem(e.target.value);
    }

    const submitHandler = () => {

        setItems([...items, newItem]);
        // setNewItem('');
    }
    const sno = 1;

    return (
        <div>
            <input value={newItem} onChange={inputHandler} type="text" placeholder="Enter your message" />
            <button onClick={submitHandler}> Add </button>

            <div >
                <h2> Items IN to do </h2>
                {items.map((item) => {
                    return (
                        <div>
                            <p key={sno}>{sno}. {item} </p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Todo;