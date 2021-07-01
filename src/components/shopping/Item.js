import styled from "styled-components";

export default function Item({product}) {

    const {image, title, price, quantity} = product;

    // const value = price * quantity;
    
    return(
        <Product>
            <img src={image} />
            <span>{title}</span>
            {/* <span>{value}</span> */}

        </Product>
    )
}

const Product = styled.div`
    display:flex;
    height: 75px;
    align-items: center;
    margin: 0 8px 1px 8px;
    border: dashed 0.5px #ececec;

    img {
        width: 60px;
        height: 60px;
        border: solid 1px #ececec;
        margin-left: 8px;
    }
`
