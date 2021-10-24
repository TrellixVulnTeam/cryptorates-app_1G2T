interface IServerResponseData {
  readonly success: boolean;
  readonly message: string;
}

export interface IPricesResponse extends IServerResponseData {
  data?: {
    BTCUSD: number;
    ETHUSD: number;
    LTCUSD: number;
  };
};

export interface IHistoricPricesResponse extends IServerResponseData {
  data?: {
    price?: number;
    createdAt: string;
  }[];
};