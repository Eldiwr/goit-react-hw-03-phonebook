
export const ContactList = ({ onFilter, onDelete }) => {
    return (
        <ul>
            {onFilter.map(({ id, name, number }) => {
                return (
                    <li key={id}><span>{name}</span><span> {number}</span> <button type="button" onClick={() => { onDelete(id) }}>Delete</button></li>
                )
            })}
        </ul>
    );
};