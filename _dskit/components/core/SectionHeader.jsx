import React from 'react';
import { Eyebrow } from './Eyebrow.jsx';

/**
 * 섹션 헤더 — 아이브로우 + 대형 제목 + 설명.
 */
export function SectionHeader({ index, label = 'SECTION', title = '제목을 입력하세요', desc, onDark = false, style = {} }) {
  return (
    <div style={{ marginBottom: 40, ...style }}>
      <Eyebrow index={index} label={label} />
      <h2 style={{
        margin: '18px 0 0',
        fontFamily: 'var(--font-head)',
        fontSize: 'var(--fs-h2)',
        fontWeight: 'var(--fw-extrabold)',
        letterSpacing: 'var(--track-heading)',
        lineHeight: 'var(--lh-heading)',
        color: onDark ? '#fff' : 'var(--ongang-ink)',
      }}>{title}</h2>
      {desc && (
        <p style={{
          margin: '14px 0 0',
          maxWidth: 820,
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--fs-body-lg)',
          lineHeight: 1.6,
          color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-body)',
        }}>{desc}</p>
      )}
    </div>
  );
}
