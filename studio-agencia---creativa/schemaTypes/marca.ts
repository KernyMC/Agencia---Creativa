import { defineField, defineType } from 'sanity'

export const marcaType = defineType({
  name: 'marca',
  title: 'Marcas',
  type: 'document',
  icon: () => '🏷️',
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre de la marca',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'destacada',
      title: '¿Marca destacada?',
      description: 'Las marcas destacadas tienen borde rosa y mayor tamaño.',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'orden',
      title: 'Orden de aparición',
      type: 'number',
      initialValue: 99,
    }),
  ],
  preview: {
    select: {
      title: 'nombre',
      media: 'logo',
      destacada: 'destacada',
    },
    prepare({ title, media, destacada }) {
      return {
        title,
        subtitle: destacada ? '⭐ Destacada' : 'Marca colaboradora',
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Orden de aparición',
      name: 'ordenAsc',
      by: [{ field: 'orden', direction: 'asc' }],
    },
  ],
})
