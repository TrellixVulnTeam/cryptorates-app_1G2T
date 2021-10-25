import React, { useEffect, useState } from 'react';

import { AxiosResponse, AxiosError } from 'axios';

import { IPricesResponse } from '../../../models/response/crypto';

import { backendAPIAxios } from '../../../utils/http';

import { IPrices } from '../../../models/crypto';

import PricesView from './Prices.view';

interface Props {
  readonly prices: (value: IPrices) => void;
}

const Prices: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const [ pricesState, setPricesState ] = useState<IPrices | null>(null);
  const pricesChangeHandler = (value: IPrices | null) => setPricesState(() => value);

  const fetchData = () => {
    backendAPIAxios.get(`/prices`)
    .then((response: AxiosResponse<IPricesResponse>) => {
      if (!response.data.success) {
        return alert(`Failed to get prices with error: ${response.data.message}`)
      }

      setPricesState(() => response.data.data!);
    })
    .catch((e: AxiosError) => {
      alert(`Failed to get prices with error: ${e}`)
    })
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => fetchData(), 300000);
    return () => clearInterval(interval);
  }, [setPricesState]);

  return (
    <PricesView
      prices={pricesState}
      pricesChangeHandler={pricesChangeHandler}
    >{props.children}</PricesView>
  );
};

Prices.displayName = 'Prices';
Prices.defaultProps = {};

export default Prices;