import { loadEnvConfig } from '@next/env'

const projectDir = process.cwd()
loadEnvConfig(projectDir)

export default {
  titleTemplate: '%s - Benjamin Lepas',
  defaultTitle: 'Benjamin Lepas',
  description,
  openGraph: {
    type: 'website',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    titleTemplate: '%s - Benjamin Lepas',
    defaultTitle: 'Benjamin Lepas',
    description,
    site_name: 'Benjamin Lepas',
  },
  twitter: {
    handle: '@0ctanium',
    site: '@0ctanium',
    cardType: 'summary_large_image',
  },
}
