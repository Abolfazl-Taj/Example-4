import './Services.css'
export default function Card({img , header , des}){
    return(
            <div className= 'service-card'>
             <img src= {img}   alt ='' className="img-card" />
             <h2 className='card-head'>{header}</h2>
            <p className="service-des">{des}</p>
            </div>
    )
}