import './Blogs.css'
export default function Blogcard({img, header, des, by, time}){
    return(
        <div className='blog-card'>
        <img src= {img}  alt='Blogs1' className='Img-blog' />
           <h1 className='blog-card-header'>{header}</h1>
           <p className="blog-card-des">{des}</p>
           <div className='by'>
            <p className= 'by-head' >{by}</p>
            <p className= 'by-head' >{time}</p>
           </div>
           </div>
    )
}