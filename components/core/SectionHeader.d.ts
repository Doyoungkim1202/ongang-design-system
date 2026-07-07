import React from 'react';

export interface SectionHeaderProps {
  index?: string;
  label?: string;
  title?: string;
  desc?: string;
  /** 어두운 배경용 */
  onDark?: boolean;
  style?: React.CSSProperties;
}

/** 섹션 헤더 — 아이브로우 + 대형 제목 + 설명 묶음. */
export function SectionHeader(props: SectionHeaderProps): JSX.Element;
