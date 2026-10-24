import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const baseDir = path.resolve(__dirname, '..');

const images = [
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Fire_Extinguisher.JPG',
    dest: 'public/images/products/extinguisher-abc.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/df/10lb._CO2_Fire_Extinguisher.jpg',
    dest: 'public/images/products/extinguisher-co2.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Smoke_detector.JPG',
    dest: 'public/images/products/smoke-detector.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Fire_Alarm_Systems_.jpg',
    dest: 'public/images/products/alarm-panel.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Proprietary-type_fire_alarm_manual_call_point.JPG',
    dest: 'public/images/products/call-point.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Kobishi_Electric_MSB-63A_fire_alarm_bell.JPG',
    dest: 'public/images/products/alarm-bell.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Hard_Hat_Worker_HHW01.JPG',
    dest: 'public/images/products/safety-helmet.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Warnweste_gelb.jpg',
    dest: 'public/images/products/safety-vest.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Sievi_Gore-tex_safety_shoes.jpg',
    dest: 'public/images/products/safety-shoes.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Feuerwehrhandschuhe.jpg',
    dest: 'public/images/products/fire-gloves.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Fire-blanket-on-display.jpg',
    dest: 'public/images/products/fire-blanket.jpg'
  }
];

async function downloadImages() {
  console.log('Downloading relevant fire safety images...');
  for (const item of images) {
    const fullDest = path.join(baseDir, item.dest);
    fs.mkdirSync(path.dirname(fullDest), { recursive: true });

    try {
      console.log(`Fetching ${item.dest} from ${item.url}...`);
      const res = await fetch(item.url, {
        headers: {
          'User-Agent': 'DetectFireLandingPageBot/1.0 (contact: info@detectfirebd.com)'
        }
      });
      if (!res.ok) {
        console.error(`Failed to download ${item.url}: status ${res.status}`);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(fullDest, buffer);
      console.log(`Saved ${item.dest} (${(buffer.length / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`Error downloading ${item.dest}:`, err.message);
    }
  }
  console.log('Image download process complete.');
}

downloadImages();
