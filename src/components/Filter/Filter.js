
export const Filter = ({onChange, filterValue }) => {
    return(
        <label>Find contacts by name
            <input
                type="text"
                name="filter"
                value={filterValue}
                onChange={onChange}
            />
        </label>
    );
};
