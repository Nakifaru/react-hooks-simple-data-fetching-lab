// create your App component here
import React, { useEffect, useState } from "react";

function App() {
    const [fetchedData, setfetchedData] = useState(null);
    const [fetchedImage, setfetchedImage] = useState("");

    useEffect (() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((r) => r.json())
            .then((data) => {
                setfetchedData("done")
                setfetchedImage(data.message)
            })
        }, []
    );

    

    return ( 
        <div>
            { fetchedData ? <p></p> :  <p>Loading...</p>}
             <img src={fetchedImage} alt="A Random Dog"></img>
        </div>
    )
};

export default App;
