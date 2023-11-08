

const SingleImage = ({ url }) => {

    return (<div className="card m-3 float-start rounded" style={{maxWidth:"90%"}}>
        <img src={url} alt="search" style={{ objectFit: "fill",maxHeight:"50%"}} />
        </div>
    )
}

export default SingleImage
