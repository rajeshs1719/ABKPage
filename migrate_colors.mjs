import fs from 'fs';
import path from 'path';

const BrandColors = {
  primary: '#E66346',
  primaryLight: '#FF8B6B',
  accent: '#00ADA5',
  secondary: '#FFF943',
  surface: '#F8F8EE',
  neutralBg: '#E5E6EA',
  textPrimary: '#0F1724',
  textMuted: '#574151',
  success: '#16A34A',
  error: '#DC2626',
  info: '#2563EB',
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent'
};

const OldColorsToBrand = {
  bgCream: 'surface', bgSage: 'surface', bgMist: 'neutralBg', bgPink: 'surface', bgPinkLight: 'surface',
  bgFloral: 'surface', white: 'white', primaryGreen: 'primary', themeOrange: 'primary',
  secondaryBlue: 'secondary', faqBlue: 'info', black: 'black', coursePrimary: 'primary',
  courseSage: 'surface', oliveGreen: 'success', envelopeDark: 'surface', envelopeLight: 'surface',
  eventBrown: 'textPrimary', eventBtnBlue: 'info', eventGreen: 'success', contactNavy: 'textPrimary',
  contactDarkNavy: 'textPrimary', contactSectionBlue: 'info', contactFormHeader: 'textPrimary',
  contactInputBg: 'neutralBg', contactInputBorder: 'neutralBg', contactBg: 'surface', contactMuted: 'textMuted',
  contactBoxBorder: 'neutralBg', bgBlog: 'surface', blogAccent: 'accent', blogCardBg: 'surface',
  blogCardBorder: 'primary', blogFeatureBg: 'surface', blogRed: 'error', blogRedDark: 'error',
  blogRedDarker: 'error', blogRedBright: 'error', blogBrown: 'textMuted', blogBrownDark: 'textPrimary',
  blogTextBrown: 'textPrimary', bgBeige: 'surface', bgSidebarBeige: 'surface', bgBlogCream: 'surface',
  navGreen: 'primary', navText: 'textPrimary', textMain: 'textPrimary', textLight: 'textMuted',
  textDark: 'textPrimary', textSubtle: 'textMuted', textGray: 'textMuted', textMedium: 'textMuted',
  textCharcoal: 'textPrimary', textGrayMedium: 'textMuted', grayLight: 'neutralBg', grayPattern: 'neutralBg',
  grayDisabled: 'textMuted', grayBorder: 'neutralBg', grayMedium: 'neutralBg', grayUltraLight: 'surface',
  pinRed: 'error', pinBlue: 'info', pinPurple: 'accent', pinGreen: 'success', pinDark: 'textPrimary'
};

function hexToRgb(h) {
  let c = h.replace('#', '');
  if(c.length === 3) c = c.split('').map(x=>x+x).join('');
  return {
    r: parseInt(c.slice(0,2), 16) || 0,
    g: parseInt(c.slice(2,4), 16) || 0,
    b: parseInt(c.slice(4,6), 16) || 0
  };
}

function colorDist(c1, c2) {
  return Math.sqrt(Math.pow(c1.r - c2.r, 2) + Math.pow(c1.g - c2.g, 2) + Math.pow(c1.b - c2.b, 2));
}

function closestBrand(hex) {
  if (hex.toLowerCase() === '#transparent' || hex.toLowerCase() === 'transparent') return 'transparent';
  const rgb = hexToRgb(hex);
  let best = 'primary';
  let bestDist = Infinity;
  for (const [name, bHex] of Object.entries(BrandColors)) {
    if (bHex === 'transparent') continue;
    const d = colorDist(rgb, hexToRgb(bHex));
    if (d < bestDist) {
      bestDist = d;
      best = name;
    }
  }
  return best;
}

const toKebab = (str) => str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      if (!p.includes('node_modules') && !p.includes('.git')) walk(p);
    } else {
      if (p.endsWith('.tsx') || p.endsWith('.ts') || p.endsWith('.js') || p.endsWith('.jsx')) {
        let content = fs.readFileSync(p, 'utf8');
        let original = content;

        // Skip 8-char hexes by using bounded regex 
        content = content.replace(/([A-Za-z0-9_-]+)-\[#([0-9a-fA-F]{3,6})\]/g, (match, prefix, hex) => {
           if (hex.length === 4 || hex.length === 5) return match; // skip weird hexes
           const brand = closestBrand('#'+hex);
           return brand === 'transparent' ? `${prefix}-transparent` : `${prefix}-${toKebab(brand)}`;
        });

        content = content.replace(/COLORS\.([a-zA-Z0-9_]+)/g, (match, prop) => {
           if (OldColorsToBrand[prop]) return `COLORS.${OldColorsToBrand[prop]}`;
           if (BrandColors[prop]) return match;
           return `COLORS.primary`;
        });

        if (content !== original) fs.writeFileSync(p, content);
      } else if (p.endsWith('.css')) {
        let content = fs.readFileSync(p, 'utf8');
        let original = content;

        content = content.replace(/#([0-9a-fA-F]{3,8})/g, (match, hex) => {
           if (hex.length === 8 || hex.length === 4) return match; // preserve alpha
           const brand = closestBrand('#'+hex);
           return brand === 'transparent' ? 'transparent' : `var(--color-${toKebab(brand)})`;
        });

        if (content !== original) fs.writeFileSync(p, content);
      }
    }
  }
}

walk('d:/ABKPage/src');
console.log('Migration complete!');
