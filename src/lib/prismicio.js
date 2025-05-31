import * as prismic from '@prismicio/client'

export const repositoryName = 'danielflores' // ⚠️ Sustituye esto por el nombre real

export const client = prismic.createClient(repositoryName, {
  accessToken: '', // solo si es privado
})