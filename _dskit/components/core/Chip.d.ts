import React from 'react';

export interface ChipProps {
  children?: React.ReactNode;
  /** 레드 강조 */
  active?: boolean;
  /** 어두운 배경 위에 놓일 때 */
  onDark?: boolean;
  style?: React.CSSProperties;
}

/** 분야·키워드 칩 (pill). 업무분야 나열, 키워드 클러스터에 사용. */
export function Chip(props: ChipProps): JSX.Element;
