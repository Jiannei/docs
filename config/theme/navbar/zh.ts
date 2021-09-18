import type {NavbarConfig} from '@vuepress/theme-default'

export const zh: NavbarConfig = [
    {
        text: '扩展包',
        children: [
            {
                text: 'laravel-response',
                link: '/zh/packages/laravel-response'
            },
            {
                text: 'laravel-enum',
                link: '/zh/packages/laravel-enum'
            },
            {
                text: 'laravel-logger',
                link: '/zh/packages/laravel-logger'
            },
            {
                text: 'laravel-schedule',
                link: '/zh/packages/laravel-schedule'
            },
        ],
    },
]
