import React from 'react';

export interface ButtonProps {
  children?: React.ReactNode;
  /** primary=레드 CTA, dark=잉크, light=화이트, outline=테두리 */
  variant?: 'primary' | 'dark' | 'light' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  /** 우측 화살표 표시 (기본 true) */
  withArrow?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

/**
 * 온강 기본 버튼 — 상담 유도(CTA)의 핵심 요소. 항상 pill 형태.
 * @startingPoint section="Core" subtitle="레드/잉크/화이트/테두리 CTA 버튼" viewport="700x200"
 */
export function Button(props: ButtonProps): JSX.Element;
