import styled from 'styled-components';

export default function Categories() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const req = axios.get(`${process.env.REACT_APP_API_BASE_URL}/categories`);

        req.then(res => {
            setCategories(res.data);
        })
    }, [])
    return (
        <Container>
            <p>AutorAs</p>
            <p>Autoros Negres</p>
            <p>Em Promoção</p>
            <p>Nacionais</p>
        </Container>
    )
}

const Container = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;

    p {
        font-weight: bold;
        letter-spacing: 0.8;
        :hover {
            cursor: pointer;
        }
    }
`