interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'SergeiKrk', // Site author
	title: 'CUBlog - блог о дизайне интерьеров, декоре, ремонте и отделке', // Site title.
	description:
		'Добро пожаловать на блог о дизайне интерьеров, декоре, ремонте и отделке. Здесь вы найдете вдохновение, советы по выбору материалов и мебели, а также практические руководства по ремонту. Узнайте о современных трендах в интерьере и создайте стильное пространство вместе с нами.', // Description to display in the meta tags
	lang: '	ru-RU',
	ogLocale: 'ru_RU',
	shareMessage: 'Поделиться постом', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
