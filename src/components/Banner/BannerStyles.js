import styled from "styled-components";

const BannerImage = styled.div`
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 0 0;
    }
`;

const BannerText = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h5 {
        width: 100%;
        font-size: 1.4rem;
        font-weight: 800;
        color: #fff;
        text-align: flex-start;
        line-height: 1.3;
    }
`;

const CTA = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    margin-top: 4rem;

    button:first-child {
        padding: 1rem 3rem;
        background-color: #fff;
        color: #000;
        font-size: 1.4rem;
        font-weight: 800;
        border: none;
        border-radius: 40px;
        margin-right: 20px;

        a {
            text-decoration: none;
            color: #000;
            font-family: "Barlow", cursive;
        }
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

    @media (max-width: 1024px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 4rem;

        button:first-child {
            margin-right: 0;
        }
    }
`;

export { BannerImage, BannerText, CTA };
