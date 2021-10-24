import React from 'react';
import { useTranslation } from 'react-i18next';

import { IHistoricPrices } from '../../../models/crypto';

import CSvg from '../../ui/CSvg/CSvg';

import classes from './HistoricPrices.module.scss';

interface Props {
  readonly historicPrices: IHistoricPrices[] | null;
  readonly historicPricesChangeHandler: (value: IHistoricPrices[] | null) => void;
}

const HistoricPricesView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const { t } = useTranslation();

  let currency = window.location.search.substring(10);
  
  return (
    <div className={classes['historicPrices']}>
      <div className={classes['container']}>
        <h1 className={classes['container__header']}>{t('historicPrices.header')}</h1>
          <div className={classes['innerContainer']}>
            {props.historicPrices?.map((price, idx) => {
              return (
                <li className={classes['innerContainer__text']} key={idx}>
                  {t(`historicPrices.currency.${currency}`)}
                  {price.price}
                  {t('historicPrices.date')}
                  {price.createdAt}
                  {/* <CSvg
                    className={classes['innerContainer__icon']}
                    name={`${currency}`} 
                  /> */}
                </li>
              )
            })}
          </div>
      </div>
    </div>
  );
};

HistoricPricesView.displayName = 'HistoricPricesView';
HistoricPricesView.defaultProps = {};

export default HistoricPricesView;