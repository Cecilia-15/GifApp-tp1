export const GifItem = ({title, url}) => {
  
    return (
        <div className="card">
            <div className="image-container">
                <img src={url} alt="gif" />
            </div>
            <div className="title-image-container">
                <p>{title}</p>
            </div>
        </div>
    )
}