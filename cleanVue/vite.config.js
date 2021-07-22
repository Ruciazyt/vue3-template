import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from "vite-plugin-pages"
import styleImport from 'vite-plugin-style-import'
import {resolve} from 'path'

// https://vitejs.dev/config/
function pathResolve(dir) {
    return resolve(__dirname, ".", dir);
}

export default defineConfig({
    plugins: [
        vue(),
        Pages(),
        styleImport({
            libs: [
                {
                    libraryName: 'element-plus',
                    esModule: true,
                    ensureStyleFile: true,
                    resolveStyle: (name) => {
                        return `element-plus/lib/theme-chalk/${name}.css`;
                    },
                    resolveComponent: (name) => {
                        return `element-plus/lib/${name}`;
                    },
                }
            ]
        }),
    ],
    resolve: {
        alias: {
            "@": pathResolve("src"),
        }
    },
})
