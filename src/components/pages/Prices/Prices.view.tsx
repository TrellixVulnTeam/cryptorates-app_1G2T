import React from 'react';
import { useTranslation } from 'react-i18next';

import { IPrices } from '../../../models/crypto';

import classes from './Prices.module.scss';

interface Props {
  readonly prices: IPrices | null;
  readonly pricesChangeHandler: (value: IPrices | null) => void;
}

const PricesView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const { t } = useTranslation();
  
  return (
    <div className={classes['prices']}>
      <div className={classes['container']}>
        <h1 className={classes['container__header']}>{t('prices.header')}</h1>
        <div className={classes['innerContainer']}>
          <span className={classes['innerContainer__text']}>{t('prices.currency.btc')}: {props.prices?.BTCUSD}</span>
          <a className={classes['innerContainer__text']} href={'/history?currency=BTCUSD'}>{t('prices.text.btc')}</a>
        </div>
        <div className={classes['innerContainer']}>
          <span className={classes['innerContainer__text']}>{t('prices.currency.eth')}: {props.prices?.ETHUSD}</span>
          <a className={classes['innerContainer__text']} href={'/history?currency=ETHUSD'}>{t('prices.text.eth')}</a>
        </div>
        <div className={classes['innerContainer']}>
          <span className={classes['innerContainer__text']}>{t('prices.currency.ltc')}: {props.prices?.LTCUSD}</span>
          <a className={classes['innerContainer__text']} href={`/history?currency=LTCUSD`}>{t('prices.text.ltc')}</a>
        </div>
      </div>
    </div>
  );
};

PricesView.displayName = 'PricesView';
PricesView.defaultProps = {};

export default PricesView;
