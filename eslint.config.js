import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/build/**', 'oasys-experiment/**/*']
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier
); 