import { Link } from "react-router-dom"



const Images = ({image}) => {
  return (
    <div className="card m-3 float-start" style={{"width": "18rem"}}>
      <Link to={image.id}>
  <img src={image.urls.small} className="card-img-top" alt="search" style={{objectFit:"fill",height:"250px"}}/>
  </Link>
</div>  
  )
} 

export default Images
