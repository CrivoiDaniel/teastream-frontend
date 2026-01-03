import type { CodegenConfig } from '@graphql-codegen/cli';
import 'dotenv/config'

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_SERVER_URL,
  documents: ['./src/graphql/**/*.graphql'],
  generates: {
    './src/graphql/generated/output.ts': {
      plugins: [
        'typescript', 
        'typescript-operations', 
        'typescript-react-apollo'
      ],
      config: {
        withHooks: true,
        withComponent: false,
        withHOC: false,
        reactApolloVersion: 3,
        addSuspenseQuery: false,
        addInfiniteQuerySupport: false,
        skipTypename: false,
        // Simplificăm tipurile
        avoidOptionals: {
          field: true,
          inputValue: false,
          object: false,
          defaultValue: false
        },
        // Nu genera overload-uri complexe
        noExport: false,
        strictScalars: false
      }
    }
  },
  ignoreNoDocuments: true
};

export default config;