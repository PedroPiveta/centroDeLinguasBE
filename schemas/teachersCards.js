export default {
  name: 'teachersCard',
  type: 'document',
  title: 'Card Professor',
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
          { title: 'Masculino', value: 'Male' },
          { title: 'Feminino', value: 'female' },
          { title: 'Outro', value: 'other' }
        ]
      }
    },
    {
      name: 'teachersImg',
      type: 'image',
      title: 'Imagem do Professor'
    },
    {
      name: 'teacherClass',
      type: 'string',
      title: 'Título/Materia Lessionada'
    }
  ]
}