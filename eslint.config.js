import eslint from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['.output', 'dist', 'node_modules', 'src/routeTree.gen.ts'] },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...reactHooks.configs['flat/recommended'],
)
