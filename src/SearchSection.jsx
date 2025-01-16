import CheckBox from "./CheckBox"
import SearchBox from "./SearchBox"


function SearchSection() {
  return (
    <div className="flex items-center gap-3">
        <SearchBox />
        <CheckBox />
    </div>
  )
};

export default SearchSection