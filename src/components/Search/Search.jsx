import './Search.css';

const Search = ({setSearch}) => {
    return(
        <form className="search">
            <input
                className="search__input" 
                type="text"  
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    );
}

export { Search };