const SearchSec = ()=> {
        return(
            <div className="section1">
                <p>Search Section</p>
                <div className="searching1">
                    <input type="text" id="search-input" placeholder="Search..."/>
                    <ul className="suggestions" id ="suggestions-list"></ul>
                </div>
            </div>
        );
}

export default SearchSec;