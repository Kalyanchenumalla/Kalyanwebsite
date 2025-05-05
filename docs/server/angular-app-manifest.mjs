
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Kalyanwebsite/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Kalyanwebsite"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 513, hash: '3b8b8ba2594eb24abf71eaa78c576d2aff88d9afed2da37958f172c1917b5b49', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1026, hash: '06717a0ac47d5c0f17fa2e24788d664fd7aa7489cdfcb4fa4643a4bf66ca6883', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 714, hash: '7d029b80d5c4a32371d620b94c6c76db4e33234476758c4d9bd3d4005da6a82a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
