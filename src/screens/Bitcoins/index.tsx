import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import {BitcoinsContext} from '../../contextApi';

import Styles from './styles';

const Bitcoins = () => {
    const [bitcoins, setBitcoins] = useContext(BitcoinsContext)

    console.log('BitcoinsScreen => bitcoins ', bitcoins);

    return (
    <Styles.Container>

        <Styles.Header>Datas Bitconis</Styles.Header>
        <div>
            <Link className="back" to="/">
                Back
            </Link>
        </div>

        {/* {
            Object.keys(bitcoins.map((item, index) => (
                <div key={index}>
                    <span>{item.time}</span>
                    <span>{item.close}</span>
                    <span>{item.high}</span>
                    <span>{item.open}</span>
                </div>
            )))
        } */}

        <div>
            <Link to="/">Back</Link>
        </div>

    </Styles.Container>
    );
}

export default Bitcoins;
