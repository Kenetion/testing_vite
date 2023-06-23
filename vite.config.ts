import { defineConfig } from 'vitest/config'


export default defineConfig({
    // this prevents the testing code to be send to production
    define: {
        'import.meta.vitest': 'undefined',
    },
    test: {
        includeSource: ['src/**/*.{js,ts}'],
        coverage: {
            reporter: ['text', 'html'],
        }
    }
})