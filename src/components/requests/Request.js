import styled from "styled-components";

export default function Request({item}) {
    let {title, image, quantity, cost, paymentMethod, receiveMethod} = item;
    
    cost = (cost / 100).toFixed(2).replace('.',',');
    return (
        <Product>
            <General>
                <img src={image} alt={title}/>
            </General>
            <Quantity>
                <span>{quantity}</span>
            </Quantity>
            <Optional>
                <span>{paymentMethod}</span>
            </Optional>
            <Optional>
                <span>{receiveMethod}</span>
            </Optional>
            <Value>{cost}</Value>
        </Product>
    )
}


const Product = styled.div`
    display:flex;
    align-items: center;
    margin: 0 8px 1px 8px;
    border: dashed 0.5px #ececec;
    background-color: #fff;
    justify-content: space-between;
    color: #3a422a;
    padding: 15px 0;
    height: fit-content;

    p {
        font-size: 15px;
    }

    @media(max-width: 614px) {
        justify-content: space-evenly;
    }
`
const General = styled.div`
    height: 100%;
    width:15%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 12px;

    img {
        width: 100px;
        height: 120px;
        border: solid 1px #ececec;
        margin: 0 8px;
    }

    @media(max-width: 614px) {
        width: 20%;
        img{
            margin: 0 0;
            width: 80px;
            height: 100px;
        }
    }
`

const Quantity = styled.div`
    height: 100%;
    width:13%;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        margin: 0 3px;
    }
    button {
        background: none;
        border: none;
        color: red;
        font-size:18px;
    }

    @media(max-width: 614px) {
        p {
            display: none;
        }
    }
`
const Value = styled.div`
    height: 100%;
    width:15%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Optional = styled.div`
    @media(max-width: 614px) {
        display: none;
    } 
`