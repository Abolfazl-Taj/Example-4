import Card from './Card'
import './Services.css'
export default  function Service(){
    let service = [
        { img: './img/01.webp' , header:"Manage Project" , des:"We Manage Your Project So You Havent Do It We Are Here For You" },
        { img: './img/02.webp' , header:"Web Design" , des:"Design Your Web Site With Faboules Designers In Our Team" },
        { img: './img/03.webp' , header:"Pretty Idea" , des:"We Have Great Team To Make Your Idea Specefice " },
        { img: './img/05.webp' , header:"Web Development " , des:"Once Your Web Design Done We Will Make It Greate Site Ever!" },
        { img: './img/06.webp' , header:"Reach To Your Goal" , des:"Our Team Will Help You Achive To Your Goal And Be Sucsessful!" },
        { img: './img/04.png' , header:"Marketing" , des:"Our Team Will  Give to You The Demand Of People Each Day" },
    ];
    return(
        <>
        <h1 className= "service-header">
        SERVICES
        </h1>
        <div className= 'service' data-aos="fade-up-right" data-aos-duration="500">
            <Card  {...service[0]} />
            <Card  {...service[1]} />
            <Card  {...service[2]} />
            <Card  {...service[3]} />
            <Card  {...service[4]} />
            <Card  {...service[5]} />
        </div>
        </>
    )
} 