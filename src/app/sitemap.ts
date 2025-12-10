import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.carspamarbella.es'
  
  const routes = [
    '',
    '/about',
    '/gallery',
    '/tesla-specialists',
    '/ppf',
    '/wrapping',
    '/ceramic',
    '/correction',
    '/headlight-tinting',
    '/boat-treatment',
    '/truck-treatment',
    '/chrome-delete',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/gallery' ? 0.9 : 0.8,
  }))
}
