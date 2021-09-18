module.exports = {
    lang: 'zh-CN',
    title: "Jianne's docs",
    description: "Laravel & Lumen packages",
    theme: "@vuepress/default",
    themeConfig: {
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
