const SearchSec = ()=> {
        return(
        <div className="full">
            <div className="section1">
                <p>Search Fields</p>
                <div className="searching1">
                    <input type="text" id="search-input" placeholder="Search..."/>
                    <button type="submit" className="search-button"/>
                </div>

                <div className="box1">
                </div>

                <div className="box2">
                </div>

            </div>
            
            <div className="section2">
                <div className="cards">
                    <div id ="root"></div>
                </div>
            </div>
        </div>
            

        );
}

export default SearchSec;