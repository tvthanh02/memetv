export type propsRankItem = {
  rank: number;
  streamerName: string;
  value: number;
};

export type propsInfoRankItem = {
  streamerName: string;
  value: number;
};

export type propsRank = {
  title: string;
  items: propsInfoRankItem[] | [];
};
