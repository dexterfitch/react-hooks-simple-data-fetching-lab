import {useState, useEffect} from "react";

function App() {
    const FETCH_DOG_URL = "https://dog.ceo/api/breeds/image/random"

    const [dogPicUrl, setDogPicUrl] = useState("https://via.placeholder.com/300x300.png?text=U0o0U");
    const [clickToggle, setClickToggle] = useState(false)

    useEffect(() => {
        fetch(FETCH_DOG_URL)
        .then(response => response.json())
        .then(json => setDogPicUrl(json.message))
    }, [clickToggle])

    function renderDogPic() {
        return(
            <img src={dogPicUrl} alt="A random dog!" />
        )
    }

    function handleClick() {
        setClickToggle(clickToggle ? false : true)
    }

    return (
        <div>
            <button onClick={handleClick}>Give me a Dog!</button>
            <br></br><br></br>
            {renderDogPic()}
        </div>
    )
}

export default App;