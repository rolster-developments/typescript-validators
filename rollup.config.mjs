import rolster from '@rolster/rollup';

export default rolster({
  requiredEsm: true,
  entryFiles: ['index', 'expressions', 'helpers'],
  packages: ['@rolster/i18n']
});
