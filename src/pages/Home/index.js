import { NavBar } from "../../components/Navbar" 
import { ProductCard } from "../../components/Card"

export const products=[
    { id:"fc",title:"Formal Coat", text:"Coat good for office and meetings", imgSrc:"/Assets/fc1.png" },
    { id:"cd",title:"Colourful Dress", text:"Wear this to look different from others", imgSrc:"/Assets/fd1.jpg" },
    { id:"dd1",title:"Decent Dress", text:"Looks good everywhere all the time", imgSrc:"/Assets/fd2.jpg" },
    { id:"bld",title:"Blue Long Dress", text:"Good for tall good looking fit women", imgSrc:"/Assets/fd3.jpg" },
    { id:"dd2",title:"Designer Dress", text:"Good dress for casual wear", imgSrc:"/Assets/fd4.jpg" },
    { id:"td",title:"Traditional Dress", text:"Good to wear at monumental places", imgSrc:"/Assets/fd5.jpg" },
    { id:"bj1",title:"Blue Jacket I", text:"Wear wherever you want", imgSrc:"/Assets/fj1.jpg" },
    { id:"swj",title:"Silver Winter Jacket", text:"So called fashion", imgSrc:"/Assets/fj2.jpg" },
    { id:"dj",title:"Designer Jacket", text:"Wear this to show off", imgSrc:"/Assets/fj3.jpg" },
    { id:"cj",title:"Casual Jacket", text:"Jacket to wear at home", imgSrc:"/Assets/fj4.jpg" },
    { id:"cc",title:"Colourful Coat", text:"Looks good on confident man", imgSrc:"/Assets/mc1.jpg" },
    { id:"dbc",title:"Dark Blue Coat", text:"Looks decent in official settings", imgSrc:"/Assets/mc2.jpg" },
    { id:"fp",title:"Flower Pattern", text:"Party outfit", imgSrc:"/Assets/mc3.jpg" },
    { id:"jc",title:"Jacket", text:"Casual wear jacket", imgSrc:"/Assets/mc4.jpg" },
    { id:"lj1",title:"Leather Jacket I", text:"Good for winters", imgSrc:"/Assets/mj1.jpg" },
    { id:"lj2",title:"Leather Jacket II", text:"Don't wear in public", imgSrc:"/Assets/mj2.jpg" },
    { id:"bj2",title:"Blue Jacket II", text:"Girls favourite colour on your jacket", imgSrc:"/Assets/mj3.jpg" },
];

export const Home = () => {
    return(
        <>
            <NavBar />
            <div className="home">
                {products.map((p) => (<ProductCard id={p.id} title={p.title} text={p.text} imgSrc={p.imgSrc} />))}
           </div>
        </>
    )
}