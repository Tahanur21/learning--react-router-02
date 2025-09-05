import PropTypes from 'prop-types';
const Link = ({route,click}) => {
    return (
        <div>
        <li key={route.id} >
            <a className={`btn ${click?'bg-amber-300':'bg-gray-400'}`} href={route.path}>{route.name}</a>
        </li>
        </div>
    );
};

Link.propTypes  = {
    route : PropTypes.object,
}
export default Link;