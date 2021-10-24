import React, { useEffect } from 'react';
import { AxiosResponse } from 'axios';

import { backendAPIAxios } from './utils/http';

import AppView from './App.view';

interface Props { }

const App: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  return (
    <AppView></AppView>
  );
};

App.displayName = 'App';
App.defaultProps = {};

export default React.memo(App);