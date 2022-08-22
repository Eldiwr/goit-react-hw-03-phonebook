import PropTypes from 'prop-types';
import { Label, Input } from "./Filter.styled";

export const Filter = ({onChange, filterValue }) => {
    return(
        <Label>Find contacts by name
            <Input
                type="text"
                name="filter"
                value={filterValue}
                onChange={onChange}
            />
        </Label>
    );
};

Filter.propTypes = {
    filterValue: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}