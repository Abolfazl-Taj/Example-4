import './Nav-Bar.css'
export default function NavBar(){

     return(
        <div className="navbar"  data-aos="zoom-out"     data-aos-duration="1000">
            <div className='countiner'>
            <div className="right-nav">Abolfazl Taj</div>
             <ul className="left-nav">
                <li className="nav-items">Home</li>
                <li className="nav-items">About</li>
                <li className="nav-items">Services</li>
                <li className="nav-items">Blog</li>
             </ul>
             </div>
        </div>
     )

}