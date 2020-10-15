import styled from 'styled-components';

export default {
    Container: styled.div`
        display: flex;
        align-items: center;
        justify-content: center;

        height: 100vh;
    `,

  ContainerCard: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        margin: 0 0 0 20px;

        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
    `,

  ContainerImages: styled.div`
        align-items: center;
        justify-content: center;

        img {
            width: 300px;

            transition: opacity 0.5s ease;
        }

        img:hover {
            width: 300px;
            filter: grayscale(70%);
        }
    `,

  ContainerTitle: styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: -7px;

        background: rgba(0, 0, 0, 0.5);
        height: 70px;
        width: 100%;

        span {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 70px;
            width: 100%;
            color: #ffffff;

            font-family: 'New Rocker', sans-serif;
            font-size: 18px;
        }
    `,
};
