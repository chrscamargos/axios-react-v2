import { Container } from './styles'

export default function Footer() {
    return (
        <Container>
            <p>
                &copy; {new Date().getFullYear()} - Todos os Direitos Reservados
            </p>
        </Container>
    )
}