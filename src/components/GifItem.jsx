import PropTypes from 'prop-types'

export const GifItem = ({title, url}) => {
  
    return (
        <div className="card">
            <div className="image-container">
                <img src={url} alt="gif" />
                <p data-testid='test-title'>{title}</p>
            </div>
            {/* <div className="title-image-container">
                <p>{title}</p>
            </div> */}
        </div>
    )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

