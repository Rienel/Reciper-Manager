type SearchProps = {
  onSearch: (term: string) => void;
};

function Search({ onSearch }: SearchProps) {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <input
      className="searchInput"
      placeholder="Search..."
      onChange={handleSearch}
    ></input>
  );
}

export default Search;
