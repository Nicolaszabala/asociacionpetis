const fs = require('fs');

const file = '__tests__/unit/drupal-client.test.ts';
let content = fs.readFileSync(file, 'utf8');

// Reemplazar mocks para que incluyan método .text()
content = content.replace(
  /json: async \(\) => (mock\w+),/g,
  'text: async () => JSON.stringify($1),\n      json: async () => $1,'
);

fs.writeFileSync(file, content);
console.log('✅ Mocks actualizados');
