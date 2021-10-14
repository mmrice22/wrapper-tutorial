import PropTypes from 'prop-types';
import AnimalDetails from '../AnimalDetails/AnimalDetails';

export default function AnimalCard({ name, size, diet }) {
    return (
        <div>
            <h3>{name}</h3>
            <div>{size} kg</div>
            <AnimalDetails diet={diet} />
        </div>
    )
}

AnimalCard.propTypes = {
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
}