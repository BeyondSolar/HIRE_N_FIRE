import React, { useState } from 'react';

const SearchSec = () => {
    const [cards, setCards] = useState([
        { id: "Artificial Intelligence", title: "Artificial Intelligence", buttonText: "Button 1" },
        { id: "Machine Learning", title: "Machine Learning", buttonText: "Button 2" },
        { id: "Deep Learning", title: "Deep Learning", buttonText: "Button 3" },
    ]);

    const [isAdditionalVisible1, setAdditionalVisibility1] = useState(false);
    const [isAdditionalVisible2, setAdditionalVisibility2] = useState(false);

    const toggleAdditionalContent1 = () => {
        setAdditionalVisibility1(!isAdditionalVisible1);
    };

    const toggleAdditionalContent2 = () => {
        setAdditionalVisibility2(!isAdditionalVisible2);
    };

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        const results = cards.filter(card =>
            card.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    };

    return (
        <div className="full">
            <div className="section1">
                <div className="search-card0">
                    <h1>Search Bar</h1>
                    <form onSubmit={handleSearchSubmit}>
                    <input id="searchbox" type="text" placeholder="Search..." 
                    value = {searchTerm} onChange={handleSearchChange}
                    />
                    <button type="submit" className="search-button" />
                    </form>
                </div>
                <div className="search-card1">
                    <h1>Tech Box</h1>
                    <label><input type="checkbox" className="filter" data-filter="type-a" /> Artificial Intelligence</label>
                    <label><input type="checkbox" className="filter" data-filter="type-a" /> Machine Learning</label>
                    <label><input type="checkbox" className="filter" data-filter="type-a" /> Deep Learning</label>
                    <label><input type="checkbox" className="filter" data-filter="type-a" /> Web Development</label>
                    <label><input type="checkbox" className="filter" data-filter="type-a" /> Azure Developer</label>
                    <button id="view-more-btn" onClick={toggleAdditionalContent1}> {isAdditionalVisible1 ? "Hide" : "View More"}</button>
                    {isAdditionalVisible1 && (
                        <div className='view-more-box'>
                            <label><input type="checkbox" className="filter" data-filter="type-a" /> React Developer</label>
                            <label><input type="checkbox" className="filter" data-filter="type-a" /> MERN Stack Developer </label>
                            <label><input type="checkbox" className="filter" data-filter="type-a" /> Computer Architect</label>
                        </div>
                    )}
                </div>

                <div className="search-card2">
                    <h1>Duration</h1>
                    <label><input type="checkbox" className="filter" data-filter="type-a" /> 1 Month</label>
                    <label><input type="checkbox" className="filter" data-filter="type-a" /> 2 Month</label>
                    <label><input type="checkbox" className="filter" data-filter="type-a" /> 3 Month</label>
                    <label><input type="checkbox" className="filter" data-filter="type-a" /> 4 Month</label>
                    <label><input type="checkbox" className="filter" data-filter="type-a" /> 5 Month</label>
                    <button id="view-more-btn" onClick={toggleAdditionalContent2}> {isAdditionalVisible2 ? "Hide" : "View More"}</button>
                    {isAdditionalVisible2 && (
                        <div className='view-more-box'>
                            <label><input type="checkbox" className="filter" data-filter="type-a" /> 1 Month</label>
                            <label><input type="checkbox" className="filter" data-filter="type-a" /> 2 Month</label>
                            <label><input type="checkbox" className="filter" data-filter="type-a" /> 3 Month</label>
                            <label><input type="checkbox" className="filter" data-filter="type-a" /> 4 Month</label>
                        </div>
                    )}
                </div>
            </div>

            <div className="section2">
            <h1>Search Results</h1>
                {searchResults.length === 0 ? (
                    <p>No results found</p>
                ) : (
                    searchResults.map(card => (
                        <div key={card.id} className="card">
                            <h2>{card.title}</h2>
                            <p>{card.buttonText}</p>
                        </div>
                    ))
                )}
                
            </div>
        </div>
    );
}

export default SearchSec;
