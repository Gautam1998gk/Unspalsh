import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"


const MainNavigation = () => {

    const [search, setSearch] = useState("")
    const navigate = useNavigate()
    const SearchHandler = (e) => {
        e.preventDefault()
        navigate(`/unsplash?k=${search}`)
    }
    const handleClick =()=>{
        navigate(-1)
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary mb-5 " aria-label="Offcanvas navbar large">
                <div className="container-fluid">
                    <h6 className="navbar-brand ms-4" >Unspalsh API</h6>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Menu</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item me-5">
                                    <NavLink className="nav-link" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item me-5">
                                    <button className="nav-link" onClick={handleClick}>Go Back</button>
                                </li>
                            </ul>
                            <form className="d-flex mt-3 mt-lg-0" role="search" onSubmit={SearchHandler}>
                                <input className="form-control me-2" type="search" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                                <button className="btn btn-warning me-4" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default MainNavigation
