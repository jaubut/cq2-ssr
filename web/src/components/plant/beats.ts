// Single source for the « La plante » story: card copy, lit layers and camera framing (see web/PLAN.md).
// Camera: focal point (fx, fy) in artboard units (400×1600, soil y=1450); z = zoom vs "full plant fits scene height".
export type Layer = 'soil' | 'roots' | 'stalk-core' | 'stalk-bark' | 'leaves' | 'flowers' | 'seeds';
export type Beat = {
  title: string; body: string; links: { href: string; label: string }[];
  lit: Layer[]; fx: number; fy: number; z: number;
};

export const LAYERS: Layer[] = ['soil', 'roots', 'stalk-core', 'stalk-bark', 'leaves', 'flowers', 'seeds'];

export const BEATS: Beat[] = [
  { title: 'Le chanvre, de la racine à la graine', body: 'Faites défiler : on part du sol et on grimpe la plante, partie par partie.',
    links: [], lit: ['soil'], fx: 200, fy: 1420, z: 3.2 },
  { title: 'Les racines', body: 'Profondes, elles aèrent et régénèrent le sol. Le chanvre pousse généralement sans pesticides, capte du carbone en croissant et sert même à assainir des sols contaminés (phytoremédiation).',
    links: [{ href: '/lechanvre', label: 'Le chanvre, c’est quoi?' }], lit: ['soil', 'roots'], fx: 200, fy: 1510, z: 2.6 },
  { title: 'Le cœur de la tige : la chènevotte', body: 'L’intérieur boisé de la tige, le cœur, devient béton de chanvre, isolant et blocs de construction.',
    links: [{ href: '/construction', label: 'Construction' }], lit: ['stalk-core'], fx: 200, fy: 900, z: 3.0 },
  { title: 'L’écorce : la fibre', body: 'Autour du cœur, l’écorce donne une fibre longue et résistante : tissus, cordages, papiers et composites (bioplastiques, pièces automobiles).',
    links: [{ href: '/textile', label: 'Textile' }], lit: ['stalk-bark'], fx: 200, fy: 900, z: 3.0 },
  { title: 'Les feuilles et les fleurs', body: 'Les fleurs concentrent le CBD et d’autres cannabinoïdes; huiles et extraits entrent dans les soins corporels.',
    links: [{ href: '/cbd', label: 'CBD' }, { href: '/soinscorporels', label: 'Soins corporels' }], lit: ['leaves', 'flowers'], fx: 200, fy: 400, z: 2.0 },
  { title: 'Les graines', body: 'Le grain se mange : graines décortiquées, huile riche en oméga-3 et 6, farine sans gluten, protéines végétales.',
    links: [{ href: '/alimentation', label: 'Alimentation' }], lit: ['seeds'], fx: 200, fy: 120, z: 3.2 },
  { title: 'Une plante, des milliers d’usages', body: 'Du sol à la graine, rien ne se perd. Des marques d’ici en tirent déjà le meilleur.',
    links: [{ href: '/lesmarques', label: 'Les marques d’ici' }], lit: [...LAYERS], fx: 200, fy: 800, z: 0.62 },
];
