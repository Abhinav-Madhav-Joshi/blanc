import { NavBar } from "../../components/Navbar" 
import { ProductCard } from "../../components/Card"
import { MyCarousel } from "../Carousal/carousal";

export const products = [
    { id:"fc", title:"Formal Coat", text:"Elegant office and meeting attire", buyPrice: 1299, imgSrc:"/Assets/fc1.png" },
    { id:"cd", title:"Colourful Dress", text:"Vibrant statement piece for standout occasions", buyPrice: 2099, imgSrc:"/Assets/fd1.jpg" },
    { id:"dd1", title:"Decent Dress", text:"Versatile elegance for any setting", buyPrice: 1999, imgSrc:"/Assets/fd2.jpg" },
    { id:"bld", title:"Blue Long Dress", text:"Flattering silhouette for tall figures", buyPrice: 2299, imgSrc:"/Assets/fd3.jpg" },
    { id:"dd2", title:"Designer Dress", text:"Contemporary casual sophistication", buyPrice: 1999, imgSrc:"/Assets/fd4.jpg" },
    { id:"td", title:"Traditional Dress", text:"Cultural elegance for special venues", buyPrice: 2199, imgSrc:"/Assets/fd5.jpg" },
    { id:"bj1", title:"Blue Jacket I", text:"Versatile layering for multiple occasions", buyPrice: 1799, imgSrc:"/Assets/fj1.jpg" },
    { id:"swj", title:"Silver Winter Jacket", text:"Modern winter fashion statement", buyPrice: 1899, imgSrc:"/Assets/fj2.jpg" },
    { id:"dj", title:"Designer Jacket", text:"Premium fashion-forward outerwear", buyPrice: 1999, imgSrc:"/Assets/fj3.jpg" },
    { id:"cj", title:"Casual Jacket", text:"Comfortable at-home sophistication", buyPrice: 1999, imgSrc:"/Assets/fj4.jpg" },
    { id:"cc", title:"Colourful Coat", text:"Confident masculine statement piece", buyPrice: 2199, imgSrc:"/Assets/mc1.jpg" },
    { id:"dbc", title:"Dark Blue Coat", text:"Professional office elegance", buyPrice: 2299, imgSrc:"/Assets/mc2.jpg" },
    { id:"fp", title:"Flower Pattern", text:"Celebratory party ensemble", buyPrice: 2399, imgSrc:"/Assets/mc3.jpg" },
    { id:"jc", title:"Jacket", text:"Refined casual outerwear", buyPrice: 2199, imgSrc:"/Assets/mc4.jpg" },
    { id:"lj1", title:"Leather Jacket I", text:"Stylish winter essential", buyPrice: 1999, imgSrc:"/Assets/mj1.jpg" },
    { id:"lj2", title:"Leather Jacket II", text:"Bold fashion statement", buyPrice: 1999, imgSrc:"/Assets/mj2.jpg" },
    { id:"bj2", title:"Blue Jacket II", text:"Contemporary masculine appeal", buyPrice: 2199, imgSrc:"/Assets/mj3.jpg" },
];

export const Home = () => {
    return(
        <>
            <NavBar />
            <MyCarousel />
            <div className="home">
                {products.map((p) => (<ProductCard id={p.id} title={p.title} text={p.text} imgSrc={p.imgSrc} />))}
           </div>
        </>
    )
}