
import { useLoaderData } from 'react-router-dom';
import SingleImage from '../Components/SingleImage'

const Image = () => {
    const image=useLoaderData()
    console.log(image);
  return (
    <div className='m-auto mh-50'>
      <SingleImage url={image.urls.full}/>
    </div>
  )
}

export default Image



export const loader = async ({ params }) => {
    const id = params.id
    const query=params.query
    const result = await fetch(`https://api.unsplash.com/photos/${id}?query=${query}&client_id=m9a6B8ARzTM6yZ2bInK5zrSUKg1gwP6ZTra0VhnsJoc`)
    const data = await result.json()
    return data
  }