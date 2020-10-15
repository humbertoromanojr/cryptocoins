import React, { useEffect, useState, createContext } from 'react';
import api from '../services/api';

interface BitcoinContext {
    time: string;
    close: string;
    high: string;
    low: string;
    open: string;
}

export const BitcoinsContext = createContext<BitcoinContext[]>([]);

const api_key =
'52659f2d220e8e6b65f8388bc6139088e4186ff850934b2ecc70a3f2cfb541b0';

type Props = {
    children: React.ReactNode;
  };

const AppProvider = ({ children }: Props) => {
    const [bitcoins, setBitcoins] = useState<BitcoinContext[]>([]);

    useEffect(() => {
        const loadBitcoins = async() => {
            const response = await api.get(
                `/data/index/histo/day?indexName=MVDA&limit=10&api_key=${api_key}`,
            );

            const data = response.data.Data.map((bitcoin: object) => ({
                ...bitcoin,
            }));

            setBitcoins(data);

        }
        loadBitcoins();
    }, []);
    console.log('contextApiScreen => bitcoins ', bitcoins);

    return (
        <BitcoinsContext.Provider value={bitcoins}>
            {children}
        </BitcoinsContext.Provider>
    );
}


export default AppProvider;
