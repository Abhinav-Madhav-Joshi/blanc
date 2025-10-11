import { NavBar } from "../../components/Navbar" 
import { ProductCard } from "../../components/Card"

export const products=[
    { id:"fc",title:"Formal Coat", text:"Coat good for office and meetings", buyPrice: 1299, imgSrc:"/Assets/fc1.png" },
    { id:"cd",title:"Colourful Dress", text:"Wear this to look different from others", buyPrice: 2099, imgSrc:"/Assets/fd1.jpg" },
    { id:"dd1",title:"Decent Dress", text:"Looks good everywhere all the time", buyPrice: 1999, imgSrc:"/Assets/fd2.jpg" },
    { id:"bld",title:"Blue Long Dress", text:"Good for tall good looking fit women", buyPrice: 2299, imgSrc:"/Assets/fd3.jpg" },
    { id:"dd2",title:"Designer Dress", text:"Good dress for casual wear", buyPrice: 1999, imgSrc:"/Assets/fd4.jpg" },
    { id:"td",title:"Traditional Dress", text:"Good to wear at monumental places", buyPrice: 2199, imgSrc:"/Assets/fd5.jpg" },
    { id:"bj1",title:"Blue Jacket I", text:"Wear wherever you want", buyPrice: 1799, imgSrc:"/Assets/fj1.jpg" },
    { id:"swj",title:"Silver Winter Jacket", text:"So called fashion", buyPrice: 1899, imgSrc:"/Assets/fj2.jpg" },
    { id:"dj",title:"Designer Jacket", text:"Wear this to show off", buyPrice: 1999, imgSrc:"/Assets/fj3.jpg" },
    { id:"cj",title:"Casual Jacket", text:"Jacket to wear at home", buyPrice: 1999, imgSrc:"/Assets/fj4.jpg" },
    { id:"cc",title:"Colourful Coat", text:"Looks good on confident man", buyPrice: 2199, imgSrc:"/Assets/mc1.jpg" },
    { id:"dbc",title:"Dark Blue Coat", text:"Looks decent in official settings", buyPrice: 2299, imgSrc:"/Assets/mc2.jpg" },
    { id:"fp",title:"Flower Pattern", text:"Party outfit", buyPrice: 2399, imgSrc:"/Assets/mc3.jpg" },
    { id:"jc",title:"Jacket", text:"Casual wear jacket", buyPrice: 2199, imgSrc:"/Assets/mc4.jpg" },
    { id:"lj1",title:"Leather Jacket I", text:"Good for winters", buyPrice: 1999, imgSrc:"/Assets/mj1.jpg" },
    { id:"lj2",title:"Leather Jacket II", text:"Don't wear in public", buyPrice: 1999, imgSrc:"/Assets/mj2.jpg" },
    { id:"bj2",title:"Blue Jacket II", text:"Girls favourite colour on your jacket", buyPrice: 2199, imgSrc:"/Assets/mj3.jpg" },
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