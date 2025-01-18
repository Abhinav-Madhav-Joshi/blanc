import { NavBar } from "../../components/Navbar" 
import { Bruh } from "../../components/Card"
import fc1 from "../../components/Assets/fc1.png"
import fd1 from "../../components/Assets/fd1.jpg"
import fd2 from "../../components/Assets/fd2.jpg"
import fd3 from "../../components/Assets/fd3.jpg"
import fd4 from "../../components/Assets/fd4.jpg"
import fd5 from "../../components/Assets/fd5.jpg"
import fj1 from "../../components/Assets/fj1.jpg"
import fj2 from "../../components/Assets/fj2.jpg"
import fj3 from "../../components/Assets/fj3.jpg"
import fj4 from "../../components/Assets/fj4.jpg"
import mc1 from "../../components/Assets/mc1.jpg"
import mc2 from "../../components/Assets/mc2.jpg"
import mc3 from "../../components/Assets/mc3.jpg"
import mc4 from "../../components/Assets/mc4.jpg"
import mj1 from "../../components/Assets/mj1.jpg"
import mj2 from "../../components/Assets/mj2.jpg"
import mj3 from "../../components/Assets/mj3.jpg"

export const Home = () => {
    return(
        <>
            <NavBar />
            <div className="home-page">
                <Bruh title="Formal Coat" text="Coat good for office and meetings" imgSrc={fc1}/> <Bruh title="Colourful Dress" text="Wear this to look different from others" imgSrc={fd1}/> <Bruh title="Decent Dress" text="Looks good everywhere all the time" imgSrc={fd2}/> <Bruh title="Blue Long Dress" text="Good for tall good looking fit women" imgSrc={fd3}/> <Bruh title="Designer Dress" text="Good dress for casual wear" imgSrc={fd4}/> <Bruh title="Traditional Dress" text="Good to wear at monumental places" imgSrc={fd5}/> <Bruh title="Blue Jacket" text="Wear wherever you want" imgSrc={fj1}/> <Bruh title="Silver Winter Jacket" text="So called fashion" imgSrc={fj2}/> <Bruh title="Designer Jacket" text="Wear this to show off" imgSrc={fj3}/> <Bruh title="Casual Jacket" text="Jacket to wear at home" imgSrc={fj4}/> <Bruh title="Colourful Coat" text="Looks good on confident man" imgSrc={mc1}/> <Bruh title="Dark Blue Coat" text="Looks decent in official settings" imgSrc={mc2}/> <Bruh title="Flower Pattern" text="Party outfit" imgSrc={mc3}/> <Bruh title="Jacket" text="Casual wear jacket" imgSrc={mc4}/> <Bruh title="Leather Jacket I" text="Good for winters" imgSrc={mj1}/> <Bruh title="Leather Jacket II" text="Don't wear in public" imgSrc={mj2}/> <Bruh title="Blue Jacket" text="Show off jacket to wear outdoors" imgSrc={mj3}/>
           </div>
        </>
    )
}