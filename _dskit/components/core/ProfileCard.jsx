import React from 'react';
import { Badge } from './Badge.jsx';

/**
 * 변호사 프로필 플라크 — 잉크 배경 위 이름·이력 + 인물 컷아웃.
 * 히어로/소개 섹션에 사용.
 */
export function ProfileCard({
  name = '배한진',
  role = '대표 변호사',
  eyebrow = '검사 출신 형사전문변호사',
  photo,
  credentials = ['대한변협 등록 형사법 전문', '대검찰청 우수업무사례 검사'],
  style = {},
}) {
  return (
    <div style={{
      background: 'var(--surface-dark-raised)',
      borderRadius: 'var(--radius-sm)',
      padding: 44,
      position: 'relative',
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: photo ? '1fr auto' : '1fr',
      gap: 40,
      alignItems: 'center',
      ...style,
    }}>
      <div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--ongang-red)', fontWeight: 'var(--fw-bold)', letterSpacing: 'var(--track-label)', marginBottom: 14 }}>{eyebrow}</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
          <span style={{ fontFamily: 'var(--font-head)', fontSize: 40, fontWeight: 'var(--fw-extrabold)', letterSpacing: '0.02em', color: '#fff' }}>{name}</span>
          <span style={{ fontFamily: 'var(--font-head)', fontSize: 20, fontWeight: 'var(--fw-semibold)', color: 'var(--ongang-red)' }}>{role}</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 20px', marginTop: 20 }}>
          {credentials.map((c, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-body)', fontSize: 15, color: '#ddd' }}>
              <span style={{ width: 7, height: 7, borderRadius: 999, background: 'var(--ongang-red)' }} />{c}
            </span>
          ))}
        </div>
      </div>
      {photo && <img src={photo} alt={name} style={{ height: 240, width: 'auto', display: 'block', borderRadius: 'var(--radius-sm)' }} />}
    </div>
  );
}
