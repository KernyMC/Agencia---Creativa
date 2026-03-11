import { defineField, defineType } from 'sanity'

export const fundacionType = defineType({
  name: 'fundacion',
  title: 'Fundaciones',
  type: 'document',
  icon: () => '❤️',
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre de la fundación',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'foto',
      title: 'Foto principal',
      description: 'Imagen grupal o representativa de la fundación',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo (circular badge)',
      description: 'Logo que aparece sobre la foto como badge circular',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'orden',
      title: 'Orden',
      type: 'number',
      initialValue: 1,
    }),
  ],
  preview: {
    select: { title: 'nombre', media: 'foto' },
    prepare: ({ title, media }) => ({ title, media }),
  },
})
