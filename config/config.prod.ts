import {defineUserConfig} from '@vuepress/cli'
import type {DefaultThemeOptions} from '@vuepress/theme-default'

import {navbar} from './theme'

export default defineUserConfig<DefaultThemeOptions>({
    base: "/",
    // site-level locales config
    locales: {
        '/': {
            lang: 'en-US',
            title: "Docs",
            description: 'Laravel & Lumen packages',
        },
        '/zh/': {
            lang: 'zh-CN',
            title: "文档库",
            description: 'Laravel & Lumen 扩展包',
        }
    },
    theme: "@vuepress/default",
    themeConfig: {
        repo: 'https://github.com/Jiannei/docs',
        locales: {
            '/': {
                // navbar
                navbar: navbar.en,

                // page meta
                editLinkText: 'Edit this page on GitHub',
            },

            '/zh/': {
                // navbar
                navbar: navbar.zh,
                selectLanguageName: '简体中文',
                selectLanguageText: '选择语言',
                selectLanguageAriaLabel: '选择语言',

                // page meta
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdatedText: '上次更新',
                contributorsText: '贡献者',

                // custom containers
                tip: '提示',
                warning: '注意',
                danger: '警告',

                // 404 page
                notFound: [
                    '这里什么都没有',
                    '我们怎么到这来了？',
                    '这是一个 404 页面',
                    '看起来我们进入了错误的链接',
                ],
                backToHome: '返回首页',

                // a11y
                openInNewWindow: '在新窗口打开',
                toggleDarkMode: '切换夜间模式',
                toggleSidebar: '切换侧边栏',
            },
        },
        themePlugins: {
            git: true,
        },
    },
    dest: "public",
    plugins: [
        [
            '@vuepress/plugin-google-analytics',
            {
                id: 'G-PCTQ8PJQK9',
            },
        ],
    ],
})
