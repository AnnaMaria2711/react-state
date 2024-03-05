import React, { useState } from 'react';
import { response } from "./api.ts";
import './App.css';

function App() {
    const [data, setData] = useState(response.results);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = e.target.value;
        const filteredData = response.results.filter((d) => d.name.startsWith(searchTerm));
        setData(filteredData);
        if (filteredData.length === 0 && searchTerm.trim() !== "") {
            setErrorMessage("Keine Ergebnisse gefunden.");
        } else {
            setErrorMessage("");
        }
    };

    return (
        <div>
            <input type="text" onChange={handleSearch} />
            {errorMessage && <p>{errorMessage}</p>}
            {data.map((character, index) => (
                <div key={index}>{character.name}</div>
            ))}
        </div>
    );
}

export default App;
