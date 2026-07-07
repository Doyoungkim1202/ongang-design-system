import React from 'react';

export interface EyebrowProps {
  /** 섹션 번호 (예: "01") */
  index?: string;
  /** 영문 대문자 라벨 */
  label?: string;
  /** 한글 보조 라벨 (옵션) */
  kr?: string;
  style?: React.CSSProperties;
}

/** 섹션 상단 아이브로우 — 레드 번호 + 트래킹된 영문 라벨. */
export function Eyebrow(props: EyebrowProps): JSX.Element;
