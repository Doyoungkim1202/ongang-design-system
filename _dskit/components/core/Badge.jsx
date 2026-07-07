import React from 'react';

/**
 * 온강 배지 — 자격·분야 강조 라벨.
 * tone: solid(레드)·soft(레드 틴트)·outline(테두리)·dark(잉크 위 회색테)
 */
export function Badge({ children = '형사법 전문', tone = 'solid', style = {}, ...rest }) {
  const tones = {
    solid: { background: 'var(--ongang-red)', color: '#fff', border: 'none' },
    soft: { background: 'var(--ongang-red-tint)', color: '#b4301a', border: 'none' },
    outline: { background: 'transparent', color: 'var(--ongang-ink)', border: '1px solid var(--ongang-light)' },
    dark: { background: 'transparent', color: '#ddd', border: '1px solid #555' },
  };
  return (
    <span
      style={{
        display: 'inline-block',
        fontFamily: 'var(--font-head)',
        fontWeight: 'var(--fw-bold)',
        fontSize: 16,
        letterSpacing: 'var(--track-tight)',
        padding: '9px 18px',
        borderRadius: 'var(--radius-md)',
        lineHeight: 1,
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
