import styled from 'styled-components';

export default {
  Container: styled.div`
        position: fixed;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;

        background: rgba(70.6%, 59.5%, 1.6%, 100%);

        height: 70px;
        width: 100%;
    `,

  ContainerLogo: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        width: 300px;

        img {
            align-items: center;
            justify-content: center;
            height: 50px;
            padding: 0 10px 0 0px;
        }

        span {
            font-family: 'New Rocker', sans-serif;
            font-size: 26px;
        }
    `,

  NavBar: styled.div`
        display: flex;
        width: 100%;
        height: 70px;
        align-items: center;
        justify-content: flex-end;
        margin-right: 20px;

        a {
            font-family: 'News Circles', sans-serif;
            font-size: 18px;
            color: #ffffff;

            padding: 20px;
            text-decoration: none;

            transition: background 1s ease;
        }

        a:hover {
            background: #ffffff;

            font-family: 'News Circles', sans-serif;
            font-size: 18px;
            color: rgba(70.6%, 59.5%, 1.6%, 100%);

            padding: 20px;
            text-decoration: none;
        }
    `,
};
