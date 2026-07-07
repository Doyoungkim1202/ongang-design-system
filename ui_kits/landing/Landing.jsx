import React from 'react';

export function Landing() {
  const NS = (() => {
    for (const k of Object.keys(window)) {
      const v = window[k];
      if (v && typeof v === 'object' && typeof v.Button === 'function' && typeof v.Badge === 'function') return v;
    }
    return {};
  })();
  const { Button, Badge, Chip } = NS;

  const areas = ['성범죄', '마약', '형사', '군형사', '소년범죄', '경제·재산', '음주·교통'];

  return (
    <div style={{ fontFamily: 'var(--font-head)', color: 'var(--text-strong)', background: 'var(--surface-page)' }}>

      {/* NAV */}
      <div style={{ background: 'var(--surface-dark)', height: 74, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 56px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src="../../assets/ds/symbol-g.png" style={{ height: 30 }} />
          <img src="../../assets/ds/logo-wordmark.png" style={{ height: 18 }} />
        </div>
        <div style={{ display: 'flex', gap: 34, alignItems: 'center' }}>
          {['업무분야', '변호인단', '해결사례', '온강온에어'].map((m) => (
            <span key={m} style={{ color: '#ddd', fontSize: 16, fontWeight: 600 }}>{m}</span>
          ))}
          {Button && <Button size="sm">상담 신청</Button>}
        </div>
      </div>

      {/* HERO */}
      <div style={{ background: 'var(--surface-dark)', position: 'relative', overflow: 'hidden', minHeight: 560, display: 'flex', alignItems: 'center' }}>
        <img src="../../assets/ds/lawyer-baehanjin.png" style={{ position: 'absolute', right: 40, bottom: 0, height: 540, width: 'auto' }} />
        <div style={{ position: 'absolute', right: -80, top: -80, width: 460, height: 460, opacity: 0.06 }}>
          <img src="../../assets/ds/symbol-g.png" style={{ width: '100%', filter: 'brightness(0) invert(1)' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 1, padding: '0 56px', maxWidth: 720 }}>
          {Badge && <Badge tone="solid">마약사건 전담 검사 출신</Badge>}
          <h1 style={{ margin: '26px 0 0', color: '#fff', fontSize: 68, fontWeight: 800, letterSpacing: '-0.028em', lineHeight: 1.08 }}>의지가 부족해서가<br />아닙니다.</h1>
          <p style={{ margin: '22px 0 0', maxWidth: 440, color: '#bbb', fontSize: 20, lineHeight: 1.6, fontFamily: 'var(--font-body)' }}>도움이 필요한 순간, 검사 출신 변호인단이 끝까지 함께합니다.</p>
          <div style={{ display: 'flex', gap: 14, marginTop: 34 }}>
            {Button && <Button variant="primary">상담 신청</Button>}
            {Button && <Button variant="outline" withArrow={false}>해결 사례</Button>}
          </div>
        </div>
      </div>

      {/* AREAS */}
      <div style={{ padding: '72px 56px', background: 'var(--surface-warm)' }}>
        <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--ongang-red)', letterSpacing: '0.1em' }}>BUSINESS AREA</div>
        <h2 style={{ margin: '12px 0 28px', fontSize: 38, fontWeight: 800, letterSpacing: '-0.024em' }}>주요 업무분야</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {areas.map((a, i) => (Chip ? <Chip key={a} active={i === 1}>{a}</Chip> : null))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: 'var(--ongang-red)', padding: '64px 56px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -60, top: -60, width: 300, height: 300, opacity: 0.14 }}>
          <img src="../../assets/ds/symbol-g.png" style={{ width: '100%', filter: 'brightness(0) invert(1)' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40 }}>
          <div>
            <div style={{ color: '#fff', fontSize: 40, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15 }}>지금이 가장 빠른 때입니다</div>
            <p style={{ margin: '12px 0 0', color: '#ffe3d9', fontSize: 18, fontFamily: 'var(--font-body)' }}>형사사건은 초기 대응이 결과를 좌우합니다. 24시간 상담.</p>
          </div>
          {Button && <Button variant="light">상담 신청</Button>}
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ background: 'var(--surface-dark)', padding: '40px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <img src="../../assets/ds/symbol-g.png" style={{ height: 26 }} />
          <img src="../../assets/ds/logo-wordmark.png" style={{ height: 16 }} />
        </div>
        <div style={{ color: '#777', fontSize: 14 }}>Tel 02-1670-5901 · onganglawyer.co.kr</div>
      </div>
    </div>
  );
}
