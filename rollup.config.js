import rolster from '@rolster/rollup';

export default rolster({
  entryFiles: ['index', 'expressions', 'helpers'],
  packages: ['@rolster/i18n']
});
