import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import classes from './App.module.scss';

const Prices = React.lazy(() => import('./components/pages/Prices/Prices'));
const HistoricPrices = React.lazy(() => import('./components/pages/HistoricPrices/HistoricPrices'));


interface Props { }

const AppView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => (
  <BrowserRouter>
    <Suspense fallback={null}>
      <Switch>
        <Route path="/prices" component={Prices} />
        <Route path="/history" component={HistoricPrices} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

AppView.displayName = 'AppView';
AppView.defaultProps = {};

export default React.memo(AppView);
