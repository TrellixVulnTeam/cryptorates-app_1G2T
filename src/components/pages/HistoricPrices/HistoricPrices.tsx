import React, { useEffect, useState } from 'react';

import { AxiosResponse, AxiosError } from 'axios'

import { IHistoricPricesResponse } from '../../../models/response/crypto';

import { backendAPIAxios } from '../../../utils/http';

import { IHistoricPrices } from '../../../models/crypto';

import HistoricPricesView from './HistoricPrices.view';

interface Props {
  readonly historicPrices: (value: IHistoricPrices[]) => void;
}

const HistoricPrices: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const [ historicPricesState, sethistoricPricesState ] = useState<IHistoricPrices[] | null>(null);
  const historicPricesChangeHandler = (value: IHistoricPrices[] | null) => sethistoricPricesState(() => value);

  let search = window.location.search;

  useEffect(() => {
    const interval = setInterval(() => {
      backendAPIAxios.get(`/history${search}`)
      .then((response: AxiosResponse<IHistoricPricesResponse>) => {
        if (!response.data.success) {
          return alert(`Failed to get historic prices with error: ${response.data.message}`)
        }

        sethistoricPricesState(() => response.data.data!);
      })
      .catch((e: AxiosError) => {
        alert(`Failed to get historic prices with error: ${e}`)
      })
    }, 300000);

    return () => clearInterval(interval);
  }, [sethistoricPricesState]);

  return (
    <HistoricPricesView
      historicPrices={historicPricesState}
      historicPricesChangeHandler={historicPricesChangeHandler}
    >{props.children}</HistoricPricesView>
  );
};

HistoricPrices.displayName = 'HistoricPrices';
HistoricPrices.defaultProps = {};

export default HistoricPrices;