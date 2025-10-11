import Button from 'react-bootstrap/Button';
import { handleBuy } from '.';
import { handleRent } from '.';
import { products } from '../Home';

export const prodDetails=[
    { id:"fc",details:(id, cartDispatch)=>(
        <>
            <b style={{fontSize:"1.3em",display:"flex", flexWrap:"nowrap", gap:"4px"}}>₹{products.find((p)=>(p.id===id)).buyPrice} &nbsp;<s>₹{Math.round(products.find((p) => p.id === id)?.buyPrice * 1.53)} </s> (Buy)</b> 
            <b style={{fontSize:"1.3em", gap:"4px"}}>₹{Math.round(products.find((p) => p.id === id)?.buyPrice * 0.3)} (Rent)</b> 
            <p style={{color:"darkgreen"}}>inclusive of all taxes</p>
            <p style={{fontWeight:"600"}}>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px"}}>
                    <span class="material-symbols-outlined"> delivery_truck_speed </span> Get it within 2 days
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px"}}>
                    <span class="material-symbols-outlined"> payments </span> Pay on delivery available 
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px"}}>
                    <span class="material-symbols-outlined"> multiple_stop </span> Easy 14 days return available
                </div>
            </p>
            <Button className="buyButton" variant='' onClick={() => handleBuy(id, cartDispatch, cartDispatch)}>Buy</Button>
            <Button className="rentButton" variant='' onClick={() => handleRent(id, cartDispatch)}>Rent</Button>
            <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"}}>
            <p> <u style={{fontWeight:550}}>Product Details</u> <br />
                Elegant formal coat for women <br />
                Grey color with subtle check pattern <br />
                Knee-length, tailored fit <br />
                Notch lapel collar <br />
                Long sleeves with buttoned cuffs <br />
                Premium wool-blend fabric <br />
                Soft inner lining for comfort <br />
                Perfect for office, meetings, and formal occasions<br /> 

                <u style={{fontWeight:550}}>Size & Fit</u> <br />
                Relaxed Fit <br />
                The model (height 5'4'') is wearing a size M <br />

                <u style={{fontWeight:550}}> Material & Care </u> <br />
                100% Cotton <br />
                Machine Wash
                </p>

            <p> <u style={{fontSize:20, fontWeight:550}}> Specifications </u> <br />
                <span style={{fontWeight:500}}>Fabrics:</span> Pure Cotton <br />
                <span style={{fontWeight:500}}>Fashion Trends:</span> New Basics <br />
                <span style={{fontWeight:500}}>Fit:</span> Relaxed Fit <br />
                <span style={{fontWeight:500}}>Length:</span> Regular <br />
                <span style={{fontWeight:500}}>Multipack Set:</span> Single <br />
                <span style={{fontWeight:500}}>Neck:</span> Round Neck <br />
                <span style={{fontWeight:500}}>Occasions:</span> Casual <br />
                <span style={{fontWeight:500}}>Package Contains:</span> 1 T-shirt <br />
                <span style={{fontWeight:500}}>Print or Pattern Types:</span> Solid <br />
                <span style={{fontWeight:500}}>Sleeve Length:</span> Short sleeves <br />
                <span style={{fontWeight:500}}>Sustainable:</span> Regular <br />
                <span style={{fontWeight:500}}>Wash Care:</span> Machine Wash <br />
                <span style={{fontWeight:500}}>Weave Type:</span> Knitted
            </p></div>
        </>
    ) },
    { id:"cd",details:(id, cartDispatch)=>(
        <>
            <b style={{fontSize:"1.3em",display:"flex", flexWrap:"nowrap", gap:"4px"}}>₹{products.find((p)=>(p.id===id)).buyPrice} &nbsp;<s>₹{Math.round(products.find((p) => p.id === id)?.buyPrice * 1.53)} </s> (Buy)</b> 
            <b style={{fontSize:"1.3em", gap:"4px"}}>₹{Math.round(products.find((p) => p.id === id)?.buyPrice * 0.3)} (Rent)</b> 
            <p style={{color:"darkgreen"}}>inclusive of all taxes</p>
            <p style={{fontWeight:"600"}}>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px"}}>
                    <span class="material-symbols-outlined"> delivery_truck_speed </span> Get it within 2 days
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px"}}>
                    <span class="material-symbols-outlined"> payments </span> Pay on delivery available 
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px"}}>
                    <span class="material-symbols-outlined"> multiple_stop </span> Easy 14 days return available
                </div>
            </p>
            <Button className="buyButton" variant='' onClick={() => handleBuy(id, cartDispatch)}>Buy</Button>
            <Button className="rentButton" variant='' onClick={() => handleRent(id, cartDispatch)}>Rent</Button>
            <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"}}>
            <p> <u style={{fontWeight:550}}>Product Details</u> <br />
                Elegant formal coat for women <br />
                Grey color with subtle check pattern <br />
                Knee-length, tailored fit <br />
                Notch lapel collar <br />
                Long sleeves with buttoned cuffs <br />
                Premium wool-blend fabric <br />
                Soft inner lining for comfort <br />
                Perfect for office, meetings, and formal occasions<br /> 

                <u style={{fontWeight:550}}>Size & Fit</u> <br />
                Relaxed Fit <br />
                The model (height 5'4'') is wearing a size M <br />

                <u style={{fontWeight:550}}> Material & Care </u> <br />
                100% Cotton <br />
                Machine Wash
                </p>

            <p> <u style={{fontSize:20, fontWeight:550}}> Specifications </u> <br />
                <span style={{fontWeight:500}}>Fabrics:</span> Pure Cotton <br />
                <span style={{fontWeight:500}}>Fashion Trends:</span> New Basics <br />
                <span style={{fontWeight:500}}>Fit:</span> Relaxed Fit <br />
                <span style={{fontWeight:500}}>Length:</span> Regular <br />
                <span style={{fontWeight:500}}>Multipack Set:</span> Single <br />
                <span style={{fontWeight:500}}>Neck:</span> Round Neck <br />
                <span style={{fontWeight:500}}>Occasions:</span> Casual <br />
                <span style={{fontWeight:500}}>Package Contains:</span> 1 T-shirt <br />
                <span style={{fontWeight:500}}>Print or Pattern Types:</span> Solid <br />
                <span style={{fontWeight:500}}>Sleeve Length:</span> Short sleeves <br />
                <span style={{fontWeight:500}}>Sustainable:</span> Regular <br />
                <span style={{fontWeight:500}}>Wash Care:</span> Machine Wash <br />
                <span style={{fontWeight:500}}>Weave Type:</span> Knitted
            </p></div>
        </>
    ) },
    { id:"dd1",details:(id, cartDispatch)=>(
        <>
            <b style={{fontSize:"1.3em",display:"flex", flexWrap:"nowrap", gap:"4px"}}>₹{products.find((p)=>(p.id===id)).buyPrice} &nbsp;<s>₹{Math.round(products.find((p) => p.id === id)?.buyPrice * 1.53)} </s> (Buy)</b> 
            <b style={{fontSize:"1.3em", gap:"4px"}}>₹{Math.round(products.find((p) => p.id === id)?.buyPrice * 0.3)} (Rent)</b> 
            <p style={{color:"darkgreen"}}>inclusive of all taxes</p>
            <p style={{fontWeight:"600"}}>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px"}}>
                    <span class="material-symbols-outlined"> delivery_truck_speed </span> Get it within 2 days
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px"}}>
                    <span class="material-symbols-outlined"> payments </span> Pay on delivery available 
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px"}}>
                    <span class="material-symbols-outlined"> multiple_stop </span> Easy 14 days return available
                </div>
            </p>
            <Button className="buyButton" variant='' onClick={() => handleBuy(id, cartDispatch)}>Buy</Button>
            <Button className="rentButton" variant=''onClick={() => handleRent(id, cartDispatch)}>Rent</Button>
            <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"}}>
            <p> <u style={{fontWeight:550}}>Product Details</u> <br />
                Elegant formal coat for women <br />
                Grey color with subtle check pattern <br />
                Knee-length, tailored fit <br />
                Notch lapel collar <br />
                Long sleeves with buttoned cuffs <br />
                Premium wool-blend fabric <br />
                Soft inner lining for comfort <br />
                Perfect for office, meetings, and formal occasions<br /> 

                <u style={{fontWeight:550}}>Size & Fit</u> <br />
                Relaxed Fit <br />
                The model (height 5'4'') is wearing a size M <br />

                <u style={{fontWeight:550}}> Material & Care </u> <br />
                100% Cotton <br />
                Machine Wash
                </p>

            <p> <u style={{fontSize:20, fontWeight:550}}> Specifications </u> <br />
                <span style={{fontWeight:500}}>Fabrics:</span> Pure Cotton <br />
                <span style={{fontWeight:500}}>Fashion Trends:</span> New Basics <br />
                <span style={{fontWeight:500}}>Fit:</span> Relaxed Fit <br />
                <span style={{fontWeight:500}}>Length:</span> Regular <br />
                <span style={{fontWeight:500}}>Multipack Set:</span> Single <br />
                <span style={{fontWeight:500}}>Neck:</span> Round Neck <br />
                <span style={{fontWeight:500}}>Occasions:</span> Casual <br />
                <span style={{fontWeight:500}}>Package Contains:</span> 1 T-shirt <br />
                <span style={{fontWeight:500}}>Print or Pattern Types:</span> Solid <br />
                <span style={{fontWeight:500}}>Sleeve Length:</span> Short sleeves <br />
                <span style={{fontWeight:500}}>Sustainable:</span> Regular <br />
                <span style={{fontWeight:500}}>Wash Care:</span> Machine Wash <br />
                <span style={{fontWeight:500}}>Weave Type:</span> Knitted
            </p></div>
        </>
    ) },
    { id:"bld",details:(id, cartDispatch)=>(
        <>
            <b style={{fontSize:"1.3em",display:"flex", flexWrap:"nowrap", gap:"4px"}}>₹{products.find((p)=>(p.id===id)).buyPrice} &nbsp;<s>₹{Math.round(products.find((p) => p.id === id)?.buyPrice * 1.53)} </s> (Buy)</b> 
            <b style={{fontSize:"1.3em", gap:"4px"}}>₹{Math.round(products.find((p) => p.id === id)?.buyPrice * 0.3)} (Rent)</b> 
            <p style={{color:"darkgreen"}}>inclusive of all taxes</p>
            <p style={{fontWeight:"600"}}>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px"}}>
                    <span class="material-symbols-outlined"> delivery_truck_speed </span> Get it within 2 days
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px"}}>
                    <span class="material-symbols-outlined"> payments </span> Pay on delivery available 
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px"}}>
                    <span class="material-symbols-outlined"> multiple_stop </span> Easy 14 days return available
                </div>
            </p>
            <Button className="buyButton" variant='' onClick={() => handleBuy(id, cartDispatch)}>Buy</Button>
            <Button className="rentButton" variant=''onClick={() => handleRent(id, cartDispatch)}>Rent</Button>
            <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"}}>
            <p> <u style={{fontWeight:550}}>Product Details</u> <br />
                Elegant formal coat for women <br />
                Grey color with subtle check pattern <br />
                Knee-length, tailored fit <br />
                Notch lapel collar <br />
                Long sleeves with buttoned cuffs <br />
                Premium wool-blend fabric <br />
                Soft inner lining for comfort <br />
                Perfect for office, meetings, and formal occasions<br /> 

                <u style={{fontWeight:550}}>Size & Fit</u> <br />
                Relaxed Fit <br />
                The model (height 5'4'') is wearing a size M <br />

                <u style={{fontWeight:550}}> Material & Care </u> <br />
                100% Cotton <br />
                Machine Wash
                </p>

            <p> <u style={{fontSize:20, fontWeight:550}}> Specifications </u> <br />
                <span style={{fontWeight:500}}>Fabrics:</span> Pure Cotton <br />
                <span style={{fontWeight:500}}>Fashion Trends:</span> New Basics <br />
                <span style={{fontWeight:500}}>Fit:</span> Relaxed Fit <br />
                <span style={{fontWeight:500}}>Length:</span> Regular <br />
                <span style={{fontWeight:500}}>Multipack Set:</span> Single <br />
                <span style={{fontWeight:500}}>Neck:</span> Round Neck <br />
                <span style={{fontWeight:500}}>Occasions:</span> Casual <br />
                <span style={{fontWeight:500}}>Package Contains:</span> 1 T-shirt <br />
                <span style={{fontWeight:500}}>Print or Pattern Types:</span> Solid <br />
                <span style={{fontWeight:500}}>Sleeve Length:</span> Short sleeves <br />
                <span style={{fontWeight:500}}>Sustainable:</span> Regular <br />
                <span style={{fontWeight:500}}>Wash Care:</span> Machine Wash <br />
                <span style={{fontWeight:500}}>Weave Type:</span> Knitted
            </p></div>
        </>
    ) },
    { id:"dd2",details:(id, cartDispatch)=>(
        <>
            <b style={{fontSize:"1.3em",display:"flex", flexWrap:"nowrap", gap:"4px"}}>₹{products.find((p)=>(p.id===id)).buyPrice} &nbsp;<s>₹{Math.round(products.find((p) => p.id === id)?.buyPrice * 1.53)} </s> (Buy)</b> 
            <b style={{fontSize:"1.3em", gap:"4px"}}>₹{Math.round(products.find((p) => p.id === id)?.buyPrice * 0.3)} (Rent)</b> 
            <p style={{color:"darkgreen"}}>inclusive of all taxes</p>
            <p style={{fontWeight:"600"}}>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px"}}>
                    <span class="material-symbols-outlined"> delivery_truck_speed </span> Get it within 2 days
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px"}}>
                    <span class="material-symbols-outlined"> payments </span> Pay on delivery available 
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px"}}>
                    <span class="material-symbols-outlined"> multiple_stop </span> Easy 14 days return available
                </div>
            </p>
            <Button className="buyButton" variant='' onClick={() => handleBuy(id, cartDispatch)}>Buy</Button>
            <Button className="rentButton" variant=''onClick={() => handleRent(id, cartDispatch)}>Rent</Button>
            <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"}}>
            <p> <u style={{fontWeight:550}}>Product Details</u> <br />
                Elegant formal coat for women <br />
                Grey color with subtle check pattern <br />
                Knee-length, tailored fit <br />
                Notch lapel collar <br />
                Long sleeves with buttoned cuffs <br />
                Premium wool-blend fabric <br />
                Soft inner lining for comfort <br />
                Perfect for office, meetings, and formal occasions<br /> 

                <u style={{fontWeight:550}}>Size & Fit</u> <br />
                Relaxed Fit <br />
                The model (height 5'4'') is wearing a size M <br />

                <u style={{fontWeight:550}}> Material & Care </u> <br />
                100% Cotton <br />
                Machine Wash
                </p>

            <p> <u style={{fontSize:20, fontWeight:550}}> Specifications </u> <br />
                <span style={{fontWeight:500}}>Fabrics:</span> Pure Cotton <br />
                <span style={{fontWeight:500}}>Fashion Trends:</span> New Basics <br />
                <span style={{fontWeight:500}}>Fit:</span> Relaxed Fit <br />
                <span style={{fontWeight:500}}>Length:</span> Regular <br />
                <span style={{fontWeight:500}}>Multipack Set:</span> Single <br />
                <span style={{fontWeight:500}}>Neck:</span> Round Neck <br />
                <span style={{fontWeight:500}}>Occasions:</span> Casual <br />
                <span style={{fontWeight:500}}>Package Contains:</span> 1 T-shirt <br />
                <span style={{fontWeight:500}}>Print or Pattern Types:</span> Solid <br />
                <span style={{fontWeight:500}}>Sleeve Length:</span> Short sleeves <br />
                <span style={{fontWeight:500}}>Sustainable:</span> Regular <br />
                <span style={{fontWeight:500}}>Wash Care:</span> Machine Wash <br />
                <span style={{fontWeight:500}}>Weave Type:</span> Knitted
            </p></div>
        </>
    ) },
    { id:"td",details:(id, cartDispatch)=>(
        <>
            <b style={{fontSize:"1.3em",display:"flex", flexWrap:"nowrap", gap:"4px"}}>₹{products.find((p)=>(p.id===id)).buyPrice} &nbsp;<s>₹{Math.round(products.find((p) => p.id === id)?.buyPrice * 1.53)} </s> (Buy)</b> 
            <b style={{fontSize:"1.3em", gap:"4px"}}>₹{Math.round(products.find((p) => p.id === id)?.buyPrice * 0.3)} (Rent)</b> 
            <p style={{color:"darkgreen"}}>inclusive of all taxes</p>
            <p style={{fontWeight:"600"}}>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px"}}>
                    <span class="material-symbols-outlined"> delivery_truck_speed </span> Get it within 2 days
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px"}}>
                    <span class="material-symbols-outlined"> payments </span> Pay on delivery available 
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px"}}>
                    <span class="material-symbols-outlined"> multiple_stop </span> Easy 14 days return available
                </div>
            </p>
            <Button className="buyButton" variant='' onClick={() => handleBuy(id, cartDispatch)}>Buy</Button>
            <Button className="rentButton" variant=''onClick={() => handleRent(id, cartDispatch)}>Rent</Button>
            <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"}}>
            <p> <u style={{fontWeight:550}}>Product Details</u> <br />
                Elegant formal coat for women <br />
                Grey color with subtle check pattern <br />
                Knee-length, tailored fit <br />
                Notch lapel collar <br />
                Long sleeves with buttoned cuffs <br />
                Premium wool-blend fabric <br />
                Soft inner lining for comfort <br />
                Perfect for office, meetings, and formal occasions<br /> 

                <u style={{fontWeight:550}}>Size & Fit</u> <br />
                Relaxed Fit <br />
                The model (height 5'4'') is wearing a size M <br />

                <u style={{fontWeight:550}}> Material & Care </u> <br />
                100% Cotton <br />
                Machine Wash
                </p>

            <p> <u style={{fontSize:20, fontWeight:550}}> Specifications </u> <br />
                <span style={{fontWeight:500}}>Fabrics:</span> Pure Cotton <br />
                <span style={{fontWeight:500}}>Fashion Trends:</span> New Basics <br />
                <span style={{fontWeight:500}}>Fit:</span> Relaxed Fit <br />
                <span style={{fontWeight:500}}>Length:</span> Regular <br />
                <span style={{fontWeight:500}}>Multipack Set:</span> Single <br />
                <span style={{fontWeight:500}}>Neck:</span> Round Neck <br />
                <span style={{fontWeight:500}}>Occasions:</span> Casual <br />
                <span style={{fontWeight:500}}>Package Contains:</span> 1 T-shirt <br />
                <span style={{fontWeight:500}}>Print or Pattern Types:</span> Solid <br />
                <span style={{fontWeight:500}}>Sleeve Length:</span> Short sleeves <br />
                <span style={{fontWeight:500}}>Sustainable:</span> Regular <br />
                <span style={{fontWeight:500}}>Wash Care:</span> Machine Wash <br />
                <span style={{fontWeight:500}}>Weave Type:</span> Knitted
            </p></div>
        </>
    ) },
    { id:"bj1",details:(id, cartDispatch)=>(
        <>
            <b style={{fontSize:"1.3em",display:"flex", flexWrap:"nowrap", gap:"4px"}}>₹{products.find((p)=>(p.id===id)).buyPrice} &nbsp;<s>₹{Math.round(products.find((p) => p.id === id)?.buyPrice * 1.53)} </s> (Buy)</b> 
            <b style={{fontSize:"1.3em", gap:"4px"}}>₹{Math.round(products.find((p) => p.id === id)?.buyPrice * 0.3)} (Rent)</b> 
            <p style={{color:"darkgreen"}}>inclusive of all taxes</p>
            <p style={{fontWeight:"600"}}>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px"}}>
                    <span class="material-symbols-outlined"> delivery_truck_speed </span> Get it within 2 days
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px"}}>
                    <span class="material-symbols-outlined"> payments </span> Pay on delivery available 
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px"}}>
                    <span class="material-symbols-outlined"> multiple_stop </span> Easy 14 days return available
                </div>
            </p>
            <Button className="buyButton" variant='' onClick={() => handleBuy(id, cartDispatch)}>Buy</Button>
            <Button className="rentButton" variant=''onClick={() => handleRent(id, cartDispatch)}>Rent</Button>
            <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"}}>
            <p> <u style={{fontWeight:550}}>Product Details</u> <br />
                Elegant formal coat for women <br />
                Grey color with subtle check pattern <br />
                Knee-length, tailored fit <br />
                Notch lapel collar <br />
                Long sleeves with buttoned cuffs <br />
                Premium wool-blend fabric <br />
                Soft inner lining for comfort <br />
                Perfect for office, meetings, and formal occasions<br /> 

                <u style={{fontWeight:550}}>Size & Fit</u> <br />
                Relaxed Fit <br />
                The model (height 5'4'') is wearing a size M <br />

                <u style={{fontWeight:550}}> Material & Care </u> <br />
                100% Cotton <br />
                Machine Wash
                </p>

            <p> <u style={{fontSize:20, fontWeight:550}}> Specifications </u> <br />
                <span style={{fontWeight:500}}>Fabrics:</span> Pure Cotton <br />
                <span style={{fontWeight:500}}>Fashion Trends:</span> New Basics <br />
                <span style={{fontWeight:500}}>Fit:</span> Relaxed Fit <br />
                <span style={{fontWeight:500}}>Length:</span> Regular <br />
                <span style={{fontWeight:500}}>Multipack Set:</span> Single <br />
                <span style={{fontWeight:500}}>Neck:</span> Round Neck <br />
                <span style={{fontWeight:500}}>Occasions:</span> Casual <br />
                <span style={{fontWeight:500}}>Package Contains:</span> 1 T-shirt <br />
                <span style={{fontWeight:500}}>Print or Pattern Types:</span> Solid <br />
                <span style={{fontWeight:500}}>Sleeve Length:</span> Short sleeves <br />
                <span style={{fontWeight:500}}>Sustainable:</span> Regular <br />
                <span style={{fontWeight:500}}>Wash Care:</span> Machine Wash <br />
                <span style={{fontWeight:500}}>Weave Type:</span> Knitted
            </p></div>
        </>
    ) },
    { id:"swj",details:(id, cartDispatch)=>(
        <>
            <b style={{fontSize:"1.3em",display:"flex", flexWrap:"nowrap", gap:"4px"}}>₹{products.find((p)=>(p.id===id)).buyPrice} &nbsp;<s>₹{Math.round(products.find((p) => p.id === id)?.buyPrice * 1.53)} </s> (Buy)</b> 
            <b style={{fontSize:"1.3em", gap:"4px"}}>₹{Math.round(products.find((p) => p.id === id)?.buyPrice * 0.3)} (Rent)</b> 
            <p style={{color:"darkgreen"}}>inclusive of all taxes</p>
            <p style={{fontWeight:"600"}}>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px"}}>
                    <span class="material-symbols-outlined"> delivery_truck_speed </span> Get it within 2 days
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px"}}>
                    <span class="material-symbols-outlined"> payments </span> Pay on delivery available 
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px"}}>
                    <span class="material-symbols-outlined"> multiple_stop </span> Easy 14 days return available
                </div>
            </p>
            <Button className="buyButton" variant='' onClick={() => handleBuy(id, cartDispatch)}>Buy</Button>
            <Button className="rentButton" variant=''onClick={() => handleRent(id, cartDispatch)}>Rent</Button>
            <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"}}>
            <p> <u style={{fontWeight:550}}>Product Details</u> <br />
                Elegant formal coat for women <br />
                Grey color with subtle check pattern <br />
                Knee-length, tailored fit <br />
                Notch lapel collar <br />
                Long sleeves with buttoned cuffs <br />
                Premium wool-blend fabric <br />
                Soft inner lining for comfort <br />
                Perfect for office, meetings, and formal occasions<br /> 

                <u style={{fontWeight:550}}>Size & Fit</u> <br />
                Relaxed Fit <br />
                The model (height 5'4'') is wearing a size M <br />

                <u style={{fontWeight:550}}> Material & Care </u> <br />
                100% Cotton <br />
                Machine Wash
                </p>

            <p> <u style={{fontSize:20, fontWeight:550}}> Specifications </u> <br />
                <span style={{fontWeight:500}}>Fabrics:</span> Pure Cotton <br />
                <span style={{fontWeight:500}}>Fashion Trends:</span> New Basics <br />
                <span style={{fontWeight:500}}>Fit:</span> Relaxed Fit <br />
                <span style={{fontWeight:500}}>Length:</span> Regular <br />
                <span style={{fontWeight:500}}>Multipack Set:</span> Single <br />
                <span style={{fontWeight:500}}>Neck:</span> Round Neck <br />
                <span style={{fontWeight:500}}>Occasions:</span> Casual <br />
                <span style={{fontWeight:500}}>Package Contains:</span> 1 T-shirt <br />
                <span style={{fontWeight:500}}>Print or Pattern Types:</span> Solid <br />
                <span style={{fontWeight:500}}>Sleeve Length:</span> Short sleeves <br />
                <span style={{fontWeight:500}}>Sustainable:</span> Regular <br />
                <span style={{fontWeight:500}}>Wash Care:</span> Machine Wash <br />
                <span style={{fontWeight:500}}>Weave Type:</span> Knitted
            </p></div>
        </>
    ) },
    { id:"dj",details:(id, cartDispatch)=>(
        <>
            <b style={{fontSize:"1.3em",display:"flex", flexWrap:"nowrap", gap:"4px"}}>₹{products.find((p)=>(p.id===id)).buyPrice} &nbsp;<s>₹{Math.round(products.find((p) => p.id === id)?.buyPrice * 1.53)} </s> (Buy)</b> 
            <b style={{fontSize:"1.3em", gap:"4px"}}>₹{Math.round(products.find((p) => p.id === id)?.buyPrice * 0.3)} (Rent)</b> 
            <p style={{color:"darkgreen"}}>inclusive of all taxes</p>
            <p style={{fontWeight:"600"}}>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px"}}>
                    <span class="material-symbols-outlined"> delivery_truck_speed </span> Get it within 2 days
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px"}}>
                    <span class="material-symbols-outlined"> payments </span> Pay on delivery available 
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px"}}>
                    <span class="material-symbols-outlined"> multiple_stop </span> Easy 14 days return available
                </div>
            </p>
            <Button className="buyButton" variant='' onClick={() => handleBuy(id, cartDispatch)}>Buy</Button>
            <Button className="rentButton" variant=''onClick={() => handleRent(id, cartDispatch)}>Rent</Button>
            <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"}}>
            <p> <u style={{fontWeight:550}}>Product Details</u> <br />
                Elegant formal coat for women <br />
                Grey color with subtle check pattern <br />
                Knee-length, tailored fit <br />
                Notch lapel collar <br />
                Long sleeves with buttoned cuffs <br />
                Premium wool-blend fabric <br />
                Soft inner lining for comfort <br />
                Perfect for office, meetings, and formal occasions<br /> 

                <u style={{fontWeight:550}}>Size & Fit</u> <br />
                Relaxed Fit <br />
                The model (height 5'4'') is wearing a size M <br />

                <u style={{fontWeight:550}}> Material & Care </u> <br />
                100% Cotton <br />
                Machine Wash
                </p>

            <p> <u style={{fontSize:20, fontWeight:550}}> Specifications </u> <br />
                <span style={{fontWeight:500}}>Fabrics:</span> Pure Cotton <br />
                <span style={{fontWeight:500}}>Fashion Trends:</span> New Basics <br />
                <span style={{fontWeight:500}}>Fit:</span> Relaxed Fit <br />
                <span style={{fontWeight:500}}>Length:</span> Regular <br />
                <span style={{fontWeight:500}}>Multipack Set:</span> Single <br />
                <span style={{fontWeight:500}}>Neck:</span> Round Neck <br />
                <span style={{fontWeight:500}}>Occasions:</span> Casual <br />
                <span style={{fontWeight:500}}>Package Contains:</span> 1 T-shirt <br />
                <span style={{fontWeight:500}}>Print or Pattern Types:</span> Solid <br />
                <span style={{fontWeight:500}}>Sleeve Length:</span> Short sleeves <br />
                <span style={{fontWeight:500}}>Sustainable:</span> Regular <br />
                <span style={{fontWeight:500}}>Wash Care:</span> Machine Wash <br />
                <span style={{fontWeight:500}}>Weave Type:</span> Knitted
            </p></div>
        </>
    ) },
    { id:"cj",details:(id, cartDispatch)=>(
        <>
            <b style={{fontSize:"1.3em",display:"flex", flexWrap:"nowrap", gap:"4px"}}>₹{products.find((p)=>(p.id===id)).buyPrice} &nbsp;<s>₹{Math.round(products.find((p) => p.id === id)?.buyPrice * 1.53)} </s> (Buy)</b> 
            <b style={{fontSize:"1.3em", gap:"4px"}}>₹{Math.round(products.find((p) => p.id === id)?.buyPrice * 0.3)} (Rent)</b> 
            <p style={{color:"darkgreen"}}>inclusive of all taxes</p>
            <p style={{fontWeight:"600"}}>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px"}}>
                    <span class="material-symbols-outlined"> delivery_truck_speed </span> Get it within 2 days
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px"}}>
                    <span class="material-symbols-outlined"> payments </span> Pay on delivery available 
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px"}}>
                    <span class="material-symbols-outlined"> multiple_stop </span> Easy 14 days return available
                </div>
            </p>
            <Button className="buyButton" variant='' onClick={() => handleBuy(id, cartDispatch)}>Buy</Button>
            <Button className="rentButton" variant=''onClick={() => handleRent(id, cartDispatch)}>Rent</Button>
            <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"}}>
            <p> <u style={{fontWeight:550}}>Product Details</u> <br />
                Elegant formal coat for women <br />
                Grey color with subtle check pattern <br />
                Knee-length, tailored fit <br />
                Notch lapel collar <br />
                Long sleeves with buttoned cuffs <br />
                Premium wool-blend fabric <br />
                Soft inner lining for comfort <br />
                Perfect for office, meetings, and formal occasions<br /> 

                <u style={{fontWeight:550}}>Size & Fit</u> <br />
                Relaxed Fit <br />
                The model (height 5'4'') is wearing a size M <br />

                <u style={{fontWeight:550}}> Material & Care </u> <br />
                100% Cotton <br />
                Machine Wash
                </p>

            <p> <u style={{fontSize:20, fontWeight:550}}> Specifications </u> <br />
                <span style={{fontWeight:500}}>Fabrics:</span> Pure Cotton <br />
                <span style={{fontWeight:500}}>Fashion Trends:</span> New Basics <br />
                <span style={{fontWeight:500}}>Fit:</span> Relaxed Fit <br />
                <span style={{fontWeight:500}}>Length:</span> Regular <br />
                <span style={{fontWeight:500}}>Multipack Set:</span> Single <br />
                <span style={{fontWeight:500}}>Neck:</span> Round Neck <br />
                <span style={{fontWeight:500}}>Occasions:</span> Casual <br />
                <span style={{fontWeight:500}}>Package Contains:</span> 1 T-shirt <br />
                <span style={{fontWeight:500}}>Print or Pattern Types:</span> Solid <br />
                <span style={{fontWeight:500}}>Sleeve Length:</span> Short sleeves <br />
                <span style={{fontWeight:500}}>Sustainable:</span> Regular <br />
                <span style={{fontWeight:500}}>Wash Care:</span> Machine Wash <br />
                <span style={{fontWeight:500}}>Weave Type:</span> Knitted
            </p></div>
        </>
    ) },
    { id:"cc",details:(id, cartDispatch)=>(
        <>
            <b style={{fontSize:"1.3em",display:"flex", flexWrap:"nowrap", gap:"4px"}}>₹{products.find((p)=>(p.id===id)).buyPrice} &nbsp;<s>₹{Math.round(products.find((p) => p.id === id)?.buyPrice * 1.53)} </s> (Buy)</b> 
            <b style={{fontSize:"1.3em", gap:"4px"}}>₹{Math.round(products.find((p) => p.id === id)?.buyPrice * 0.3)} (Rent)</b> 
            <p style={{color:"darkgreen"}}>inclusive of all taxes</p>
            <p style={{fontWeight:"600"}}>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px"}}>
                    <span class="material-symbols-outlined"> delivery_truck_speed </span> Get it within 2 days
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px"}}>
                    <span class="material-symbols-outlined"> payments </span> Pay on delivery available 
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px"}}>
                    <span class="material-symbols-outlined"> multiple_stop </span> Easy 14 days return available
                </div>
            </p>
            <Button className="buyButton" variant='' onClick={() => handleBuy(id, cartDispatch)}>Buy</Button>
            <Button className="rentButton" variant=''onClick={() => handleRent(id, cartDispatch)}>Rent</Button>
            <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"}}>
            <p> <u style={{fontWeight:550}}>Product Details</u> <br />
                Elegant formal coat for women <br />
                Grey color with subtle check pattern <br />
                Knee-length, tailored fit <br />
                Notch lapel collar <br />
                Long sleeves with buttoned cuffs <br />
                Premium wool-blend fabric <br />
                Soft inner lining for comfort <br />
                Perfect for office, meetings, and formal occasions<br /> 

                <u style={{fontWeight:550}}>Size & Fit</u> <br />
                Relaxed Fit <br />
                The model (height 5'11'') is wearing a size M <br />

                <u style={{fontWeight:550}}> Material & Care </u> <br />
                100% Cotton <br />
                Machine Wash
                </p>

            <p> <u style={{fontSize:20, fontWeight:550}}> Specifications </u> <br />
                <span style={{fontWeight:500}}>Fabrics:</span> Pure Cotton <br />
                <span style={{fontWeight:500}}>Fashion Trends:</span> New Basics <br />
                <span style={{fontWeight:500}}>Fit:</span> Relaxed Fit <br />
                <span style={{fontWeight:500}}>Length:</span> Regular <br />
                <span style={{fontWeight:500}}>Multipack Set:</span> Single <br />
                <span style={{fontWeight:500}}>Neck:</span> Round Neck <br />
                <span style={{fontWeight:500}}>Occasions:</span> Casual <br />
                <span style={{fontWeight:500}}>Package Contains:</span> 1 T-shirt <br />
                <span style={{fontWeight:500}}>Print or Pattern Types:</span> Solid <br />
                <span style={{fontWeight:500}}>Sleeve Length:</span> Short sleeves <br />
                <span style={{fontWeight:500}}>Sustainable:</span> Regular <br />
                <span style={{fontWeight:500}}>Wash Care:</span> Machine Wash <br />
                <span style={{fontWeight:500}}>Weave Type:</span> Knitted
            </p></div>
        </>
    ) },
    { id:"dbc",details:(id, cartDispatch)=>(
        <>
            <b style={{fontSize:"1.3em",display:"flex", flexWrap:"nowrap", gap:"4px"}}>₹{products.find((p)=>(p.id===id)).buyPrice} &nbsp;<s>₹{Math.round(products.find((p) => p.id === id)?.buyPrice * 1.53)} </s> (Buy)</b> 
            <b style={{fontSize:"1.3em", gap:"4px"}}>₹{Math.round(products.find((p) => p.id === id)?.buyPrice * 0.3)} (Rent)</b> 
            <p style={{color:"darkgreen"}}>inclusive of all taxes</p>
            <p style={{fontWeight:"600"}}>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px"}}>
                    <span class="material-symbols-outlined"> delivery_truck_speed </span> Get it within 2 days
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px"}}>
                    <span class="material-symbols-outlined"> payments </span> Pay on delivery available 
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px"}}>
                    <span class="material-symbols-outlined"> multiple_stop </span> Easy 14 days return available
                </div>
            </p>
            <Button className="buyButton" variant='' onClick={() => handleBuy(id, cartDispatch)}>Buy</Button>
            <Button className="rentButton" variant=''onClick={() => handleRent(id, cartDispatch)}>Rent</Button>
            <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"}}>
            <p> <u style={{fontWeight:550}}>Product Details</u> <br />
                Elegant formal coat for women <br />
                Grey color with subtle check pattern <br />
                Knee-length, tailored fit <br />
                Notch lapel collar <br />
                Long sleeves with buttoned cuffs <br />
                Premium wool-blend fabric <br />
                Soft inner lining for comfort <br />
                Perfect for office, meetings, and formal occasions<br /> 

                <u style={{fontWeight:550}}>Size & Fit</u> <br />
                Relaxed Fit <br />
                The model (height 5'11'') is wearing a size M <br />

                <u style={{fontWeight:550}}> Material & Care </u> <br />
                100% Cotton <br />
                Machine Wash
                </p>

            <p> <u style={{fontSize:20, fontWeight:550}}> Specifications </u> <br />
                <span style={{fontWeight:500}}>Fabrics:</span> Pure Cotton <br />
                <span style={{fontWeight:500}}>Fashion Trends:</span> New Basics <br />
                <span style={{fontWeight:500}}>Fit:</span> Relaxed Fit <br />
                <span style={{fontWeight:500}}>Length:</span> Regular <br />
                <span style={{fontWeight:500}}>Multipack Set:</span> Single <br />
                <span style={{fontWeight:500}}>Neck:</span> Round Neck <br />
                <span style={{fontWeight:500}}>Occasions:</span> Casual <br />
                <span style={{fontWeight:500}}>Package Contains:</span> 1 T-shirt <br />
                <span style={{fontWeight:500}}>Print or Pattern Types:</span> Solid <br />
                <span style={{fontWeight:500}}>Sleeve Length:</span> Short sleeves <br />
                <span style={{fontWeight:500}}>Sustainable:</span> Regular <br />
                <span style={{fontWeight:500}}>Wash Care:</span> Machine Wash <br />
                <span style={{fontWeight:500}}>Weave Type:</span> Knitted
            </p></div>
        </>
    ) },
    { id:"fp",details:(id, cartDispatch)=>(
        <>
            <b style={{fontSize:"1.3em",display:"flex", flexWrap:"nowrap", gap:"4px"}}>₹{products.find((p)=>(p.id===id)).buyPrice} &nbsp;<s>₹{Math.round(products.find((p) => p.id === id)?.buyPrice * 1.53)} </s> (Buy)</b> 
            <b style={{fontSize:"1.3em", gap:"4px"}}>₹{Math.round(products.find((p) => p.id === id)?.buyPrice * 0.3)} (Rent)</b> 
            <p style={{color:"darkgreen"}}>inclusive of all taxes</p>
            <p style={{fontWeight:"600"}}>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px"}}>
                    <span class="material-symbols-outlined"> delivery_truck_speed </span> Get it within 2 days
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px"}}>
                    <span class="material-symbols-outlined"> payments </span> Pay on delivery available 
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px"}}>
                    <span class="material-symbols-outlined"> multiple_stop </span> Easy 14 days return available
                </div>
            </p>
            <Button className="buyButton" variant='' onClick={() => handleBuy(id, cartDispatch)}>Buy</Button>
            <Button className="rentButton" variant=''onClick={() => handleRent(id, cartDispatch)}>Rent</Button>
            <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"}}>
            <p> <u style={{fontWeight:550}}>Product Details</u> <br />
                Elegant formal coat for women <br />
                Grey color with subtle check pattern <br />
                Knee-length, tailored fit <br />
                Notch lapel collar <br />
                Long sleeves with buttoned cuffs <br />
                Premium wool-blend fabric <br />
                Soft inner lining for comfort <br />
                Perfect for office, meetings, and formal occasions<br /> 

                <u style={{fontWeight:550}}>Size & Fit</u> <br />
                Relaxed Fit <br />
                The model (height 5'11'') is wearing a size M <br />

                <u style={{fontWeight:550}}> Material & Care </u> <br />
                100% Cotton <br />
                Machine Wash
                </p>

            <p> <u style={{fontSize:20, fontWeight:550}}> Specifications </u> <br />
                <span style={{fontWeight:500}}>Fabrics:</span> Pure Cotton <br />
                <span style={{fontWeight:500}}>Fashion Trends:</span> New Basics <br />
                <span style={{fontWeight:500}}>Fit:</span> Relaxed Fit <br />
                <span style={{fontWeight:500}}>Length:</span> Regular <br />
                <span style={{fontWeight:500}}>Multipack Set:</span> Single <br />
                <span style={{fontWeight:500}}>Neck:</span> Round Neck <br />
                <span style={{fontWeight:500}}>Occasions:</span> Casual <br />
                <span style={{fontWeight:500}}>Package Contains:</span> 1 T-shirt <br />
                <span style={{fontWeight:500}}>Print or Pattern Types:</span> Solid <br />
                <span style={{fontWeight:500}}>Sleeve Length:</span> Short sleeves <br />
                <span style={{fontWeight:500}}>Sustainable:</span> Regular <br />
                <span style={{fontWeight:500}}>Wash Care:</span> Machine Wash <br />
                <span style={{fontWeight:500}}>Weave Type:</span> Knitted
            </p></div>
        </>
    ) },
    { id:"jc",details:(id, cartDispatch)=>(
        <>
            <b style={{fontSize:"1.3em",display:"flex", flexWrap:"nowrap", gap:"4px"}}>₹{products.find((p)=>(p.id===id)).buyPrice} &nbsp;<s>₹{Math.round(products.find((p) => p.id === id)?.buyPrice * 1.53)} </s> (Buy)</b> 
            <b style={{fontSize:"1.3em", gap:"4px"}}>₹{Math.round(products.find((p) => p.id === id)?.buyPrice * 0.3)} (Rent)</b> 
            <p style={{color:"darkgreen"}}>inclusive of all taxes</p>
            <p style={{fontWeight:"600"}}>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px"}}>
                    <span class="material-symbols-outlined"> delivery_truck_speed </span> Get it within 2 days
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px"}}>
                    <span class="material-symbols-outlined"> payments </span> Pay on delivery available 
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px"}}>
                    <span class="material-symbols-outlined"> multiple_stop </span> Easy 14 days return available
                </div>
            </p>
            <Button className="buyButton" variant='' onClick={() => handleBuy(id, cartDispatch)}>Buy</Button>
            <Button className="rentButton" variant=''onClick={() => handleRent(id, cartDispatch)}>Rent</Button>
            <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"}}>
            <p> <u style={{fontWeight:550}}>Product Details</u> <br />
                Elegant formal coat for women <br />
                Grey color with subtle check pattern <br />
                Knee-length, tailored fit <br />
                Notch lapel collar <br />
                Long sleeves with buttoned cuffs <br />
                Premium wool-blend fabric <br />
                Soft inner lining for comfort <br />
                Perfect for office, meetings, and formal occasions<br /> 

                <u style={{fontWeight:550}}>Size & Fit</u> <br />
                Relaxed Fit <br />
                The model (height 5'11'') is wearing a size M <br />

                <u style={{fontWeight:550}}> Material & Care </u> <br />
                100% Cotton <br />
                Machine Wash
                </p>

            <p> <u style={{fontSize:20, fontWeight:550}}> Specifications </u> <br />
                <span style={{fontWeight:500}}>Fabrics:</span> Pure Cotton <br />
                <span style={{fontWeight:500}}>Fashion Trends:</span> New Basics <br />
                <span style={{fontWeight:500}}>Fit:</span> Relaxed Fit <br />
                <span style={{fontWeight:500}}>Length:</span> Regular <br />
                <span style={{fontWeight:500}}>Multipack Set:</span> Single <br />
                <span style={{fontWeight:500}}>Neck:</span> Round Neck <br />
                <span style={{fontWeight:500}}>Occasions:</span> Casual <br />
                <span style={{fontWeight:500}}>Package Contains:</span> 1 T-shirt <br />
                <span style={{fontWeight:500}}>Print or Pattern Types:</span> Solid <br />
                <span style={{fontWeight:500}}>Sleeve Length:</span> Short sleeves <br />
                <span style={{fontWeight:500}}>Sustainable:</span> Regular <br />
                <span style={{fontWeight:500}}>Wash Care:</span> Machine Wash <br />
                <span style={{fontWeight:500}}>Weave Type:</span> Knitted
            </p></div>
        </>
    ) },
    { id:"lj1",details:(id, cartDispatch)=>(
        <>
            <b style={{fontSize:"1.3em",display:"flex", flexWrap:"nowrap", gap:"4px"}}>₹{products.find((p)=>(p.id===id)).buyPrice} &nbsp;<s>₹{Math.round(products.find((p) => p.id === id)?.buyPrice * 1.53)} </s> (Buy)</b> 
            <b style={{fontSize:"1.3em", gap:"4px"}}>₹{Math.round(products.find((p) => p.id === id)?.buyPrice * 0.3)} (Rent)</b> 
            <p style={{color:"darkgreen"}}>inclusive of all taxes</p>
            <p style={{fontWeight:"600"}}>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px"}}>
                    <span class="material-symbols-outlined"> delivery_truck_speed </span> Get it within 2 days
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px"}}>
                    <span class="material-symbols-outlined"> payments </span> Pay on delivery available 
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px"}}>
                    <span class="material-symbols-outlined"> multiple_stop </span> Easy 14 days return available
                </div>
            </p>
            <Button className="buyButton" variant='' onClick={() => handleBuy(id, cartDispatch)}>Buy</Button>
            <Button className="rentButton" variant=''onClick={() => handleRent(id, cartDispatch)}>Rent</Button>
            <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"}}>
            <p> <u style={{fontWeight:550}}>Product Details</u> <br />
                Elegant formal coat for women <br />
                Grey color with subtle check pattern <br />
                Knee-length, tailored fit <br />
                Notch lapel collar <br />
                Long sleeves with buttoned cuffs <br />
                Premium wool-blend fabric <br />
                Soft inner lining for comfort <br />
                Perfect for office, meetings, and formal occasions<br /> 

                <u style={{fontWeight:550}}>Size & Fit</u> <br />
                Relaxed Fit <br />
                The model (height 5'11'') is wearing a size M <br />

                <u style={{fontWeight:550}}> Material & Care </u> <br />
                100% Cotton <br />
                Machine Wash
                </p>

            <p> <u style={{fontSize:20, fontWeight:550}}> Specifications </u> <br />
                <span style={{fontWeight:500}}>Fabrics:</span> Pure Cotton <br />
                <span style={{fontWeight:500}}>Fashion Trends:</span> New Basics <br />
                <span style={{fontWeight:500}}>Fit:</span> Relaxed Fit <br />
                <span style={{fontWeight:500}}>Length:</span> Regular <br />
                <span style={{fontWeight:500}}>Multipack Set:</span> Single <br />
                <span style={{fontWeight:500}}>Neck:</span> Round Neck <br />
                <span style={{fontWeight:500}}>Occasions:</span> Casual <br />
                <span style={{fontWeight:500}}>Package Contains:</span> 1 T-shirt <br />
                <span style={{fontWeight:500}}>Print or Pattern Types:</span> Solid <br />
                <span style={{fontWeight:500}}>Sleeve Length:</span> Short sleeves <br />
                <span style={{fontWeight:500}}>Sustainable:</span> Regular <br />
                <span style={{fontWeight:500}}>Wash Care:</span> Machine Wash <br />
                <span style={{fontWeight:500}}>Weave Type:</span> Knitted
            </p></div>
        </>
    ) },
    { id:"lj2",details:(id, cartDispatch)=>(
        <>
            <b style={{fontSize:"1.3em",display:"flex", flexWrap:"nowrap", gap:"4px"}}>₹{products.find((p)=>(p.id===id)).buyPrice} &nbsp;<s>₹{Math.round(products.find((p) => p.id === id)?.buyPrice * 1.53)} </s> (Buy)</b> 
            <b style={{fontSize:"1.3em", gap:"4px"}}>₹{Math.round(products.find((p) => p.id === id)?.buyPrice * 0.3)} (Rent)</b> 
            <p style={{color:"darkgreen"}}>inclusive of all taxes</p>
            <p style={{fontWeight:"600"}}>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px"}}>
                    <span class="material-symbols-outlined"> delivery_truck_speed </span> Get it within 2 days
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px"}}>
                    <span class="material-symbols-outlined"> payments </span> Pay on delivery available 
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px"}}>
                    <span class="material-symbols-outlined"> multiple_stop </span> Easy 14 days return available
                </div>
            </p>
            <Button className="buyButton" variant='' onClick={() => handleBuy(id, cartDispatch)}>Buy</Button>
            <Button className="rentButton" variant=''onClick={() => handleRent(id, cartDispatch)}>Rent</Button>
            <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"}}>
            <p> <u style={{fontWeight:550}}>Product Details</u> <br />
                Elegant formal coat for women <br />
                Grey color with subtle check pattern <br />
                Knee-length, tailored fit <br />
                Notch lapel collar <br />
                Long sleeves with buttoned cuffs <br />
                Premium wool-blend fabric <br />
                Soft inner lining for comfort <br />
                Perfect for office, meetings, and formal occasions<br /> 

                <u style={{fontWeight:550}}>Size & Fit</u> <br />
                Relaxed Fit <br />
                The model (height 5'11'') is wearing a size M <br />

                <u style={{fontWeight:550}}> Material & Care </u> <br />
                100% Cotton <br />
                Machine Wash
                </p>

            <p> <u style={{fontSize:20, fontWeight:550}}> Specifications </u> <br />
                <span style={{fontWeight:500}}>Fabrics:</span> Pure Cotton <br />
                <span style={{fontWeight:500}}>Fashion Trends:</span> New Basics <br />
                <span style={{fontWeight:500}}>Fit:</span> Relaxed Fit <br />
                <span style={{fontWeight:500}}>Length:</span> Regular <br />
                <span style={{fontWeight:500}}>Multipack Set:</span> Single <br />
                <span style={{fontWeight:500}}>Neck:</span> Round Neck <br />
                <span style={{fontWeight:500}}>Occasions:</span> Casual <br />
                <span style={{fontWeight:500}}>Package Contains:</span> 1 T-shirt <br />
                <span style={{fontWeight:500}}>Print or Pattern Types:</span> Solid <br />
                <span style={{fontWeight:500}}>Sleeve Length:</span> Short sleeves <br />
                <span style={{fontWeight:500}}>Sustainable:</span> Regular <br />
                <span style={{fontWeight:500}}>Wash Care:</span> Machine Wash <br />
                <span style={{fontWeight:500}}>Weave Type:</span> Knitted
            </p></div>
        </>
    ) },
    { id:"bj2",details:(id, cartDispatch)=>(
        <>
            <b style={{fontSize:"1.3em",display:"flex", flexWrap:"nowrap", gap:"4px"}}>₹{products.find((p)=>(p.id===id)).buyPrice} &nbsp;<s>₹{Math.round(products.find((p) => p.id === id)?.buyPrice * 1.53)} </s> (Buy)</b> 
            <b style={{fontSize:"1.3em", gap:"4px"}}>₹{Math.round(products.find((p) => p.id === id)?.buyPrice * 0.3)} (Rent)</b> 
            <p style={{color:"darkgreen"}}>inclusive of all taxes</p>
            <p style={{fontWeight:"600"}}>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px"}}>
                    <span class="material-symbols-outlined"> delivery_truck_speed </span> Get it within 2 days
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px"}}>
                    <span class="material-symbols-outlined"> payments </span> Pay on delivery available 
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px"}}>
                    <span class="material-symbols-outlined"> multiple_stop </span> Easy 14 days return available
                </div>
            </p>
            <Button className="buyButton" variant='' onClick={() => handleBuy(id, cartDispatch)}>Buy</Button>
            <Button className="rentButton" variant=''onClick={() => handleRent(id, cartDispatch)}>Rent</Button>
            <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"}}>
            <p> <u style={{fontWeight:550}}>Product Details</u> <br />
                Elegant formal coat for women <br />
                Grey color with subtle check pattern <br />
                Knee-length, tailored fit <br />
                Notch lapel collar <br />
                Long sleeves with buttoned cuffs <br />
                Premium wool-blend fabric <br />
                Soft inner lining for comfort <br />
                Perfect for office, meetings, and formal occasions<br /> 

                <u style={{fontWeight:550}}>Size & Fit</u> <br />
                Relaxed Fit <br />
                The model (height 5'11'') is wearing a size M <br />

                <u style={{fontWeight:550}}> Material & Care </u> <br />
                100% Cotton <br />
                Machine Wash
                </p>

            <p> <u style={{fontSize:20, fontWeight:550}}> Specifications </u> <br />
                <span style={{fontWeight:500}}>Fabrics:</span> Pure Cotton <br />
                <span style={{fontWeight:500}}>Fashion Trends:</span> New Basics <br />
                <span style={{fontWeight:500}}>Fit:</span> Relaxed Fit <br />
                <span style={{fontWeight:500}}>Length:</span> Regular <br />
                <span style={{fontWeight:500}}>Multipack Set:</span> Single <br />
                <span style={{fontWeight:500}}>Neck:</span> Round Neck <br />
                <span style={{fontWeight:500}}>Occasions:</span> Casual <br />
                <span style={{fontWeight:500}}>Package Contains:</span> 1 T-shirt <br />
                <span style={{fontWeight:500}}>Print or Pattern Types:</span> Solid <br />
                <span style={{fontWeight:500}}>Sleeve Length:</span> Short sleeves <br />
                <span style={{fontWeight:500}}>Sustainable:</span> Regular <br />
                <span style={{fontWeight:500}}>Wash Care:</span> Machine Wash <br />
                <span style={{fontWeight:500}}>Weave Type:</span> Knitted
            </p></div>
        </>
    ) },
];