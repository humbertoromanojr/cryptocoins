import React from 'react';
import { Link } from 'react-router-dom';

import Styles from './styles';

const Home: React.FC = () => (
    <Styles.Container>
        <Styles.ContainerCard>
            <Styles.ContainerImages>
                <Link to="/bitcoins">
                    <img src="https://blog.valoreimoveis.com.br/wp-content/uploads/2019/01/255879-fique-por-dentro-da-tendencia-de-compra-de-imoveis-com-moedas-digitais-825x542.jpg" />
                </Link>
            </Styles.ContainerImages>
            <Styles.ContainerTitle>
                <span>Bitcoins</span>
            </Styles.ContainerTitle>
        </Styles.ContainerCard>

        <Styles.ContainerCard>
            <Styles.ContainerImages>
                <Link to="/direct-treasure">
                    <img src="https://blog.rico.com.vc/hs-fs/hubfs/tesouro-nacional-guia-brasil.jpg?width=1000&name=tesouro-nacional-guia-brasil.jpg" />
                </Link>
            </Styles.ContainerImages>
            <Styles.ContainerTitle>
                <span>Direct Treasure</span>
            </Styles.ContainerTitle>
        </Styles.ContainerCard>
    </Styles.Container>
);

export default Home;
