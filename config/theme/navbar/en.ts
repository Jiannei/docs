import type {NavbarConfig} from '@vuepress/theme-default'

export const en: NavbarConfig = [
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
]
