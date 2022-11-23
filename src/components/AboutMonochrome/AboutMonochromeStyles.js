import styled from "styled-components";

const AboutMonochrome = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 90%;
    flex-direction: row;
    margin: 0 auto;
    margin-top: 3rem;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;

const MoreAboutMonochrome = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
    flex-direction: row-reverse;
    margin: 0 auto;
    margin-top: 8rem;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;

const LeftSide = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-right: 4rem;

    p {
        font-size: 1.2rem;
        font-weight: 800;
        color: #fff;
        text-align: left;
        margin: 0.5rem 0;
    }

    h6 {
        font-size: 1.8rem;
        font-weight: 800;
        color: #fff;
        text-align: left;
        margin: 0;
    }

    h4 {
        font-size: 1.3rem;
        font-weight: 800;
        color: #fff;
        text-align: left;
        line-height: 1.3;
    }

    @media (max-width: 768px) {
        width: 100%;
        margin-right: 0;
    }
`;

const LeftSideMore = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 4rem;

    p {
        font-size: 1.2rem;
        font-weight: 800;
        color: #fff;
        text-align: left;
        margin: 0.5rem 0;
    }

    h6 {
        font-size: 1.8rem;
        font-weight: 800;
        color: #fff;
        text-align: left;
        margin: 0;
    }

    h4 {
        font-size: 1.3rem;
        font-weight: 800;
        color: #fff;
        text-align: left;
        line-height: 1.3;
    }

    @media (max-width: 768px) {
        width: 100%;
        margin-left: 0;
    }
`;

const RightSide = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 0 0;
    }

    @media (max-width: 768px) {
        width: 100%;

        img {
            margin-bottom: 4rem;
        }
    }
`;

const MediaAndGalleries = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 8rem;

    h4 {
        font-size: 1.8rem;
        font-weight: 800;
        color: #fff;
        margin: 0;
    }
`;

const Pictures = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    margin-top: 2rem;

    .picture {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 0 0;

        p {
            font-size: 1.2rem;
            font-weight: 800;
            color: #fff;
            text-align: center;
            margin: 0.5rem 0;
        }

        img {
            width: 100%;
            height: 100%;
        }
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const ReserveTable = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 5rem;

    h4 {
        font-size: 1.8rem;
        font-weight: 800;
        margin: 0;
        color: #fff;
    }

    p {
        font-size: 1rem;
        font-weight: 800;
        margin: 1rem 1.5rem;
        color: #fff;
        line-height: 1.3;
        text-align: center;
    }

    button {
        padding: 1rem 3rem;
        background-color: #fff;
        color: #000;
        font-size: 1.4rem;
        font-weight: 800;
        border: none;
        border-radius: 40px;

        a {
            text-decoration: none;
            color: #000;
            font-family: "Barlow", cursive;
        }
    }
`;

const Footer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 8rem;
    background-color: darkgray;
    color: #fff;
    font-size: 1rem;
    font-weight: 800;
`;

export {
    AboutMonochrome,
    LeftSide,
    RightSide,
    MoreAboutMonochrome,
    LeftSideMore,
    MediaAndGalleries,
    Pictures,
    ReserveTable,
    Footer,
};
