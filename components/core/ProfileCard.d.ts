import React from 'react';

export interface ProfileCardProps {
  name?: string;
  role?: string;
  /** 이름 위 레드 아이브로우 */
  eyebrow?: string;
  /** 인물 컷아웃 이미지 경로 (투명 PNG 권장) */
  photo?: string;
  /** 자격·이력 목록 (레드 점 리스트) */
  credentials?: string[];
  style?: React.CSSProperties;
}

/**
 * 변호사 프로필 플라크 — 잉크 배경 위 이름·이력 + 인물 컷아웃.
 * @startingPoint section="Core" subtitle="변호사 소개 플라크 (다크)" viewport="820x360"
 */
export function ProfileCard(props: ProfileCardProps): JSX.Element;
