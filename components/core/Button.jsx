import React from 'react';

/**
 * 온강 기본 버튼. 형사사건 상담 유도(CTA)에 사용.
 * variant: primary(레드) · dark(잉크) · light(화이트) · outline(테두리)
 */
export function Button({
  children = '상담 신청',
  variant = 'primary',
  size = 'md',
  withArrow = true,
  onClick,
  style = {},
  ...rest
}) {
  const pads = {
    sm: '11px 20px',
    md: '16px 30px',
    lg: '18px 36px',
  };
  const fonts = { sm: 14, md: 18, lg: 20 };

  const variants = {
    primary: { background: 'var(--ongang-red)', color: '#fff', border: 'none' },
    dark: { background: 'var(--ongang-ink)', color: '#fff', border: 'none' },
    light: { background: '#fff', color: 'var(--ongang-black)', border: 'none' },
    outline: { background: 'transparent', color: 'currentColor', border: '1.5px solid var(--ongang-gray)' },
  };

  return (
    <button
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 12,
        fontFamily: 'var(--font-head)',
        fontWeight: 'var(--fw-bold)',
        fontSize: fonts[size],
        letterSpacing: 'var(--track-tight)',
        padding: pads[size],
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        lineHeight: 1,
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
      {withArrow && <span style={{ fontSize: '0.9em' }}>→</span>}
    </button>
  );
}
