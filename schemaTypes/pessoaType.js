import { defineField, defineType } from "sanity";

export const pessoa = defineType({
    name: 'pessoa',
    type: 'document',
    title: 'pessoa',
    fields:[
        defineField({
            name:'id',
            title: 'id' ,
            type: 'number' 
        }),
        defineField({
            name:'nome',
            title:'nome',
            type:'string'
        }),
        defineField({
            name:'dataNascimento',
            title:'data de nascimento',
            type:'date'
        }),
        defineField({
            name:'email',
            title:'email',
            type:'string'
        }),
        defineField({
            name:'telefone',
            title:'telefone',
            type:'string'
        }),
        defineField({
            name: "tamanho_do_pinto",
            type: "number"
        }),
        defineField({
            name:'imagemPerfil',
            title:'imagem de perfil',
            type:'image'
        }),
        defineField({
            name:'ativo',
            title:'ativo',
            type:'boolean'
        }),
        defineField({
            name:'endereco',
            title: 'endereco',
            type: 'endereco' 
        })
    ]
})