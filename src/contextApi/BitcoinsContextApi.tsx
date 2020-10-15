import * as React from 'react';

export interface BitcoinsContext {
    time: Date;
    close: number;
    high: number;
    low: number;
    open: number;
}

const Bitcoins = React.createContext<BitcoinsContext | null>(null);

export const BitcoinsContextProvider = Bitcoins.Provider;

export const BitcoinsContextConsumer = Bitcoins.Consumer;
