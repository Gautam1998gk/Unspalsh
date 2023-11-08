//import axios from "axios";
import { useLoaderData,/*  useParams, */ useSearchParams } from 'react-router-dom'
import Images from '../Components/Images';
/* import { useState, useEffect } from 'react'; */

// /* const ImagesMain = () => {
//    const data = useLoaderData() 
//    console.log(data);
//   /* const params = useParams()
//   console.log(params); */
//   /* let [total_pages, setTotal_pages] = useState()
//   const [page, setPage] = useState(1)
//   const [images, setImages] = useState([])
// const [searchParams,setSearchParams]= useSearchParams()

//   const fetch = async () => {
//     const result = await axios.get(`https://api.unsplash.com/search/photos?page=${page}&query=${params.query}&client_id=m9a6B8ARzTM6yZ2bInK5zrSUKg1gwP6ZTra0VhnsJoc`)
//     const data = await result.data
//     console.log(data);
//     setImages(data.results)
//     setTotal_pages(data.total_pages)
//   }

//   useEffect(() => {
//     fetch()
//   }, [page])


//   useEffect(() => {
//     fetch()
//     setPage(1)
//   }, [ params]) */

//   const content = <div className='container d-flex ms-5'>
//     <h4 >{page} of {total_pages} pages</h4>
//     <div>
//       <button className='btn btn-secondary btn-sm ms-3 me-2' disabled={page <= 1} onClick={() => { setPage(prev => prev - 1) }}>previous</button>
//       <button className='btn btn-warning btn-sm' disabled={page === total_pages} onClick={() => { setPage(prev => prev + 1) }}>Next</button>
//     </div>
//   </div>

//   return (
//     <div className='container ms-1 '>
//       <div className='d-flex justify-content-around '>
//         <h3 className='text-center'>Results of {searchParams}</h3>
//         {content}
//       </div>
//       <div className="row row-cols-2">
//       {images?.map(image => <Images key={image.id} image={image} />)}
//       </div>
//     </div>
//   )
// }

// export default ImagesMain */



const ImagesMain = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const search  = searchParams.get("k")
  const page  = searchParams.get("page") || 1
  const data = useLoaderData()
  const results = data.results
  const totalPages  = data.total_pages
  const content = <div className="d-flex justify-content-around fw-bold">
                {results.length ?<h4>Results of {search}</h4>:<h4>No Results Found {search}</h4>}
                {results.length &&<h4>{page} of {totalPages} pages</h4>}
                  <div>
                 {page>1 &&<button className="btn btn-warning m-2" onClick={()=>setSearchParams({page:parseInt(page)-1,k:search})}>Prev</button>}
                { page<totalPages&& <button className="btn btn-success" onClick={()=>setSearchParams({page:parseInt(page)+1,k:search})}>Next</button>}
                  </div>
               </div>


  return <div className='m-4'>
     {content}
     {results.map(img=><Images key={img.id} image={img}/>)}
    </div>
}

export default ImagesMain




export const loader = async ({ request }) => {
  const url = new URL(request.url)
  const search = url.searchParams.get("k")
  const page = url.searchParams.get("page") || 1
  const result = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${search}&client_id=m9a6B8ARzTM6yZ2bInK5zrSUKg1gwP6ZTra0VhnsJoc`)
  return result
}