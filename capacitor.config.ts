import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.purbasha.portfolio',
  appName: 'purbashaporfoliooo',
  webDir: 'dist',
  // Local standalone mode (100% error-free, instant, works offline, no 404/cookie check errors)
  // If you host your portfolio on a public domain (like Vercel, Netlify, or GitHub Pages),
  // you can uncomment the server block below with your public URL for live auto-updates!
  /*
  server: {
    url: 'https://your-public-portfolio-url.com',
    cleartext: true
  },
  */
  android: {
    allowMixedContent: true,
    backgroundColor: '#0a0d14'
  }
};

export default config;

