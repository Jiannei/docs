module.exports = {
    lang: 'zh-CN',
    title: "Jiannei's docs",
    description: "Laravel & Lumen packages",
    locales: {
        '/': {
            lang: 'zh-CN',
        },
        '/en/': {
            lang: 'en-US',
        },
    },
    theme: "@vuepress/default",
    themeConfig: {
        locales: {
            '/': {
                selectLanguageName: '简体中文',
            },
            '/en/': {
                selectLanguageName: 'English',
            },
        },
        repo: 'https://github.com/Jiannei/docs',
        navbar: [
            {
                text: 'Packages',
                children: [
                    {
                        text: 'laravel-response',
                        link: '/packages/laravel-response'
                    },
                    {
                        text: 'laravel-enum',
                        link: '/packages/laravel-enum'
                    },
                    {
                        text: 'laravel-logger',
                        link: '/packages/laravel-logger'
                    },
                    {
                        text: 'laravel-schedule',
                        link: '/packages/laravel-schedule'
                    },
                ],
            },
        ],
    },
    dest: "public",
}
