
export enum SceneId {
  ACT_1 = 'ACT_1',
  ACT_2 = 'ACT_2',
  ACT_3 = 'ACT_3',
  FINALE = 'FINALE'
}

export interface DuckyState {
  isBlushing: boolean;
  isWalking: boolean;
  hasBackpack: boolean;
  hasBouquet: boolean;
  facing: 'left' | 'right';
}
