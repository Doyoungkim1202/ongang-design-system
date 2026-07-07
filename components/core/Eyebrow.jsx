import React from 'react';

/**
 * 아이브로우 라벨 — 섹션 상단의 대문자 트래킹 라벨.
 * 번호(옵션) + 영문 라벨. GEO/보드 섹션 헤더 상단에 사용.
 */
export function Eyebrow({ index, label = 'BRAND ESSENCE', kr, style = {} }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, ...style }}>
      {index != null && (
        <span style={{ fontFamily: 'var(--font-head)', fontSize: 14, fontWeight: 'var(--fw-extrabold)', color: 'var(--ongang-red)' }}>{index}</span>
      )}
      <span style={{ fontFamily: 'var(--font-head)', fontSize: 15, letterSpacing: 'var(--track-eyebrow)', fontWeight: 'var(--fw-semibold)', color: 'var(--ongang-gray)' }}>{label}</span>
      {kr && <span style={{ fontFamily: 'var(--font-head)', fontSize: 15, fontWeight: 'var(--fw-bold)', color: 'var(--ongang-ink)' }}>{kr}</span>}
    </div>
  );
}
