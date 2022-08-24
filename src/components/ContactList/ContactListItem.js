import PropTypes from 'prop-types';
import { ListItem, Button } from './ContactList.styled';

export const ContactListItem = ({ onFilter, onDelete }) => {
    return (
        <>
            {onFilter.map(({ id, name, number }) => {
                return (
                    <ListItem key={id}><span>{name}</span><span> {number}</span> <Button type="button" onClick={() => { onDelete(id) }}>Delete</Button></ListItem>
                )
            })}   
        </>
                 
    );
};

ContactListItem.prototype = {
    onFilter: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    ),
    onDelete: PropTypes.func.isRequired,
};