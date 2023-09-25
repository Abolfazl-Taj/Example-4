import Blogcard from './Blogs-card'
import './Blogs.css'
export default function Blogs(){
    let cards = [
        {img: "./img/Blogs1.png" , header: "How To Mage Your Time" , des: "We Teache Your In This Blog That How To Be More Produtive and Have It In Your Day" , by: "Abolfazl Taj" , time: "4 Houres"},
        {img: "./img/Blogs2.webp" , header: "Reach Your Goal Esealy" , des: "Wanna Reach Your Goal Sooner , Esayer  And With More Efficensy ? View Our Blog" , by: "Abolfazl Taj" , time: "48 Houres"},
        {img: "./img/Blogs3.png" , header: "Goat Of Web Development" , des: "This Blog Will Teach You How To Be Goat Of Web Programmer" , by: "Abolfazl Taj" , time: "2256 Houres"}

    ]
    return(
        <div className='blog' >
            <h1 className= 'blog-header'>Bloges</h1>
            <h3 className= 'blog-des'>Here Is Out New Blogs</h3>

            <div className="blogs-post" data-aos="fade-up-left" data-aos-duration="500">
          <Blogcard {...cards[0]} ></Blogcard>
          <Blogcard {...cards[1]} ></Blogcard>
          <Blogcard {...cards[2]} ></Blogcard>
            </div>
        </div>
    )
}