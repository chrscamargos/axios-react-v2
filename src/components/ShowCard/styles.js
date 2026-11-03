import styled from "styled-components";

export const Card = styled.div`
    background-color: #1f1f1f;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    img {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }
`;

export const Info = styled.div`
    padding: 1rem;

    h3 {
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 0.875rem;
        color: #aaa;
    }
`;