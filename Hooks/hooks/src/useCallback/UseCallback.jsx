import { useCallback, useEffect, useState } from "react";

export default function UseCallbackEx() {
    
    /* product id, price, discount, note: seperate */
    const [productId, setProductId] = useState(1);

    const [price, setPrice] = useState(100)
    const [discountPrice, setDiscountPrice] = useState(100)

    const [note, setNote] = useState("")

    /* prices based on product id*/
    useEffect(()=>{
        const basePrices = {
            1: 100,
            2: 200,
            3: 300
        };
        setPrice(basePrices[productId])
    },[productId]);

    /* calculate discount */
    const calculateDiscountPrice = useCallback(()=>{
        console.log("calculating discount...");

        let discount = 0;

        if(productId === 0) return discount = 0.1;
        else if(productId === 1) return discount = 0.15;
        else if(productId === 2) return discount = 0.2;

        setDiscountPrice(price - (price*discount));
        
    },[productId]);

    useEffect(()=>{
        calculateDiscountPrice();
    },[calculateDiscountPrice])

    return (
        <div>
            <h1> Use Callback</h1>
            <h2> Product Id: {productId}</h2>
            <p> Discount : ${discountPrice} </p>
            <p> Original Price : ${price} </p>
            <div>
                <button onClick={()=> setProductId(1)}> Product 1</button>
                <button onClick={()=> setProductId(2)}> Product 2</button>
                <button onClick={()=> setProductId(3)}> Product 3</button>
            </div>

            <div style={{marginTop: '1rem'}}>
                <h4> it won't trigger discount calculation</h4>
                <input type="text" value={note} onChange={(e)=>setNote(e.target.value)} name="" placeholder="type your note" />
                <p>Current note: {note} </p>

            </div>
        </div>
    )
}
