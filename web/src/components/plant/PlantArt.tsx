// PLACEHOLDER art — swap per layer, keeping the artboard contract in web/PLAN.md
// (400×1600 units, soil y=1450, axis x=200, one <g data-layer> per part, back → front order).
const NODES = [1150, 1010, 870, 740, 610, 490, 380, 290]; // leaf nodes on the stalk, bottom → top

function Leaf({ x, y, size, flip }: { x: number; y: number; size: number; flip: boolean }) {
  const angles = [-70, -40, -15, 10, 35, 60, 85];
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -1 : 1} 1) rotate(-25)`}>
      {angles.map((a, i) => {
        const len = size * (1 - Math.abs(i - 3) * 0.2);
        return <ellipse key={a} cx={len / 2} cy="0" rx={len / 2} ry={len / 9} transform={`rotate(${a})`} />;
      })}
    </g>
  );
}

export default function PlantArt() {
  return (
    <svg className="plant" viewBox="0 0 400 1600" width="400" height="1600" overflow="visible" aria-hidden="true" focusable="false">
      <g data-layer="soil">
        <rect x="-1200" y="1450" width="2800" height="2400" fill="#2b2418" />
        <path d="M-1200 1450 H1600" stroke="#5a4a32" strokeWidth="4" />
      </g>
      <g data-layer="roots" fill="none" stroke="#d9c7a7" strokeLinecap="round">
        <path d="M200 1450 C198 1500 204 1540 200 1590" strokeWidth="7" />
        {[[-1, 1470, 70], [1, 1480, 80], [-1, 1505, 95], [1, 1520, 70], [-1, 1545, 60], [1, 1560, 55]].map(([d, y, w]) => (
          <path key={`${d}${y}`} d={`M200 ${y} q${d! * w! * 0.5} 10 ${d! * w!} ${30 + w! / 4}`} strokeWidth="3" />
        ))}
      </g>
      <g data-layer="stalk-bark">
        <path d="M188 1450 L192 170 Q200 140 208 170 L212 1450 Z" fill="#a8bf6a" />
      </g>
      <g data-layer="stalk-core">
        <path d="M195 1450 L197 190 L203 190 L205 1450 Z" fill="#f8f3eb" />
      </g>
      <g data-layer="leaves" fill="#7fa650">
        {NODES.map((y, i) => (
          <Leaf key={y} x={i % 2 ? 210 : 190} y={y} size={150 - i * 12} flip={i % 2 === 0} />
        ))}
      </g>
      <g data-layer="flowers" fill="#f6d987">
        {[[200, 150, 26], [176, 215, 18], [226, 230, 18], [168, 300, 15], [234, 320, 15], [190, 360, 12], [214, 380, 12]].map(([x, y, r]) => (
          <ellipse key={`${x}${y}`} cx={x} cy={y} rx={r! * 0.7} ry={r} />
        ))}
      </g>
      <g data-layer="seeds" fill="#cb5a44">
        {[[200, 95], [188, 120], [212, 118], [196, 140], [206, 165], [184, 175], [218, 180], [192, 196], [212, 200]].map(([x, y]) => (
          <ellipse key={`${x}${y}`} cx={x} cy={y} rx="5" ry="7" />
        ))}
      </g>
    </svg>
  );
}
