import { Card, Info } from "./styles"

export default function ShowCard({ name, image, language }) {
    // Imagem genérica
    const defaultImage = 'https://via.placeholder.com/210x295?text=Sem+Imagem';

    return(
        <Card>
            <img src={image || defaultImage} alt={name} />
            <Info>
                <h3>{name}</h3>
                <p>{language}</p>
            </Info>
        </Card>
    )
}