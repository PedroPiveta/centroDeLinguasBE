export default {
    name: 'instagramPost',
    type: 'document',
    title: 'Post Instagram',
    fields: [
      {
        name: 'title',
        type: 'image',
        title: 'Imagem do Post'
      },
      {
        name: 'postLink',
        type: 'string',
        title: 'Link para o post'
      }
    ]
  }