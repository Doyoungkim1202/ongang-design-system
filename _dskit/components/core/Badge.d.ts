import React from 'react';

export interface BadgeProps {
  children?: React.ReactNode;
  /** solid=레드, soft=레드틴트, outline=테두리, dark=잉크배경용 */
  tone?: 'solid' | 'soft' | 'outline' | 'dark';
  style?: React.CSSProperties;
}

/** 온강 배지 — 자격·전문분야를 강조하는 각진(6px) 라벨. */
export function Badge(props: BadgeProps): JSX.Element;
