import React from 'react';

/**
 * 분야/키워드 칩 — pill 형태. 업무분야 나열, 태그 표시에 사용.
 * active=true면 레드 강조.
 */
export function Chip({ children = '마약', active = false, onDark = false, style = {}, ...rest }) {
  const base = active
    ? { background: 'var(--ongang-red)', color: '#fff', fontWeight: 'var(--fw-bold)' }
    : onDark
    ? { background: '#333', color: '#fff', fontWeight: 'var(--fw-semibold)' }
    : { background: '#eee', color: '#444', fontWeight: 'var(--fw-semibold)' };
  return (
    <span
      style={{
        display: 'inline-block',
        fontFamily: 'var(--font-head)',
        fontSize: 14,
        padding: '7px 14px',
        borderRadius: 'var(--radius-pill)',
        lineHeight: 1,
        ...base,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
