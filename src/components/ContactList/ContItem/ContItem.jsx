import PropTypes from 'prop-types';


export const Contact = ({ contact, onDelete }) => {
  const {id, name, number} = contact;
  return <>
     <li>
      <div>
        <p>{name}</p>
        <p
          name={name}>
          {number}
        </p>
      </div>
      <button 
        type="button" 
        onClick={() => onDelete(id)}
      >
        delete
      </button>
    </li>
  </>
}


Contact.propTypes = {
  contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
}