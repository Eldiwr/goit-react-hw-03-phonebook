import PropTypes from 'prop-types';
import { List, ListItem, Button } from "./ContactList.styled";

export const ContactList = ({ onFilter, onDelete }) => {
    return (
        <List>
            {onFilter.map(({ id, name, number }) => {
                return (
                    <ListItem key={id}><span>{name}</span><span> {number}</span> <Button type="button" onClick={() => { onDelete(id) }}>Delete</Button></ListItem>
                )
            })}
        </List>
    );
};

ContactList.prototype = {
    onFilter: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
    })
    ),
    onDelete: PropTypes.func.isRequired,
}