import PropTypes from 'prop-types'
import Button from './Button'

// Header element that is imported in App.js and displayed
const Header = ({title}) => {
    const onClick = () => {
        console.log('Click')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='skyblue' text='Add' onClick={onClick} />
        </header>
  )
}

// Header object with title so it's not hard coded etc
Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired // Safeguard from entering something else than string for Header
}

// const headerStyle = {
//     color: 'skyblue',
//     background: 'black'
// }
// And then add style={headerStyle} in main header => func

export default Header