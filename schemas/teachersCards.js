export default {
    name: 'coordinatorCard',
    type: 'document',
    title: 'Card Coordenador',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Nome'
      },
      {
        name: 'gender',
        type: 'string',
        title: 'Gênero',
        options: {
          list: [
          {title: 'Masculino', value: 'Male'},
          {title: 'Feminino', value: 'female'},
          {title: 'Outro', value: 'other'}
          ]
        }
      },
      {
        name: 'coordinatorImg',
        type: 'image',
        title: 'Imagem do Coordenador'
      }
    ]
  }