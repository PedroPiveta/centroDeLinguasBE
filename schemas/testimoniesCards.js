export default {
    name: 'testimonyCard',
    type: 'document',
    title: 'Card Depoimento',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Nome'
      },
      {
        name: 'studentEmail',
        type: 'string',
        title: 'Email'
      },
      {
        name: 'studentImage',
        type: 'image',
        title: 'Imagem do Estudante'
      },
      {
        name: 'testimonyAvaliationStars',
        type: 'string',
        title: 'Avaliação (estrelas)',
        options: {
          list: [
          {title: '1 estrela', value: 'one-star'},
          {title: '2 estrela', value: 'two-star'},
          {title: '3 estrela', value: 'three-star'},
          {title: '4 estrela', value: 'four-star'},
          {title: '5 estrela', value: 'five-star'}
          ]
        }
      },
      {
        name: 'testimonyContent',
        type: 'string',
        title: 'Texto do depoimento'
      }
    ]
  }